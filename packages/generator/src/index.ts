import { fileURLToPath } from 'node:url'
import { Command } from '@effect/cli'
import { FileSystem, Path } from '@effect/platform'
import { NodeContext, NodeRuntime } from '@effect/platform-node'
import type { PlatformError } from '@effect/platform/Error'
import { camelCase, pascalCase } from 'change-case'
import { Chunk, Console, Effect, Order, Sink, Stream } from 'effect'
import { name, version } from '../package.json'
import { type Service, data } from './data.js'

const PARAMETER_PATTERN = /\${(?<parameter>[A-Za-z0-9]+)}/g

const servicesToArnFileData = Stream.map((service: Service) =>
  Stream.fromIterable(service.resources)
    .pipe(
      Stream.map((resource) => {
        return [
          `export interface ${pascalCase(resource.resource)}ArnParameters {`,
          ...Array.from(
            resource.arn.matchAll(PARAMETER_PATTERN),
            ({ groups }) => {
              const parameter = camelCase(groups?.parameter ?? '')
              return `  ${parameter}${parameter === 'partition' ? '?' : ''}: string${parameter === 'partition' ? ' | undefined' : ''}`
            },
          ),
          '}',
          `export type ${pascalCase(resource.resource)}Arn = \`${resource.arn.replace(PARAMETER_PATTERN, () => '${string}')}\``,
          `export function ${camelCase(resource.resource)}Arn(parameters: ${pascalCase(resource.resource)}ArnParameters): ${pascalCase(resource.resource)}Arn {`,
          `  return \`${resource.arn.replace(PARAMETER_PATTERN, (_, parameter) => `\${parameters.${camelCase(parameter)}${camelCase(parameter) === 'partition' ? " ?? ''" : ''}}`)}\``,
          '}',
        ].join('\n')
      }),
    )
    .pipe(
      Stream.runCollect,
      Effect.map((chunk) => ({
        name: service.prefix,
        contents: Chunk.toArray(chunk).join('\n\n'),
      })),
      Effect.map((file) =>
        file.contents === '' ? Stream.empty : Stream.make(file),
      ),
      Stream.unwrap,
    ),
)

const fileDataToWrittenFiles = Stream.map<
  Stream.Stream<{ name: string; contents: string }>,
  Stream.Stream<string, PlatformError, FileSystem.FileSystem | Path.Path>
>(
  Stream.mapEffect((file: { name: string; contents: string }) =>
    Effect.all([FileSystem.FileSystem, Path.Path]).pipe(
      Effect.flatMap(([fs, path]) => {
        const writePath = path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          `../../arns/src/services/${file.name}.ts`,
        )

        return fs
          .makeDirectory(path.dirname(writePath), { recursive: true })
          .pipe(
            Effect.flatMap(() => fs.writeFileString(writePath, file.contents)),
            Effect.as(file.name),
          )
      }),
    ),
  ),
)

const writeIndexFile = Effect.flatMap((files: Chunk.Chunk<string>) =>
  Effect.all([FileSystem.FileSystem, Path.Path]).pipe(
    Effect.flatMap(([fs, path]) => {
      const writePath = path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        '../../arns/src/index.ts',
      )

      return fs
        .makeDirectory(path.dirname(writePath), { recursive: true })
        .pipe(
          Effect.flatMap(() =>
            fs.writeFileString(
              writePath,
              Chunk.toArray(files)
                .map(
                  (file) =>
                    `export * as ${camelCase(file)} from './services/${file}.js'`,
                )
                .join('\n'),
            ),
          ),
        )
    }),
    Effect.as(files),
  ),
)

const writePackageJson = Effect.flatMap((files: Chunk.Chunk<string>) =>
  Effect.all([FileSystem.FileSystem, Path.Path]).pipe(
    Effect.flatMap(([fs, path]) => {
      const writePath = path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        '../../arns/package.json',
      )

      return fs
        .makeDirectory(path.dirname(writePath), { recursive: true })
        .pipe(
          Effect.flatMap(() =>
            fs.writeFileString(
              writePath,
              JSON.stringify(
                {
                  name: '@aws-types/arn',
                  version: '0.0.1',
                  description: 'typed helpers for constructing ARNs',
                  author: 'Tim Morris <timthewebguy@gmail.com>',
                  homepage: 'https://github.com/tkofh/aws-types#readme',
                  license: 'MIT',
                  sideEffects: false,
                  type: 'module',
                  main: './dist/index.cjs',
                  module: './dist/index.mjs',
                  types: './dist/index.d.ts',
                  files: ['dist'],
                  publishConfig: {
                    access: 'public',
                  },
                  repository: {
                    type: 'git',
                    url: 'git+https://github.com/tkofh/aws-types.git',
                  },
                  exports: Object.fromEntries(
                    Chunk.toArray(files).map((file) => [
                      `./${file}`,
                      {
                        import: `./dist/services/${file}.mjs`,
                        require: `./dist/services/${file}.cjs`,
                        types: `./dist/services/${file}.d.ts`,
                      },
                    ]),
                  ),

                  devDependencies: {
                    '@repo/typescript-config': 'workspace:*',
                    unbuild: 'latest',
                  },
                  scripts: {
                    build: 'unbuild',
                  },
                },
                null,
                2,
              ),
            ),
          ),
        )
    }),
    Effect.as(files),
  ),
)

const writeTsConfig = Effect.tap(() =>
  Effect.all([FileSystem.FileSystem, Path.Path]).pipe(
    Effect.flatMap(([fs, path]) => {
      const writePath = path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        '../../arns/tsconfig.json',
      )

      return fs
        .makeDirectory(path.dirname(writePath), { recursive: true })
        .pipe(
          Effect.flatMap(() =>
            fs.writeFileString(
              writePath,
              JSON.stringify(
                {
                  $schema: 'http://json.schemastore.org/tsconfig',
                  extends: '@repo/typescript-config/workspace.json',
                  include: ['./src', './package.json'],
                  exclude: ['node_modules', 'dist'],
                },
                null,
                2,
              ),
            ),
          ),
        )
    }),
  ),
)

const writePackageFiles = Stream.runCollect(
  data.pipe(servicesToArnFileData, fileDataToWrittenFiles),
).pipe(
  Effect.map((streams) =>
    Stream.mergeAll(streams, { concurrency: 'unbounded' }),
  ),
  Effect.flatMap(Stream.runCollect),
  Effect.map(Chunk.sort(Order.string)),
  writeIndexFile,
  writePackageJson,
  writeTsConfig,
)

const cli = Command.run(
  Command.make('generate', {}, () =>
    writePackageFiles.pipe(Effect.flatMap(Effect.log)),
  ),
  { name, version },
)

Effect.suspend(() => cli(process.argv)).pipe(
  Effect.provide(NodeContext.layer),
  NodeRuntime.runMain,
)

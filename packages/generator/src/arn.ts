import { camelCase, pascalCase } from 'change-case'
import { Chunk, DateTime, Effect, Order, Stream } from 'effect'
import { type Resource, type Service, services } from './data/services.js'
import { writeFile } from './shared/fs.js'
import { packageJson } from './shared/package-json.js'

const writeIndexFile = DateTime.now.pipe(
  Effect.flatMap((now) =>
    writeFile(
      `export const GENERATED_AT = '${DateTime.formatIso(now)}'`,
      './arns/src/index.ts',
    ),
  ),
)

const writeTsConfig = writeFile(
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
  './arns/tsconfig.json',
)

const PARAMETER_PATTERN = /\${(?<parameter>[A-Za-z0-9]+)}/g

function buildResourceStanza(resource: Resource) {
  const pascalCaseResource = pascalCase(resource.resource)
  return [
    `export interface ${pascalCaseResource}ArnParameters {`,
    ...Array.from(resource.arn.matchAll(PARAMETER_PATTERN), ({ groups }) => {
      const parameter = camelCase(groups?.parameter ?? '')
      return `  ${parameter}${parameter === 'partition' ? '?' : ''}: string${parameter === 'partition' ? ' | undefined' : ''}`
    }),
    '}',
    `export type ${pascalCaseResource}Arn = \`${resource.arn.replace(PARAMETER_PATTERN, () => '${string}')}\``,
    `export function ${camelCase(resource.resource)}Arn(parameters: ${pascalCaseResource}ArnParameters): ${pascalCaseResource}Arn {`,
    `  return \`${resource.arn.replace(PARAMETER_PATTERN, (_, parameter) => `\${parameters.${camelCase(parameter)}${camelCase(parameter) === 'partition' ? " ?? 'aws'" : ''}}`)}\``,
    '}',
  ].join('\n')
}

function writeServiceArnsFile(service: Service) {
  return writeFile(
    service.resources.map(buildResourceStanza).join('\n\n'),
    `./arns/src/services/${service.prefix}.ts`,
  )
}

function writePackageJson(services: Chunk.Chunk<string>) {
  return packageJson({
    name: '@aws-types/arn',
    description: 'typed helpers for constructing ARNs',
    exports: Chunk.sort(services, Order.string).pipe(
      Chunk.map((service) => ({
        name: service,
        location: `services/${service}`,
      })),
    ),
  }).pipe(Effect.flatMap(writeFile('./arns/package.json')))
}

export const writeArnPackage = Effect.all([
  writeIndexFile,
  writeTsConfig,

  services.pipe(
    Stream.filter((service) => service.resources.length > 0),
    Stream.tap(writeServiceArnsFile),
    Stream.map((service) => service.prefix),
    Stream.runCollect,
    Effect.flatMap(writePackageJson),
  ),
])

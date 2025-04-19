import {
  HttpClient,
  type HttpClientError,
  HttpClientResponse,
} from '@effect/platform'
import {
  Config,
  type ConfigError,
  Effect,
  type ParseResult,
  Schema,
} from 'effect'

export interface PackageJsonExport {
  readonly name: string
  readonly location: string
}

export interface PackageJsonInput {
  readonly name: string
  readonly description: string
  readonly tags?: ReadonlyArray<string> | undefined
  readonly exports: Iterable<PackageJsonExport>
}

const parseNpmRegistryResponseBody = HttpClientResponse.schemaBodyJson(
  Schema.Struct({
    version: Schema.String,
  }),
)

function fetchPackageCurrentVersion(
  name: string,
): Effect.Effect<
  string,
  HttpClientError.HttpClientError | ParseResult.ParseError,
  HttpClient.HttpClient
> {
  return Effect.gen(function* () {
    const http = yield* HttpClient.HttpClient

    const response = yield* http.get(
      `https://registry.npmjs.org/${name}/latest`,
    )
    const { version } = yield* parseNpmRegistryResponseBody(response)

    return version
  }).pipe(
    Effect.catchTag('ResponseError', (error) => {
      if (error.response.status === 404) {
        return Effect.succeed('0.0.0')
      }

      return Effect.fail(error)
    }),
    Effect.scoped,
  )
}

const PACKAGE_AUTHOR = Config.string('REPO_AUTHOR').pipe(
  Config.withDefault('Tim Morris <timthewebguy@gmail.com>'),
)
const PACKAGE_URL = Config.string('REPO_URL').pipe(
  Config.withDefault('https://github.com/tkofh/aws-types'),
)
const PACKAGE_LICENSE = Config.string('REPO_LICENSE').pipe(
  Config.withDefault('MIT'),
)

function buildExports(
  exports: Iterable<PackageJsonExport>,
): Record<string, { import: string; types: string }> {
  return Object.fromEntries(
    Array.from(
      exports,
      (exp) =>
        [
          exp.name === '' ? '.' : `./${exp.name}`,
          {
            import: `./dist/${exp.location}.mjs`,
            types: `./dist/${exp.location}.d.ts`,
          },
        ] as const,
    ),
  )
}

export function packageJson(
  input: PackageJsonInput,
): Effect.Effect<
  string,
  | ConfigError.ConfigError
  | HttpClientError.HttpClientError
  | ParseResult.ParseError,
  HttpClient.HttpClient
> {
  return Effect.gen(function* () {
    const version = yield* fetchPackageCurrentVersion(input.name)
    const author = yield* PACKAGE_AUTHOR
    const url = yield* PACKAGE_URL
    const license = yield* PACKAGE_LICENSE
    const exports = buildExports(input.exports)

    return JSON.stringify(
      {
        name: input.name,
        version,
        description: input.description,
        author,
        tags: input.tags ?? [],
        homepage: `${url}#readme`,
        license,
        sideEffects: false,
        type: 'module',
        files: ['dist'],
        publishConfig: {
          access: 'public',
        },
        repository: {
          type: 'git',
          url: `git+${url}.git`,
        },
        exports,
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
    )
  })
}

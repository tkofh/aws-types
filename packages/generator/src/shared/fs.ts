import { fileURLToPath } from 'node:url'
import { FileSystem, Path } from '@effect/platform'
import type { PlatformError } from '@effect/platform/Error'
import { Context, Effect, Layer } from 'effect'
import { dual } from 'effect/Function'

export class PackagesBasePath extends Context.Tag('PackagesBasePath')<
  PackagesBasePath,
  string
>() {
  static layer = Layer.effect(
    PackagesBasePath,
    Effect.gen(function* () {
      const { dirname, join } = yield* Path.Path
      const { exists } = yield* FileSystem.FileSystem

      let location = dirname(fileURLToPath(import.meta.url))

      while (true) {
        const [hasPackageJson, hasPackages] = yield* Effect.all([
          exists(join(location, 'package.json')),
          exists(join(location, 'packages')),
        ])

        if (hasPackageJson && hasPackages) {
          return join(location, 'packages')
        }

        const parent = dirname(location)
        if (parent === location) {
          yield* Effect.fail(Error('Could not find packages directory'))
        }
        location = parent
      }
    }),
  )
}

export const writeFile: {
  (
    contents: string,
    path: string,
  ): Effect.Effect<void, PlatformError, PackagesBasePath>
  (
    path: string,
  ): (contents: string) => Effect.Effect<void, PlatformError, PackagesBasePath>
} = dual(2, (contents: string, path: string) =>
  Effect.all([Path.Path, FileSystem.FileSystem, PackagesBasePath]).pipe(
    Effect.flatMap(
      ([
        { dirname, resolve },
        { makeDirectory, writeFileString },
        basePath,
      ]) => {
        const writePath = resolve(basePath, path)

        return makeDirectory(dirname(writePath), { recursive: true }).pipe(
          Effect.flatMap(() => writeFileString(writePath, contents)),
        )
      },
    ),
  ),
)

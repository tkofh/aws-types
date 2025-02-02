import { fileURLToPath } from 'node:url'
import { FileSystem, Path } from '@effect/platform'
import { kebabCase, pascalCase } from 'change-case'
import { Effect, Stream } from 'effect'
import { type Service, data } from './data.js'

function writePackageFile(location: string, contents: string) {
  return Effect.all([FileSystem.FileSystem, Path.Path]).pipe(
    Effect.flatMap(([fs, path]) => {
      const resolved = path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        '../../',
        location,
      )

      console.log(
        resolved,
        path.dirname(fileURLToPath(import.meta.url)),
        location,
      )

      return fs
        .makeDirectory(path.dirname(resolved), { recursive: true })
        .pipe(Effect.flatMap(() => fs.writeFileString(resolved, contents)))
    }),
  )
}

function servicePrivilegeNames(service: Service) {
  const privilegeNames = service.privileges.map(
    (privilege) => privilege.privilege,
  )

  const content = [
    `export type ${pascalCase(service.prefix)}Privilege =`,
    ...privilegeNames.map((name) => `  | '${name}'`),
  ].join('\n')

  return writePackageFile(
    `iam/src/${kebabCase(service.prefix)}/privileges.ts`,
    content,
  )
}

export const writeIamPackage = Stream.runCollect(
  data.pipe(
    Stream.map((service) => Stream.make(service)),
    Stream.map(Stream.tap((service) => servicePrivilegeNames(service))),
  ),
).pipe(
  Effect.map(Stream.mergeAll({ concurrency: 'unbounded' })),
  Effect.flatMap(Stream.runCollect),
)

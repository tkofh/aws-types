import { kebabCase, pascalCase } from 'change-case'
import { Effect, Stream } from 'effect'
import { type Service, services } from './data/services.js'
import { writeFile } from './shared/fs.js'

function writeServicePrivileges(service: Service) {
  const privilegeNames = service.privileges.map(
    (privilege) => privilege.privilege,
  )

  const content = [
    `export type ${pascalCase(service.prefix)}Privilege =`,
    ...privilegeNames.map((name) => `  | '${name}'`),
  ].join('\n')

  return writeFile(
    content,
    `./iam/src/${kebabCase(service.prefix)}/privileges.ts`,
  )
}

export const writeIamPackage = services.pipe(
  Stream.filter((service) => service.privileges.length > 0),
  Stream.tap(writeServicePrivileges),

  Stream.runCollect,
)

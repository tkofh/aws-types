import { camelCase, pascalCase } from 'change-case'
import { Chunk, DateTime, Effect, type Iterable, Order, Stream } from 'effect'
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

function brandExport(namespace: string, name: string): string {
  return [
    `export const ${name}Brand: unique symbol = Symbol.for('@aws-types/arns/${namespace}/${name}')`,
    `export type ${name}Brand = typeof ${name}Brand`,
  ].join('\n')
}

function dfn(declaration: string, body: Iterable<string>, spacing = 1): string {
  return [
    `${declaration} {`,
    ...Array.from(body, (line) =>
      line
        .split('\n')
        .map((line) => `  ${line}`)
        .join('\n'),
    ),
    '}',
  ].join('\n'.repeat(spacing))
}

const writeInternalFile = writeFile(
  [
    brandExport('~', 'StringifyArn'),
    brandExport('~', 'ArnResourceType'),
    dfn('export interface Arn<T extends string, P extends string>', [
      'readonly [ArnResourceTypeBrand]: T',
      '[Symbol.toPrimitive](): P',
      'toString(): P',
    ]),
    dfn(
      'export abstract class InternalArn<T extends string, P extends string> implements Arn<T, P>',
      [
        'abstract readonly [ArnResourceTypeBrand]: T',
        'abstract [StringifyArnBrand](): P',
        dfn('[Symbol.toPrimitive]()', ['return this[StringifyArnBrand]()']),
        dfn('toString()', ['return this[StringifyArnBrand]()']),
        dfn(`[Symbol.for('nodejs.util.inspect.custom')]()`, [
          'return `${this[ArnResourceTypeBrand]}<${this[StringifyArnBrand]()}>`',
        ]),
      ],
      2,
    ),
  ].join('\n\n'),
  './arns/src/internal.ts',
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

export function writeResourceArnsFile(resource: Resource) {}

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
  writeInternalFile,

  services.pipe(
    Stream.filter((service) => service.resources.length > 0),
    Stream.tap(writeServiceArnsFile),
    Stream.map((service) => service.prefix),
    Stream.runCollect,
    Effect.flatMap(writePackageJson),
  ),
])

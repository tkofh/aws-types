import { camelCase, pascalCase } from 'change-case'
import { Chunk, DateTime, Effect, type Iterable, Order, Stream } from 'effect'
import { type Resource, type Service, services } from './data/services.js'
import { writeFile } from './shared/fs.js'
import { packageJson } from './shared/package-json.js'

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

const awsRegions = [
  "'us-east-1'",
  "'us-east-2'",
  "'us-west-1'",
  "'us-west-2'",
  "'af-south-1'",
  "'ap-east-1'",
  "'ap-south-1'",
  "'ap-south-2'",
  "'ap-southeast-1'",
  "'ap-southeast-2'",
  "'ap-southeast-3'",
  "'ap-southeast-4'",
  "'ap-southeast-5'",
  "'ap-southeast-7'",
  "'ap-northeast-1'",
  "'ap-northeast-2'",
  "'ap-northeast-3'",
  "'ca-central-1'",
  "'ca-west-1'",
  "'eu-central-1'",
  "'eu-central-2'",
  "'eu-west-1'",
  "'eu-west-2'",
  "'eu-west-3'",
  "'eu-north-1'",
  "'il-central-1'",
  "'mx-central-1'",
  "'me-central-1'",
  "'me-south-1'",
  "'sa-east-1'",
].join(' | ')

const awsCnRegions = [
  "'cn-north-1'",
  "'cn-northwest-1'",
  "'cn-northeast-1'",
  "'cn-southwest-1'",
  "'cn-south-1'",
].join(' | ')

const awsGovRegions = ["'us-gov-east-1'", "'us-gov-west-1'"].join(' | ')

const writeInternalFile = writeFile(
  [
    "export type ArnPartition = 'aws' | 'aws-cn' | 'aws-us-gov'",
    `export type ArnRegion<Partition extends ArnPartition = 'aws'> = Partition extends 'aws' ? ${awsRegions} : Partition extends 'aws-cn' ? ${awsCnRegions} : Partition extends 'aws-us-gov' ? ${awsGovRegions} : never`,

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
        dfn('[Symbol.toPrimitive](): P', ['return this[StringifyArnBrand]()']),
        dfn('toString(): P', ['return this[StringifyArnBrand]()']),
        dfn(`[Symbol.for('nodejs.util.inspect.custom')](): P`, [
          'return this[StringifyArnBrand]()',
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

const writeBuildConfig = writeFile(
  [
    "import { defineBuildConfig } from 'unbuild'",
    'export default defineBuildConfig({ rollup: { esbuild: { minify: true } } })',
  ].join('\n\n'),
  './arns/build.config.ts',
)

const PARAMETER_PATTERN = /\${(?<parameter>[A-Za-z0-9]+)}/g

export function writeResourceArnsFile(resource: Resource) {}

function buildResourceStanza(resource: Resource) {
  const pascalCaseResource = pascalCase(resource.resource)

  return [
    dfn(
      `export interface ${pascalCaseResource}ArnParameters<Partition extends ArnPartition = 'aws'>`,
      Array.from(resource.arn.matchAll(PARAMETER_PATTERN), ({ groups }) => {
        const parameter = camelCase(groups?.parameter ?? '')
        return `readonly ${parameter}${parameter === 'partition' ? '?' : ''}: ${parameter === 'partition' ? 'Partition | undefined' : parameter === 'region' ? 'ArnRegion<Partition>' : 'string'}`
      }),
    ),
    dfn(
      `class ${pascalCaseResource}Arn<Partition extends ArnPartition = 'aws'> extends InternalArn<'${resource.resource}', \`${resource.arn.replace(PARAMETER_PATTERN, () => '${string}')}\`>`,
      [
        `readonly [ArnResourceTypeBrand] = '${resource.resource}' as const`,
        ...Array.from(
          resource.arn.matchAll(PARAMETER_PATTERN),
          ({ groups }) => {
            const parameter = camelCase(groups?.parameter ?? '')
            return `readonly ${parameter}: ${parameter === 'partition' ? 'Partition' : parameter === 'region' ? 'ArnRegion<Partition>' : 'string'}`
          },
        ),
        dfn(
          `constructor(parameters: ${pascalCaseResource}ArnParameters<Partition>)`,
          [
            'super()',
            ...Array.from(
              resource.arn.matchAll(PARAMETER_PATTERN),
              ({ groups }) => {
                const parameter = camelCase(groups?.parameter ?? '')
                return `this.${parameter} = ${parameter === 'partition' ? `(parameters.${parameter} ?? 'aws') as Partition` : `parameters.${parameter}`}`
              },
            ),
          ],
        ),
        dfn('[StringifyArnBrand]()', [
          `return \`${resource.arn.replace(PARAMETER_PATTERN, (_, parameter) => `\${this.${camelCase(parameter)}}`)}\` as const`,
        ]),
      ],
    ),
    `export type { ${pascalCaseResource}Arn }`,
    dfn(
      `export function ${camelCase(resource.resource)}Arn<Partition extends ArnPartition = 'aws'>(parameters: ${pascalCaseResource}ArnParameters<Partition>)`,
      [`return new ${pascalCaseResource}Arn<Partition>(parameters)`],
    ),
  ].join('\n')
}

function writeServiceArnsFile(service: Service) {
  return writeFile(
    [
      "import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'",
      ...service.resources.map(buildResourceStanza),
    ].join('\n\n'),
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
      Chunk.prepend({ name: '', location: 'index' }),
    ),
  }).pipe(Effect.flatMap(writeFile('./arns/package.json')))
}

function writeIndexFile(services: Chunk.Chunk<string>) {
  return writeFile(
    Chunk.sort(services, Order.string)
      .pipe(
        Chunk.map(
          (service) =>
            `export * as ${camelCase(service)} from './services/${service}.js'`,
        ),
        Chunk.toArray,
      )
      .join('\n'),
    './arns/src/index.ts',
  )
}

export const writeArnPackage = Effect.all([
  writeTsConfig,
  writeInternalFile,
  writeBuildConfig,

  services.pipe(
    Stream.filter((service) => service.resources.length > 0),
    Stream.tap(writeServiceArnsFile),
    Stream.map((service) => service.prefix),
    Stream.runCollect,
    Effect.flatMap((services) =>
      Effect.all([writePackageJson(services), writeIndexFile(services)]),
    ),
  ),
])

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SchemaAppliedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
  readonly nameSchema: string
  readonly version: string
}
class SchemaAppliedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'appliedSchema',
  `arn:${string}:clouddirectory:${string}:${string}:directory/${string}/schema/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appliedSchema' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
  readonly nameSchema: string
  readonly version: string
  constructor(parameters: SchemaAppliedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDirectory = parameters.idDirectory
    this.nameSchema = parameters.nameSchema
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:clouddirectory:${this.region}:${this.account}:directory/${this.idDirectory}/schema/${this.nameSchema}/${this.version}` as const
  }
}
export type { SchemaAppliedArn }
export function schemaAppliedArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchemaAppliedArnParameters<Partition>,
) {
  return new SchemaAppliedArn<Partition>(parameters)
}

export interface SchemaDevelopmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchema: string
}
class SchemaDevelopmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'developmentSchema',
  `arn:${string}:clouddirectory:${string}:${string}:schema/development/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'developmentSchema' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchema: string
  constructor(parameters: SchemaDevelopmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSchema = parameters.nameSchema
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:clouddirectory:${this.region}:${this.account}:schema/development/${this.nameSchema}` as const
  }
}
export type { SchemaDevelopmentArn }
export function schemaDevelopmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchemaDevelopmentArnParameters<Partition>,
) {
  return new SchemaDevelopmentArn<Partition>(parameters)
}

export interface DirectoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
}
class DirectoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'directory',
  `arn:${string}:clouddirectory:${string}:${string}:directory/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'directory' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
  constructor(parameters: DirectoryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDirectory = parameters.idDirectory
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:clouddirectory:${this.region}:${this.account}:directory/${this.idDirectory}` as const
  }
}
export type { DirectoryArn }
export function directoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: DirectoryArnParameters<Partition>,
) {
  return new DirectoryArn<Partition>(parameters)
}

export interface SchemaPublishedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchema: string
  readonly version: string
}
class SchemaPublishedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'publishedSchema',
  `arn:${string}:clouddirectory:${string}:${string}:schema/published/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'publishedSchema' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchema: string
  readonly version: string
  constructor(parameters: SchemaPublishedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSchema = parameters.nameSchema
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:clouddirectory:${this.region}:${this.account}:schema/published/${this.nameSchema}/${this.version}` as const
  }
}
export type { SchemaPublishedArn }
export function schemaPublishedArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchemaPublishedArnParameters<Partition>,
) {
  return new SchemaPublishedArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AppliedSchemaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
  readonly schemaName: string
  readonly version: string
}
class AppliedSchemaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'appliedSchema', `arn:${string}:clouddirectory:${string}:${string}:directory/${string}/schema/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'appliedSchema' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
  readonly schemaName: string
  readonly version: string
  constructor(parameters: AppliedSchemaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.directoryId = parameters.directoryId
    this.schemaName = parameters.schemaName
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:clouddirectory:${this.region}:${this.account}:directory/${this.directoryId}/schema/${this.schemaName}/${this.version}` as const
  }
}
export type { AppliedSchemaArn }
export function appliedSchemaArn<Partition extends ArnPartition = 'aws'>(parameters: AppliedSchemaArnParameters<Partition>) {
  return new AppliedSchemaArn<Partition>(parameters)
}

export interface DevelopmentSchemaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schemaName: string
}
class DevelopmentSchemaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'developmentSchema', `arn:${string}:clouddirectory:${string}:${string}:schema/development/${string}`> {
  readonly [ArnResourceTypeBrand] = 'developmentSchema' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schemaName: string
  constructor(parameters: DevelopmentSchemaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.schemaName = parameters.schemaName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:clouddirectory:${this.region}:${this.account}:schema/development/${this.schemaName}` as const
  }
}
export type { DevelopmentSchemaArn }
export function developmentSchemaArn<Partition extends ArnPartition = 'aws'>(parameters: DevelopmentSchemaArnParameters<Partition>) {
  return new DevelopmentSchemaArn<Partition>(parameters)
}

export interface DirectoryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
}
class DirectoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'directory', `arn:${string}:clouddirectory:${string}:${string}:directory/${string}`> {
  readonly [ArnResourceTypeBrand] = 'directory' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
  constructor(parameters: DirectoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.directoryId = parameters.directoryId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:clouddirectory:${this.region}:${this.account}:directory/${this.directoryId}` as const
  }
}
export type { DirectoryArn }
export function directoryArn<Partition extends ArnPartition = 'aws'>(parameters: DirectoryArnParameters<Partition>) {
  return new DirectoryArn<Partition>(parameters)
}

export interface PublishedSchemaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schemaName: string
  readonly version: string
}
class PublishedSchemaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'publishedSchema', `arn:${string}:clouddirectory:${string}:${string}:schema/published/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'publishedSchema' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schemaName: string
  readonly version: string
  constructor(parameters: PublishedSchemaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.schemaName = parameters.schemaName
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:clouddirectory:${this.region}:${this.account}:schema/published/${this.schemaName}/${this.version}` as const
  }
}
export type { PublishedSchemaArn }
export function publishedSchemaArn<Partition extends ArnPartition = 'aws'>(parameters: PublishedSchemaArnParameters<Partition>) {
  return new PublishedSchemaArn<Partition>(parameters)
}
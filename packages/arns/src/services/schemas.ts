import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DiscovererArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly discovererId: string
}
class DiscovererArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'discoverer',
  `arn:${string}:schemas:${string}:${string}:discoverer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'discoverer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly discovererId: string
  constructor(parameters: DiscovererArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.discovererId = parameters.discovererId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:schemas:${this.region}:${this.account}:discoverer/${this.discovererId}` as const
  }
}
export type { DiscovererArn }
export function discovererArn<Partition extends ArnPartition = 'aws'>(
  parameters: DiscovererArnParameters<Partition>,
) {
  return new DiscovererArn<Partition>(parameters)
}

export interface RegistryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registryName: string
}
class RegistryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'registry',
  `arn:${string}:schemas:${string}:${string}:registry/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'registry' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registryName: string
  constructor(parameters: RegistryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.registryName = parameters.registryName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:schemas:${this.region}:${this.account}:registry/${this.registryName}` as const
  }
}
export type { RegistryArn }
export function registryArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegistryArnParameters<Partition>,
) {
  return new RegistryArn<Partition>(parameters)
}

export interface SchemaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registryName: string
  readonly schemaName: string
}
class SchemaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'schema',
  `arn:${string}:schemas:${string}:${string}:schema/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'schema' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly registryName: string
  readonly schemaName: string
  constructor(parameters: SchemaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.registryName = parameters.registryName
    this.schemaName = parameters.schemaName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:schemas:${this.region}:${this.account}:schema/${this.registryName}/${this.schemaName}` as const
  }
}
export type { SchemaArn }
export function schemaArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchemaArnParameters<Partition>,
) {
  return new SchemaArn<Partition>(parameters)
}

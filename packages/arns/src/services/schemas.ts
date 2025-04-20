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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDiscoverer: string
}
class DiscovererArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'discoverer',
  `arn:${string}:schemas:${string}:${string}:discoverer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'discoverer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDiscoverer: string
  constructor(parameters: DiscovererArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDiscoverer = parameters.idDiscoverer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:schemas:${this.region}:${this.account}:discoverer/${this.idDiscoverer}` as const
  }
}
export type { DiscovererArn }
export function discovererArn<Partition extends ArnPartition = 'aws'>(
  parameters: DiscovererArnParameters<Partition>,
) {
  return new DiscovererArn<Partition>(parameters)
}

export interface RegistryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRegistry: string
}
class RegistryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'registry',
  `arn:${string}:schemas:${string}:${string}:registry/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'registry' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRegistry: string
  constructor(parameters: RegistryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRegistry = parameters.nameRegistry
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:schemas:${this.region}:${this.account}:registry/${this.nameRegistry}` as const
  }
}
export type { RegistryArn }
export function registryArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegistryArnParameters<Partition>,
) {
  return new RegistryArn<Partition>(parameters)
}

export interface SchemaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRegistry: string
  readonly nameSchema: string
}
class SchemaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'schema',
  `arn:${string}:schemas:${string}:${string}:schema/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'schema' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRegistry: string
  readonly nameSchema: string
  constructor(parameters: SchemaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRegistry = parameters.nameRegistry
    this.nameSchema = parameters.nameSchema
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:schemas:${this.region}:${this.account}:schema/${this.nameRegistry}/${this.nameSchema}` as const
  }
}
export type { SchemaArn }
export function schemaArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchemaArnParameters<Partition>,
) {
  return new SchemaArn<Partition>(parameters)
}

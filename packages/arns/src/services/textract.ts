import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AdapterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAdapter: string
}
class AdapterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'adapter',
  `arn:${string}:textract:${string}:${string}:/adapters/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'adapter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAdapter: string
  constructor(parameters: AdapterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAdapter = parameters.idAdapter
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:textract:${this.region}:${this.account}:/adapters/${this.idAdapter}` as const
  }
}
export type { AdapterArn }
export function adapterArn<Partition extends ArnPartition = 'aws'>(
  parameters: AdapterArnParameters<Partition>,
) {
  return new AdapterArn<Partition>(parameters)
}

export interface VersionAdapterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAdapter: string
  readonly versionAdapter: string
}
class VersionAdapterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'adapterversion',
  `arn:${string}:textract:${string}:${string}:/adapters/${string}/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'adapterversion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAdapter: string
  readonly versionAdapter: string
  constructor(parameters: VersionAdapterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAdapter = parameters.idAdapter
    this.versionAdapter = parameters.versionAdapter
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:textract:${this.region}:${this.account}:/adapters/${this.idAdapter}/versions/${this.versionAdapter}` as const
  }
}
export type { VersionAdapterArn }
export function versionAdapterArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionAdapterArnParameters<Partition>,
) {
  return new VersionAdapterArn<Partition>(parameters)
}

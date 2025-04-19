import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AdapterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly adapterId: string
}
class AdapterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'adapter', `arn:${string}:textract:${string}:${string}:/adapters/${string}`> {
  readonly [ArnResourceTypeBrand] = 'adapter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly adapterId: string
  constructor(parameters: AdapterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.adapterId = parameters.adapterId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:textract:${this.region}:${this.account}:/adapters/${this.adapterId}` as const
  }
}
export type { AdapterArn }
export function adapterArn<Partition extends ArnPartition = 'aws'>(parameters: AdapterArnParameters<Partition>) {
  return new AdapterArn<Partition>(parameters)
}

export interface AdapterversionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly adapterId: string
  readonly adapterVersion: string
}
class AdapterversionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'adapterversion', `arn:${string}:textract:${string}:${string}:/adapters/${string}/versions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'adapterversion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly adapterId: string
  readonly adapterVersion: string
  constructor(parameters: AdapterversionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.adapterId = parameters.adapterId
    this.adapterVersion = parameters.adapterVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:textract:${this.region}:${this.account}:/adapters/${this.adapterId}/versions/${this.adapterVersion}` as const
  }
}
export type { AdapterversionArn }
export function adapterversionArn<Partition extends ArnPartition = 'aws'>(parameters: AdapterversionArnParameters<Partition>) {
  return new AdapterversionArn<Partition>(parameters)
}
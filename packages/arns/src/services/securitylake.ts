import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DataLakeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class DataLakeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'data-lake',
  `arn:${string}:securitylake:${string}:${string}:data-lake/default`
> {
  readonly [ArnResourceTypeBrand] = 'data-lake' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: DataLakeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securitylake:${this.region}:${this.account}:data-lake/default` as const
  }
}
export type { DataLakeArn }
export function dataLakeArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataLakeArnParameters<Partition>,
) {
  return new DataLakeArn<Partition>(parameters)
}

export interface SubscriberArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriberId: string
}
class SubscriberArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'subscriber',
  `arn:${string}:securitylake:${string}:${string}:subscriber/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subscriber' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriberId: string
  constructor(parameters: SubscriberArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subscriberId = parameters.subscriberId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securitylake:${this.region}:${this.account}:subscriber/${this.subscriberId}` as const
  }
}
export type { SubscriberArn }
export function subscriberArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubscriberArnParameters<Partition>,
) {
  return new SubscriberArn<Partition>(parameters)
}

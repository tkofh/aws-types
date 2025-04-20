import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface LakeDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class LakeDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'data-lake',
  `arn:${string}:securitylake:${string}:${string}:data-lake/default`
> {
  readonly [ArnResourceTypeBrand] = 'data-lake' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: LakeDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securitylake:${this.region}:${this.account}:data-lake/default` as const
  }
}
export type { LakeDataArn }
export function lakeDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: LakeDataArnParameters<Partition>,
) {
  return new LakeDataArn<Partition>(parameters)
}

export interface SubscriberArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubscriber: string
}
class SubscriberArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'subscriber',
  `arn:${string}:securitylake:${string}:${string}:subscriber/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subscriber' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubscriber: string
  constructor(parameters: SubscriberArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSubscriber = parameters.idSubscriber
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securitylake:${this.region}:${this.account}:subscriber/${this.idSubscriber}` as const
  }
}
export type { SubscriberArn }
export function subscriberArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubscriberArnParameters<Partition>,
) {
  return new SubscriberArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationName: string
}
class ConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration',
  `arn:${string}:freertos:${string}:${string}:configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationName: string
  constructor(parameters: ConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configurationName = parameters.configurationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:freertos:${this.region}:${this.account}:configuration/${this.configurationName}` as const
  }
}
export type { ConfigurationArn }
export function configurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationArnParameters<Partition>,
) {
  return new ConfigurationArn<Partition>(parameters)
}

export interface SubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionId: string
}
class SubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subscription',
  `arn:${string}:freertos:${string}:${string}:subscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subscription' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionId: string
  constructor(parameters: SubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subscriptionId = parameters.subscriptionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:freertos:${this.region}:${this.account}:subscription/${this.subscriptionId}` as const
  }
}
export type { SubscriptionArn }
export function subscriptionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubscriptionArnParameters<Partition>,
) {
  return new SubscriptionArn<Partition>(parameters)
}

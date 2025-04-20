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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfiguration: string
}
class ConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration',
  `arn:${string}:freertos:${string}:${string}:configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfiguration: string
  constructor(parameters: ConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfiguration = parameters.nameConfiguration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:freertos:${this.region}:${this.account}:configuration/${this.nameConfiguration}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubscription: string
}
class SubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subscription',
  `arn:${string}:freertos:${string}:${string}:subscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subscription' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubscription: string
  constructor(parameters: SubscriptionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSubscription = parameters.idSubscription
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:freertos:${this.region}:${this.account}:subscription/${this.idSubscription}` as const
  }
}
export type { SubscriptionArn }
export function subscriptionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubscriptionArnParameters<Partition>,
) {
  return new SubscriptionArn<Partition>(parameters)
}

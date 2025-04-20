import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProviderSubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProviderSubscription: string
}
class ProviderSubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subscription-provider',
  `arn:${string}:license-manager-linux-subscriptions:${string}:${string}:subscription-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subscription-provider' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProviderSubscription: string
  constructor(parameters: ProviderSubscriptionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProviderSubscription = parameters.idProviderSubscription
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager-linux-subscriptions:${this.region}:${this.account}:subscription-provider/${this.idProviderSubscription}` as const
  }
}
export type { ProviderSubscriptionArn }
export function providerSubscriptionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderSubscriptionArnParameters<Partition>,
) {
  return new ProviderSubscriptionArn<Partition>(parameters)
}

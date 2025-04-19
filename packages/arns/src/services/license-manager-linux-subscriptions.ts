import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface SubscriptionProviderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionProviderId: string
}
class SubscriptionProviderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'subscription-provider', `arn:${string}:license-manager-linux-subscriptions:${string}:${string}:subscription-provider/${string}`> {
  readonly [ArnResourceTypeBrand] = 'subscription-provider' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionProviderId: string
  constructor(parameters: SubscriptionProviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subscriptionProviderId = parameters.subscriptionProviderId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:license-manager-linux-subscriptions:${this.region}:${this.account}:subscription-provider/${this.subscriptionProviderId}` as const
  }
}
export type { SubscriptionProviderArn }
export function subscriptionProviderArn<Partition extends ArnPartition = 'aws'>(parameters: SubscriptionProviderArnParameters<Partition>) {
  return new SubscriptionProviderArn<Partition>(parameters)
}
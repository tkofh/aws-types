export interface SubscriptionProviderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subscriptionProviderId: string
}
export type SubscriptionProviderArn = `arn:${string}:license-manager-linux-subscriptions:${string}:${string}:subscription-provider/${string}`
export function subscriptionProviderArn(parameters: SubscriptionProviderArnParameters): SubscriptionProviderArn {
  return `arn:${parameters.partition ?? ''}:license-manager-linux-subscriptions:${parameters.region}:${parameters.account}:subscription-provider/${parameters.subscriptionProviderId}`
}
export interface ConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configurationName: string
}
export type ConfigurationArn = `arn:${string}:freertos:${string}:${string}:configuration/${string}`
export function configurationArn(parameters: ConfigurationArnParameters): ConfigurationArn {
  return `arn:${parameters.partition ?? ''}:freertos:${parameters.region}:${parameters.account}:configuration/${parameters.configurationName}`
}

export interface SubscriptionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subscriptionId: string
}
export type SubscriptionArn = `arn:${string}:freertos:${string}:${string}:subscription/${string}`
export function subscriptionArn(parameters: SubscriptionArnParameters): SubscriptionArn {
  return `arn:${parameters.partition ?? ''}:freertos:${parameters.region}:${parameters.account}:subscription/${parameters.subscriptionId}`
}
export interface BrokersArnParameters {
  partition?: string | undefined
  region: string
  account: string
  brokerName: string
  brokerId: string
}
export type BrokersArn = `arn:${string}:mq:${string}:${string}:broker:${string}:${string}`
export function brokersArn(parameters: BrokersArnParameters): BrokersArn {
  return `arn:${parameters.partition ?? ''}:mq:${parameters.region}:${parameters.account}:broker:${parameters.brokerName}:${parameters.brokerId}`
}

export interface ConfigurationsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configurationId: string
}
export type ConfigurationsArn = `arn:${string}:mq:${string}:${string}:configuration:${string}`
export function configurationsArn(parameters: ConfigurationsArnParameters): ConfigurationsArn {
  return `arn:${parameters.partition ?? ''}:mq:${parameters.region}:${parameters.account}:configuration:${parameters.configurationId}`
}
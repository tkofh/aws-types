export interface ConfigurationManagerArnParameters {
  partition?: string | undefined
  account: string
  configurationManagerId: string
}
export type ConfigurationManagerArn = `arn:${string}:ssm-quicksetup::${string}:configuration-manager/${string}`
export function configurationManagerArn(parameters: ConfigurationManagerArnParameters): ConfigurationManagerArn {
  return `arn:${parameters.partition ?? ''}:ssm-quicksetup::${parameters.account}:configuration-manager/${parameters.configurationManagerId}`
}
export interface DeviceInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceInstanceId: string
}
export type DeviceInstanceArn = `arn:${string}:one:${string}:${string}:device-instance/${string}`
export function deviceInstanceArn(parameters: DeviceInstanceArnParameters): DeviceInstanceArn {
  return `arn:${parameters.partition ?? ''}:one:${parameters.region}:${parameters.account}:device-instance/${parameters.deviceInstanceId}`
}

export interface ConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceInstanceId: string
  version: string
}
export type ConfigurationArn = `arn:${string}:one:${string}:${string}:device-instance/${string}/configuration/${string}`
export function configurationArn(parameters: ConfigurationArnParameters): ConfigurationArn {
  return `arn:${parameters.partition ?? ''}:one:${parameters.region}:${parameters.account}:device-instance/${parameters.deviceInstanceId}/configuration/${parameters.version}`
}

export interface DeviceConfigurationTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateId: string
}
export type DeviceConfigurationTemplateArn = `arn:${string}:one:${string}:${string}:device-configuration-template/${string}`
export function deviceConfigurationTemplateArn(parameters: DeviceConfigurationTemplateArnParameters): DeviceConfigurationTemplateArn {
  return `arn:${parameters.partition ?? ''}:one:${parameters.region}:${parameters.account}:device-configuration-template/${parameters.templateId}`
}

export interface SiteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  siteId: string
}
export type SiteArn = `arn:${string}:one:${string}:${string}:site/${string}`
export function siteArn(parameters: SiteArnParameters): SiteArn {
  return `arn:${parameters.partition ?? ''}:one:${parameters.region}:${parameters.account}:site/${parameters.siteId}`
}

export interface UserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  userId: string
}
export type UserArn = `arn:${string}:one:${string}:${string}:user/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:one:${parameters.region}:${parameters.account}:user/${parameters.userId}`
}
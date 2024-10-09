export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
}
export type EnvironmentArn = `arn:${string}:thinclient:${string}:${string}:environment/${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:thinclient:${parameters.region}:${parameters.account}:environment/${parameters.environmentId}`
}

export interface DeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceId: string
}
export type DeviceArn = `arn:${string}:thinclient:${string}:${string}:device/${string}`
export function deviceArn(parameters: DeviceArnParameters): DeviceArn {
  return `arn:${parameters.partition ?? ''}:thinclient:${parameters.region}:${parameters.account}:device/${parameters.deviceId}`
}

export interface SoftwaresetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  softwareSetId: string
}
export type SoftwaresetArn = `arn:${string}:thinclient:${string}:${string}:softwareset/${string}`
export function softwaresetArn(parameters: SoftwaresetArnParameters): SoftwaresetArn {
  return `arn:${parameters.partition ?? ''}:thinclient:${parameters.region}:${parameters.account}:softwareset/${parameters.softwareSetId}`
}
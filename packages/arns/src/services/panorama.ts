export interface DeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceId: string
}
export type DeviceArn = `arn:${string}:panorama:${string}:${string}:device/${string}`
export function deviceArn(parameters: DeviceArnParameters): DeviceArn {
  return `arn:${parameters.partition ?? ''}:panorama:${parameters.region}:${parameters.account}:device/${parameters.deviceId}`
}

export interface PackageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  packageId: string
}
export type PackageArn = `arn:${string}:panorama:${string}:${string}:package/${string}`
export function packageArn(parameters: PackageArnParameters): PackageArn {
  return `arn:${parameters.partition ?? ''}:panorama:${parameters.region}:${parameters.account}:package/${parameters.packageId}`
}

export interface ApplicationInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationInstanceId: string
}
export type ApplicationInstanceArn = `arn:${string}:panorama:${string}:${string}:applicationInstance/${string}`
export function applicationInstanceArn(parameters: ApplicationInstanceArnParameters): ApplicationInstanceArn {
  return `arn:${parameters.partition ?? ''}:panorama:${parameters.region}:${parameters.account}:applicationInstance/${parameters.applicationInstanceId}`
}
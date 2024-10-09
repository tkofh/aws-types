export interface DeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceId: string
}
export type DeviceArn = `arn:${string}:iot1click:${string}:${string}:devices/${string}`
export function deviceArn(parameters: DeviceArnParameters): DeviceArn {
  return `arn:${parameters.partition ?? ''}:iot1click:${parameters.region}:${parameters.account}:devices/${parameters.deviceId}`
}

export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
}
export type ProjectArn = `arn:${string}:iot1click:${string}:${string}:projects/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:iot1click:${parameters.region}:${parameters.account}:projects/${parameters.projectName}`
}
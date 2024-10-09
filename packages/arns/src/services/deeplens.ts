export interface DeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceName: string
}
export type DeviceArn = `arn:${string}:deeplens:${string}:${string}:device/${string}`
export function deviceArn(parameters: DeviceArnParameters): DeviceArn {
  return `arn:${parameters.partition ?? ''}:deeplens:${parameters.region}:${parameters.account}:device/${parameters.deviceName}`
}

export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
}
export type ProjectArn = `arn:${string}:deeplens:${string}:${string}:project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:deeplens:${parameters.region}:${parameters.account}:project/${parameters.projectName}`
}

export interface ModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelName: string
}
export type ModelArn = `arn:${string}:deeplens:${string}:${string}:model/${string}`
export function modelArn(parameters: ModelArnParameters): ModelArn {
  return `arn:${parameters.partition ?? ''}:deeplens:${parameters.region}:${parameters.account}:model/${parameters.modelName}`
}
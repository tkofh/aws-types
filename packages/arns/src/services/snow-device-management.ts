export interface ManagedDeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ManagedDeviceArn = `arn:${string}:snow-device-management:${string}:${string}:managed-device/${string}`
export function managedDeviceArn(parameters: ManagedDeviceArnParameters): ManagedDeviceArn {
  return `arn:${parameters.partition ?? ''}:snow-device-management:${parameters.region}:${parameters.account}:managed-device/${parameters.resourceId}`
}

export interface TaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TaskArn = `arn:${string}:snow-device-management:${string}:${string}:task/${string}`
export function taskArn(parameters: TaskArnParameters): TaskArn {
  return `arn:${parameters.partition ?? ''}:snow-device-management:${parameters.region}:${parameters.account}:task/${parameters.resourceId}`
}
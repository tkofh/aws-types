export interface DeviceIdentityArnParameters {
  partition?: string | undefined
  account: string
  deviceId: string
  identityId: string
}
export type DeviceIdentityArn = `arn:${string}:consoleapp::${string}:device/${string}/identity/${string}`
export function deviceIdentityArn(parameters: DeviceIdentityArnParameters): DeviceIdentityArn {
  return `arn:${parameters.partition ?? ''}:consoleapp::${parameters.account}:device/${parameters.deviceId}/identity/${parameters.identityId}`
}
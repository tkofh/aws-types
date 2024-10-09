export interface PermissionArnParameters {
  partition?: string | undefined
  region: string
  permissionRequestId: string
}
export type PermissionArn = `arn:${string}:iq-permission:${string}::permission/${string}`
export function permissionArn(parameters: PermissionArnParameters): PermissionArn {
  return `arn:${parameters.partition ?? ''}:iq-permission:${parameters.region}::permission/${parameters.permissionRequestId}`
}
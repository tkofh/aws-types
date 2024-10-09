export interface ResourceShareArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type ResourceShareArn = `arn:${string}:ram:${string}:${string}:resource-share/${string}`
export function resourceShareArn(parameters: ResourceShareArnParameters): ResourceShareArn {
  return `arn:${parameters.partition ?? ''}:ram:${parameters.region}:${parameters.account}:resource-share/${parameters.resourcePath}`
}

export interface ResourceShareInvitationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type ResourceShareInvitationArn = `arn:${string}:ram:${string}:${string}:resource-share-invitation/${string}`
export function resourceShareInvitationArn(parameters: ResourceShareInvitationArnParameters): ResourceShareInvitationArn {
  return `arn:${parameters.partition ?? ''}:ram:${parameters.region}:${parameters.account}:resource-share-invitation/${parameters.resourcePath}`
}

export interface PermissionArnParameters {
  partition?: string | undefined
  account: string
  resourcePath: string
}
export type PermissionArn = `arn:${string}:ram::${string}:permission/${string}`
export function permissionArn(parameters: PermissionArnParameters): PermissionArn {
  return `arn:${parameters.partition ?? ''}:ram::${parameters.account}:permission/${parameters.resourcePath}`
}

export interface CustomerManagedPermissionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type CustomerManagedPermissionArn = `arn:${string}:ram:${string}:${string}:permission/${string}`
export function customerManagedPermissionArn(parameters: CustomerManagedPermissionArnParameters): CustomerManagedPermissionArn {
  return `arn:${parameters.partition ?? ''}:ram:${parameters.region}:${parameters.account}:permission/${parameters.resourcePath}`
}
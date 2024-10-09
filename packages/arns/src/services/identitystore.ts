export interface IdentitystoreArnParameters {
  partition?: string | undefined
  account: string
  identityStoreId: string
}
export type IdentitystoreArn = `arn:${string}:identitystore::${string}:identitystore/${string}`
export function identitystoreArn(parameters: IdentitystoreArnParameters): IdentitystoreArn {
  return `arn:${parameters.partition ?? ''}:identitystore::${parameters.account}:identitystore/${parameters.identityStoreId}`
}

export interface UserArnParameters {
  partition?: string | undefined
  userId: string
}
export type UserArn = `arn:${string}:identitystore:::user/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:identitystore:::user/${parameters.userId}`
}

export interface GroupArnParameters {
  partition?: string | undefined
  groupId: string
}
export type GroupArn = `arn:${string}:identitystore:::group/${string}`
export function groupArn(parameters: GroupArnParameters): GroupArn {
  return `arn:${parameters.partition ?? ''}:identitystore:::group/${parameters.groupId}`
}

export interface GroupMembershipArnParameters {
  partition?: string | undefined
  membershipId: string
}
export type GroupMembershipArn = `arn:${string}:identitystore:::membership/${string}`
export function groupMembershipArn(parameters: GroupMembershipArnParameters): GroupMembershipArn {
  return `arn:${parameters.partition ?? ''}:identitystore:::membership/${parameters.membershipId}`
}

export interface AllUsersArnParameters {
  partition?: string | undefined
}
export type AllUsersArn = `arn:${string}:identitystore:::user/*`
export function allUsersArn(parameters: AllUsersArnParameters): AllUsersArn {
  return `arn:${parameters.partition ?? ''}:identitystore:::user/*`
}

export interface AllGroupsArnParameters {
  partition?: string | undefined
}
export type AllGroupsArn = `arn:${string}:identitystore:::group/*`
export function allGroupsArn(parameters: AllGroupsArnParameters): AllGroupsArn {
  return `arn:${parameters.partition ?? ''}:identitystore:::group/*`
}

export interface AllGroupMembershipsArnParameters {
  partition?: string | undefined
}
export type AllGroupMembershipsArn = `arn:${string}:identitystore:::membership/*`
export function allGroupMembershipsArn(parameters: AllGroupMembershipsArnParameters): AllGroupMembershipsArn {
  return `arn:${parameters.partition ?? ''}:identitystore:::membership/*`
}
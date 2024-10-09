export interface ParametergroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  parameterGroupName: string
}
export type ParametergroupArn = `arn:${string}:memorydb:${string}:${string}:parametergroup/${string}`
export function parametergroupArn(parameters: ParametergroupArnParameters): ParametergroupArn {
  return `arn:${parameters.partition ?? ''}:memorydb:${parameters.region}:${parameters.account}:parametergroup/${parameters.parameterGroupName}`
}

export interface SubnetgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subnetGroupName: string
}
export type SubnetgroupArn = `arn:${string}:memorydb:${string}:${string}:subnetgroup/${string}`
export function subnetgroupArn(parameters: SubnetgroupArnParameters): SubnetgroupArn {
  return `arn:${parameters.partition ?? ''}:memorydb:${parameters.region}:${parameters.account}:subnetgroup/${parameters.subnetGroupName}`
}

export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
}
export type ClusterArn = `arn:${string}:memorydb:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:memorydb:${parameters.region}:${parameters.account}:cluster/${parameters.clusterName}`
}

export interface SnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  snapshotName: string
}
export type SnapshotArn = `arn:${string}:memorydb:${string}:${string}:snapshot/${string}`
export function snapshotArn(parameters: SnapshotArnParameters): SnapshotArn {
  return `arn:${parameters.partition ?? ''}:memorydb:${parameters.region}:${parameters.account}:snapshot/${parameters.snapshotName}`
}

export interface UserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  userName: string
}
export type UserArn = `arn:${string}:memorydb:${string}:${string}:user/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:memorydb:${parameters.region}:${parameters.account}:user/${parameters.userName}`
}

export interface AclArnParameters {
  partition?: string | undefined
  region: string
  account: string
  aclName: string
}
export type AclArn = `arn:${string}:memorydb:${string}:${string}:acl/${string}`
export function aclArn(parameters: AclArnParameters): AclArn {
  return `arn:${parameters.partition ?? ''}:memorydb:${parameters.region}:${parameters.account}:acl/${parameters.aclName}`
}

export interface ReservednodeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reservationId: string
}
export type ReservednodeArn = `arn:${string}:memorydb:${string}:${string}:reservednode/${string}`
export function reservednodeArn(parameters: ReservednodeArnParameters): ReservednodeArn {
  return `arn:${parameters.partition ?? ''}:memorydb:${parameters.region}:${parameters.account}:reservednode/${parameters.reservationId}`
}
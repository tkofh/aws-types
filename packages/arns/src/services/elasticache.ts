export interface ParametergroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  cacheParameterGroupName: string
}
export type ParametergroupArn = `arn:${string}:elasticache:${string}:${string}:parametergroup:${string}`
export function parametergroupArn(parameters: ParametergroupArnParameters): ParametergroupArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:parametergroup:${parameters.cacheParameterGroupName}`
}

export interface SecuritygroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  cacheSecurityGroupName: string
}
export type SecuritygroupArn = `arn:${string}:elasticache:${string}:${string}:securitygroup:${string}`
export function securitygroupArn(parameters: SecuritygroupArnParameters): SecuritygroupArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:securitygroup:${parameters.cacheSecurityGroupName}`
}

export interface SubnetgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  cacheSubnetGroupName: string
}
export type SubnetgroupArn = `arn:${string}:elasticache:${string}:${string}:subnetgroup:${string}`
export function subnetgroupArn(parameters: SubnetgroupArnParameters): SubnetgroupArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:subnetgroup:${parameters.cacheSubnetGroupName}`
}

export interface ReplicationgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  replicationGroupId: string
}
export type ReplicationgroupArn = `arn:${string}:elasticache:${string}:${string}:replicationgroup:${string}`
export function replicationgroupArn(parameters: ReplicationgroupArnParameters): ReplicationgroupArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:replicationgroup:${parameters.replicationGroupId}`
}

export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  cacheClusterId: string
}
export type ClusterArn = `arn:${string}:elasticache:${string}:${string}:cluster:${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:cluster:${parameters.cacheClusterId}`
}

export interface ReservedInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reservedCacheNodeId: string
}
export type ReservedInstanceArn = `arn:${string}:elasticache:${string}:${string}:reserved-instance:${string}`
export function reservedInstanceArn(parameters: ReservedInstanceArnParameters): ReservedInstanceArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:reserved-instance:${parameters.reservedCacheNodeId}`
}

export interface SnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  snapshotName: string
}
export type SnapshotArn = `arn:${string}:elasticache:${string}:${string}:snapshot:${string}`
export function snapshotArn(parameters: SnapshotArnParameters): SnapshotArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:snapshot:${parameters.snapshotName}`
}

export interface GlobalreplicationgroupArnParameters {
  partition?: string | undefined
  account: string
  globalReplicationGroupId: string
}
export type GlobalreplicationgroupArn = `arn:${string}:elasticache::${string}:globalreplicationgroup:${string}`
export function globalreplicationgroupArn(parameters: GlobalreplicationgroupArnParameters): GlobalreplicationgroupArn {
  return `arn:${parameters.partition ?? ''}:elasticache::${parameters.account}:globalreplicationgroup:${parameters.globalReplicationGroupId}`
}

export interface UserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  userId: string
}
export type UserArn = `arn:${string}:elasticache:${string}:${string}:user:${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:user:${parameters.userId}`
}

export interface UsergroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  userGroupId: string
}
export type UsergroupArn = `arn:${string}:elasticache:${string}:${string}:usergroup:${string}`
export function usergroupArn(parameters: UsergroupArnParameters): UsergroupArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:usergroup:${parameters.userGroupId}`
}

export interface ServerlesscacheArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serverlessCacheName: string
}
export type ServerlesscacheArn = `arn:${string}:elasticache:${string}:${string}:serverlesscache:${string}`
export function serverlesscacheArn(parameters: ServerlesscacheArnParameters): ServerlesscacheArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:serverlesscache:${parameters.serverlessCacheName}`
}

export interface ServerlesscachesnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serverlessCacheSnapshotName: string
}
export type ServerlesscachesnapshotArn = `arn:${string}:elasticache:${string}:${string}:serverlesscachesnapshot:${string}`
export function serverlesscachesnapshotArn(parameters: ServerlesscachesnapshotArnParameters): ServerlesscachesnapshotArn {
  return `arn:${parameters.partition ?? ''}:elasticache:${parameters.region}:${parameters.account}:serverlesscachesnapshot:${parameters.serverlessCacheSnapshotName}`
}
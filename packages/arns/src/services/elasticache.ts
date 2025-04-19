import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ParametergroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheParameterGroupName: string
}
class ParametergroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'parametergroup', `arn:${string}:elasticache:${string}:${string}:parametergroup:${string}`> {
  readonly [ArnResourceTypeBrand] = 'parametergroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheParameterGroupName: string
  constructor(parameters: ParametergroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.cacheParameterGroupName = parameters.cacheParameterGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:parametergroup:${this.cacheParameterGroupName}` as const
  }
}
export type { ParametergroupArn }
export function parametergroupArn<Partition extends ArnPartition = 'aws'>(parameters: ParametergroupArnParameters<Partition>) {
  return new ParametergroupArn<Partition>(parameters)
}

export interface SecuritygroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheSecurityGroupName: string
}
class SecuritygroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'securitygroup', `arn:${string}:elasticache:${string}:${string}:securitygroup:${string}`> {
  readonly [ArnResourceTypeBrand] = 'securitygroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheSecurityGroupName: string
  constructor(parameters: SecuritygroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.cacheSecurityGroupName = parameters.cacheSecurityGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:securitygroup:${this.cacheSecurityGroupName}` as const
  }
}
export type { SecuritygroupArn }
export function securitygroupArn<Partition extends ArnPartition = 'aws'>(parameters: SecuritygroupArnParameters<Partition>) {
  return new SecuritygroupArn<Partition>(parameters)
}

export interface SubnetgroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheSubnetGroupName: string
}
class SubnetgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'subnetgroup', `arn:${string}:elasticache:${string}:${string}:subnetgroup:${string}`> {
  readonly [ArnResourceTypeBrand] = 'subnetgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheSubnetGroupName: string
  constructor(parameters: SubnetgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.cacheSubnetGroupName = parameters.cacheSubnetGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:subnetgroup:${this.cacheSubnetGroupName}` as const
  }
}
export type { SubnetgroupArn }
export function subnetgroupArn<Partition extends ArnPartition = 'aws'>(parameters: SubnetgroupArnParameters<Partition>) {
  return new SubnetgroupArn<Partition>(parameters)
}

export interface ReplicationgroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicationGroupId: string
}
class ReplicationgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'replicationgroup', `arn:${string}:elasticache:${string}:${string}:replicationgroup:${string}`> {
  readonly [ArnResourceTypeBrand] = 'replicationgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicationGroupId: string
  constructor(parameters: ReplicationgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.replicationGroupId = parameters.replicationGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:replicationgroup:${this.replicationGroupId}` as const
  }
}
export type { ReplicationgroupArn }
export function replicationgroupArn<Partition extends ArnPartition = 'aws'>(parameters: ReplicationgroupArnParameters<Partition>) {
  return new ReplicationgroupArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheClusterId: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'cluster', `arn:${string}:elasticache:${string}:${string}:cluster:${string}`> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheClusterId: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.cacheClusterId = parameters.cacheClusterId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:cluster:${this.cacheClusterId}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(parameters: ClusterArnParameters<Partition>) {
  return new ClusterArn<Partition>(parameters)
}

export interface ReservedInstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservedCacheNodeId: string
}
class ReservedInstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'reserved-instance', `arn:${string}:elasticache:${string}:${string}:reserved-instance:${string}`> {
  readonly [ArnResourceTypeBrand] = 'reserved-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservedCacheNodeId: string
  constructor(parameters: ReservedInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reservedCacheNodeId = parameters.reservedCacheNodeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:reserved-instance:${this.reservedCacheNodeId}` as const
  }
}
export type { ReservedInstanceArn }
export function reservedInstanceArn<Partition extends ArnPartition = 'aws'>(parameters: ReservedInstanceArnParameters<Partition>) {
  return new ReservedInstanceArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotName: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'snapshot', `arn:${string}:elasticache:${string}:${string}:snapshot:${string}`> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotName: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.snapshotName = parameters.snapshotName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:snapshot:${this.snapshotName}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(parameters: SnapshotArnParameters<Partition>) {
  return new SnapshotArn<Partition>(parameters)
}

export interface GlobalreplicationgroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly globalReplicationGroupId: string
}
class GlobalreplicationgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'globalreplicationgroup', `arn:${string}:elasticache::${string}:globalreplicationgroup:${string}`> {
  readonly [ArnResourceTypeBrand] = 'globalreplicationgroup' as const
  readonly partition: Partition
  readonly account: string
  readonly globalReplicationGroupId: string
  constructor(parameters: GlobalreplicationgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.globalReplicationGroupId = parameters.globalReplicationGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache::${this.account}:globalreplicationgroup:${this.globalReplicationGroupId}` as const
  }
}
export type { GlobalreplicationgroupArn }
export function globalreplicationgroupArn<Partition extends ArnPartition = 'aws'>(parameters: GlobalreplicationgroupArnParameters<Partition>) {
  return new GlobalreplicationgroupArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userId: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'user', `arn:${string}:elasticache:${string}:${string}:user:${string}`> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userId: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.userId = parameters.userId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:user:${this.userId}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(parameters: UserArnParameters<Partition>) {
  return new UserArn<Partition>(parameters)
}

export interface UsergroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userGroupId: string
}
class UsergroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'usergroup', `arn:${string}:elasticache:${string}:${string}:usergroup:${string}`> {
  readonly [ArnResourceTypeBrand] = 'usergroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userGroupId: string
  constructor(parameters: UsergroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.userGroupId = parameters.userGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:usergroup:${this.userGroupId}` as const
  }
}
export type { UsergroupArn }
export function usergroupArn<Partition extends ArnPartition = 'aws'>(parameters: UsergroupArnParameters<Partition>) {
  return new UsergroupArn<Partition>(parameters)
}

export interface ServerlesscacheArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverlessCacheName: string
}
class ServerlesscacheArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'serverlesscache', `arn:${string}:elasticache:${string}:${string}:serverlesscache:${string}`> {
  readonly [ArnResourceTypeBrand] = 'serverlesscache' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverlessCacheName: string
  constructor(parameters: ServerlesscacheArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serverlessCacheName = parameters.serverlessCacheName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:serverlesscache:${this.serverlessCacheName}` as const
  }
}
export type { ServerlesscacheArn }
export function serverlesscacheArn<Partition extends ArnPartition = 'aws'>(parameters: ServerlesscacheArnParameters<Partition>) {
  return new ServerlesscacheArn<Partition>(parameters)
}

export interface ServerlesscachesnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverlessCacheSnapshotName: string
}
class ServerlesscachesnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'serverlesscachesnapshot', `arn:${string}:elasticache:${string}:${string}:serverlesscachesnapshot:${string}`> {
  readonly [ArnResourceTypeBrand] = 'serverlesscachesnapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverlessCacheSnapshotName: string
  constructor(parameters: ServerlesscachesnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serverlessCacheSnapshotName = parameters.serverlessCacheSnapshotName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:serverlesscachesnapshot:${this.serverlessCacheSnapshotName}` as const
  }
}
export type { ServerlesscachesnapshotArn }
export function serverlesscachesnapshotArn<Partition extends ArnPartition = 'aws'>(parameters: ServerlesscachesnapshotArnParameters<Partition>) {
  return new ServerlesscachesnapshotArn<Partition>(parameters)
}
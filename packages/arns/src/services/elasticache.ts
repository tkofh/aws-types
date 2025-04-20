import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ParameterGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheParameterGroupName: string
}
class ParameterGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'parametergroup',
  `arn:${string}:elasticache:${string}:${string}:parametergroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'parametergroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheParameterGroupName: string
  constructor(parameters: ParameterGroupArnParameters<Partition>) {
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
export type { ParameterGroupArn }
export function parameterGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ParameterGroupArnParameters<Partition>,
) {
  return new ParameterGroupArn<Partition>(parameters)
}

export interface SecurityGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheSecurityGroupName: string
}
class SecurityGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securitygroup',
  `arn:${string}:elasticache:${string}:${string}:securitygroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'securitygroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheSecurityGroupName: string
  constructor(parameters: SecurityGroupArnParameters<Partition>) {
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
export type { SecurityGroupArn }
export function securityGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecurityGroupArnParameters<Partition>,
) {
  return new SecurityGroupArn<Partition>(parameters)
}

export interface SubnetGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheSubnetGroupName: string
}
class SubnetGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subnetgroup',
  `arn:${string}:elasticache:${string}:${string}:subnetgroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subnetgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheSubnetGroupName: string
  constructor(parameters: SubnetGroupArnParameters<Partition>) {
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
export type { SubnetGroupArn }
export function subnetGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubnetGroupArnParameters<Partition>,
) {
  return new SubnetGroupArn<Partition>(parameters)
}

export interface ReplicationGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicationGroupId: string
}
class ReplicationGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'replicationgroup',
  `arn:${string}:elasticache:${string}:${string}:replicationgroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replicationgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicationGroupId: string
  constructor(parameters: ReplicationGroupArnParameters<Partition>) {
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
export type { ReplicationGroupArn }
export function replicationGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReplicationGroupArnParameters<Partition>,
) {
  return new ReplicationGroupArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cacheClusterId: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:elasticache:${string}:${string}:cluster:${string}`
> {
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
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface ReservedInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservedCacheNodeId: string
}
class ReservedInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reserved-instance',
  `arn:${string}:elasticache:${string}:${string}:reserved-instance:${string}`
> {
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
export function reservedInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReservedInstanceArnParameters<Partition>,
) {
  return new ReservedInstanceArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotName: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:elasticache:${string}:${string}:snapshot:${string}`
> {
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
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface GlobalReplicationGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly globalReplicationGroupId: string
}
class GlobalReplicationGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'globalreplicationgroup',
  `arn:${string}:elasticache::${string}:globalreplicationgroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'globalreplicationgroup' as const
  readonly partition: Partition
  readonly account: string
  readonly globalReplicationGroupId: string
  constructor(parameters: GlobalReplicationGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.globalReplicationGroupId = parameters.globalReplicationGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache::${this.account}:globalreplicationgroup:${this.globalReplicationGroupId}` as const
  }
}
export type { GlobalReplicationGroupArn }
export function globalReplicationGroupArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GlobalReplicationGroupArnParameters<Partition>) {
  return new GlobalReplicationGroupArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userId: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:elasticache:${string}:${string}:user:${string}`
> {
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
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface UserGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userGroupId: string
}
class UserGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'usergroup',
  `arn:${string}:elasticache:${string}:${string}:usergroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'usergroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userGroupId: string
  constructor(parameters: UserGroupArnParameters<Partition>) {
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
export type { UserGroupArn }
export function userGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserGroupArnParameters<Partition>,
) {
  return new UserGroupArn<Partition>(parameters)
}

export interface ServerlessCacheArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverlessCacheName: string
}
class ServerlessCacheArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'serverlesscache',
  `arn:${string}:elasticache:${string}:${string}:serverlesscache:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'serverlesscache' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverlessCacheName: string
  constructor(parameters: ServerlessCacheArnParameters<Partition>) {
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
export type { ServerlessCacheArn }
export function serverlessCacheArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServerlessCacheArnParameters<Partition>,
) {
  return new ServerlessCacheArn<Partition>(parameters)
}

export interface ServerlessCacheSnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverlessCacheSnapshotName: string
}
class ServerlessCacheSnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'serverlesscachesnapshot',
  `arn:${string}:elasticache:${string}:${string}:serverlesscachesnapshot:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'serverlesscachesnapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverlessCacheSnapshotName: string
  constructor(parameters: ServerlessCacheSnapshotArnParameters<Partition>) {
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
export type { ServerlessCacheSnapshotArn }
export function serverlessCacheSnapshotArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ServerlessCacheSnapshotArnParameters<Partition>) {
  return new ServerlessCacheSnapshotArn<Partition>(parameters)
}

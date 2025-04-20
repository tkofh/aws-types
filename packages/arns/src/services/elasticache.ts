import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GroupParameterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupParameterCache: string
}
class GroupParameterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'parametergroup',
  `arn:${string}:elasticache:${string}:${string}:parametergroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'parametergroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupParameterCache: string
  constructor(parameters: GroupParameterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupParameterCache = parameters.nameGroupParameterCache
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:parametergroup:${this.nameGroupParameterCache}` as const
  }
}
export type { GroupParameterArn }
export function groupParameterArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupParameterArnParameters<Partition>,
) {
  return new GroupParameterArn<Partition>(parameters)
}

export interface GroupSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurityCache: string
}
class GroupSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securitygroup',
  `arn:${string}:elasticache:${string}:${string}:securitygroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'securitygroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurityCache: string
  constructor(parameters: GroupSecurityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupSecurityCache = parameters.nameGroupSecurityCache
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:securitygroup:${this.nameGroupSecurityCache}` as const
  }
}
export type { GroupSecurityArn }
export function groupSecurityArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSecurityArnParameters<Partition>,
) {
  return new GroupSecurityArn<Partition>(parameters)
}

export interface GroupSubnetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSubnetCache: string
}
class GroupSubnetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subnetgroup',
  `arn:${string}:elasticache:${string}:${string}:subnetgroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subnetgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSubnetCache: string
  constructor(parameters: GroupSubnetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupSubnetCache = parameters.nameGroupSubnetCache
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:subnetgroup:${this.nameGroupSubnetCache}` as const
  }
}
export type { GroupSubnetArn }
export function groupSubnetArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSubnetArnParameters<Partition>,
) {
  return new GroupSubnetArn<Partition>(parameters)
}

export interface GroupReplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupReplication: string
}
class GroupReplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'replicationgroup',
  `arn:${string}:elasticache:${string}:${string}:replicationgroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'replicationgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupReplication: string
  constructor(parameters: GroupReplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupReplication = parameters.idGroupReplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:replicationgroup:${this.idGroupReplication}` as const
  }
}
export type { GroupReplicationArn }
export function groupReplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupReplicationArnParameters<Partition>,
) {
  return new GroupReplicationArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClusterCache: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:elasticache:${string}:${string}:cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClusterCache: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idClusterCache = parameters.idClusterCache
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:cluster:${this.idClusterCache}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface InstanceReservedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNodeCacheReserved: string
}
class InstanceReservedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reserved-instance',
  `arn:${string}:elasticache:${string}:${string}:reserved-instance:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reserved-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNodeCacheReserved: string
  constructor(parameters: InstanceReservedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNodeCacheReserved = parameters.idNodeCacheReserved
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:reserved-instance:${this.idNodeCacheReserved}` as const
  }
}
export type { InstanceReservedArn }
export function instanceReservedArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceReservedArnParameters<Partition>,
) {
  return new InstanceReservedArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshot: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:elasticache:${string}:${string}:snapshot:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshot: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSnapshot = parameters.nameSnapshot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:snapshot:${this.nameSnapshot}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface GroupReplicationGlobalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idGroupReplicationGlobal: string
}
class GroupReplicationGlobalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'globalreplicationgroup',
  `arn:${string}:elasticache::${string}:globalreplicationgroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'globalreplicationgroup' as const
  readonly partition: string
  readonly account: string
  readonly idGroupReplicationGlobal: string
  constructor(parameters: GroupReplicationGlobalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idGroupReplicationGlobal = parameters.idGroupReplicationGlobal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache::${this.account}:globalreplicationgroup:${this.idGroupReplicationGlobal}` as const
  }
}
export type { GroupReplicationGlobalArn }
export function groupReplicationGlobalArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GroupReplicationGlobalArnParameters<Partition>) {
  return new GroupReplicationGlobalArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:elasticache:${string}:${string}:user:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUser: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idUser = parameters.idUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:user:${this.idUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface GroupUserArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupUser: string
}
class GroupUserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'usergroup',
  `arn:${string}:elasticache:${string}:${string}:usergroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'usergroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupUser: string
  constructor(parameters: GroupUserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupUser = parameters.idGroupUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:usergroup:${this.idGroupUser}` as const
  }
}
export type { GroupUserArn }
export function groupUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupUserArnParameters<Partition>,
) {
  return new GroupUserArn<Partition>(parameters)
}

export interface CacheServerlessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCacheServerless: string
}
class CacheServerlessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'serverlesscache',
  `arn:${string}:elasticache:${string}:${string}:serverlesscache:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'serverlesscache' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCacheServerless: string
  constructor(parameters: CacheServerlessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCacheServerless = parameters.nameCacheServerless
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:serverlesscache:${this.nameCacheServerless}` as const
  }
}
export type { CacheServerlessArn }
export function cacheServerlessArn<Partition extends ArnPartition = 'aws'>(
  parameters: CacheServerlessArnParameters<Partition>,
) {
  return new CacheServerlessArn<Partition>(parameters)
}

export interface SnapshotCacheServerlessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshotCacheServerless: string
}
class SnapshotCacheServerlessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'serverlesscachesnapshot',
  `arn:${string}:elasticache:${string}:${string}:serverlesscachesnapshot:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'serverlesscachesnapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshotCacheServerless: string
  constructor(parameters: SnapshotCacheServerlessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSnapshotCacheServerless = parameters.nameSnapshotCacheServerless
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticache:${this.region}:${this.account}:serverlesscachesnapshot:${this.nameSnapshotCacheServerless}` as const
  }
}
export type { SnapshotCacheServerlessArn }
export function snapshotCacheServerlessArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SnapshotCacheServerlessArnParameters<Partition>) {
  return new SnapshotCacheServerlessArn<Partition>(parameters)
}

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
  readonly nameGroupParameter: string
}
class GroupParameterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'parametergroup',
  `arn:${string}:memorydb:${string}:${string}:parametergroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'parametergroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupParameter: string
  constructor(parameters: GroupParameterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupParameter = parameters.nameGroupParameter
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:parametergroup/${this.nameGroupParameter}` as const
  }
}
export type { GroupParameterArn }
export function groupParameterArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupParameterArnParameters<Partition>,
) {
  return new GroupParameterArn<Partition>(parameters)
}

export interface GroupSubnetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSubnet: string
}
class GroupSubnetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subnetgroup',
  `arn:${string}:memorydb:${string}:${string}:subnetgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subnetgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSubnet: string
  constructor(parameters: GroupSubnetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupSubnet = parameters.nameGroupSubnet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:subnetgroup/${this.nameGroupSubnet}` as const
  }
}
export type { GroupSubnetArn }
export function groupSubnetArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSubnetArnParameters<Partition>,
) {
  return new GroupSubnetArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:memorydb:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:cluster/${this.nameCluster}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshot: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:memorydb:${string}:${string}:snapshot/${string}`
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
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:snapshot/${this.nameSnapshot}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:memorydb:${string}:${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameUser: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameUser = parameters.nameUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:user/${this.nameUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface AclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAcl: string
}
class AclArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'acl',
  `arn:${string}:memorydb:${string}:${string}:acl/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'acl' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAcl: string
  constructor(parameters: AclArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameAcl = parameters.nameAcl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:acl/${this.nameAcl}` as const
  }
}
export type { AclArn }
export function aclArn<Partition extends ArnPartition = 'aws'>(
  parameters: AclArnParameters<Partition>,
) {
  return new AclArn<Partition>(parameters)
}

export interface NodeReservedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservation: string
}
class NodeReservedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'reservednode',
  `arn:${string}:memorydb:${string}:${string}:reservednode/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reservednode' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReservation: string
  constructor(parameters: NodeReservedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idReservation = parameters.idReservation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:reservednode/${this.idReservation}` as const
  }
}
export type { NodeReservedArn }
export function nodeReservedArn<Partition extends ArnPartition = 'aws'>(
  parameters: NodeReservedArnParameters<Partition>,
) {
  return new NodeReservedArn<Partition>(parameters)
}

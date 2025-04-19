import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ParametergroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly parameterGroupName: string
}
class ParametergroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'parametergroup', `arn:${string}:memorydb:${string}:${string}:parametergroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'parametergroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly parameterGroupName: string
  constructor(parameters: ParametergroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.parameterGroupName = parameters.parameterGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:parametergroup/${this.parameterGroupName}` as const
  }
}
export type { ParametergroupArn }
export function parametergroupArn<Partition extends ArnPartition = 'aws'>(parameters: ParametergroupArnParameters<Partition>) {
  return new ParametergroupArn<Partition>(parameters)
}

export interface SubnetgroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetGroupName: string
}
class SubnetgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'subnetgroup', `arn:${string}:memorydb:${string}:${string}:subnetgroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'subnetgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetGroupName: string
  constructor(parameters: SubnetgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subnetGroupName = parameters.subnetGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:subnetgroup/${this.subnetGroupName}` as const
  }
}
export type { SubnetgroupArn }
export function subnetgroupArn<Partition extends ArnPartition = 'aws'>(parameters: SubnetgroupArnParameters<Partition>) {
  return new SubnetgroupArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'cluster', `arn:${string}:memorydb:${string}:${string}:cluster/${string}`> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:cluster/${this.clusterName}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(parameters: ClusterArnParameters<Partition>) {
  return new ClusterArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotName: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'snapshot', `arn:${string}:memorydb:${string}:${string}:snapshot/${string}`> {
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
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:snapshot/${this.snapshotName}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(parameters: SnapshotArnParameters<Partition>) {
  return new SnapshotArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userName: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'user', `arn:${string}:memorydb:${string}:${string}:user/${string}`> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userName: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.userName = parameters.userName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:user/${this.userName}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(parameters: UserArnParameters<Partition>) {
  return new UserArn<Partition>(parameters)
}

export interface AclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly aclName: string
}
class AclArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'acl', `arn:${string}:memorydb:${string}:${string}:acl/${string}`> {
  readonly [ArnResourceTypeBrand] = 'acl' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly aclName: string
  constructor(parameters: AclArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.aclName = parameters.aclName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:acl/${this.aclName}` as const
  }
}
export type { AclArn }
export function aclArn<Partition extends ArnPartition = 'aws'>(parameters: AclArnParameters<Partition>) {
  return new AclArn<Partition>(parameters)
}

export interface ReservednodeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservationId: string
}
class ReservednodeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'reservednode', `arn:${string}:memorydb:${string}:${string}:reservednode/${string}`> {
  readonly [ArnResourceTypeBrand] = 'reservednode' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservationId: string
  constructor(parameters: ReservednodeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reservationId = parameters.reservationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:memorydb:${this.region}:${this.account}:reservednode/${this.reservationId}` as const
  }
}
export type { ReservednodeArn }
export function reservednodeArn<Partition extends ArnPartition = 'aws'>(parameters: ReservednodeArnParameters<Partition>) {
  return new ReservednodeArn<Partition>(parameters)
}
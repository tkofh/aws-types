import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface EnvironmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
}
class EnvironmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'environment', `arn:${string}:finspace:${string}:${string}:environment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:environment/${this.environmentId}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(parameters: EnvironmentArnParameters<Partition>) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userId: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'user', `arn:${string}:finspace:${string}:${string}:user/${string}`> {
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
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:user/${this.userId}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(parameters: UserArnParameters<Partition>) {
  return new UserArn<Partition>(parameters)
}

export interface KxEnvironmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
}
class KxEnvironmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'kxEnvironment', `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'kxEnvironment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  constructor(parameters: KxEnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.environmentId}` as const
  }
}
export type { KxEnvironmentArn }
export function kxEnvironmentArn<Partition extends ArnPartition = 'aws'>(parameters: KxEnvironmentArnParameters<Partition>) {
  return new KxEnvironmentArn<Partition>(parameters)
}

export interface KxUserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly userName: string
}
class KxUserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'kxUser', `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxUser/${string}`> {
  readonly [ArnResourceTypeBrand] = 'kxUser' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly userName: string
  constructor(parameters: KxUserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
    this.userName = parameters.userName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.environmentId}/kxUser/${this.userName}` as const
  }
}
export type { KxUserArn }
export function kxUserArn<Partition extends ArnPartition = 'aws'>(parameters: KxUserArnParameters<Partition>) {
  return new KxUserArn<Partition>(parameters)
}

export interface KxClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxCluster: string
}
class KxClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'kxCluster', `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxCluster/${string}`> {
  readonly [ArnResourceTypeBrand] = 'kxCluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxCluster: string
  constructor(parameters: KxClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
    this.kxCluster = parameters.kxCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.environmentId}/kxCluster/${this.kxCluster}` as const
  }
}
export type { KxClusterArn }
export function kxClusterArn<Partition extends ArnPartition = 'aws'>(parameters: KxClusterArnParameters<Partition>) {
  return new KxClusterArn<Partition>(parameters)
}

export interface KxDatabaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxDatabase: string
}
class KxDatabaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'kxDatabase', `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxDatabase/${string}`> {
  readonly [ArnResourceTypeBrand] = 'kxDatabase' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxDatabase: string
  constructor(parameters: KxDatabaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
    this.kxDatabase = parameters.kxDatabase
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.environmentId}/kxDatabase/${this.kxDatabase}` as const
  }
}
export type { KxDatabaseArn }
export function kxDatabaseArn<Partition extends ArnPartition = 'aws'>(parameters: KxDatabaseArnParameters<Partition>) {
  return new KxDatabaseArn<Partition>(parameters)
}

export interface KxScalingGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxScalingGroup: string
}
class KxScalingGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'kxScalingGroup', `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxScalingGroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'kxScalingGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxScalingGroup: string
  constructor(parameters: KxScalingGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
    this.kxScalingGroup = parameters.kxScalingGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.environmentId}/kxScalingGroup/${this.kxScalingGroup}` as const
  }
}
export type { KxScalingGroupArn }
export function kxScalingGroupArn<Partition extends ArnPartition = 'aws'>(parameters: KxScalingGroupArnParameters<Partition>) {
  return new KxScalingGroupArn<Partition>(parameters)
}

export interface KxDataviewArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxDatabase: string
  readonly kxDataview: string
}
class KxDataviewArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'kxDataview', `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxDatabase/${string}/kxDataview/${string}`> {
  readonly [ArnResourceTypeBrand] = 'kxDataview' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxDatabase: string
  readonly kxDataview: string
  constructor(parameters: KxDataviewArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
    this.kxDatabase = parameters.kxDatabase
    this.kxDataview = parameters.kxDataview
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.environmentId}/kxDatabase/${this.kxDatabase}/kxDataview/${this.kxDataview}` as const
  }
}
export type { KxDataviewArn }
export function kxDataviewArn<Partition extends ArnPartition = 'aws'>(parameters: KxDataviewArnParameters<Partition>) {
  return new KxDataviewArn<Partition>(parameters)
}

export interface KxVolumeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxVolume: string
}
class KxVolumeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'kxVolume', `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxVolume/${string}`> {
  readonly [ArnResourceTypeBrand] = 'kxVolume' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  readonly kxVolume: string
  constructor(parameters: KxVolumeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
    this.kxVolume = parameters.kxVolume
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.environmentId}/kxVolume/${this.kxVolume}` as const
  }
}
export type { KxVolumeArn }
export function kxVolumeArn<Partition extends ArnPartition = 'aws'>(parameters: KxVolumeArnParameters<Partition>) {
  return new KxVolumeArn<Partition>(parameters)
}
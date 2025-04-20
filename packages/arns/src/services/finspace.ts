import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:finspace:${string}:${string}:environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:environment/${this.idEnvironment}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:finspace:${string}:${string}:user/${string}`
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
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:user/${this.idUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface EnvironmentKxArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
}
class EnvironmentKxArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'kxEnvironment',
  `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kxEnvironment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  constructor(parameters: EnvironmentKxArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.idEnvironment}` as const
  }
}
export type { EnvironmentKxArn }
export function environmentKxArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentKxArnParameters<Partition>,
) {
  return new EnvironmentKxArn<Partition>(parameters)
}

export interface UserKxArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly nameUser: string
}
class UserKxArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'kxUser',
  `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxUser/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kxUser' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly nameUser: string
  constructor(parameters: UserKxArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
    this.nameUser = parameters.nameUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.idEnvironment}/kxUser/${this.nameUser}` as const
  }
}
export type { UserKxArn }
export function userKxArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserKxArnParameters<Partition>,
) {
  return new UserKxArn<Partition>(parameters)
}

export interface ClusterKxArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly clusterKx: string
}
class ClusterKxArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'kxCluster',
  `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxCluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kxCluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly clusterKx: string
  constructor(parameters: ClusterKxArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
    this.clusterKx = parameters.clusterKx
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.idEnvironment}/kxCluster/${this.clusterKx}` as const
  }
}
export type { ClusterKxArn }
export function clusterKxArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterKxArnParameters<Partition>,
) {
  return new ClusterKxArn<Partition>(parameters)
}

export interface DatabaseKxArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly databaseKx: string
}
class DatabaseKxArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'kxDatabase',
  `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxDatabase/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kxDatabase' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly databaseKx: string
  constructor(parameters: DatabaseKxArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
    this.databaseKx = parameters.databaseKx
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.idEnvironment}/kxDatabase/${this.databaseKx}` as const
  }
}
export type { DatabaseKxArn }
export function databaseKxArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatabaseKxArnParameters<Partition>,
) {
  return new DatabaseKxArn<Partition>(parameters)
}

export interface GroupScalingKxArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly groupScalingKx: string
}
class GroupScalingKxArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'kxScalingGroup',
  `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxScalingGroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kxScalingGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly groupScalingKx: string
  constructor(parameters: GroupScalingKxArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
    this.groupScalingKx = parameters.groupScalingKx
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.idEnvironment}/kxScalingGroup/${this.groupScalingKx}` as const
  }
}
export type { GroupScalingKxArn }
export function groupScalingKxArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupScalingKxArnParameters<Partition>,
) {
  return new GroupScalingKxArn<Partition>(parameters)
}

export interface ViewDataKxArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly databaseKx: string
  readonly viewDataKx: string
}
class ViewDataKxArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'kxDataview',
  `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxDatabase/${string}/kxDataview/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kxDataview' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly databaseKx: string
  readonly viewDataKx: string
  constructor(parameters: ViewDataKxArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
    this.databaseKx = parameters.databaseKx
    this.viewDataKx = parameters.viewDataKx
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.idEnvironment}/kxDatabase/${this.databaseKx}/kxDataview/${this.viewDataKx}` as const
  }
}
export type { ViewDataKxArn }
export function viewDataKxArn<Partition extends ArnPartition = 'aws'>(
  parameters: ViewDataKxArnParameters<Partition>,
) {
  return new ViewDataKxArn<Partition>(parameters)
}

export interface VolumeKxArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly volumeKx: string
}
class VolumeKxArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'kxVolume',
  `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxVolume/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kxVolume' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  readonly volumeKx: string
  constructor(parameters: VolumeKxArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
    this.volumeKx = parameters.volumeKx
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace:${this.region}:${this.account}:kxEnvironment/${this.idEnvironment}/kxVolume/${this.volumeKx}` as const
  }
}
export type { VolumeKxArn }
export function volumeKxArn<Partition extends ArnPartition = 'aws'>(
  parameters: VolumeKxArnParameters<Partition>,
) {
  return new VolumeKxArn<Partition>(parameters)
}

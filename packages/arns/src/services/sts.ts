import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface RoleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly roleNameWithPath: string
}
class RoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'role',
  `arn:${string}:iam::${string}:role/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'role' as const
  readonly partition: Partition
  readonly account: string
  readonly roleNameWithPath: string
  constructor(parameters: RoleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.roleNameWithPath = parameters.roleNameWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/${this.roleNameWithPath}` as const
  }
}
export type { RoleArn }
export function roleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleArnParameters<Partition>,
) {
  return new RoleArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly userNameWithPath: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:iam::${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly account: string
  readonly userNameWithPath: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.userNameWithPath = parameters.userNameWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:user/${this.userNameWithPath}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface SelfSessionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
}
class SelfSessionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<'self-session', `arn:${string}:sts::${string}:self`> {
  readonly [ArnResourceTypeBrand] = 'self-session' as const
  readonly partition: Partition
  readonly account: string
  constructor(parameters: SelfSessionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sts::${this.account}:self` as const
  }
}
export type { SelfSessionArn }
export function selfSessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SelfSessionArnParameters<Partition>,
) {
  return new SelfSessionArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface RoleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly pathWithNameRole: string
}
class RoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'role',
  `arn:${string}:iam::${string}:role/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'role' as const
  readonly partition: string
  readonly account: string
  readonly pathWithNameRole: string
  constructor(parameters: RoleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithNameRole = parameters.pathWithNameRole
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/${this.pathWithNameRole}` as const
  }
}
export type { RoleArn }
export function roleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleArnParameters<Partition>,
) {
  return new RoleArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly pathWithNameUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:iam::${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly account: string
  readonly pathWithNameUser: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithNameUser = parameters.pathWithNameUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:user/${this.pathWithNameUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface SessionSelfArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
}
class SessionSelfArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<'self-session', `arn:${string}:sts::${string}:self`> {
  readonly [ArnResourceTypeBrand] = 'self-session' as const
  readonly partition: string
  readonly account: string
  constructor(parameters: SessionSelfArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sts::${this.account}:self` as const
  }
}
export type { SessionSelfArn }
export function sessionSelfArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionSelfArnParameters<Partition>,
) {
  return new SessionSelfArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IdentityStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly identityStoreId: string
}
class IdentityStoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Identitystore',
  `arn:${string}:identitystore::${string}:identitystore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Identitystore' as const
  readonly partition: Partition
  readonly account: string
  readonly identityStoreId: string
  constructor(parameters: IdentityStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.identityStoreId = parameters.identityStoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore::${this.account}:identitystore/${this.identityStoreId}` as const
  }
}
export type { IdentityStoreArn }
export function identityStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentityStoreArnParameters<Partition>,
) {
  return new IdentityStoreArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly userId: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'User',
  `arn:${string}:identitystore:::user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'User' as const
  readonly partition: Partition
  readonly userId: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.userId = parameters.userId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::user/${this.userId}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly groupId: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Group',
  `arn:${string}:identitystore:::group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Group' as const
  readonly partition: Partition
  readonly groupId: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.groupId = parameters.groupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::group/${this.groupId}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface GroupMembershipArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly membershipId: string
}
class GroupMembershipArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'GroupMembership',
  `arn:${string}:identitystore:::membership/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'GroupMembership' as const
  readonly partition: Partition
  readonly membershipId: string
  constructor(parameters: GroupMembershipArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.membershipId = parameters.membershipId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::membership/${this.membershipId}` as const
  }
}
export type { GroupMembershipArn }
export function groupMembershipArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupMembershipArnParameters<Partition>,
) {
  return new GroupMembershipArn<Partition>(parameters)
}

export interface AllUsersArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
}
class AllUsersArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'AllUsers',
  `arn:${string}:identitystore:::user/*`
> {
  readonly [ArnResourceTypeBrand] = 'AllUsers' as const
  readonly partition: Partition
  constructor(parameters: AllUsersArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::user/*` as const
  }
}
export type { AllUsersArn }
export function allUsersArn<Partition extends ArnPartition = 'aws'>(
  parameters: AllUsersArnParameters<Partition>,
) {
  return new AllUsersArn<Partition>(parameters)
}

export interface AllGroupsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
}
class AllGroupsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'AllGroups',
  `arn:${string}:identitystore:::group/*`
> {
  readonly [ArnResourceTypeBrand] = 'AllGroups' as const
  readonly partition: Partition
  constructor(parameters: AllGroupsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::group/*` as const
  }
}
export type { AllGroupsArn }
export function allGroupsArn<Partition extends ArnPartition = 'aws'>(
  parameters: AllGroupsArnParameters<Partition>,
) {
  return new AllGroupsArn<Partition>(parameters)
}

export interface AllGroupMembershipsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
}
class AllGroupMembershipsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AllGroupMemberships',
  `arn:${string}:identitystore:::membership/*`
> {
  readonly [ArnResourceTypeBrand] = 'AllGroupMemberships' as const
  readonly partition: Partition
  constructor(parameters: AllGroupMembershipsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::membership/*` as const
  }
}
export type { AllGroupMembershipsArn }
export function allGroupMembershipsArn<Partition extends ArnPartition = 'aws'>(
  parameters: AllGroupMembershipsArnParameters<Partition>,
) {
  return new AllGroupMembershipsArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StoreIdentityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idStoreIdentity: string
}
class StoreIdentityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Identitystore',
  `arn:${string}:identitystore::${string}:identitystore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Identitystore' as const
  readonly partition: string
  readonly account: string
  readonly idStoreIdentity: string
  constructor(parameters: StoreIdentityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idStoreIdentity = parameters.idStoreIdentity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore::${this.account}:identitystore/${this.idStoreIdentity}` as const
  }
}
export type { StoreIdentityArn }
export function storeIdentityArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreIdentityArnParameters<Partition>,
) {
  return new StoreIdentityArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'User',
  `arn:${string}:identitystore:::user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'User' as const
  readonly partition: string
  readonly idUser: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idUser = parameters.idUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::user/${this.idUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idGroup: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Group',
  `arn:${string}:identitystore:::group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Group' as const
  readonly partition: string
  readonly idGroup: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idGroup = parameters.idGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::group/${this.idGroup}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface MembershipGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idMembership: string
}
class MembershipGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'GroupMembership',
  `arn:${string}:identitystore:::membership/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'GroupMembership' as const
  readonly partition: string
  readonly idMembership: string
  constructor(parameters: MembershipGroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idMembership = parameters.idMembership
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::membership/${this.idMembership}` as const
  }
}
export type { MembershipGroupArn }
export function membershipGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: MembershipGroupArnParameters<Partition>,
) {
  return new MembershipGroupArn<Partition>(parameters)
}

export interface UsersAllArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
}
class UsersAllArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'AllUsers',
  `arn:${string}:identitystore:::user/*`
> {
  readonly [ArnResourceTypeBrand] = 'AllUsers' as const
  readonly partition: string
  constructor(parameters: UsersAllArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::user/*` as const
  }
}
export type { UsersAllArn }
export function usersAllArn<Partition extends ArnPartition = 'aws'>(
  parameters: UsersAllArnParameters<Partition>,
) {
  return new UsersAllArn<Partition>(parameters)
}

export interface GroupsAllArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
}
class GroupsAllArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'AllGroups',
  `arn:${string}:identitystore:::group/*`
> {
  readonly [ArnResourceTypeBrand] = 'AllGroups' as const
  readonly partition: string
  constructor(parameters: GroupsAllArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::group/*` as const
  }
}
export type { GroupsAllArn }
export function groupsAllArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupsAllArnParameters<Partition>,
) {
  return new GroupsAllArn<Partition>(parameters)
}

export interface MembershipsGroupAllArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
}
class MembershipsGroupAllArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AllGroupMemberships',
  `arn:${string}:identitystore:::membership/*`
> {
  readonly [ArnResourceTypeBrand] = 'AllGroupMemberships' as const
  readonly partition: string
  constructor(parameters: MembershipsGroupAllArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:identitystore:::membership/*` as const
  }
}
export type { MembershipsGroupAllArn }
export function membershipsGroupAllArn<Partition extends ArnPartition = 'aws'>(
  parameters: MembershipsGroupAllArnParameters<Partition>,
) {
  return new MembershipsGroupAllArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ShareResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class ShareResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resource-share',
  `arn:${string}:ram:${string}:${string}:resource-share/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resource-share' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: ShareResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ram:${this.region}:${this.account}:resource-share/${this.pathResource}` as const
  }
}
export type { ShareResourceArn }
export function shareResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ShareResourceArnParameters<Partition>,
) {
  return new ShareResourceArn<Partition>(parameters)
}

export interface InvitationShareResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class InvitationShareResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resource-share-invitation',
  `arn:${string}:ram:${string}:${string}:resource-share-invitation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resource-share-invitation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: InvitationShareResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ram:${this.region}:${this.account}:resource-share-invitation/${this.pathResource}` as const
  }
}
export type { InvitationShareResourceArn }
export function invitationShareResourceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: InvitationShareResourceArnParameters<Partition>) {
  return new InvitationShareResourceArn<Partition>(parameters)
}

export interface PermissionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly pathResource: string
}
class PermissionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'permission',
  `arn:${string}:ram::${string}:permission/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'permission' as const
  readonly partition: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: PermissionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ram::${this.account}:permission/${this.pathResource}` as const
  }
}
export type { PermissionArn }
export function permissionArn<Partition extends ArnPartition = 'aws'>(
  parameters: PermissionArnParameters<Partition>,
) {
  return new PermissionArn<Partition>(parameters)
}

export interface PermissionManagedCustomerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
}
class PermissionManagedCustomerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customer-managed-permission',
  `arn:${string}:ram:${string}:${string}:permission/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customer-managed-permission' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly pathResource: string
  constructor(parameters: PermissionManagedCustomerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.pathResource = parameters.pathResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ram:${this.region}:${this.account}:permission/${this.pathResource}` as const
  }
}
export type { PermissionManagedCustomerArn }
export function permissionManagedCustomerArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PermissionManagedCustomerArnParameters<Partition>) {
  return new PermissionManagedCustomerArn<Partition>(parameters)
}

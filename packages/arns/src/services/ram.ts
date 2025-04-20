import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResourceShareArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class ResourceShareArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resource-share',
  `arn:${string}:ram:${string}:${string}:resource-share/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resource-share' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: ResourceShareArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ram:${this.region}:${this.account}:resource-share/${this.resourcePath}` as const
  }
}
export type { ResourceShareArn }
export function resourceShareArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceShareArnParameters<Partition>,
) {
  return new ResourceShareArn<Partition>(parameters)
}

export interface ResourceShareInvitationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class ResourceShareInvitationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resource-share-invitation',
  `arn:${string}:ram:${string}:${string}:resource-share-invitation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resource-share-invitation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: ResourceShareInvitationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ram:${this.region}:${this.account}:resource-share-invitation/${this.resourcePath}` as const
  }
}
export type { ResourceShareInvitationArn }
export function resourceShareInvitationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ResourceShareInvitationArnParameters<Partition>) {
  return new ResourceShareInvitationArn<Partition>(parameters)
}

export interface PermissionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourcePath: string
}
class PermissionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'permission',
  `arn:${string}:ram::${string}:permission/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'permission' as const
  readonly partition: Partition
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: PermissionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ram::${this.account}:permission/${this.resourcePath}` as const
  }
}
export type { PermissionArn }
export function permissionArn<Partition extends ArnPartition = 'aws'>(
  parameters: PermissionArnParameters<Partition>,
) {
  return new PermissionArn<Partition>(parameters)
}

export interface CustomerManagedPermissionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
}
class CustomerManagedPermissionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customer-managed-permission',
  `arn:${string}:ram:${string}:${string}:permission/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customer-managed-permission' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourcePath: string
  constructor(parameters: CustomerManagedPermissionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourcePath = parameters.resourcePath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ram:${this.region}:${this.account}:permission/${this.resourcePath}` as const
  }
}
export type { CustomerManagedPermissionArn }
export function customerManagedPermissionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CustomerManagedPermissionArnParameters<Partition>) {
  return new CustomerManagedPermissionArn<Partition>(parameters)
}

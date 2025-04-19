import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AssetsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assetIdentifier: string
}
class AssetsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'assets', `arn:${string}:mediapackage-vod:${string}:${string}:assets/${string}`> {
  readonly [ArnResourceTypeBrand] = 'assets' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assetIdentifier: string
  constructor(parameters: AssetsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.assetIdentifier = parameters.assetIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage-vod:${this.region}:${this.account}:assets/${this.assetIdentifier}` as const
  }
}
export type { AssetsArn }
export function assetsArn<Partition extends ArnPartition = 'aws'>(parameters: AssetsArnParameters<Partition>) {
  return new AssetsArn<Partition>(parameters)
}

export interface PackagingConfigurationsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packagingConfigurationIdentifier: string
}
class PackagingConfigurationsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'packaging-configurations', `arn:${string}:mediapackage-vod:${string}:${string}:packaging-configurations/${string}`> {
  readonly [ArnResourceTypeBrand] = 'packaging-configurations' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packagingConfigurationIdentifier: string
  constructor(parameters: PackagingConfigurationsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.packagingConfigurationIdentifier = parameters.packagingConfigurationIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage-vod:${this.region}:${this.account}:packaging-configurations/${this.packagingConfigurationIdentifier}` as const
  }
}
export type { PackagingConfigurationsArn }
export function packagingConfigurationsArn<Partition extends ArnPartition = 'aws'>(parameters: PackagingConfigurationsArnParameters<Partition>) {
  return new PackagingConfigurationsArn<Partition>(parameters)
}

export interface PackagingGroupsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packagingGroupIdentifier: string
}
class PackagingGroupsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'packaging-groups', `arn:${string}:mediapackage-vod:${string}:${string}:packaging-groups/${string}`> {
  readonly [ArnResourceTypeBrand] = 'packaging-groups' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packagingGroupIdentifier: string
  constructor(parameters: PackagingGroupsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.packagingGroupIdentifier = parameters.packagingGroupIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage-vod:${this.region}:${this.account}:packaging-groups/${this.packagingGroupIdentifier}` as const
  }
}
export type { PackagingGroupsArn }
export function packagingGroupsArn<Partition extends ArnPartition = 'aws'>(parameters: PackagingGroupsArnParameters<Partition>) {
  return new PackagingGroupsArn<Partition>(parameters)
}
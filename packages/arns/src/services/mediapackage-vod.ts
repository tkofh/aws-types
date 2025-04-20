import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AssetsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierAsset: string
}
class AssetsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'assets',
  `arn:${string}:mediapackage-vod:${string}:${string}:assets/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assets' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierAsset: string
  constructor(parameters: AssetsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierAsset = parameters.identifierAsset
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage-vod:${this.region}:${this.account}:assets/${this.identifierAsset}` as const
  }
}
export type { AssetsArn }
export function assetsArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssetsArnParameters<Partition>,
) {
  return new AssetsArn<Partition>(parameters)
}

export interface ConfigurationsPackagingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierConfigurationPackaging: string
}
class ConfigurationsPackagingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'packaging-configurations',
  `arn:${string}:mediapackage-vod:${string}:${string}:packaging-configurations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'packaging-configurations' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierConfigurationPackaging: string
  constructor(parameters: ConfigurationsPackagingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierConfigurationPackaging =
      parameters.identifierConfigurationPackaging
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage-vod:${this.region}:${this.account}:packaging-configurations/${this.identifierConfigurationPackaging}` as const
  }
}
export type { ConfigurationsPackagingArn }
export function configurationsPackagingArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationsPackagingArnParameters<Partition>) {
  return new ConfigurationsPackagingArn<Partition>(parameters)
}

export interface GroupsPackagingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierGroupPackaging: string
}
class GroupsPackagingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'packaging-groups',
  `arn:${string}:mediapackage-vod:${string}:${string}:packaging-groups/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'packaging-groups' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierGroupPackaging: string
  constructor(parameters: GroupsPackagingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierGroupPackaging = parameters.identifierGroupPackaging
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage-vod:${this.region}:${this.account}:packaging-groups/${this.identifierGroupPackaging}` as const
  }
}
export type { GroupsPackagingArn }
export function groupsPackagingArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupsPackagingArnParameters<Partition>,
) {
  return new GroupsPackagingArn<Partition>(parameters)
}

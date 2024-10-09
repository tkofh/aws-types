export interface AssetsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  assetIdentifier: string
}
export type AssetsArn = `arn:${string}:mediapackage-vod:${string}:${string}:assets/${string}`
export function assetsArn(parameters: AssetsArnParameters): AssetsArn {
  return `arn:${parameters.partition ?? ''}:mediapackage-vod:${parameters.region}:${parameters.account}:assets/${parameters.assetIdentifier}`
}

export interface PackagingConfigurationsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  packagingConfigurationIdentifier: string
}
export type PackagingConfigurationsArn = `arn:${string}:mediapackage-vod:${string}:${string}:packaging-configurations/${string}`
export function packagingConfigurationsArn(parameters: PackagingConfigurationsArnParameters): PackagingConfigurationsArn {
  return `arn:${parameters.partition ?? ''}:mediapackage-vod:${parameters.region}:${parameters.account}:packaging-configurations/${parameters.packagingConfigurationIdentifier}`
}

export interface PackagingGroupsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  packagingGroupIdentifier: string
}
export type PackagingGroupsArn = `arn:${string}:mediapackage-vod:${string}:${string}:packaging-groups/${string}`
export function packagingGroupsArn(parameters: PackagingGroupsArnParameters): PackagingGroupsArn {
  return `arn:${parameters.partition ?? ''}:mediapackage-vod:${parameters.region}:${parameters.account}:packaging-groups/${parameters.packagingGroupIdentifier}`
}
export interface FleetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fleetName: string
}
export type FleetArn = `arn:${string}:appstream:${string}:${string}:fleet/${string}`
export function fleetArn(parameters: FleetArnParameters): FleetArn {
  return `arn:${parameters.partition ?? ''}:appstream:${parameters.region}:${parameters.account}:fleet/${parameters.fleetName}`
}

export interface ImageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  imageName: string
}
export type ImageArn = `arn:${string}:appstream:${string}:${string}:image/${string}`
export function imageArn(parameters: ImageArnParameters): ImageArn {
  return `arn:${parameters.partition ?? ''}:appstream:${parameters.region}:${parameters.account}:image/${parameters.imageName}`
}

export interface ImageBuilderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  imageBuilderName: string
}
export type ImageBuilderArn = `arn:${string}:appstream:${string}:${string}:image-builder/${string}`
export function imageBuilderArn(parameters: ImageBuilderArnParameters): ImageBuilderArn {
  return `arn:${parameters.partition ?? ''}:appstream:${parameters.region}:${parameters.account}:image-builder/${parameters.imageBuilderName}`
}

export interface StackArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stackName: string
}
export type StackArn = `arn:${string}:appstream:${string}:${string}:stack/${string}`
export function stackArn(parameters: StackArnParameters): StackArn {
  return `arn:${parameters.partition ?? ''}:appstream:${parameters.region}:${parameters.account}:stack/${parameters.stackName}`
}

export interface AppBlockArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appBlockName: string
}
export type AppBlockArn = `arn:${string}:appstream:${string}:${string}:app-block/${string}`
export function appBlockArn(parameters: AppBlockArnParameters): AppBlockArn {
  return `arn:${parameters.partition ?? ''}:appstream:${parameters.region}:${parameters.account}:app-block/${parameters.appBlockName}`
}

export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
}
export type ApplicationArn = `arn:${string}:appstream:${string}:${string}:application/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:appstream:${parameters.region}:${parameters.account}:application/${parameters.applicationName}`
}

export interface AppBlockBuilderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appBlockBuilderName: string
}
export type AppBlockBuilderArn = `arn:${string}:appstream:${string}:${string}:app-block-builder/${string}`
export function appBlockBuilderArn(parameters: AppBlockBuilderArnParameters): AppBlockBuilderArn {
  return `arn:${parameters.partition ?? ''}:appstream:${parameters.region}:${parameters.account}:app-block-builder/${parameters.appBlockBuilderName}`
}
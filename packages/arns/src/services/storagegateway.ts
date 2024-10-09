export interface DeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  gatewayId: string
  vtldevice: string
}
export type DeviceArn = `arn:${string}:storagegateway:${string}:${string}:gateway/${string}/device/${string}`
export function deviceArn(parameters: DeviceArnParameters): DeviceArn {
  return `arn:${parameters.partition ?? ''}:storagegateway:${parameters.region}:${parameters.account}:gateway/${parameters.gatewayId}/device/${parameters.vtldevice}`
}

export interface FsAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fsaId: string
}
export type FsAssociationArn = `arn:${string}:storagegateway:${string}:${string}:fs-association/${string}`
export function fsAssociationArn(parameters: FsAssociationArnParameters): FsAssociationArn {
  return `arn:${parameters.partition ?? ''}:storagegateway:${parameters.region}:${parameters.account}:fs-association/${parameters.fsaId}`
}

export interface GatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  gatewayId: string
}
export type GatewayArn = `arn:${string}:storagegateway:${string}:${string}:gateway/${string}`
export function gatewayArn(parameters: GatewayArnParameters): GatewayArn {
  return `arn:${parameters.partition ?? ''}:storagegateway:${parameters.region}:${parameters.account}:gateway/${parameters.gatewayId}`
}

export interface ShareArnParameters {
  partition?: string | undefined
  region: string
  account: string
  shareId: string
}
export type ShareArn = `arn:${string}:storagegateway:${string}:${string}:share/${string}`
export function shareArn(parameters: ShareArnParameters): ShareArn {
  return `arn:${parameters.partition ?? ''}:storagegateway:${parameters.region}:${parameters.account}:share/${parameters.shareId}`
}

export interface TapeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tapeBarcode: string
}
export type TapeArn = `arn:${string}:storagegateway:${string}:${string}:tape/${string}`
export function tapeArn(parameters: TapeArnParameters): TapeArn {
  return `arn:${parameters.partition ?? ''}:storagegateway:${parameters.region}:${parameters.account}:tape/${parameters.tapeBarcode}`
}

export interface TapepoolArnParameters {
  partition?: string | undefined
  region: string
  account: string
  poolId: string
}
export type TapepoolArn = `arn:${string}:storagegateway:${string}:${string}:tapepool/${string}`
export function tapepoolArn(parameters: TapepoolArnParameters): TapepoolArn {
  return `arn:${parameters.partition ?? ''}:storagegateway:${parameters.region}:${parameters.account}:tapepool/${parameters.poolId}`
}

export interface TargetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  gatewayId: string
  iscsiTarget: string
}
export type TargetArn = `arn:${string}:storagegateway:${string}:${string}:gateway/${string}/target/${string}`
export function targetArn(parameters: TargetArnParameters): TargetArn {
  return `arn:${parameters.partition ?? ''}:storagegateway:${parameters.region}:${parameters.account}:gateway/${parameters.gatewayId}/target/${parameters.iscsiTarget}`
}

export interface VolumeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  gatewayId: string
  volumeId: string
}
export type VolumeArn = `arn:${string}:storagegateway:${string}:${string}:gateway/${string}/volume/${string}`
export function volumeArn(parameters: VolumeArnParameters): VolumeArn {
  return `arn:${parameters.partition ?? ''}:storagegateway:${parameters.region}:${parameters.account}:gateway/${parameters.gatewayId}/volume/${parameters.volumeId}`
}
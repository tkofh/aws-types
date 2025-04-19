import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly vtldevice: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:storagegateway:${string}:${string}:gateway/${string}/device/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly vtldevice: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.gatewayId = parameters.gatewayId
    this.vtldevice = parameters.vtldevice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:gateway/${this.gatewayId}/device/${this.vtldevice}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface FsAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fsaId: string
}
class FsAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'fs-association',
  `arn:${string}:storagegateway:${string}:${string}:fs-association/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fs-association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fsaId: string
  constructor(parameters: FsAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fsaId = parameters.fsaId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:fs-association/${this.fsaId}` as const
  }
}
export type { FsAssociationArn }
export function fsAssociationArn<Partition extends ArnPartition = 'aws'>(
  parameters: FsAssociationArnParameters<Partition>,
) {
  return new FsAssociationArn<Partition>(parameters)
}

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'gateway',
  `arn:${string}:storagegateway:${string}:${string}:gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.gatewayId = parameters.gatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:gateway/${this.gatewayId}` as const
  }
}
export type { GatewayArn }
export function gatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayArnParameters<Partition>,
) {
  return new GatewayArn<Partition>(parameters)
}

export interface ShareArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly shareId: string
}
class ShareArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'share',
  `arn:${string}:storagegateway:${string}:${string}:share/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'share' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly shareId: string
  constructor(parameters: ShareArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.shareId = parameters.shareId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:share/${this.shareId}` as const
  }
}
export type { ShareArn }
export function shareArn<Partition extends ArnPartition = 'aws'>(
  parameters: ShareArnParameters<Partition>,
) {
  return new ShareArn<Partition>(parameters)
}

export interface TapeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tapeBarcode: string
}
class TapeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'tape',
  `arn:${string}:storagegateway:${string}:${string}:tape/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tape' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tapeBarcode: string
  constructor(parameters: TapeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tapeBarcode = parameters.tapeBarcode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:tape/${this.tapeBarcode}` as const
  }
}
export type { TapeArn }
export function tapeArn<Partition extends ArnPartition = 'aws'>(
  parameters: TapeArnParameters<Partition>,
) {
  return new TapeArn<Partition>(parameters)
}

export interface TapepoolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly poolId: string
}
class TapepoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'tapepool',
  `arn:${string}:storagegateway:${string}:${string}:tapepool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tapepool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly poolId: string
  constructor(parameters: TapepoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.poolId = parameters.poolId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:tapepool/${this.poolId}` as const
  }
}
export type { TapepoolArn }
export function tapepoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: TapepoolArnParameters<Partition>,
) {
  return new TapepoolArn<Partition>(parameters)
}

export interface TargetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly iscsiTarget: string
}
class TargetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'target',
  `arn:${string}:storagegateway:${string}:${string}:gateway/${string}/target/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'target' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly iscsiTarget: string
  constructor(parameters: TargetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.gatewayId = parameters.gatewayId
    this.iscsiTarget = parameters.iscsiTarget
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:gateway/${this.gatewayId}/target/${this.iscsiTarget}` as const
  }
}
export type { TargetArn }
export function targetArn<Partition extends ArnPartition = 'aws'>(
  parameters: TargetArnParameters<Partition>,
) {
  return new TargetArn<Partition>(parameters)
}

export interface VolumeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly volumeId: string
}
class VolumeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'volume',
  `arn:${string}:storagegateway:${string}:${string}:gateway/${string}/volume/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'volume' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  readonly volumeId: string
  constructor(parameters: VolumeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.gatewayId = parameters.gatewayId
    this.volumeId = parameters.volumeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:gateway/${this.gatewayId}/volume/${this.volumeId}` as const
  }
}
export type { VolumeArn }
export function volumeArn<Partition extends ArnPartition = 'aws'>(
  parameters: VolumeArnParameters<Partition>,
) {
  return new VolumeArn<Partition>(parameters)
}

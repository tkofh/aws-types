import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly deviceVtl: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:storagegateway:${string}:${string}:gateway/${string}/device/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly deviceVtl: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGateway = parameters.idGateway
    this.deviceVtl = parameters.deviceVtl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:gateway/${this.idGateway}/device/${this.deviceVtl}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface AssociationFsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFsa: string
}
class AssociationFsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'fs-association',
  `arn:${string}:storagegateway:${string}:${string}:fs-association/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fs-association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFsa: string
  constructor(parameters: AssociationFsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFsa = parameters.idFsa
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:fs-association/${this.idFsa}` as const
  }
}
export type { AssociationFsArn }
export function associationFsArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationFsArnParameters<Partition>,
) {
  return new AssociationFsArn<Partition>(parameters)
}

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'gateway',
  `arn:${string}:storagegateway:${string}:${string}:gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGateway = parameters.idGateway
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:gateway/${this.idGateway}` as const
  }
}
export type { GatewayArn }
export function gatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayArnParameters<Partition>,
) {
  return new GatewayArn<Partition>(parameters)
}

export interface ShareArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idShare: string
}
class ShareArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'share',
  `arn:${string}:storagegateway:${string}:${string}:share/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'share' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idShare: string
  constructor(parameters: ShareArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idShare = parameters.idShare
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:share/${this.idShare}` as const
  }
}
export type { ShareArn }
export function shareArn<Partition extends ArnPartition = 'aws'>(
  parameters: ShareArnParameters<Partition>,
) {
  return new ShareArn<Partition>(parameters)
}

export interface TapeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly barcodeTape: string
}
class TapeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'tape',
  `arn:${string}:storagegateway:${string}:${string}:tape/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tape' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly barcodeTape: string
  constructor(parameters: TapeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.barcodeTape = parameters.barcodeTape
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:tape/${this.barcodeTape}` as const
  }
}
export type { TapeArn }
export function tapeArn<Partition extends ArnPartition = 'aws'>(
  parameters: TapeArnParameters<Partition>,
) {
  return new TapeArn<Partition>(parameters)
}

export interface PoolTapeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPool: string
}
class PoolTapeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'tapepool',
  `arn:${string}:storagegateway:${string}:${string}:tapepool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tapepool' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPool: string
  constructor(parameters: PoolTapeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPool = parameters.idPool
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:tapepool/${this.idPool}` as const
  }
}
export type { PoolTapeArn }
export function poolTapeArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolTapeArnParameters<Partition>,
) {
  return new PoolTapeArn<Partition>(parameters)
}

export interface TargetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly targetIscsi: string
}
class TargetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'target',
  `arn:${string}:storagegateway:${string}:${string}:gateway/${string}/target/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'target' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly targetIscsi: string
  constructor(parameters: TargetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGateway = parameters.idGateway
    this.targetIscsi = parameters.targetIscsi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:gateway/${this.idGateway}/target/${this.targetIscsi}` as const
  }
}
export type { TargetArn }
export function targetArn<Partition extends ArnPartition = 'aws'>(
  parameters: TargetArnParameters<Partition>,
) {
  return new TargetArn<Partition>(parameters)
}

export interface VolumeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly idVolume: string
}
class VolumeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'volume',
  `arn:${string}:storagegateway:${string}:${string}:gateway/${string}/volume/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'volume' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  readonly idVolume: string
  constructor(parameters: VolumeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGateway = parameters.idGateway
    this.idVolume = parameters.idVolume
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:storagegateway:${this.region}:${this.account}:gateway/${this.idGateway}/volume/${this.idVolume}` as const
  }
}
export type { VolumeArn }
export function volumeArn<Partition extends ArnPartition = 'aws'>(
  parameters: VolumeArnParameters<Partition>,
) {
  return new VolumeArn<Partition>(parameters)
}

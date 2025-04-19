import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface CampaignArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly campaignName: string
}
class CampaignArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'campaign', `arn:${string}:iotfleetwise:${string}:${string}:campaign/${string}`> {
  readonly [ArnResourceTypeBrand] = 'campaign' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly campaignName: string
  constructor(parameters: CampaignArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.campaignName = parameters.campaignName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:campaign/${this.campaignName}` as const
  }
}
export type { CampaignArn }
export function campaignArn<Partition extends ArnPartition = 'aws'>(parameters: CampaignArnParameters<Partition>) {
  return new CampaignArn<Partition>(parameters)
}

export interface DecodermanifestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class DecodermanifestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'decodermanifest', `arn:${string}:iotfleetwise:${string}:${string}:decoder-manifest/${string}`> {
  readonly [ArnResourceTypeBrand] = 'decodermanifest' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: DecodermanifestArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:decoder-manifest/${this.name}` as const
  }
}
export type { DecodermanifestArn }
export function decodermanifestArn<Partition extends ArnPartition = 'aws'>(parameters: DecodermanifestArnParameters<Partition>) {
  return new DecodermanifestArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetId: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'fleet', `arn:${string}:iotfleetwise:${string}:${string}:fleet/${string}`> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetId: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fleetId = parameters.fleetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:fleet/${this.fleetId}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(parameters: FleetArnParameters<Partition>) {
  return new FleetArn<Partition>(parameters)
}

export interface ModelmanifestArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class ModelmanifestArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'modelmanifest', `arn:${string}:iotfleetwise:${string}:${string}:model-manifest/${string}`> {
  readonly [ArnResourceTypeBrand] = 'modelmanifest' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: ModelmanifestArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:model-manifest/${this.name}` as const
  }
}
export type { ModelmanifestArn }
export function modelmanifestArn<Partition extends ArnPartition = 'aws'>(parameters: ModelmanifestArnParameters<Partition>) {
  return new ModelmanifestArn<Partition>(parameters)
}

export interface SignalcatalogArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class SignalcatalogArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'signalcatalog', `arn:${string}:iotfleetwise:${string}:${string}:signal-catalog/${string}`> {
  readonly [ArnResourceTypeBrand] = 'signalcatalog' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: SignalcatalogArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:signal-catalog/${this.name}` as const
  }
}
export type { SignalcatalogArn }
export function signalcatalogArn<Partition extends ArnPartition = 'aws'>(parameters: SignalcatalogArnParameters<Partition>) {
  return new SignalcatalogArn<Partition>(parameters)
}

export interface VehicleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vehicleId: string
}
class VehicleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'vehicle', `arn:${string}:iotfleetwise:${string}:${string}:vehicle/${string}`> {
  readonly [ArnResourceTypeBrand] = 'vehicle' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vehicleId: string
  constructor(parameters: VehicleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vehicleId = parameters.vehicleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:vehicle/${this.vehicleId}` as const
  }
}
export type { VehicleArn }
export function vehicleArn<Partition extends ArnPartition = 'aws'>(parameters: VehicleArnParameters<Partition>) {
  return new VehicleArn<Partition>(parameters)
}
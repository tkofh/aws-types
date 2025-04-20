import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CampaignArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCampaign: string
}
class CampaignArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'campaign',
  `arn:${string}:iotfleetwise:${string}:${string}:campaign/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'campaign' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCampaign: string
  constructor(parameters: CampaignArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCampaign = parameters.nameCampaign
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:campaign/${this.nameCampaign}` as const
  }
}
export type { CampaignArn }
export function campaignArn<Partition extends ArnPartition = 'aws'>(
  parameters: CampaignArnParameters<Partition>,
) {
  return new CampaignArn<Partition>(parameters)
}

export interface ManifestDecoderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class ManifestDecoderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'decodermanifest',
  `arn:${string}:iotfleetwise:${string}:${string}:decoder-manifest/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'decodermanifest' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: ManifestDecoderArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:decoder-manifest/${this.name}` as const
  }
}
export type { ManifestDecoderArn }
export function manifestDecoderArn<Partition extends ArnPartition = 'aws'>(
  parameters: ManifestDecoderArnParameters<Partition>,
) {
  return new ManifestDecoderArn<Partition>(parameters)
}

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFleet: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fleet',
  `arn:${string}:iotfleetwise:${string}:${string}:fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFleet: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFleet = parameters.idFleet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:fleet/${this.idFleet}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetArnParameters<Partition>,
) {
  return new FleetArn<Partition>(parameters)
}

export interface ManifestModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class ManifestModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'modelmanifest',
  `arn:${string}:iotfleetwise:${string}:${string}:model-manifest/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'modelmanifest' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: ManifestModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:model-manifest/${this.name}` as const
  }
}
export type { ManifestModelArn }
export function manifestModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ManifestModelArnParameters<Partition>,
) {
  return new ManifestModelArn<Partition>(parameters)
}

export interface CatalogSignalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class CatalogSignalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'signalcatalog',
  `arn:${string}:iotfleetwise:${string}:${string}:signal-catalog/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'signalcatalog' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: CatalogSignalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:signal-catalog/${this.name}` as const
  }
}
export type { CatalogSignalArn }
export function catalogSignalArn<Partition extends ArnPartition = 'aws'>(
  parameters: CatalogSignalArnParameters<Partition>,
) {
  return new CatalogSignalArn<Partition>(parameters)
}

export interface VehicleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVehicle: string
}
class VehicleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vehicle',
  `arn:${string}:iotfleetwise:${string}:${string}:vehicle/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vehicle' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVehicle: string
  constructor(parameters: VehicleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idVehicle = parameters.idVehicle
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotfleetwise:${this.region}:${this.account}:vehicle/${this.idVehicle}` as const
  }
}
export type { VehicleArn }
export function vehicleArn<Partition extends ArnPartition = 'aws'>(
  parameters: VehicleArnParameters<Partition>,
) {
  return new VehicleArn<Partition>(parameters)
}

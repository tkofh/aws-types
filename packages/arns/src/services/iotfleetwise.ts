export interface CampaignArnParameters {
  partition?: string | undefined
  region: string
  account: string
  campaignName: string
}
export type CampaignArn = `arn:${string}:iotfleetwise:${string}:${string}:campaign/${string}`
export function campaignArn(parameters: CampaignArnParameters): CampaignArn {
  return `arn:${parameters.partition ?? ''}:iotfleetwise:${parameters.region}:${parameters.account}:campaign/${parameters.campaignName}`
}

export interface DecodermanifestArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type DecodermanifestArn = `arn:${string}:iotfleetwise:${string}:${string}:decoder-manifest/${string}`
export function decodermanifestArn(parameters: DecodermanifestArnParameters): DecodermanifestArn {
  return `arn:${parameters.partition ?? ''}:iotfleetwise:${parameters.region}:${parameters.account}:decoder-manifest/${parameters.name}`
}

export interface FleetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fleetId: string
}
export type FleetArn = `arn:${string}:iotfleetwise:${string}:${string}:fleet/${string}`
export function fleetArn(parameters: FleetArnParameters): FleetArn {
  return `arn:${parameters.partition ?? ''}:iotfleetwise:${parameters.region}:${parameters.account}:fleet/${parameters.fleetId}`
}

export interface ModelmanifestArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type ModelmanifestArn = `arn:${string}:iotfleetwise:${string}:${string}:model-manifest/${string}`
export function modelmanifestArn(parameters: ModelmanifestArnParameters): ModelmanifestArn {
  return `arn:${parameters.partition ?? ''}:iotfleetwise:${parameters.region}:${parameters.account}:model-manifest/${parameters.name}`
}

export interface SignalcatalogArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type SignalcatalogArn = `arn:${string}:iotfleetwise:${string}:${string}:signal-catalog/${string}`
export function signalcatalogArn(parameters: SignalcatalogArnParameters): SignalcatalogArn {
  return `arn:${parameters.partition ?? ''}:iotfleetwise:${parameters.region}:${parameters.account}:signal-catalog/${parameters.name}`
}

export interface VehicleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vehicleId: string
}
export type VehicleArn = `arn:${string}:iotfleetwise:${string}:${string}:vehicle/${string}`
export function vehicleArn(parameters: VehicleArnParameters): VehicleArn {
  return `arn:${parameters.partition ?? ''}:iotfleetwise:${parameters.region}:${parameters.account}:vehicle/${parameters.vehicleId}`
}
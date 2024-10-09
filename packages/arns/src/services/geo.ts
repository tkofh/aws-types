export interface ApiKeyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  keyName: string
}
export type ApiKeyArn = `arn:${string}:geo:${string}:${string}:api-key/${string}`
export function apiKeyArn(parameters: ApiKeyArnParameters): ApiKeyArn {
  return `arn:${parameters.partition ?? ''}:geo:${parameters.region}:${parameters.account}:api-key/${parameters.keyName}`
}

export interface GeofenceCollectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  geofenceCollectionName: string
}
export type GeofenceCollectionArn = `arn:${string}:geo:${string}:${string}:geofence-collection/${string}`
export function geofenceCollectionArn(parameters: GeofenceCollectionArnParameters): GeofenceCollectionArn {
  return `arn:${parameters.partition ?? ''}:geo:${parameters.region}:${parameters.account}:geofence-collection/${parameters.geofenceCollectionName}`
}

export interface MapArnParameters {
  partition?: string | undefined
  region: string
  account: string
  mapName: string
}
export type MapArn = `arn:${string}:geo:${string}:${string}:map/${string}`
export function mapArn(parameters: MapArnParameters): MapArn {
  return `arn:${parameters.partition ?? ''}:geo:${parameters.region}:${parameters.account}:map/${parameters.mapName}`
}

export interface PlaceIndexArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexName: string
}
export type PlaceIndexArn = `arn:${string}:geo:${string}:${string}:place-index/${string}`
export function placeIndexArn(parameters: PlaceIndexArnParameters): PlaceIndexArn {
  return `arn:${parameters.partition ?? ''}:geo:${parameters.region}:${parameters.account}:place-index/${parameters.indexName}`
}

export interface RouteCalculatorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  calculatorName: string
}
export type RouteCalculatorArn = `arn:${string}:geo:${string}:${string}:route-calculator/${string}`
export function routeCalculatorArn(parameters: RouteCalculatorArnParameters): RouteCalculatorArn {
  return `arn:${parameters.partition ?? ''}:geo:${parameters.region}:${parameters.account}:route-calculator/${parameters.calculatorName}`
}

export interface TrackerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trackerName: string
}
export type TrackerArn = `arn:${string}:geo:${string}:${string}:tracker/${string}`
export function trackerArn(parameters: TrackerArnParameters): TrackerArn {
  return `arn:${parameters.partition ?? ''}:geo:${parameters.region}:${parameters.account}:tracker/${parameters.trackerName}`
}
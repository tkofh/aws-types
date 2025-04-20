import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApiKeyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyName: string
}
class ApiKeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'api-key',
  `arn:${string}:geo:${string}:${string}:api-key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'api-key' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyName: string
  constructor(parameters: ApiKeyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.keyName = parameters.keyName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:api-key/${this.keyName}` as const
  }
}
export type { ApiKeyArn }
export function apiKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiKeyArnParameters<Partition>,
) {
  return new ApiKeyArn<Partition>(parameters)
}

export interface GeofenceCollectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly geofenceCollectionName: string
}
class GeofenceCollectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'geofence-collection',
  `arn:${string}:geo:${string}:${string}:geofence-collection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'geofence-collection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly geofenceCollectionName: string
  constructor(parameters: GeofenceCollectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.geofenceCollectionName = parameters.geofenceCollectionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:geofence-collection/${this.geofenceCollectionName}` as const
  }
}
export type { GeofenceCollectionArn }
export function geofenceCollectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: GeofenceCollectionArnParameters<Partition>,
) {
  return new GeofenceCollectionArn<Partition>(parameters)
}

export interface MapArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mapName: string
}
class MapArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'map',
  `arn:${string}:geo:${string}:${string}:map/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'map' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mapName: string
  constructor(parameters: MapArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.mapName = parameters.mapName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:map/${this.mapName}` as const
  }
}
export type { MapArn }
export function mapArn<Partition extends ArnPartition = 'aws'>(
  parameters: MapArnParameters<Partition>,
) {
  return new MapArn<Partition>(parameters)
}

export interface PlaceIndexArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexName: string
}
class PlaceIndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'place-index',
  `arn:${string}:geo:${string}:${string}:place-index/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'place-index' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexName: string
  constructor(parameters: PlaceIndexArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexName = parameters.indexName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:place-index/${this.indexName}` as const
  }
}
export type { PlaceIndexArn }
export function placeIndexArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlaceIndexArnParameters<Partition>,
) {
  return new PlaceIndexArn<Partition>(parameters)
}

export interface RouteCalculatorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly calculatorName: string
}
class RouteCalculatorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'route-calculator',
  `arn:${string}:geo:${string}:${string}:route-calculator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'route-calculator' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly calculatorName: string
  constructor(parameters: RouteCalculatorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.calculatorName = parameters.calculatorName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:route-calculator/${this.calculatorName}` as const
  }
}
export type { RouteCalculatorArn }
export function routeCalculatorArn<Partition extends ArnPartition = 'aws'>(
  parameters: RouteCalculatorArnParameters<Partition>,
) {
  return new RouteCalculatorArn<Partition>(parameters)
}

export interface TrackerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trackerName: string
}
class TrackerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'tracker',
  `arn:${string}:geo:${string}:${string}:tracker/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tracker' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trackerName: string
  constructor(parameters: TrackerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trackerName = parameters.trackerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:tracker/${this.trackerName}` as const
  }
}
export type { TrackerArn }
export function trackerArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrackerArnParameters<Partition>,
) {
  return new TrackerArn<Partition>(parameters)
}

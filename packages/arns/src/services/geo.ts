import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface KeyApiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameKey: string
}
class KeyApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'api-key',
  `arn:${string}:geo:${string}:${string}:api-key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'api-key' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameKey: string
  constructor(parameters: KeyApiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameKey = parameters.nameKey
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:api-key/${this.nameKey}` as const
  }
}
export type { KeyApiArn }
export function keyApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyApiArnParameters<Partition>,
) {
  return new KeyApiArn<Partition>(parameters)
}

export interface CollectionGeofenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCollectionGeofence: string
}
class CollectionGeofenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'geofence-collection',
  `arn:${string}:geo:${string}:${string}:geofence-collection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'geofence-collection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCollectionGeofence: string
  constructor(parameters: CollectionGeofenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCollectionGeofence = parameters.nameCollectionGeofence
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:geofence-collection/${this.nameCollectionGeofence}` as const
  }
}
export type { CollectionGeofenceArn }
export function collectionGeofenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: CollectionGeofenceArnParameters<Partition>,
) {
  return new CollectionGeofenceArn<Partition>(parameters)
}

export interface MapArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMap: string
}
class MapArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'map',
  `arn:${string}:geo:${string}:${string}:map/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'map' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMap: string
  constructor(parameters: MapArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMap = parameters.nameMap
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:map/${this.nameMap}` as const
  }
}
export type { MapArn }
export function mapArn<Partition extends ArnPartition = 'aws'>(
  parameters: MapArnParameters<Partition>,
) {
  return new MapArn<Partition>(parameters)
}

export interface IndexPlaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIndex: string
}
class IndexPlaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'place-index',
  `arn:${string}:geo:${string}:${string}:place-index/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'place-index' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIndex: string
  constructor(parameters: IndexPlaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameIndex = parameters.nameIndex
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:place-index/${this.nameIndex}` as const
  }
}
export type { IndexPlaceArn }
export function indexPlaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: IndexPlaceArnParameters<Partition>,
) {
  return new IndexPlaceArn<Partition>(parameters)
}

export interface CalculatorRouteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCalculator: string
}
class CalculatorRouteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'route-calculator',
  `arn:${string}:geo:${string}:${string}:route-calculator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'route-calculator' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCalculator: string
  constructor(parameters: CalculatorRouteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCalculator = parameters.nameCalculator
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:route-calculator/${this.nameCalculator}` as const
  }
}
export type { CalculatorRouteArn }
export function calculatorRouteArn<Partition extends ArnPartition = 'aws'>(
  parameters: CalculatorRouteArnParameters<Partition>,
) {
  return new CalculatorRouteArn<Partition>(parameters)
}

export interface TrackerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTracker: string
}
class TrackerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'tracker',
  `arn:${string}:geo:${string}:${string}:tracker/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tracker' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTracker: string
  constructor(parameters: TrackerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTracker = parameters.nameTracker
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:geo:${this.region}:${this.account}:tracker/${this.nameTracker}` as const
  }
}
export type { TrackerArn }
export function trackerArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrackerArnParameters<Partition>,
) {
  return new TrackerArn<Partition>(parameters)
}

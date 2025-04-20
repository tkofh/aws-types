import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TrailArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trailName: string
}
class TrailArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'trail',
  `arn:${string}:cloudtrail:${string}:${string}:trail/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trail' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trailName: string
  constructor(parameters: TrailArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trailName = parameters.trailName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudtrail:${this.region}:${this.account}:trail/${this.trailName}` as const
  }
}
export type { TrailArn }
export function trailArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrailArnParameters<Partition>,
) {
  return new TrailArn<Partition>(parameters)
}

export interface EventDataStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventDatastoreId: string
}
class EventDataStoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventdatastore',
  `arn:${string}:cloudtrail:${string}:${string}:eventdatastore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventdatastore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventDatastoreId: string
  constructor(parameters: EventDataStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventDatastoreId = parameters.eventDatastoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudtrail:${this.region}:${this.account}:eventdatastore/${this.eventDatastoreId}` as const
  }
}
export type { EventDataStoreArn }
export function eventDataStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventDataStoreArnParameters<Partition>,
) {
  return new EventDataStoreArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelId: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:cloudtrail:${string}:${string}:channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelId: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelId = parameters.channelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudtrail:${this.region}:${this.account}:channel/${this.channelId}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

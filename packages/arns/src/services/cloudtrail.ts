import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TrailArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTrail: string
}
class TrailArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'trail',
  `arn:${string}:cloudtrail:${string}:${string}:trail/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trail' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTrail: string
  constructor(parameters: TrailArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTrail = parameters.nameTrail
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudtrail:${this.region}:${this.account}:trail/${this.nameTrail}` as const
  }
}
export type { TrailArn }
export function trailArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrailArnParameters<Partition>,
) {
  return new TrailArn<Partition>(parameters)
}

export interface StoreDataEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDatastoreEvent: string
}
class StoreDataEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventdatastore',
  `arn:${string}:cloudtrail:${string}:${string}:eventdatastore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventdatastore' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDatastoreEvent: string
  constructor(parameters: StoreDataEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDatastoreEvent = parameters.idDatastoreEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudtrail:${this.region}:${this.account}:eventdatastore/${this.idDatastoreEvent}` as const
  }
}
export type { StoreDataEventArn }
export function storeDataEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreDataEventArnParameters<Partition>,
) {
  return new StoreDataEventArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idChannel: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:cloudtrail:${string}:${string}:channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idChannel: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idChannel = parameters.idChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudtrail:${this.region}:${this.account}:channel/${this.idChannel}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

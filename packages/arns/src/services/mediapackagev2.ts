import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChannelGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelGroupName: string
}
class ChannelGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ChannelGroup',
  `arn:${string}:mediapackagev2:${string}:${string}:channelGroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ChannelGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelGroupName: string
  constructor(parameters: ChannelGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelGroupName = parameters.channelGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackagev2:${this.region}:${this.account}:channelGroup/${this.channelGroupName}` as const
  }
}
export type { ChannelGroupArn }
export function channelGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelGroupArnParameters<Partition>,
) {
  return new ChannelGroupArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelGroupName: string
  readonly channelName: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Channel',
  `arn:${string}:mediapackagev2:${string}:${string}:channelGroup/${string}/channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelGroupName: string
  readonly channelName: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelGroupName = parameters.channelGroupName
    this.channelName = parameters.channelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackagev2:${this.region}:${this.account}:channelGroup/${this.channelGroupName}/channel/${this.channelName}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface OriginEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelGroupName: string
  readonly channelName: string
  readonly originEndpointName: string
}
class OriginEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'OriginEndpoint',
  `arn:${string}:mediapackagev2:${string}:${string}:channelGroup/${string}/channel/${string}/originEndpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'OriginEndpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelGroupName: string
  readonly channelName: string
  readonly originEndpointName: string
  constructor(parameters: OriginEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelGroupName = parameters.channelGroupName
    this.channelName = parameters.channelName
    this.originEndpointName = parameters.originEndpointName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackagev2:${this.region}:${this.account}:channelGroup/${this.channelGroupName}/channel/${this.channelName}/originEndpoint/${this.originEndpointName}` as const
  }
}
export type { OriginEndpointArn }
export function originEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: OriginEndpointArnParameters<Partition>,
) {
  return new OriginEndpointArn<Partition>(parameters)
}

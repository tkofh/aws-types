import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GroupChannelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupChannel: string
}
class GroupChannelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ChannelGroup',
  `arn:${string}:mediapackagev2:${string}:${string}:channelGroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ChannelGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupChannel: string
  constructor(parameters: GroupChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupChannel = parameters.nameGroupChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackagev2:${this.region}:${this.account}:channelGroup/${this.nameGroupChannel}` as const
  }
}
export type { GroupChannelArn }
export function groupChannelArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupChannelArnParameters<Partition>,
) {
  return new GroupChannelArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupChannel: string
  readonly nameChannel: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Channel',
  `arn:${string}:mediapackagev2:${string}:${string}:channelGroup/${string}/channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Channel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupChannel: string
  readonly nameChannel: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupChannel = parameters.nameGroupChannel
    this.nameChannel = parameters.nameChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackagev2:${this.region}:${this.account}:channelGroup/${this.nameGroupChannel}/channel/${this.nameChannel}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface EndpointOriginArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupChannel: string
  readonly nameChannel: string
  readonly nameEndpointOrigin: string
}
class EndpointOriginArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'OriginEndpoint',
  `arn:${string}:mediapackagev2:${string}:${string}:channelGroup/${string}/channel/${string}/originEndpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'OriginEndpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupChannel: string
  readonly nameChannel: string
  readonly nameEndpointOrigin: string
  constructor(parameters: EndpointOriginArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupChannel = parameters.nameGroupChannel
    this.nameChannel = parameters.nameChannel
    this.nameEndpointOrigin = parameters.nameEndpointOrigin
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackagev2:${this.region}:${this.account}:channelGroup/${this.nameGroupChannel}/channel/${this.nameChannel}/originEndpoint/${this.nameEndpointOrigin}` as const
  }
}
export type { EndpointOriginArn }
export function endpointOriginArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointOriginArnParameters<Partition>,
) {
  return new EndpointOriginArn<Partition>(parameters)
}

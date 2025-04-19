import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamName: string
  readonly creationTime: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'stream', `arn:${string}:kinesisvideo:${string}:${string}:stream/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'stream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamName: string
  readonly creationTime: string
  constructor(parameters: StreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.streamName = parameters.streamName
    this.creationTime = parameters.creationTime
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kinesisvideo:${this.region}:${this.account}:stream/${this.streamName}/${this.creationTime}` as const
  }
}
export type { StreamArn }
export function streamArn<Partition extends ArnPartition = 'aws'>(parameters: StreamArnParameters<Partition>) {
  return new StreamArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelName: string
  readonly creationTime: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'channel', `arn:${string}:kinesisvideo:${string}:${string}:channel/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelName: string
  readonly creationTime: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelName = parameters.channelName
    this.creationTime = parameters.creationTime
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kinesisvideo:${this.region}:${this.account}:channel/${this.channelName}/${this.creationTime}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(parameters: ChannelArnParameters<Partition>) {
  return new ChannelArn<Partition>(parameters)
}
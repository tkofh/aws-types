import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStream: string
  readonly timeCreation: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stream',
  `arn:${string}:kinesisvideo:${string}:${string}:stream/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stream' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStream: string
  readonly timeCreation: string
  constructor(parameters: StreamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameStream = parameters.nameStream
    this.timeCreation = parameters.timeCreation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kinesisvideo:${this.region}:${this.account}:stream/${this.nameStream}/${this.timeCreation}` as const
  }
}
export type { StreamArn }
export function streamArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamArnParameters<Partition>,
) {
  return new StreamArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameChannel: string
  readonly timeCreation: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:kinesisvideo:${string}:${string}:channel/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameChannel: string
  readonly timeCreation: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameChannel = parameters.nameChannel
    this.timeCreation = parameters.timeCreation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kinesisvideo:${this.region}:${this.account}:channel/${this.nameChannel}/${this.timeCreation}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelId: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'channel', `arn:${string}:cloudtrail:${string}:${string}:channel/${string}`> {
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
export function channelArn<Partition extends ArnPartition = 'aws'>(parameters: ChannelArnParameters<Partition>) {
  return new ChannelArn<Partition>(parameters)
}
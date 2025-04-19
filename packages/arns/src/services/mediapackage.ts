import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ChannelsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelIdentifier: string
}
class ChannelsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'channels', `arn:${string}:mediapackage:${string}:${string}:channels/${string}`> {
  readonly [ArnResourceTypeBrand] = 'channels' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelIdentifier: string
  constructor(parameters: ChannelsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelIdentifier = parameters.channelIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage:${this.region}:${this.account}:channels/${this.channelIdentifier}` as const
  }
}
export type { ChannelsArn }
export function channelsArn<Partition extends ArnPartition = 'aws'>(parameters: ChannelsArnParameters<Partition>) {
  return new ChannelsArn<Partition>(parameters)
}

export interface OriginEndpointsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly originEndpointIdentifier: string
}
class OriginEndpointsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'origin_endpoints', `arn:${string}:mediapackage:${string}:${string}:origin_endpoints/${string}`> {
  readonly [ArnResourceTypeBrand] = 'origin_endpoints' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly originEndpointIdentifier: string
  constructor(parameters: OriginEndpointsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.originEndpointIdentifier = parameters.originEndpointIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage:${this.region}:${this.account}:origin_endpoints/${this.originEndpointIdentifier}` as const
  }
}
export type { OriginEndpointsArn }
export function originEndpointsArn<Partition extends ArnPartition = 'aws'>(parameters: OriginEndpointsArnParameters<Partition>) {
  return new OriginEndpointsArn<Partition>(parameters)
}

export interface HarvestJobsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly harvestJobIdentifier: string
}
class HarvestJobsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'harvest_jobs', `arn:${string}:mediapackage:${string}:${string}:harvest_jobs/${string}`> {
  readonly [ArnResourceTypeBrand] = 'harvest_jobs' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly harvestJobIdentifier: string
  constructor(parameters: HarvestJobsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.harvestJobIdentifier = parameters.harvestJobIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage:${this.region}:${this.account}:harvest_jobs/${this.harvestJobIdentifier}` as const
  }
}
export type { HarvestJobsArn }
export function harvestJobsArn<Partition extends ArnPartition = 'aws'>(parameters: HarvestJobsArnParameters<Partition>) {
  return new HarvestJobsArn<Partition>(parameters)
}
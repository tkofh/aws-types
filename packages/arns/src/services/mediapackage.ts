import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChannelsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierChannel: string
}
class ChannelsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channels',
  `arn:${string}:mediapackage:${string}:${string}:channels/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channels' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierChannel: string
  constructor(parameters: ChannelsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierChannel = parameters.identifierChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage:${this.region}:${this.account}:channels/${this.identifierChannel}` as const
  }
}
export type { ChannelsArn }
export function channelsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelsArnParameters<Partition>,
) {
  return new ChannelsArn<Partition>(parameters)
}

export interface EndpointsOriginArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierEndpointOrigin: string
}
class EndpointsOriginArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'origin_endpoints',
  `arn:${string}:mediapackage:${string}:${string}:origin_endpoints/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'origin_endpoints' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierEndpointOrigin: string
  constructor(parameters: EndpointsOriginArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierEndpointOrigin = parameters.identifierEndpointOrigin
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage:${this.region}:${this.account}:origin_endpoints/${this.identifierEndpointOrigin}` as const
  }
}
export type { EndpointsOriginArn }
export function endpointsOriginArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointsOriginArnParameters<Partition>,
) {
  return new EndpointsOriginArn<Partition>(parameters)
}

export interface JobsHarvestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierJobHarvest: string
}
class JobsHarvestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'harvest_jobs',
  `arn:${string}:mediapackage:${string}:${string}:harvest_jobs/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'harvest_jobs' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierJobHarvest: string
  constructor(parameters: JobsHarvestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierJobHarvest = parameters.identifierJobHarvest
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediapackage:${this.region}:${this.account}:harvest_jobs/${this.identifierJobHarvest}` as const
  }
}
export type { JobsHarvestArn }
export function jobsHarvestArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobsHarvestArnParameters<Partition>,
) {
  return new JobsHarvestArn<Partition>(parameters)
}

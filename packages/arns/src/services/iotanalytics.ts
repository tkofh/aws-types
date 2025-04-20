import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameChannel: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:iotanalytics:${string}:${string}:channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameChannel: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameChannel = parameters.nameChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotanalytics:${this.region}:${this.account}:channel/${this.nameChannel}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface SetDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetData: string
}
class SetDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:iotanalytics:${string}:${string}:dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetData: string
  constructor(parameters: SetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSetData = parameters.nameSetData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotanalytics:${this.region}:${this.account}:dataset/${this.nameSetData}` as const
  }
}
export type { SetDataArn }
export function setDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataArnParameters<Partition>,
) {
  return new SetDataArn<Partition>(parameters)
}

export interface StoreDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatastore: string
}
class StoreDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datastore',
  `arn:${string}:iotanalytics:${string}:${string}:datastore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datastore' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatastore: string
  constructor(parameters: StoreDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDatastore = parameters.nameDatastore
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotanalytics:${this.region}:${this.account}:datastore/${this.nameDatastore}` as const
  }
}
export type { StoreDataArn }
export function storeDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreDataArnParameters<Partition>,
) {
  return new StoreDataArn<Partition>(parameters)
}

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pipeline',
  `arn:${string}:iotanalytics:${string}:${string}:pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePipeline = parameters.namePipeline
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotanalytics:${this.region}:${this.account}:pipeline/${this.namePipeline}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineArnParameters<Partition>,
) {
  return new PipelineArn<Partition>(parameters)
}

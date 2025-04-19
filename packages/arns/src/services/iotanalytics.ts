import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelName: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'channel', `arn:${string}:iotanalytics:${string}:${string}:channel/${string}`> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelName: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelName = parameters.channelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotanalytics:${this.region}:${this.account}:channel/${this.channelName}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(parameters: ChannelArnParameters<Partition>) {
  return new ChannelArn<Partition>(parameters)
}

export interface DatasetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasetName: string
}
class DatasetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dataset', `arn:${string}:iotanalytics:${string}:${string}:dataset/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasetName: string
  constructor(parameters: DatasetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.datasetName = parameters.datasetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotanalytics:${this.region}:${this.account}:dataset/${this.datasetName}` as const
  }
}
export type { DatasetArn }
export function datasetArn<Partition extends ArnPartition = 'aws'>(parameters: DatasetArnParameters<Partition>) {
  return new DatasetArn<Partition>(parameters)
}

export interface DatastoreArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreName: string
}
class DatastoreArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'datastore', `arn:${string}:iotanalytics:${string}:${string}:datastore/${string}`> {
  readonly [ArnResourceTypeBrand] = 'datastore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreName: string
  constructor(parameters: DatastoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.datastoreName = parameters.datastoreName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotanalytics:${this.region}:${this.account}:datastore/${this.datastoreName}` as const
  }
}
export type { DatastoreArn }
export function datastoreArn<Partition extends ArnPartition = 'aws'>(parameters: DatastoreArnParameters<Partition>) {
  return new DatastoreArn<Partition>(parameters)
}

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'pipeline', `arn:${string}:iotanalytics:${string}:${string}:pipeline/${string}`> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.pipelineName = parameters.pipelineName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotanalytics:${this.region}:${this.account}:pipeline/${this.pipelineName}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(parameters: PipelineArnParameters<Partition>) {
  return new PipelineArn<Partition>(parameters)
}
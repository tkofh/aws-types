export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelName: string
}
export type ChannelArn = `arn:${string}:iotanalytics:${string}:${string}:channel/${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:iotanalytics:${parameters.region}:${parameters.account}:channel/${parameters.channelName}`
}

export interface DatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  datasetName: string
}
export type DatasetArn = `arn:${string}:iotanalytics:${string}:${string}:dataset/${string}`
export function datasetArn(parameters: DatasetArnParameters): DatasetArn {
  return `arn:${parameters.partition ?? ''}:iotanalytics:${parameters.region}:${parameters.account}:dataset/${parameters.datasetName}`
}

export interface DatastoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  datastoreName: string
}
export type DatastoreArn = `arn:${string}:iotanalytics:${string}:${string}:datastore/${string}`
export function datastoreArn(parameters: DatastoreArnParameters): DatastoreArn {
  return `arn:${parameters.partition ?? ''}:iotanalytics:${parameters.region}:${parameters.account}:datastore/${parameters.datastoreName}`
}

export interface PipelineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  pipelineName: string
}
export type PipelineArn = `arn:${string}:iotanalytics:${string}:${string}:pipeline/${string}`
export function pipelineArn(parameters: PipelineArnParameters): PipelineArn {
  return `arn:${parameters.partition ?? ''}:iotanalytics:${parameters.region}:${parameters.account}:pipeline/${parameters.pipelineName}`
}
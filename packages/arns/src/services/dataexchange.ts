export interface JobsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type JobsArn = `arn:${string}:dataexchange:${string}:${string}:jobs/${string}`
export function jobsArn(parameters: JobsArnParameters): JobsArn {
  return `arn:${parameters.partition ?? ''}:dataexchange:${parameters.region}:${parameters.account}:jobs/${parameters.jobId}`
}

export interface DataSetsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dataSetId: string
}
export type DataSetsArn = `arn:${string}:dataexchange:${string}:${string}:data-sets/${string}`
export function dataSetsArn(parameters: DataSetsArnParameters): DataSetsArn {
  return `arn:${parameters.partition ?? ''}:dataexchange:${parameters.region}:${parameters.account}:data-sets/${parameters.dataSetId}`
}

export interface EntitledDataSetsArnParameters {
  partition?: string | undefined
  region: string
  dataSetId: string
}
export type EntitledDataSetsArn = `arn:${string}:dataexchange:${string}::data-sets/${string}`
export function entitledDataSetsArn(parameters: EntitledDataSetsArnParameters): EntitledDataSetsArn {
  return `arn:${parameters.partition ?? ''}:dataexchange:${parameters.region}::data-sets/${parameters.dataSetId}`
}

export interface RevisionsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dataSetId: string
  revisionId: string
}
export type RevisionsArn = `arn:${string}:dataexchange:${string}:${string}:data-sets/${string}/revisions/${string}`
export function revisionsArn(parameters: RevisionsArnParameters): RevisionsArn {
  return `arn:${parameters.partition ?? ''}:dataexchange:${parameters.region}:${parameters.account}:data-sets/${parameters.dataSetId}/revisions/${parameters.revisionId}`
}

export interface EntitledRevisionsArnParameters {
  partition?: string | undefined
  region: string
  dataSetId: string
  revisionId: string
}
export type EntitledRevisionsArn = `arn:${string}:dataexchange:${string}::data-sets/${string}/revisions/${string}`
export function entitledRevisionsArn(parameters: EntitledRevisionsArnParameters): EntitledRevisionsArn {
  return `arn:${parameters.partition ?? ''}:dataexchange:${parameters.region}::data-sets/${parameters.dataSetId}/revisions/${parameters.revisionId}`
}

export interface AssetsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dataSetId: string
  revisionId: string
  assetId: string
}
export type AssetsArn = `arn:${string}:dataexchange:${string}:${string}:data-sets/${string}/revisions/${string}/assets/${string}`
export function assetsArn(parameters: AssetsArnParameters): AssetsArn {
  return `arn:${parameters.partition ?? ''}:dataexchange:${parameters.region}:${parameters.account}:data-sets/${parameters.dataSetId}/revisions/${parameters.revisionId}/assets/${parameters.assetId}`
}

export interface EntitledAssetsArnParameters {
  partition?: string | undefined
  region: string
  dataSetId: string
  revisionId: string
  assetId: string
}
export type EntitledAssetsArn = `arn:${string}:dataexchange:${string}::data-sets/${string}/revisions/${string}/assets/${string}`
export function entitledAssetsArn(parameters: EntitledAssetsArnParameters): EntitledAssetsArn {
  return `arn:${parameters.partition ?? ''}:dataexchange:${parameters.region}::data-sets/${parameters.dataSetId}/revisions/${parameters.revisionId}/assets/${parameters.assetId}`
}

export interface EventActionsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventActionId: string
}
export type EventActionsArn = `arn:${string}:dataexchange:${string}:${string}:event-actions/${string}`
export function eventActionsArn(parameters: EventActionsArnParameters): EventActionsArn {
  return `arn:${parameters.partition ?? ''}:dataexchange:${parameters.region}:${parameters.account}:event-actions/${parameters.eventActionId}`
}
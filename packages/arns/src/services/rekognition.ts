export interface CollectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  collectionId: string
}
export type CollectionArn = `arn:${string}:rekognition:${string}:${string}:collection/${string}`
export function collectionArn(parameters: CollectionArnParameters): CollectionArn {
  return `arn:${parameters.partition ?? ''}:rekognition:${parameters.region}:${parameters.account}:collection/${parameters.collectionId}`
}

export interface StreamprocessorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  streamprocessorId: string
}
export type StreamprocessorArn = `arn:${string}:rekognition:${string}:${string}:streamprocessor/${string}`
export function streamprocessorArn(parameters: StreamprocessorArnParameters): StreamprocessorArn {
  return `arn:${parameters.partition ?? ''}:rekognition:${parameters.region}:${parameters.account}:streamprocessor/${parameters.streamprocessorId}`
}

export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
  creationTimestamp: string
}
export type ProjectArn = `arn:${string}:rekognition:${string}:${string}:project/${string}/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:rekognition:${parameters.region}:${parameters.account}:project/${parameters.projectName}/${parameters.creationTimestamp}`
}

export interface ProjectversionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
  versionName: string
  creationTimestamp: string
}
export type ProjectversionArn = `arn:${string}:rekognition:${string}:${string}:project/${string}/version/${string}/${string}`
export function projectversionArn(parameters: ProjectversionArnParameters): ProjectversionArn {
  return `arn:${parameters.partition ?? ''}:rekognition:${parameters.region}:${parameters.account}:project/${parameters.projectName}/version/${parameters.versionName}/${parameters.creationTimestamp}`
}

export interface DatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectName: string
  datasetType: string
  creationTimestamp: string
}
export type DatasetArn = `arn:${string}:rekognition:${string}:${string}:project/${string}/dataset/${string}/${string}`
export function datasetArn(parameters: DatasetArnParameters): DatasetArn {
  return `arn:${parameters.partition ?? ''}:rekognition:${parameters.region}:${parameters.account}:project/${parameters.projectName}/dataset/${parameters.datasetType}/${parameters.creationTimestamp}`
}
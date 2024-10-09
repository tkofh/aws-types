export interface TargetedSentimentDetectionJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type TargetedSentimentDetectionJobArn = `arn:${string}:comprehend:${string}:${string}:targeted-sentiment-detection-job/${string}`
export function targetedSentimentDetectionJobArn(parameters: TargetedSentimentDetectionJobArnParameters): TargetedSentimentDetectionJobArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:targeted-sentiment-detection-job/${parameters.jobId}`
}

export interface DocumentClassifierArnParameters {
  partition?: string | undefined
  region: string
  account: string
  documentClassifierName: string
}
export type DocumentClassifierArn = `arn:${string}:comprehend:${string}:${string}:document-classifier/${string}`
export function documentClassifierArn(parameters: DocumentClassifierArnParameters): DocumentClassifierArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:document-classifier/${parameters.documentClassifierName}`
}

export interface DocumentClassifierEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  documentClassifierEndpointName: string
}
export type DocumentClassifierEndpointArn = `arn:${string}:comprehend:${string}:${string}:document-classifier-endpoint/${string}`
export function documentClassifierEndpointArn(parameters: DocumentClassifierEndpointArnParameters): DocumentClassifierEndpointArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:document-classifier-endpoint/${parameters.documentClassifierEndpointName}`
}

export interface EntityRecognizerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  entityRecognizerName: string
}
export type EntityRecognizerArn = `arn:${string}:comprehend:${string}:${string}:entity-recognizer/${string}`
export function entityRecognizerArn(parameters: EntityRecognizerArnParameters): EntityRecognizerArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:entity-recognizer/${parameters.entityRecognizerName}`
}

export interface EntityRecognizerEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  entityRecognizerEndpointName: string
}
export type EntityRecognizerEndpointArn = `arn:${string}:comprehend:${string}:${string}:entity-recognizer-endpoint/${string}`
export function entityRecognizerEndpointArn(parameters: EntityRecognizerEndpointArnParameters): EntityRecognizerEndpointArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:entity-recognizer-endpoint/${parameters.entityRecognizerEndpointName}`
}

export interface DominantLanguageDetectionJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type DominantLanguageDetectionJobArn = `arn:${string}:comprehend:${string}:${string}:dominant-language-detection-job/${string}`
export function dominantLanguageDetectionJobArn(parameters: DominantLanguageDetectionJobArnParameters): DominantLanguageDetectionJobArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:dominant-language-detection-job/${parameters.jobId}`
}

export interface EntitiesDetectionJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type EntitiesDetectionJobArn = `arn:${string}:comprehend:${string}:${string}:entities-detection-job/${string}`
export function entitiesDetectionJobArn(parameters: EntitiesDetectionJobArnParameters): EntitiesDetectionJobArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:entities-detection-job/${parameters.jobId}`
}

export interface PiiEntitiesDetectionJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type PiiEntitiesDetectionJobArn = `arn:${string}:comprehend:${string}:${string}:pii-entities-detection-job/${string}`
export function piiEntitiesDetectionJobArn(parameters: PiiEntitiesDetectionJobArnParameters): PiiEntitiesDetectionJobArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:pii-entities-detection-job/${parameters.jobId}`
}

export interface EventsDetectionJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type EventsDetectionJobArn = `arn:${string}:comprehend:${string}:${string}:events-detection-job/${string}`
export function eventsDetectionJobArn(parameters: EventsDetectionJobArnParameters): EventsDetectionJobArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:events-detection-job/${parameters.jobId}`
}

export interface KeyPhrasesDetectionJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type KeyPhrasesDetectionJobArn = `arn:${string}:comprehend:${string}:${string}:key-phrases-detection-job/${string}`
export function keyPhrasesDetectionJobArn(parameters: KeyPhrasesDetectionJobArnParameters): KeyPhrasesDetectionJobArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:key-phrases-detection-job/${parameters.jobId}`
}

export interface SentimentDetectionJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type SentimentDetectionJobArn = `arn:${string}:comprehend:${string}:${string}:sentiment-detection-job/${string}`
export function sentimentDetectionJobArn(parameters: SentimentDetectionJobArnParameters): SentimentDetectionJobArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:sentiment-detection-job/${parameters.jobId}`
}

export interface TopicsDetectionJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type TopicsDetectionJobArn = `arn:${string}:comprehend:${string}:${string}:topics-detection-job/${string}`
export function topicsDetectionJobArn(parameters: TopicsDetectionJobArnParameters): TopicsDetectionJobArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:topics-detection-job/${parameters.jobId}`
}

export interface DocumentClassificationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type DocumentClassificationJobArn = `arn:${string}:comprehend:${string}:${string}:document-classification-job/${string}`
export function documentClassificationJobArn(parameters: DocumentClassificationJobArnParameters): DocumentClassificationJobArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:document-classification-job/${parameters.jobId}`
}

export interface FlywheelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  flywheelName: string
}
export type FlywheelArn = `arn:${string}:comprehend:${string}:${string}:flywheel/${string}`
export function flywheelArn(parameters: FlywheelArnParameters): FlywheelArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:flywheel/${parameters.flywheelName}`
}

export interface FlywheelDatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  flywheelName: string
  datasetName: string
}
export type FlywheelDatasetArn = `arn:${string}:comprehend:${string}:${string}:flywheel/${string}/dataset/${string}`
export function flywheelDatasetArn(parameters: FlywheelDatasetArnParameters): FlywheelDatasetArn {
  return `arn:${parameters.partition ?? ''}:comprehend:${parameters.region}:${parameters.account}:flywheel/${parameters.flywheelName}/dataset/${parameters.datasetName}`
}
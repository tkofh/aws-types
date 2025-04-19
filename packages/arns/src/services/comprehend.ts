import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TargetedSentimentDetectionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class TargetedSentimentDetectionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'targeted-sentiment-detection-job',
  `arn:${string}:comprehend:${string}:${string}:targeted-sentiment-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'targeted-sentiment-detection-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(
    parameters: TargetedSentimentDetectionJobArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:targeted-sentiment-detection-job/${this.jobId}` as const
  }
}
export type { TargetedSentimentDetectionJobArn }
export function targetedSentimentDetectionJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TargetedSentimentDetectionJobArnParameters<Partition>) {
  return new TargetedSentimentDetectionJobArn<Partition>(parameters)
}

export interface DocumentClassifierArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly documentClassifierName: string
}
class DocumentClassifierArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'document-classifier',
  `arn:${string}:comprehend:${string}:${string}:document-classifier/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'document-classifier' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly documentClassifierName: string
  constructor(parameters: DocumentClassifierArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.documentClassifierName = parameters.documentClassifierName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:document-classifier/${this.documentClassifierName}` as const
  }
}
export type { DocumentClassifierArn }
export function documentClassifierArn<Partition extends ArnPartition = 'aws'>(
  parameters: DocumentClassifierArnParameters<Partition>,
) {
  return new DocumentClassifierArn<Partition>(parameters)
}

export interface DocumentClassifierEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly documentClassifierEndpointName: string
}
class DocumentClassifierEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'document-classifier-endpoint',
  `arn:${string}:comprehend:${string}:${string}:document-classifier-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'document-classifier-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly documentClassifierEndpointName: string
  constructor(parameters: DocumentClassifierEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.documentClassifierEndpointName =
      parameters.documentClassifierEndpointName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:document-classifier-endpoint/${this.documentClassifierEndpointName}` as const
  }
}
export type { DocumentClassifierEndpointArn }
export function documentClassifierEndpointArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DocumentClassifierEndpointArnParameters<Partition>) {
  return new DocumentClassifierEndpointArn<Partition>(parameters)
}

export interface EntityRecognizerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly entityRecognizerName: string
}
class EntityRecognizerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'entity-recognizer',
  `arn:${string}:comprehend:${string}:${string}:entity-recognizer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entity-recognizer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly entityRecognizerName: string
  constructor(parameters: EntityRecognizerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.entityRecognizerName = parameters.entityRecognizerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:entity-recognizer/${this.entityRecognizerName}` as const
  }
}
export type { EntityRecognizerArn }
export function entityRecognizerArn<Partition extends ArnPartition = 'aws'>(
  parameters: EntityRecognizerArnParameters<Partition>,
) {
  return new EntityRecognizerArn<Partition>(parameters)
}

export interface EntityRecognizerEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly entityRecognizerEndpointName: string
}
class EntityRecognizerEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'entity-recognizer-endpoint',
  `arn:${string}:comprehend:${string}:${string}:entity-recognizer-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entity-recognizer-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly entityRecognizerEndpointName: string
  constructor(parameters: EntityRecognizerEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.entityRecognizerEndpointName = parameters.entityRecognizerEndpointName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:entity-recognizer-endpoint/${this.entityRecognizerEndpointName}` as const
  }
}
export type { EntityRecognizerEndpointArn }
export function entityRecognizerEndpointArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EntityRecognizerEndpointArnParameters<Partition>) {
  return new EntityRecognizerEndpointArn<Partition>(parameters)
}

export interface DominantLanguageDetectionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class DominantLanguageDetectionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dominant-language-detection-job',
  `arn:${string}:comprehend:${string}:${string}:dominant-language-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dominant-language-detection-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(
    parameters: DominantLanguageDetectionJobArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:dominant-language-detection-job/${this.jobId}` as const
  }
}
export type { DominantLanguageDetectionJobArn }
export function dominantLanguageDetectionJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DominantLanguageDetectionJobArnParameters<Partition>) {
  return new DominantLanguageDetectionJobArn<Partition>(parameters)
}

export interface EntitiesDetectionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class EntitiesDetectionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'entities-detection-job',
  `arn:${string}:comprehend:${string}:${string}:entities-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entities-detection-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: EntitiesDetectionJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:entities-detection-job/${this.jobId}` as const
  }
}
export type { EntitiesDetectionJobArn }
export function entitiesDetectionJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: EntitiesDetectionJobArnParameters<Partition>,
) {
  return new EntitiesDetectionJobArn<Partition>(parameters)
}

export interface PiiEntitiesDetectionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class PiiEntitiesDetectionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pii-entities-detection-job',
  `arn:${string}:comprehend:${string}:${string}:pii-entities-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pii-entities-detection-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: PiiEntitiesDetectionJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:pii-entities-detection-job/${this.jobId}` as const
  }
}
export type { PiiEntitiesDetectionJobArn }
export function piiEntitiesDetectionJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PiiEntitiesDetectionJobArnParameters<Partition>) {
  return new PiiEntitiesDetectionJobArn<Partition>(parameters)
}

export interface EventsDetectionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class EventsDetectionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'events-detection-job',
  `arn:${string}:comprehend:${string}:${string}:events-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'events-detection-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: EventsDetectionJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:events-detection-job/${this.jobId}` as const
  }
}
export type { EventsDetectionJobArn }
export function eventsDetectionJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventsDetectionJobArnParameters<Partition>,
) {
  return new EventsDetectionJobArn<Partition>(parameters)
}

export interface KeyPhrasesDetectionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class KeyPhrasesDetectionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'key-phrases-detection-job',
  `arn:${string}:comprehend:${string}:${string}:key-phrases-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'key-phrases-detection-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: KeyPhrasesDetectionJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:key-phrases-detection-job/${this.jobId}` as const
  }
}
export type { KeyPhrasesDetectionJobArn }
export function keyPhrasesDetectionJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: KeyPhrasesDetectionJobArnParameters<Partition>) {
  return new KeyPhrasesDetectionJobArn<Partition>(parameters)
}

export interface SentimentDetectionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class SentimentDetectionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sentiment-detection-job',
  `arn:${string}:comprehend:${string}:${string}:sentiment-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sentiment-detection-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: SentimentDetectionJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:sentiment-detection-job/${this.jobId}` as const
  }
}
export type { SentimentDetectionJobArn }
export function sentimentDetectionJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SentimentDetectionJobArnParameters<Partition>) {
  return new SentimentDetectionJobArn<Partition>(parameters)
}

export interface TopicsDetectionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class TopicsDetectionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'topics-detection-job',
  `arn:${string}:comprehend:${string}:${string}:topics-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topics-detection-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: TopicsDetectionJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:topics-detection-job/${this.jobId}` as const
  }
}
export type { TopicsDetectionJobArn }
export function topicsDetectionJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: TopicsDetectionJobArnParameters<Partition>,
) {
  return new TopicsDetectionJobArn<Partition>(parameters)
}

export interface DocumentClassificationJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class DocumentClassificationJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'document-classification-job',
  `arn:${string}:comprehend:${string}:${string}:document-classification-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'document-classification-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: DocumentClassificationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:document-classification-job/${this.jobId}` as const
  }
}
export type { DocumentClassificationJobArn }
export function documentClassificationJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DocumentClassificationJobArnParameters<Partition>) {
  return new DocumentClassificationJobArn<Partition>(parameters)
}

export interface FlywheelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flywheelName: string
}
class FlywheelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'flywheel',
  `arn:${string}:comprehend:${string}:${string}:flywheel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flywheel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flywheelName: string
  constructor(parameters: FlywheelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.flywheelName = parameters.flywheelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:flywheel/${this.flywheelName}` as const
  }
}
export type { FlywheelArn }
export function flywheelArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlywheelArnParameters<Partition>,
) {
  return new FlywheelArn<Partition>(parameters)
}

export interface FlywheelDatasetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flywheelName: string
  readonly datasetName: string
}
class FlywheelDatasetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'flywheel-dataset',
  `arn:${string}:comprehend:${string}:${string}:flywheel/${string}/dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flywheel-dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly flywheelName: string
  readonly datasetName: string
  constructor(parameters: FlywheelDatasetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.flywheelName = parameters.flywheelName
    this.datasetName = parameters.datasetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:flywheel/${this.flywheelName}/dataset/${this.datasetName}` as const
  }
}
export type { FlywheelDatasetArn }
export function flywheelDatasetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlywheelDatasetArnParameters<Partition>,
) {
  return new FlywheelDatasetArn<Partition>(parameters)
}

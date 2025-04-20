import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface JobDetectionSentimentTargetedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobDetectionSentimentTargetedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'targeted-sentiment-detection-job',
  `arn:${string}:comprehend:${string}:${string}:targeted-sentiment-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'targeted-sentiment-detection-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(
    parameters: JobDetectionSentimentTargetedArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:targeted-sentiment-detection-job/${this.idJob}` as const
  }
}
export type { JobDetectionSentimentTargetedArn }
export function jobDetectionSentimentTargetedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobDetectionSentimentTargetedArnParameters<Partition>) {
  return new JobDetectionSentimentTargetedArn<Partition>(parameters)
}

export interface ClassifierDocumentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameClassifierDocument: string
}
class ClassifierDocumentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'document-classifier',
  `arn:${string}:comprehend:${string}:${string}:document-classifier/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'document-classifier' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameClassifierDocument: string
  constructor(parameters: ClassifierDocumentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameClassifierDocument = parameters.nameClassifierDocument
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:document-classifier/${this.nameClassifierDocument}` as const
  }
}
export type { ClassifierDocumentArn }
export function classifierDocumentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClassifierDocumentArnParameters<Partition>,
) {
  return new ClassifierDocumentArn<Partition>(parameters)
}

export interface EndpointClassifierDocumentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpointClassifierDocument: string
}
class EndpointClassifierDocumentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'document-classifier-endpoint',
  `arn:${string}:comprehend:${string}:${string}:document-classifier-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'document-classifier-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpointClassifierDocument: string
  constructor(parameters: EndpointClassifierDocumentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameEndpointClassifierDocument =
      parameters.nameEndpointClassifierDocument
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:document-classifier-endpoint/${this.nameEndpointClassifierDocument}` as const
  }
}
export type { EndpointClassifierDocumentArn }
export function endpointClassifierDocumentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EndpointClassifierDocumentArnParameters<Partition>) {
  return new EndpointClassifierDocumentArn<Partition>(parameters)
}

export interface RecognizerEntityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRecognizerEntity: string
}
class RecognizerEntityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'entity-recognizer',
  `arn:${string}:comprehend:${string}:${string}:entity-recognizer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entity-recognizer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRecognizerEntity: string
  constructor(parameters: RecognizerEntityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRecognizerEntity = parameters.nameRecognizerEntity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:entity-recognizer/${this.nameRecognizerEntity}` as const
  }
}
export type { RecognizerEntityArn }
export function recognizerEntityArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecognizerEntityArnParameters<Partition>,
) {
  return new RecognizerEntityArn<Partition>(parameters)
}

export interface EndpointRecognizerEntityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpointRecognizerEntity: string
}
class EndpointRecognizerEntityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'entity-recognizer-endpoint',
  `arn:${string}:comprehend:${string}:${string}:entity-recognizer-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entity-recognizer-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEndpointRecognizerEntity: string
  constructor(parameters: EndpointRecognizerEntityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameEndpointRecognizerEntity = parameters.nameEndpointRecognizerEntity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:entity-recognizer-endpoint/${this.nameEndpointRecognizerEntity}` as const
  }
}
export type { EndpointRecognizerEntityArn }
export function endpointRecognizerEntityArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EndpointRecognizerEntityArnParameters<Partition>) {
  return new EndpointRecognizerEntityArn<Partition>(parameters)
}

export interface JobDetectionLanguageDominantArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobDetectionLanguageDominantArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dominant-language-detection-job',
  `arn:${string}:comprehend:${string}:${string}:dominant-language-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dominant-language-detection-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(
    parameters: JobDetectionLanguageDominantArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:dominant-language-detection-job/${this.idJob}` as const
  }
}
export type { JobDetectionLanguageDominantArn }
export function jobDetectionLanguageDominantArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobDetectionLanguageDominantArnParameters<Partition>) {
  return new JobDetectionLanguageDominantArn<Partition>(parameters)
}

export interface JobDetectionEntitiesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobDetectionEntitiesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'entities-detection-job',
  `arn:${string}:comprehend:${string}:${string}:entities-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entities-detection-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobDetectionEntitiesArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:entities-detection-job/${this.idJob}` as const
  }
}
export type { JobDetectionEntitiesArn }
export function jobDetectionEntitiesArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobDetectionEntitiesArnParameters<Partition>,
) {
  return new JobDetectionEntitiesArn<Partition>(parameters)
}

export interface JobDetectionEntitiesPiiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobDetectionEntitiesPiiArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pii-entities-detection-job',
  `arn:${string}:comprehend:${string}:${string}:pii-entities-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pii-entities-detection-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobDetectionEntitiesPiiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:pii-entities-detection-job/${this.idJob}` as const
  }
}
export type { JobDetectionEntitiesPiiArn }
export function jobDetectionEntitiesPiiArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobDetectionEntitiesPiiArnParameters<Partition>) {
  return new JobDetectionEntitiesPiiArn<Partition>(parameters)
}

export interface JobDetectionEventsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobDetectionEventsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'events-detection-job',
  `arn:${string}:comprehend:${string}:${string}:events-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'events-detection-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobDetectionEventsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:events-detection-job/${this.idJob}` as const
  }
}
export type { JobDetectionEventsArn }
export function jobDetectionEventsArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobDetectionEventsArnParameters<Partition>,
) {
  return new JobDetectionEventsArn<Partition>(parameters)
}

export interface JobDetectionPhrasesKeyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobDetectionPhrasesKeyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'key-phrases-detection-job',
  `arn:${string}:comprehend:${string}:${string}:key-phrases-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'key-phrases-detection-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobDetectionPhrasesKeyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:key-phrases-detection-job/${this.idJob}` as const
  }
}
export type { JobDetectionPhrasesKeyArn }
export function jobDetectionPhrasesKeyArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobDetectionPhrasesKeyArnParameters<Partition>) {
  return new JobDetectionPhrasesKeyArn<Partition>(parameters)
}

export interface JobDetectionSentimentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobDetectionSentimentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sentiment-detection-job',
  `arn:${string}:comprehend:${string}:${string}:sentiment-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sentiment-detection-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobDetectionSentimentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:sentiment-detection-job/${this.idJob}` as const
  }
}
export type { JobDetectionSentimentArn }
export function jobDetectionSentimentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobDetectionSentimentArnParameters<Partition>) {
  return new JobDetectionSentimentArn<Partition>(parameters)
}

export interface JobDetectionTopicsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobDetectionTopicsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'topics-detection-job',
  `arn:${string}:comprehend:${string}:${string}:topics-detection-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topics-detection-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobDetectionTopicsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:topics-detection-job/${this.idJob}` as const
  }
}
export type { JobDetectionTopicsArn }
export function jobDetectionTopicsArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobDetectionTopicsArnParameters<Partition>,
) {
  return new JobDetectionTopicsArn<Partition>(parameters)
}

export interface JobClassificationDocumentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobClassificationDocumentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'document-classification-job',
  `arn:${string}:comprehend:${string}:${string}:document-classification-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'document-classification-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobClassificationDocumentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:document-classification-job/${this.idJob}` as const
  }
}
export type { JobClassificationDocumentArn }
export function jobClassificationDocumentArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobClassificationDocumentArnParameters<Partition>) {
  return new JobClassificationDocumentArn<Partition>(parameters)
}

export interface FlywheelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFlywheel: string
}
class FlywheelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'flywheel',
  `arn:${string}:comprehend:${string}:${string}:flywheel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flywheel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFlywheel: string
  constructor(parameters: FlywheelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFlywheel = parameters.nameFlywheel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:flywheel/${this.nameFlywheel}` as const
  }
}
export type { FlywheelArn }
export function flywheelArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlywheelArnParameters<Partition>,
) {
  return new FlywheelArn<Partition>(parameters)
}

export interface SetDataFlywheelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFlywheel: string
  readonly nameSetData: string
}
class SetDataFlywheelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'flywheel-dataset',
  `arn:${string}:comprehend:${string}:${string}:flywheel/${string}/dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'flywheel-dataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFlywheel: string
  readonly nameSetData: string
  constructor(parameters: SetDataFlywheelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFlywheel = parameters.nameFlywheel
    this.nameSetData = parameters.nameSetData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:comprehend:${this.region}:${this.account}:flywheel/${this.nameFlywheel}/dataset/${this.nameSetData}` as const
  }
}
export type { SetDataFlywheelArn }
export function setDataFlywheelArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataFlywheelArnParameters<Partition>,
) {
  return new SetDataFlywheelArn<Partition>(parameters)
}

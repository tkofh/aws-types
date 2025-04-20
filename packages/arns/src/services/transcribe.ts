import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface JobTranscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
}
class JobTranscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transcriptionjob',
  `arn:${string}:transcribe:${string}:${string}:transcription-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transcriptionjob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
  constructor(parameters: JobTranscriptionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJob = parameters.nameJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:transcription-job/${this.nameJob}` as const
  }
}
export type { JobTranscriptionArn }
export function jobTranscriptionArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobTranscriptionArnParameters<Partition>,
) {
  return new JobTranscriptionArn<Partition>(parameters)
}

export interface VocabularyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameVocabulary: string
}
class VocabularyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vocabulary',
  `arn:${string}:transcribe:${string}:${string}:vocabulary/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vocabulary' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameVocabulary: string
  constructor(parameters: VocabularyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameVocabulary = parameters.nameVocabulary
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:vocabulary/${this.nameVocabulary}` as const
  }
}
export type { VocabularyArn }
export function vocabularyArn<Partition extends ArnPartition = 'aws'>(
  parameters: VocabularyArnParameters<Partition>,
) {
  return new VocabularyArn<Partition>(parameters)
}

export interface FilterVocabularyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFilterVocabulary: string
}
class FilterVocabularyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vocabularyfilter',
  `arn:${string}:transcribe:${string}:${string}:vocabulary-filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vocabularyfilter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFilterVocabulary: string
  constructor(parameters: FilterVocabularyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFilterVocabulary = parameters.nameFilterVocabulary
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:vocabulary-filter/${this.nameFilterVocabulary}` as const
  }
}
export type { FilterVocabularyArn }
export function filterVocabularyArn<Partition extends ArnPartition = 'aws'>(
  parameters: FilterVocabularyArnParameters<Partition>,
) {
  return new FilterVocabularyArn<Partition>(parameters)
}

export interface ModelLanguageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModel: string
}
class ModelLanguageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'languagemodel',
  `arn:${string}:transcribe:${string}:${string}:language-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'languagemodel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameModel: string
  constructor(parameters: ModelLanguageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameModel = parameters.nameModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:language-model/${this.nameModel}` as const
  }
}
export type { ModelLanguageArn }
export function modelLanguageArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelLanguageArnParameters<Partition>,
) {
  return new ModelLanguageArn<Partition>(parameters)
}

export interface JobTranscriptionMedicalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
}
class JobTranscriptionMedicalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'medicaltranscriptionjob',
  `arn:${string}:transcribe:${string}:${string}:medical-transcription-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'medicaltranscriptionjob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
  constructor(parameters: JobTranscriptionMedicalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJob = parameters.nameJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:medical-transcription-job/${this.nameJob}` as const
  }
}
export type { JobTranscriptionMedicalArn }
export function jobTranscriptionMedicalArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobTranscriptionMedicalArnParameters<Partition>) {
  return new JobTranscriptionMedicalArn<Partition>(parameters)
}

export interface VocabularyMedicalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameVocabulary: string
}
class VocabularyMedicalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'medicalvocabulary',
  `arn:${string}:transcribe:${string}:${string}:medical-vocabulary/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'medicalvocabulary' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameVocabulary: string
  constructor(parameters: VocabularyMedicalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameVocabulary = parameters.nameVocabulary
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:medical-vocabulary/${this.nameVocabulary}` as const
  }
}
export type { VocabularyMedicalArn }
export function vocabularyMedicalArn<Partition extends ArnPartition = 'aws'>(
  parameters: VocabularyMedicalArnParameters<Partition>,
) {
  return new VocabularyMedicalArn<Partition>(parameters)
}

export interface JobAnalyticsCallArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
}
class JobAnalyticsCallArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'callanalyticsjob',
  `arn:${string}:transcribe:${string}:${string}:analytics-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'callanalyticsjob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
  constructor(parameters: JobAnalyticsCallArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJob = parameters.nameJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:analytics-job/${this.nameJob}` as const
  }
}
export type { JobAnalyticsCallArn }
export function jobAnalyticsCallArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobAnalyticsCallArnParameters<Partition>,
) {
  return new JobAnalyticsCallArn<Partition>(parameters)
}

export interface CategoryAnalyticsCallArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCategory: string
}
class CategoryAnalyticsCallArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'callanalyticscategory',
  `arn:${string}:transcribe:${string}:${string}:analytics-category/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'callanalyticscategory' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCategory: string
  constructor(parameters: CategoryAnalyticsCallArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCategory = parameters.nameCategory
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:analytics-category/${this.nameCategory}` as const
  }
}
export type { CategoryAnalyticsCallArn }
export function categoryAnalyticsCallArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CategoryAnalyticsCallArnParameters<Partition>) {
  return new CategoryAnalyticsCallArn<Partition>(parameters)
}

export interface JobMedicalscribeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
}
class JobMedicalscribeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'medicalscribejob',
  `arn:${string}:transcribe:${string}:${string}:medical-scribe-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'medicalscribejob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
  constructor(parameters: JobMedicalscribeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJob = parameters.nameJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:medical-scribe-job/${this.nameJob}` as const
  }
}
export type { JobMedicalscribeArn }
export function jobMedicalscribeArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobMedicalscribeArnParameters<Partition>,
) {
  return new JobMedicalscribeArn<Partition>(parameters)
}

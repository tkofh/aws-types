import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TranscriptionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class TranscriptionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transcriptionjob',
  `arn:${string}:transcribe:${string}:${string}:transcription-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transcriptionjob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
  constructor(parameters: TranscriptionJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobName = parameters.jobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:transcription-job/${this.jobName}` as const
  }
}
export type { TranscriptionJobArn }
export function transcriptionJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: TranscriptionJobArnParameters<Partition>,
) {
  return new TranscriptionJobArn<Partition>(parameters)
}

export interface VocabularyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vocabularyName: string
}
class VocabularyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vocabulary',
  `arn:${string}:transcribe:${string}:${string}:vocabulary/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vocabulary' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vocabularyName: string
  constructor(parameters: VocabularyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vocabularyName = parameters.vocabularyName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:vocabulary/${this.vocabularyName}` as const
  }
}
export type { VocabularyArn }
export function vocabularyArn<Partition extends ArnPartition = 'aws'>(
  parameters: VocabularyArnParameters<Partition>,
) {
  return new VocabularyArn<Partition>(parameters)
}

export interface VocabularyFilterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vocabularyFilterName: string
}
class VocabularyFilterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vocabularyfilter',
  `arn:${string}:transcribe:${string}:${string}:vocabulary-filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vocabularyfilter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vocabularyFilterName: string
  constructor(parameters: VocabularyFilterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vocabularyFilterName = parameters.vocabularyFilterName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:vocabulary-filter/${this.vocabularyFilterName}` as const
  }
}
export type { VocabularyFilterArn }
export function vocabularyFilterArn<Partition extends ArnPartition = 'aws'>(
  parameters: VocabularyFilterArnParameters<Partition>,
) {
  return new VocabularyFilterArn<Partition>(parameters)
}

export interface LanguageModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
}
class LanguageModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'languagemodel',
  `arn:${string}:transcribe:${string}:${string}:language-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'languagemodel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
  constructor(parameters: LanguageModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelName = parameters.modelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:language-model/${this.modelName}` as const
  }
}
export type { LanguageModelArn }
export function languageModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: LanguageModelArnParameters<Partition>,
) {
  return new LanguageModelArn<Partition>(parameters)
}

export interface MedicalTranscriptionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class MedicalTranscriptionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'medicaltranscriptionjob',
  `arn:${string}:transcribe:${string}:${string}:medical-transcription-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'medicaltranscriptionjob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
  constructor(parameters: MedicalTranscriptionJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobName = parameters.jobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:medical-transcription-job/${this.jobName}` as const
  }
}
export type { MedicalTranscriptionJobArn }
export function medicalTranscriptionJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MedicalTranscriptionJobArnParameters<Partition>) {
  return new MedicalTranscriptionJobArn<Partition>(parameters)
}

export interface MedicalVocabularyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vocabularyName: string
}
class MedicalVocabularyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'medicalvocabulary',
  `arn:${string}:transcribe:${string}:${string}:medical-vocabulary/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'medicalvocabulary' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vocabularyName: string
  constructor(parameters: MedicalVocabularyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vocabularyName = parameters.vocabularyName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:medical-vocabulary/${this.vocabularyName}` as const
  }
}
export type { MedicalVocabularyArn }
export function medicalVocabularyArn<Partition extends ArnPartition = 'aws'>(
  parameters: MedicalVocabularyArnParameters<Partition>,
) {
  return new MedicalVocabularyArn<Partition>(parameters)
}

export interface CallAnalyticsJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class CallAnalyticsJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'callanalyticsjob',
  `arn:${string}:transcribe:${string}:${string}:analytics-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'callanalyticsjob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
  constructor(parameters: CallAnalyticsJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobName = parameters.jobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:analytics-job/${this.jobName}` as const
  }
}
export type { CallAnalyticsJobArn }
export function callAnalyticsJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: CallAnalyticsJobArnParameters<Partition>,
) {
  return new CallAnalyticsJobArn<Partition>(parameters)
}

export interface CallAnalyticsCategoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly categoryName: string
}
class CallAnalyticsCategoryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'callanalyticscategory',
  `arn:${string}:transcribe:${string}:${string}:analytics-category/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'callanalyticscategory' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly categoryName: string
  constructor(parameters: CallAnalyticsCategoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.categoryName = parameters.categoryName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:analytics-category/${this.categoryName}` as const
  }
}
export type { CallAnalyticsCategoryArn }
export function callAnalyticsCategoryArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CallAnalyticsCategoryArnParameters<Partition>) {
  return new CallAnalyticsCategoryArn<Partition>(parameters)
}

export interface MedicalscribeJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class MedicalscribeJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'medicalscribejob',
  `arn:${string}:transcribe:${string}:${string}:medical-scribe-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'medicalscribejob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
  constructor(parameters: MedicalscribeJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobName = parameters.jobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transcribe:${this.region}:${this.account}:medical-scribe-job/${this.jobName}` as const
  }
}
export type { MedicalscribeJobArn }
export function medicalscribeJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: MedicalscribeJobArnParameters<Partition>,
) {
  return new MedicalscribeJobArn<Partition>(parameters)
}

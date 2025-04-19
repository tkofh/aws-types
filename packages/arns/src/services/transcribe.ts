import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TranscriptionjobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class TranscriptionjobArn<
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
  constructor(parameters: TranscriptionjobArnParameters<Partition>) {
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
export type { TranscriptionjobArn }
export function transcriptionjobArn<Partition extends ArnPartition = 'aws'>(
  parameters: TranscriptionjobArnParameters<Partition>,
) {
  return new TranscriptionjobArn<Partition>(parameters)
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

export interface VocabularyfilterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vocabularyFilterName: string
}
class VocabularyfilterArn<
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
  constructor(parameters: VocabularyfilterArnParameters<Partition>) {
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
export type { VocabularyfilterArn }
export function vocabularyfilterArn<Partition extends ArnPartition = 'aws'>(
  parameters: VocabularyfilterArnParameters<Partition>,
) {
  return new VocabularyfilterArn<Partition>(parameters)
}

export interface LanguagemodelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
}
class LanguagemodelArn<
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
  constructor(parameters: LanguagemodelArnParameters<Partition>) {
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
export type { LanguagemodelArn }
export function languagemodelArn<Partition extends ArnPartition = 'aws'>(
  parameters: LanguagemodelArnParameters<Partition>,
) {
  return new LanguagemodelArn<Partition>(parameters)
}

export interface MedicaltranscriptionjobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class MedicaltranscriptionjobArn<
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
  constructor(parameters: MedicaltranscriptionjobArnParameters<Partition>) {
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
export type { MedicaltranscriptionjobArn }
export function medicaltranscriptionjobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MedicaltranscriptionjobArnParameters<Partition>) {
  return new MedicaltranscriptionjobArn<Partition>(parameters)
}

export interface MedicalvocabularyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vocabularyName: string
}
class MedicalvocabularyArn<
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
  constructor(parameters: MedicalvocabularyArnParameters<Partition>) {
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
export type { MedicalvocabularyArn }
export function medicalvocabularyArn<Partition extends ArnPartition = 'aws'>(
  parameters: MedicalvocabularyArnParameters<Partition>,
) {
  return new MedicalvocabularyArn<Partition>(parameters)
}

export interface CallanalyticsjobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class CallanalyticsjobArn<
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
  constructor(parameters: CallanalyticsjobArnParameters<Partition>) {
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
export type { CallanalyticsjobArn }
export function callanalyticsjobArn<Partition extends ArnPartition = 'aws'>(
  parameters: CallanalyticsjobArnParameters<Partition>,
) {
  return new CallanalyticsjobArn<Partition>(parameters)
}

export interface CallanalyticscategoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly categoryName: string
}
class CallanalyticscategoryArn<
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
  constructor(parameters: CallanalyticscategoryArnParameters<Partition>) {
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
export type { CallanalyticscategoryArn }
export function callanalyticscategoryArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CallanalyticscategoryArnParameters<Partition>) {
  return new CallanalyticscategoryArn<Partition>(parameters)
}

export interface MedicalscribejobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class MedicalscribejobArn<
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
  constructor(parameters: MedicalscribejobArnParameters<Partition>) {
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
export type { MedicalscribejobArn }
export function medicalscribejobArn<Partition extends ArnPartition = 'aws'>(
  parameters: MedicalscribejobArnParameters<Partition>,
) {
  return new MedicalscribejobArn<Partition>(parameters)
}

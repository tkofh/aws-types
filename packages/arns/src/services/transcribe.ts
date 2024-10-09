export interface TranscriptionjobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobName: string
}
export type TranscriptionjobArn = `arn:${string}:transcribe:${string}:${string}:transcription-job/${string}`
export function transcriptionjobArn(parameters: TranscriptionjobArnParameters): TranscriptionjobArn {
  return `arn:${parameters.partition ?? ''}:transcribe:${parameters.region}:${parameters.account}:transcription-job/${parameters.jobName}`
}

export interface VocabularyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vocabularyName: string
}
export type VocabularyArn = `arn:${string}:transcribe:${string}:${string}:vocabulary/${string}`
export function vocabularyArn(parameters: VocabularyArnParameters): VocabularyArn {
  return `arn:${parameters.partition ?? ''}:transcribe:${parameters.region}:${parameters.account}:vocabulary/${parameters.vocabularyName}`
}

export interface VocabularyfilterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vocabularyFilterName: string
}
export type VocabularyfilterArn = `arn:${string}:transcribe:${string}:${string}:vocabulary-filter/${string}`
export function vocabularyfilterArn(parameters: VocabularyfilterArnParameters): VocabularyfilterArn {
  return `arn:${parameters.partition ?? ''}:transcribe:${parameters.region}:${parameters.account}:vocabulary-filter/${parameters.vocabularyFilterName}`
}

export interface LanguagemodelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelName: string
}
export type LanguagemodelArn = `arn:${string}:transcribe:${string}:${string}:language-model/${string}`
export function languagemodelArn(parameters: LanguagemodelArnParameters): LanguagemodelArn {
  return `arn:${parameters.partition ?? ''}:transcribe:${parameters.region}:${parameters.account}:language-model/${parameters.modelName}`
}

export interface MedicaltranscriptionjobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobName: string
}
export type MedicaltranscriptionjobArn = `arn:${string}:transcribe:${string}:${string}:medical-transcription-job/${string}`
export function medicaltranscriptionjobArn(parameters: MedicaltranscriptionjobArnParameters): MedicaltranscriptionjobArn {
  return `arn:${parameters.partition ?? ''}:transcribe:${parameters.region}:${parameters.account}:medical-transcription-job/${parameters.jobName}`
}

export interface MedicalvocabularyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vocabularyName: string
}
export type MedicalvocabularyArn = `arn:${string}:transcribe:${string}:${string}:medical-vocabulary/${string}`
export function medicalvocabularyArn(parameters: MedicalvocabularyArnParameters): MedicalvocabularyArn {
  return `arn:${parameters.partition ?? ''}:transcribe:${parameters.region}:${parameters.account}:medical-vocabulary/${parameters.vocabularyName}`
}

export interface CallanalyticsjobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobName: string
}
export type CallanalyticsjobArn = `arn:${string}:transcribe:${string}:${string}:analytics-job/${string}`
export function callanalyticsjobArn(parameters: CallanalyticsjobArnParameters): CallanalyticsjobArn {
  return `arn:${parameters.partition ?? ''}:transcribe:${parameters.region}:${parameters.account}:analytics-job/${parameters.jobName}`
}

export interface CallanalyticscategoryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  categoryName: string
}
export type CallanalyticscategoryArn = `arn:${string}:transcribe:${string}:${string}:analytics-category/${string}`
export function callanalyticscategoryArn(parameters: CallanalyticscategoryArnParameters): CallanalyticscategoryArn {
  return `arn:${parameters.partition ?? ''}:transcribe:${parameters.region}:${parameters.account}:analytics-category/${parameters.categoryName}`
}

export interface MedicalscribejobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobName: string
}
export type MedicalscribejobArn = `arn:${string}:transcribe:${string}:${string}:medical-scribe-job/${string}`
export function medicalscribejobArn(parameters: MedicalscribejobArnParameters): MedicalscribejobArn {
  return `arn:${parameters.partition ?? ''}:transcribe:${parameters.region}:${parameters.account}:medical-scribe-job/${parameters.jobName}`
}
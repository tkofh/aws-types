export interface AnnotationImportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  annotationImportJobId: string
}
export type AnnotationImportJobArn = `arn:${string}:omics:${string}:${string}:annotationImportJob/${string}`
export function annotationImportJobArn(parameters: AnnotationImportJobArnParameters): AnnotationImportJobArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:annotationImportJob/${parameters.annotationImportJobId}`
}

export interface AnnotationStoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  annotationStoreId: string
}
export type AnnotationStoreArn = `arn:${string}:omics:${string}:${string}:annotationStore/${string}`
export function annotationStoreArn(parameters: AnnotationStoreArnParameters): AnnotationStoreArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:annotationStore/${parameters.annotationStoreId}`
}

export interface AnnotationStoreVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  annotationStoreName: string
  annotationStoreVersionName: string
}
export type AnnotationStoreVersionArn = `arn:${string}:omics:${string}:${string}:annotationStore/${string}/version/${string}`
export function annotationStoreVersionArn(parameters: AnnotationStoreVersionArnParameters): AnnotationStoreVersionArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:annotationStore/${parameters.annotationStoreName}/version/${parameters.annotationStoreVersionName}`
}

export interface ReadSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sequenceStoreId: string
  readSetId: string
}
export type ReadSetArn = `arn:${string}:omics:${string}:${string}:sequenceStore/${string}/readSet/${string}`
export function readSetArn(parameters: ReadSetArnParameters): ReadSetArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:sequenceStore/${parameters.sequenceStoreId}/readSet/${parameters.readSetId}`
}

export interface ReferenceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  referenceStoreId: string
  referenceId: string
}
export type ReferenceArn = `arn:${string}:omics:${string}:${string}:referenceStore/${string}/reference/${string}`
export function referenceArn(parameters: ReferenceArnParameters): ReferenceArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:referenceStore/${parameters.referenceStoreId}/reference/${parameters.referenceId}`
}

export interface ReferenceStoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  referenceStoreId: string
}
export type ReferenceStoreArn = `arn:${string}:omics:${string}:${string}:referenceStore/${string}`
export function referenceStoreArn(parameters: ReferenceStoreArnParameters): ReferenceStoreArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:referenceStore/${parameters.referenceStoreId}`
}

export interface RunArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type RunArn = `arn:${string}:omics:${string}:${string}:run/${string}`
export function runArn(parameters: RunArnParameters): RunArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:run/${parameters.id}`
}

export interface RunGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type RunGroupArn = `arn:${string}:omics:${string}:${string}:runGroup/${string}`
export function runGroupArn(parameters: RunGroupArnParameters): RunGroupArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:runGroup/${parameters.id}`
}

export interface SequenceStoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sequenceStoreId: string
}
export type SequenceStoreArn = `arn:${string}:omics:${string}:${string}:sequenceStore/${string}`
export function sequenceStoreArn(parameters: SequenceStoreArnParameters): SequenceStoreArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:sequenceStore/${parameters.sequenceStoreId}`
}

export interface TaggingResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tagKey: string
}
export type TaggingResourceArn = `arn:${string}:omics:${string}:${string}:tag/${string}`
export function taggingResourceArn(parameters: TaggingResourceArnParameters): TaggingResourceArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:tag/${parameters.tagKey}`
}

export interface TaskResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type TaskResourceArn = `arn:${string}:omics:${string}:${string}:task/${string}`
export function taskResourceArn(parameters: TaskResourceArnParameters): TaskResourceArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:task/${parameters.id}`
}

export interface VariantImportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  variantImportJobId: string
}
export type VariantImportJobArn = `arn:${string}:omics:${string}:${string}:variantImportJob/${string}`
export function variantImportJobArn(parameters: VariantImportJobArnParameters): VariantImportJobArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:variantImportJob/${parameters.variantImportJobId}`
}

export interface VariantStoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  variantStoreId: string
}
export type VariantStoreArn = `arn:${string}:omics:${string}:${string}:variantStore/${string}`
export function variantStoreArn(parameters: VariantStoreArnParameters): VariantStoreArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:variantStore/${parameters.variantStoreId}`
}

export interface WorkflowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type WorkflowArn = `arn:${string}:omics:${string}:${string}:workflow/${string}`
export function workflowArn(parameters: WorkflowArnParameters): WorkflowArn {
  return `arn:${parameters.partition ?? ''}:omics:${parameters.region}:${parameters.account}:workflow/${parameters.id}`
}
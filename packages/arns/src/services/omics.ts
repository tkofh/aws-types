import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface JobImportAnnotationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobImportAnnotation: string
}
class JobImportAnnotationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AnnotationImportJob',
  `arn:${string}:omics:${string}:${string}:annotationImportJob/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AnnotationImportJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobImportAnnotation: string
  constructor(parameters: JobImportAnnotationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobImportAnnotation = parameters.idJobImportAnnotation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:annotationImportJob/${this.idJobImportAnnotation}` as const
  }
}
export type { JobImportAnnotationArn }
export function jobImportAnnotationArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobImportAnnotationArnParameters<Partition>,
) {
  return new JobImportAnnotationArn<Partition>(parameters)
}

export interface StoreAnnotationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreAnnotation: string
}
class StoreAnnotationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AnnotationStore',
  `arn:${string}:omics:${string}:${string}:annotationStore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AnnotationStore' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreAnnotation: string
  constructor(parameters: StoreAnnotationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStoreAnnotation = parameters.idStoreAnnotation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:annotationStore/${this.idStoreAnnotation}` as const
  }
}
export type { StoreAnnotationArn }
export function storeAnnotationArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreAnnotationArnParameters<Partition>,
) {
  return new StoreAnnotationArn<Partition>(parameters)
}

export interface VersionStoreAnnotationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStoreAnnotation: string
  readonly nameVersionStoreAnnotation: string
}
class VersionStoreAnnotationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AnnotationStoreVersion',
  `arn:${string}:omics:${string}:${string}:annotationStore/${string}/version/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AnnotationStoreVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStoreAnnotation: string
  readonly nameVersionStoreAnnotation: string
  constructor(parameters: VersionStoreAnnotationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameStoreAnnotation = parameters.nameStoreAnnotation
    this.nameVersionStoreAnnotation = parameters.nameVersionStoreAnnotation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:annotationStore/${this.nameStoreAnnotation}/version/${this.nameVersionStoreAnnotation}` as const
  }
}
export type { VersionStoreAnnotationArn }
export function versionStoreAnnotationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionStoreAnnotationArnParameters<Partition>) {
  return new VersionStoreAnnotationArn<Partition>(parameters)
}

export interface SetReadArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreSequence: string
  readonly idReadset: string
}
class SetReadArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'readSet',
  `arn:${string}:omics:${string}:${string}:sequenceStore/${string}/readSet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'readSet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreSequence: string
  readonly idReadset: string
  constructor(parameters: SetReadArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStoreSequence = parameters.idStoreSequence
    this.idReadset = parameters.idReadset
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:sequenceStore/${this.idStoreSequence}/readSet/${this.idReadset}` as const
  }
}
export type { SetReadArn }
export function setReadArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetReadArnParameters<Partition>,
) {
  return new SetReadArn<Partition>(parameters)
}

export interface ReferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreReference: string
  readonly idReference: string
}
class ReferenceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'reference',
  `arn:${string}:omics:${string}:${string}:referenceStore/${string}/reference/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reference' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreReference: string
  readonly idReference: string
  constructor(parameters: ReferenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStoreReference = parameters.idStoreReference
    this.idReference = parameters.idReference
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:referenceStore/${this.idStoreReference}/reference/${this.idReference}` as const
  }
}
export type { ReferenceArn }
export function referenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReferenceArnParameters<Partition>,
) {
  return new ReferenceArn<Partition>(parameters)
}

export interface StoreReferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreReference: string
}
class StoreReferenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'referenceStore',
  `arn:${string}:omics:${string}:${string}:referenceStore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'referenceStore' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreReference: string
  constructor(parameters: StoreReferenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStoreReference = parameters.idStoreReference
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:referenceStore/${this.idStoreReference}` as const
  }
}
export type { StoreReferenceArn }
export function storeReferenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreReferenceArnParameters<Partition>,
) {
  return new StoreReferenceArn<Partition>(parameters)
}

export interface RunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class RunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'run',
  `arn:${string}:omics:${string}:${string}:run/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'run' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: RunArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:run/${this.id}` as const
  }
}
export type { RunArn }
export function runArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunArnParameters<Partition>,
) {
  return new RunArn<Partition>(parameters)
}

export interface GroupRunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class GroupRunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'runGroup',
  `arn:${string}:omics:${string}:${string}:runGroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'runGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: GroupRunArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:runGroup/${this.id}` as const
  }
}
export type { GroupRunArn }
export function groupRunArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupRunArnParameters<Partition>,
) {
  return new GroupRunArn<Partition>(parameters)
}

export interface StoreSequenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreSequence: string
}
class StoreSequenceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sequenceStore',
  `arn:${string}:omics:${string}:${string}:sequenceStore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sequenceStore' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreSequence: string
  constructor(parameters: StoreSequenceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStoreSequence = parameters.idStoreSequence
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:sequenceStore/${this.idStoreSequence}` as const
  }
}
export type { StoreSequenceArn }
export function storeSequenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreSequenceArnParameters<Partition>,
) {
  return new StoreSequenceArn<Partition>(parameters)
}

export interface ResourceTaggingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly keyTag: string
}
class ResourceTaggingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TaggingResource',
  `arn:${string}:omics:${string}:${string}:tag/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TaggingResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly keyTag: string
  constructor(parameters: ResourceTaggingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.keyTag = parameters.keyTag
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:tag/${this.keyTag}` as const
  }
}
export type { ResourceTaggingArn }
export function resourceTaggingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceTaggingArnParameters<Partition>,
) {
  return new ResourceTaggingArn<Partition>(parameters)
}

export interface ResourceTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class ResourceTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TaskResource',
  `arn:${string}:omics:${string}:${string}:task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TaskResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: ResourceTaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:task/${this.id}` as const
  }
}
export type { ResourceTaskArn }
export function resourceTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceTaskArnParameters<Partition>,
) {
  return new ResourceTaskArn<Partition>(parameters)
}

export interface JobImportVariantArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobImportVariant: string
}
class JobImportVariantArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'VariantImportJob',
  `arn:${string}:omics:${string}:${string}:variantImportJob/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VariantImportJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobImportVariant: string
  constructor(parameters: JobImportVariantArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobImportVariant = parameters.idJobImportVariant
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:variantImportJob/${this.idJobImportVariant}` as const
  }
}
export type { JobImportVariantArn }
export function jobImportVariantArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobImportVariantArnParameters<Partition>,
) {
  return new JobImportVariantArn<Partition>(parameters)
}

export interface StoreVariantArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreVariant: string
}
class StoreVariantArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'VariantStore',
  `arn:${string}:omics:${string}:${string}:variantStore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VariantStore' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreVariant: string
  constructor(parameters: StoreVariantArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStoreVariant = parameters.idStoreVariant
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:variantStore/${this.idStoreVariant}` as const
  }
}
export type { StoreVariantArn }
export function storeVariantArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreVariantArnParameters<Partition>,
) {
  return new StoreVariantArn<Partition>(parameters)
}

export interface WorkflowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class WorkflowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workflow',
  `arn:${string}:omics:${string}:${string}:workflow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: WorkflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:workflow/${this.id}` as const
  }
}
export type { WorkflowArn }
export function workflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkflowArnParameters<Partition>,
) {
  return new WorkflowArn<Partition>(parameters)
}

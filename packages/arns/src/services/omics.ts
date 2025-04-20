import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AnnotationImportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly annotationImportJobId: string
}
class AnnotationImportJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AnnotationImportJob',
  `arn:${string}:omics:${string}:${string}:annotationImportJob/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AnnotationImportJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly annotationImportJobId: string
  constructor(parameters: AnnotationImportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.annotationImportJobId = parameters.annotationImportJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:annotationImportJob/${this.annotationImportJobId}` as const
  }
}
export type { AnnotationImportJobArn }
export function annotationImportJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnnotationImportJobArnParameters<Partition>,
) {
  return new AnnotationImportJobArn<Partition>(parameters)
}

export interface AnnotationStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly annotationStoreId: string
}
class AnnotationStoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AnnotationStore',
  `arn:${string}:omics:${string}:${string}:annotationStore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AnnotationStore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly annotationStoreId: string
  constructor(parameters: AnnotationStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.annotationStoreId = parameters.annotationStoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:annotationStore/${this.annotationStoreId}` as const
  }
}
export type { AnnotationStoreArn }
export function annotationStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnnotationStoreArnParameters<Partition>,
) {
  return new AnnotationStoreArn<Partition>(parameters)
}

export interface AnnotationStoreVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly annotationStoreName: string
  readonly annotationStoreVersionName: string
}
class AnnotationStoreVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AnnotationStoreVersion',
  `arn:${string}:omics:${string}:${string}:annotationStore/${string}/version/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AnnotationStoreVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly annotationStoreName: string
  readonly annotationStoreVersionName: string
  constructor(parameters: AnnotationStoreVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.annotationStoreName = parameters.annotationStoreName
    this.annotationStoreVersionName = parameters.annotationStoreVersionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:annotationStore/${this.annotationStoreName}/version/${this.annotationStoreVersionName}` as const
  }
}
export type { AnnotationStoreVersionArn }
export function annotationStoreVersionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AnnotationStoreVersionArnParameters<Partition>) {
  return new AnnotationStoreVersionArn<Partition>(parameters)
}

export interface ReadSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sequenceStoreId: string
  readonly readsetId: string
}
class ReadSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'readSet',
  `arn:${string}:omics:${string}:${string}:sequenceStore/${string}/readSet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'readSet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sequenceStoreId: string
  readonly readsetId: string
  constructor(parameters: ReadSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sequenceStoreId = parameters.sequenceStoreId
    this.readsetId = parameters.readsetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:sequenceStore/${this.sequenceStoreId}/readSet/${this.readsetId}` as const
  }
}
export type { ReadSetArn }
export function readSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReadSetArnParameters<Partition>,
) {
  return new ReadSetArn<Partition>(parameters)
}

export interface ReferenceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly referenceStoreId: string
  readonly referenceId: string
}
class ReferenceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'reference',
  `arn:${string}:omics:${string}:${string}:referenceStore/${string}/reference/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'reference' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly referenceStoreId: string
  readonly referenceId: string
  constructor(parameters: ReferenceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.referenceStoreId = parameters.referenceStoreId
    this.referenceId = parameters.referenceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:referenceStore/${this.referenceStoreId}/reference/${this.referenceId}` as const
  }
}
export type { ReferenceArn }
export function referenceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReferenceArnParameters<Partition>,
) {
  return new ReferenceArn<Partition>(parameters)
}

export interface ReferenceStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly referenceStoreId: string
}
class ReferenceStoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'referenceStore',
  `arn:${string}:omics:${string}:${string}:referenceStore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'referenceStore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly referenceStoreId: string
  constructor(parameters: ReferenceStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.referenceStoreId = parameters.referenceStoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:referenceStore/${this.referenceStoreId}` as const
  }
}
export type { ReferenceStoreArn }
export function referenceStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReferenceStoreArnParameters<Partition>,
) {
  return new ReferenceStoreArn<Partition>(parameters)
}

export interface RunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'run',
  `arn:${string}:omics:${string}:${string}:run/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'run' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RunArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

export interface RunGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RunGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'runGroup',
  `arn:${string}:omics:${string}:${string}:runGroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'runGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RunGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:runGroup/${this.id}` as const
  }
}
export type { RunGroupArn }
export function runGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunGroupArnParameters<Partition>,
) {
  return new RunGroupArn<Partition>(parameters)
}

export interface SequenceStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sequenceStoreId: string
}
class SequenceStoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sequenceStore',
  `arn:${string}:omics:${string}:${string}:sequenceStore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sequenceStore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sequenceStoreId: string
  constructor(parameters: SequenceStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sequenceStoreId = parameters.sequenceStoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:sequenceStore/${this.sequenceStoreId}` as const
  }
}
export type { SequenceStoreArn }
export function sequenceStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: SequenceStoreArnParameters<Partition>,
) {
  return new SequenceStoreArn<Partition>(parameters)
}

export interface TaggingResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tagKey: string
}
class TaggingResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TaggingResource',
  `arn:${string}:omics:${string}:${string}:tag/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TaggingResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tagKey: string
  constructor(parameters: TaggingResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tagKey = parameters.tagKey
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:tag/${this.tagKey}` as const
  }
}
export type { TaggingResourceArn }
export function taggingResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaggingResourceArnParameters<Partition>,
) {
  return new TaggingResourceArn<Partition>(parameters)
}

export interface TaskResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class TaskResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TaskResource',
  `arn:${string}:omics:${string}:${string}:task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TaskResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: TaskResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:task/${this.id}` as const
  }
}
export type { TaskResourceArn }
export function taskResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskResourceArnParameters<Partition>,
) {
  return new TaskResourceArn<Partition>(parameters)
}

export interface VariantImportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly variantImportJobId: string
}
class VariantImportJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'VariantImportJob',
  `arn:${string}:omics:${string}:${string}:variantImportJob/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VariantImportJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly variantImportJobId: string
  constructor(parameters: VariantImportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.variantImportJobId = parameters.variantImportJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:variantImportJob/${this.variantImportJobId}` as const
  }
}
export type { VariantImportJobArn }
export function variantImportJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: VariantImportJobArnParameters<Partition>,
) {
  return new VariantImportJobArn<Partition>(parameters)
}

export interface VariantStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly variantStoreId: string
}
class VariantStoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'VariantStore',
  `arn:${string}:omics:${string}:${string}:variantStore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VariantStore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly variantStoreId: string
  constructor(parameters: VariantStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.variantStoreId = parameters.variantStoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:omics:${this.region}:${this.account}:variantStore/${this.variantStoreId}` as const
  }
}
export type { VariantStoreArn }
export function variantStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: VariantStoreArnParameters<Partition>,
) {
  return new VariantStoreArn<Partition>(parameters)
}

export interface WorkflowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class WorkflowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workflow',
  `arn:${string}:omics:${string}:${string}:workflow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: WorkflowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

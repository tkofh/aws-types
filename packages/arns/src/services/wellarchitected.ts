import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface WorkloadArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class WorkloadArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workload', `arn:${string}:wellarchitected:${string}:${string}:workload/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workload' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: WorkloadArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wellarchitected:${this.region}:${this.account}:workload/${this.resourceId}` as const
  }
}
export type { WorkloadArn }
export function workloadArn<Partition extends ArnPartition = 'aws'>(parameters: WorkloadArnParameters<Partition>) {
  return new WorkloadArn<Partition>(parameters)
}

export interface LensArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class LensArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'lens', `arn:${string}:wellarchitected:${string}:${string}:lens/${string}`> {
  readonly [ArnResourceTypeBrand] = 'lens' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: LensArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wellarchitected:${this.region}:${this.account}:lens/${this.resourceId}` as const
  }
}
export type { LensArn }
export function lensArn<Partition extends ArnPartition = 'aws'>(parameters: LensArnParameters<Partition>) {
  return new LensArn<Partition>(parameters)
}

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'profile', `arn:${string}:wellarchitected:${string}:${string}:profile/${string}`> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wellarchitected:${this.region}:${this.account}:profile/${this.resourceId}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(parameters: ProfileArnParameters<Partition>) {
  return new ProfileArn<Partition>(parameters)
}

export interface ReviewTemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ReviewTemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'review-template', `arn:${string}:wellarchitected:${string}:${string}:review-template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'review-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ReviewTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wellarchitected:${this.region}:${this.account}:review-template/${this.resourceId}` as const
  }
}
export type { ReviewTemplateArn }
export function reviewTemplateArn<Partition extends ArnPartition = 'aws'>(parameters: ReviewTemplateArnParameters<Partition>) {
  return new ReviewTemplateArn<Partition>(parameters)
}
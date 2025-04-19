import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'association', `arn:${string}:codeguru-reviewer:${string}:${string}:association:${string}`> {
  readonly [ArnResourceTypeBrand] = 'association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeguru-reviewer:${this.region}:${this.account}:association:${this.resourceId}` as const
  }
}
export type { AssociationArn }
export function associationArn<Partition extends ArnPartition = 'aws'>(parameters: AssociationArnParameters<Partition>) {
  return new AssociationArn<Partition>(parameters)
}

export interface CodereviewArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  readonly codeReviewId: string
}
class CodereviewArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'codereview', `arn:${string}:codeguru-reviewer:${string}:${string}:association:${string}:codereview:${string}`> {
  readonly [ArnResourceTypeBrand] = 'codereview' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  readonly codeReviewId: string
  constructor(parameters: CodereviewArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
    this.codeReviewId = parameters.codeReviewId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeguru-reviewer:${this.region}:${this.account}:association:${this.resourceId}:codereview:${this.codeReviewId}` as const
  }
}
export type { CodereviewArn }
export function codereviewArn<Partition extends ArnPartition = 'aws'>(parameters: CodereviewArnParameters<Partition>) {
  return new CodereviewArn<Partition>(parameters)
}
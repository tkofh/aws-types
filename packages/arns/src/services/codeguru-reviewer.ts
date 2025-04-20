import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class AssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'association',
  `arn:${string}:codeguru-reviewer:${string}:${string}:association:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AssociationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeguru-reviewer:${this.region}:${this.account}:association:${this.idResource}` as const
  }
}
export type { AssociationArn }
export function associationArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationArnParameters<Partition>,
) {
  return new AssociationArn<Partition>(parameters)
}

export interface ReviewCodeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  readonly idReviewCode: string
}
class ReviewCodeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'codereview',
  `arn:${string}:codeguru-reviewer:${string}:${string}:association:${string}:codereview:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'codereview' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  readonly idReviewCode: string
  constructor(parameters: ReviewCodeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
    this.idReviewCode = parameters.idReviewCode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeguru-reviewer:${this.region}:${this.account}:association:${this.idResource}:codereview:${this.idReviewCode}` as const
  }
}
export type { ReviewCodeArn }
export function reviewCodeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReviewCodeArnParameters<Partition>,
) {
  return new ReviewCodeArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ScalableTargetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ScalableTargetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ScalableTarget',
  `arn:${string}:application-autoscaling:${string}:${string}:scalable-target/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ScalableTarget' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ScalableTargetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:application-autoscaling:${this.region}:${this.account}:scalable-target/${this.resourceId}` as const
  }
}
export type { ScalableTargetArn }
export function scalableTargetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScalableTargetArnParameters<Partition>,
) {
  return new ScalableTargetArn<Partition>(parameters)
}

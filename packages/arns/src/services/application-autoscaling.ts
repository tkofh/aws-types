import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TargetScalableArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TargetScalableArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ScalableTarget',
  `arn:${string}:application-autoscaling:${string}:${string}:scalable-target/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ScalableTarget' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TargetScalableArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:application-autoscaling:${this.region}:${this.account}:scalable-target/${this.idResource}` as const
  }
}
export type { TargetScalableArn }
export function targetScalableArn<Partition extends ArnPartition = 'aws'>(
  parameters: TargetScalableArnParameters<Partition>,
) {
  return new TargetScalableArn<Partition>(parameters)
}

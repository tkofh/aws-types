import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PlanSavingsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class PlanSavingsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'savingsplan',
  `arn:${string}:savingsplans::${string}:savingsplan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'savingsplan' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: PlanSavingsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:savingsplans::${this.account}:savingsplan/${this.idResource}` as const
  }
}
export type { PlanSavingsArn }
export function planSavingsArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlanSavingsArnParameters<Partition>,
) {
  return new PlanSavingsArn<Partition>(parameters)
}

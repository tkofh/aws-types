import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface SavingsplanArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class SavingsplanArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'savingsplan', `arn:${string}:savingsplans::${string}:savingsplan/${string}`> {
  readonly [ArnResourceTypeBrand] = 'savingsplan' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: SavingsplanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:savingsplans::${this.account}:savingsplan/${this.resourceId}` as const
  }
}
export type { SavingsplanArn }
export function savingsplanArn<Partition extends ArnPartition = 'aws'>(parameters: SavingsplanArnParameters<Partition>) {
  return new SavingsplanArn<Partition>(parameters)
}
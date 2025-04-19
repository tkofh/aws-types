import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AcceleratorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly acceleratorId: string
}
class AcceleratorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'accelerator', `arn:${string}:elastic-inference:${string}:${string}:elastic-inference-accelerator/${string}`> {
  readonly [ArnResourceTypeBrand] = 'accelerator' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly acceleratorId: string
  constructor(parameters: AcceleratorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.acceleratorId = parameters.acceleratorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elastic-inference:${this.region}:${this.account}:elastic-inference-accelerator/${this.acceleratorId}` as const
  }
}
export type { AcceleratorArn }
export function acceleratorArn<Partition extends ArnPartition = 'aws'>(parameters: AcceleratorArnParameters<Partition>) {
  return new AcceleratorArn<Partition>(parameters)
}
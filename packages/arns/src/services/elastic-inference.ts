import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AcceleratorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccelerator: string
}
class AcceleratorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'accelerator',
  `arn:${string}:elastic-inference:${string}:${string}:elastic-inference-accelerator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accelerator' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccelerator: string
  constructor(parameters: AcceleratorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAccelerator = parameters.idAccelerator
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elastic-inference:${this.region}:${this.account}:elastic-inference-accelerator/${this.idAccelerator}` as const
  }
}
export type { AcceleratorArn }
export function acceleratorArn<Partition extends ArnPartition = 'aws'>(
  parameters: AcceleratorArnParameters<Partition>,
) {
  return new AcceleratorArn<Partition>(parameters)
}

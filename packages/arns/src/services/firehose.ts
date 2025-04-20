import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StreamDeliveryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStreamDelivery: string
}
class StreamDeliveryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deliverystream',
  `arn:${string}:firehose:${string}:${string}:deliverystream/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deliverystream' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStreamDelivery: string
  constructor(parameters: StreamDeliveryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameStreamDelivery = parameters.nameStreamDelivery
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:firehose:${this.region}:${this.account}:deliverystream/${this.nameStreamDelivery}` as const
  }
}
export type { StreamDeliveryArn }
export function streamDeliveryArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamDeliveryArnParameters<Partition>,
) {
  return new StreamDeliveryArn<Partition>(parameters)
}

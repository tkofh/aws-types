import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeliveryStreamArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliveryStreamName: string
}
class DeliveryStreamArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deliverystream',
  `arn:${string}:firehose:${string}:${string}:deliverystream/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deliverystream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliveryStreamName: string
  constructor(parameters: DeliveryStreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deliveryStreamName = parameters.deliveryStreamName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:firehose:${this.region}:${this.account}:deliverystream/${this.deliveryStreamName}` as const
  }
}
export type { DeliveryStreamArn }
export function deliveryStreamArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeliveryStreamArnParameters<Partition>,
) {
  return new DeliveryStreamArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DeliverystreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliveryStreamName: string
}
class DeliverystreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'deliverystream', `arn:${string}:firehose:${string}:${string}:deliverystream/${string}`> {
  readonly [ArnResourceTypeBrand] = 'deliverystream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliveryStreamName: string
  constructor(parameters: DeliverystreamArnParameters<Partition>) {
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
export type { DeliverystreamArn }
export function deliverystreamArn<Partition extends ArnPartition = 'aws'>(parameters: DeliverystreamArnParameters<Partition>) {
  return new DeliverystreamArn<Partition>(parameters)
}
import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface SloArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sloName: string
}
class SloArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'slo', `arn:${string}:application-signals:${string}:${string}:slo/${string}`> {
  readonly [ArnResourceTypeBrand] = 'slo' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sloName: string
  constructor(parameters: SloArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sloName = parameters.sloName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:application-signals:${this.region}:${this.account}:slo/${this.sloName}` as const
  }
}
export type { SloArn }
export function sloArn<Partition extends ArnPartition = 'aws'>(parameters: SloArnParameters<Partition>) {
  return new SloArn<Partition>(parameters)
}
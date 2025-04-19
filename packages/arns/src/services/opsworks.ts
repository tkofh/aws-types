import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackId: string
}
class StackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stack',
  `arn:${string}:opsworks:${string}:${string}:stack/${string}/`
> {
  readonly [ArnResourceTypeBrand] = 'stack' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stackId: string
  constructor(parameters: StackArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stackId = parameters.stackId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:opsworks:${this.region}:${this.account}:stack/${this.stackId}/` as const
  }
}
export type { StackArn }
export function stackArn<Partition extends ArnPartition = 'aws'>(
  parameters: StackArnParameters<Partition>,
) {
  return new StackArn<Partition>(parameters)
}

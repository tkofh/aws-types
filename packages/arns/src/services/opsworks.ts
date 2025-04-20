import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StackArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStack: string
}
class StackArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stack',
  `arn:${string}:opsworks:${string}:${string}:stack/${string}/`
> {
  readonly [ArnResourceTypeBrand] = 'stack' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStack: string
  constructor(parameters: StackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStack = parameters.idStack
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:opsworks:${this.region}:${this.account}:stack/${this.idStack}/` as const
  }
}
export type { StackArn }
export function stackArn<Partition extends ArnPartition = 'aws'>(
  parameters: StackArnParameters<Partition>,
) {
  return new StackArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PipeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class PipeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pipe',
  `arn:${string}:pipes:${string}:${string}:pipe/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipe' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: PipeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pipes:${this.region}:${this.account}:pipe/${this.name}` as const
  }
}
export type { PipeArn }
export function pipeArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipeArnParameters<Partition>,
) {
  return new PipeArn<Partition>(parameters)
}

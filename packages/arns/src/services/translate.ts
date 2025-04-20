import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TerminologyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameResource: string
}
class TerminologyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'terminology',
  `arn:${string}:translate:${string}:${string}:terminology/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'terminology' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameResource: string
  constructor(parameters: TerminologyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameResource = parameters.nameResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:translate:${this.region}:${this.account}:terminology/${this.nameResource}` as const
  }
}
export type { TerminologyArn }
export function terminologyArn<Partition extends ArnPartition = 'aws'>(
  parameters: TerminologyArnParameters<Partition>,
) {
  return new TerminologyArn<Partition>(parameters)
}

export interface DataParallelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameResource: string
}
class DataParallelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'parallel-data',
  `arn:${string}:translate:${string}:${string}:parallel-data/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'parallel-data' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameResource: string
  constructor(parameters: DataParallelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameResource = parameters.nameResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:translate:${this.region}:${this.account}:parallel-data/${this.nameResource}` as const
  }
}
export type { DataParallelArn }
export function dataParallelArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataParallelArnParameters<Partition>,
) {
  return new DataParallelArn<Partition>(parameters)
}

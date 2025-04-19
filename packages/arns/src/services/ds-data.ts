import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DirectoryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
}
class DirectoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'directory', `arn:${string}:ds:${string}:${string}:directory/${string}`> {
  readonly [ArnResourceTypeBrand] = 'directory' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
  constructor(parameters: DirectoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.directoryId = parameters.directoryId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ds:${this.region}:${this.account}:directory/${this.directoryId}` as const
  }
}
export type { DirectoryArn }
export function directoryArn<Partition extends ArnPartition = 'aws'>(parameters: DirectoryArnParameters<Partition>) {
  return new DirectoryArn<Partition>(parameters)
}
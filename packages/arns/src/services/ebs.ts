import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly snapshotId: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'snapshot', `arn:${string}:ec2:${string}::snapshot/${string}`> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly snapshotId: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.snapshotId = parameters.snapshotId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}::snapshot/${this.snapshotId}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(parameters: SnapshotArnParameters<Partition>) {
  return new SnapshotArn<Partition>(parameters)
}
import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:docdb-elastic:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:docdb-elastic:${this.region}:${this.account}:cluster/${this.idResource}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface SnapshotClusterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SnapshotClusterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cluster-snapshot',
  `arn:${string}:docdb-elastic:${string}:${string}:cluster-snapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster-snapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SnapshotClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:docdb-elastic:${this.region}:${this.account}:cluster-snapshot/${this.idResource}` as const
  }
}
export type { SnapshotClusterArn }
export function snapshotClusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotClusterArnParameters<Partition>,
) {
  return new SnapshotClusterArn<Partition>(parameters)
}

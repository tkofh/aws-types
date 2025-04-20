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
  readonly nameCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:redshift:${string}:${string}:cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:cluster:${this.nameCluster}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface WorkgroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkgroup: string
}
class WorkgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workgroup',
  `arn:${string}:redshift-serverless:${string}:${string}:workgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkgroup: string
  constructor(parameters: WorkgroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkgroup = parameters.idWorkgroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:workgroup/${this.idWorkgroup}` as const
  }
}
export type { WorkgroupArn }
export function workgroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkgroupArnParameters<Partition>,
) {
  return new WorkgroupArn<Partition>(parameters)
}

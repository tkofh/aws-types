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
  readonly identifierCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:pcs:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierCluster = parameters.identifierCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pcs:${this.region}:${this.account}:cluster/${this.identifierCluster}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface NodegroupComputeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierCluster: string
  readonly identifierGroupNodeCompute: string
}
class NodegroupComputeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'computenodegroup',
  `arn:${string}:pcs:${string}:${string}:cluster/${string}/computenodegroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'computenodegroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierCluster: string
  readonly identifierGroupNodeCompute: string
  constructor(parameters: NodegroupComputeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierCluster = parameters.identifierCluster
    this.identifierGroupNodeCompute = parameters.identifierGroupNodeCompute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pcs:${this.region}:${this.account}:cluster/${this.identifierCluster}/computenodegroup/${this.identifierGroupNodeCompute}` as const
  }
}
export type { NodegroupComputeArn }
export function nodegroupComputeArn<Partition extends ArnPartition = 'aws'>(
  parameters: NodegroupComputeArnParameters<Partition>,
) {
  return new NodegroupComputeArn<Partition>(parameters)
}

export interface QueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierCluster: string
  readonly identifierQueue: string
}
class QueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'queue',
  `arn:${string}:pcs:${string}:${string}:cluster/${string}/queue/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queue' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierCluster: string
  readonly identifierQueue: string
  constructor(parameters: QueueArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierCluster = parameters.identifierCluster
    this.identifierQueue = parameters.identifierQueue
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pcs:${this.region}:${this.account}:cluster/${this.identifierCluster}/queue/${this.identifierQueue}` as const
  }
}
export type { QueueArn }
export function queueArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueArnParameters<Partition>,
) {
  return new QueueArn<Partition>(parameters)
}

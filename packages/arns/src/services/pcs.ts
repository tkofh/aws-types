import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterIdentifier: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:pcs:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterIdentifier: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterIdentifier = parameters.clusterIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pcs:${this.region}:${this.account}:cluster/${this.clusterIdentifier}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface ComputenodegroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterIdentifier: string
  readonly computeNodeGroupIdentifier: string
}
class ComputenodegroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'computenodegroup',
  `arn:${string}:pcs:${string}:${string}:cluster/${string}/computenodegroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'computenodegroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterIdentifier: string
  readonly computeNodeGroupIdentifier: string
  constructor(parameters: ComputenodegroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterIdentifier = parameters.clusterIdentifier
    this.computeNodeGroupIdentifier = parameters.computeNodeGroupIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pcs:${this.region}:${this.account}:cluster/${this.clusterIdentifier}/computenodegroup/${this.computeNodeGroupIdentifier}` as const
  }
}
export type { ComputenodegroupArn }
export function computenodegroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComputenodegroupArnParameters<Partition>,
) {
  return new ComputenodegroupArn<Partition>(parameters)
}

export interface QueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterIdentifier: string
  readonly queueIdentifier: string
}
class QueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'queue',
  `arn:${string}:pcs:${string}:${string}:cluster/${string}/queue/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queue' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterIdentifier: string
  readonly queueIdentifier: string
  constructor(parameters: QueueArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterIdentifier = parameters.clusterIdentifier
    this.queueIdentifier = parameters.queueIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pcs:${this.region}:${this.account}:cluster/${this.clusterIdentifier}/queue/${this.queueIdentifier}` as const
  }
}
export type { QueueArn }
export function queueArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueArnParameters<Partition>,
) {
  return new QueueArn<Partition>(parameters)
}

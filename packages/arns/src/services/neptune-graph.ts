import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GraphArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class GraphArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'graph',
  `arn:${string}:neptune-graph:${string}:${string}:graph/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'graph' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: GraphArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:neptune-graph:${this.region}:${this.account}:graph/${this.resourceId}` as const
  }
}
export type { GraphArn }
export function graphArn<Partition extends ArnPartition = 'aws'>(
  parameters: GraphArnParameters<Partition>,
) {
  return new GraphArn<Partition>(parameters)
}

export interface GraphSnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class GraphSnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'graph-snapshot',
  `arn:${string}:neptune-graph:${string}:${string}:graph-snapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'graph-snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: GraphSnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:neptune-graph:${this.region}:${this.account}:graph-snapshot/${this.resourceId}` as const
  }
}
export type { GraphSnapshotArn }
export function graphSnapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: GraphSnapshotArnParameters<Partition>,
) {
  return new GraphSnapshotArn<Partition>(parameters)
}

export interface ImportTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ImportTaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'import-task',
  `arn:${string}:neptune-graph:${string}:${string}:import-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import-task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ImportTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:neptune-graph:${this.region}:${this.account}:import-task/${this.resourceId}` as const
  }
}
export type { ImportTaskArn }
export function importTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImportTaskArnParameters<Partition>,
) {
  return new ImportTaskArn<Partition>(parameters)
}

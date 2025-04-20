import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GraphArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class GraphArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'graph',
  `arn:${string}:neptune-graph:${string}:${string}:graph/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'graph' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GraphArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:neptune-graph:${this.region}:${this.account}:graph/${this.idResource}` as const
  }
}
export type { GraphArn }
export function graphArn<Partition extends ArnPartition = 'aws'>(
  parameters: GraphArnParameters<Partition>,
) {
  return new GraphArn<Partition>(parameters)
}

export interface SnapshotGraphArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SnapshotGraphArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'graph-snapshot',
  `arn:${string}:neptune-graph:${string}:${string}:graph-snapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'graph-snapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SnapshotGraphArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:neptune-graph:${this.region}:${this.account}:graph-snapshot/${this.idResource}` as const
  }
}
export type { SnapshotGraphArn }
export function snapshotGraphArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotGraphArnParameters<Partition>,
) {
  return new SnapshotGraphArn<Partition>(parameters)
}

export interface TaskImportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TaskImportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'import-task',
  `arn:${string}:neptune-graph:${string}:${string}:import-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import-task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TaskImportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:neptune-graph:${this.region}:${this.account}:import-task/${this.idResource}` as const
  }
}
export type { TaskImportArn }
export function taskImportArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskImportArnParameters<Partition>,
) {
  return new TaskImportArn<Partition>(parameters)
}

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
  readonly idCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:elasticmapreduce:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCluster = parameters.idCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticmapreduce:${this.region}:${this.account}:cluster/${this.idCluster}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface EditorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEditor: string
}
class EditorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'editor',
  `arn:${string}:elasticmapreduce:${string}:${string}:editor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'editor' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEditor: string
  constructor(parameters: EditorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEditor = parameters.idEditor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticmapreduce:${this.region}:${this.account}:editor/${this.idEditor}` as const
  }
}
export type { EditorArn }
export function editorArn<Partition extends ArnPartition = 'aws'>(
  parameters: EditorArnParameters<Partition>,
) {
  return new EditorArn<Partition>(parameters)
}

export interface ExecutionNotebookArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionNotebook: string
}
class ExecutionNotebookArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'notebook-execution',
  `arn:${string}:elasticmapreduce:${string}:${string}:notebook-execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'notebook-execution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionNotebook: string
  constructor(parameters: ExecutionNotebookArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idExecutionNotebook = parameters.idExecutionNotebook
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticmapreduce:${this.region}:${this.account}:notebook-execution/${this.idExecutionNotebook}` as const
  }
}
export type { ExecutionNotebookArn }
export function executionNotebookArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionNotebookArnParameters<Partition>,
) {
  return new ExecutionNotebookArn<Partition>(parameters)
}

export interface StudioArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStudio: string
}
class StudioArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'studio',
  `arn:${string}:elasticmapreduce:${string}:${string}:studio/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'studio' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStudio: string
  constructor(parameters: StudioArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStudio = parameters.idStudio
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticmapreduce:${this.region}:${this.account}:studio/${this.idStudio}` as const
  }
}
export type { StudioArn }
export function studioArn<Partition extends ArnPartition = 'aws'>(
  parameters: StudioArnParameters<Partition>,
) {
  return new StudioArn<Partition>(parameters)
}

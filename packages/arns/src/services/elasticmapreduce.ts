import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'cluster', `arn:${string}:elasticmapreduce:${string}:${string}:cluster/${string}`> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterId: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterId = parameters.clusterId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticmapreduce:${this.region}:${this.account}:cluster/${this.clusterId}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(parameters: ClusterArnParameters<Partition>) {
  return new ClusterArn<Partition>(parameters)
}

export interface EditorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly editorId: string
}
class EditorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'editor', `arn:${string}:elasticmapreduce:${string}:${string}:editor/${string}`> {
  readonly [ArnResourceTypeBrand] = 'editor' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly editorId: string
  constructor(parameters: EditorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.editorId = parameters.editorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticmapreduce:${this.region}:${this.account}:editor/${this.editorId}` as const
  }
}
export type { EditorArn }
export function editorArn<Partition extends ArnPartition = 'aws'>(parameters: EditorArnParameters<Partition>) {
  return new EditorArn<Partition>(parameters)
}

export interface NotebookExecutionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notebookExecutionId: string
}
class NotebookExecutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'notebook-execution', `arn:${string}:elasticmapreduce:${string}:${string}:notebook-execution/${string}`> {
  readonly [ArnResourceTypeBrand] = 'notebook-execution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notebookExecutionId: string
  constructor(parameters: NotebookExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.notebookExecutionId = parameters.notebookExecutionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticmapreduce:${this.region}:${this.account}:notebook-execution/${this.notebookExecutionId}` as const
  }
}
export type { NotebookExecutionArn }
export function notebookExecutionArn<Partition extends ArnPartition = 'aws'>(parameters: NotebookExecutionArnParameters<Partition>) {
  return new NotebookExecutionArn<Partition>(parameters)
}

export interface StudioArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly studioId: string
}
class StudioArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'studio', `arn:${string}:elasticmapreduce:${string}:${string}:studio/${string}`> {
  readonly [ArnResourceTypeBrand] = 'studio' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly studioId: string
  constructor(parameters: StudioArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.studioId = parameters.studioId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticmapreduce:${this.region}:${this.account}:studio/${this.studioId}` as const
  }
}
export type { StudioArn }
export function studioArn<Partition extends ArnPartition = 'aws'>(parameters: StudioArnParameters<Partition>) {
  return new StudioArn<Partition>(parameters)
}
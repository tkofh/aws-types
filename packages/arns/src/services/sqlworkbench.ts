import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ConnectionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'connection', `arn:${string}:sqlworkbench:${string}:${string}:connection/${string}`> {
  readonly [ArnResourceTypeBrand] = 'connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sqlworkbench:${this.region}:${this.account}:connection/${this.resourceId}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectionArnParameters<Partition>) {
  return new ConnectionArn<Partition>(parameters)
}

export interface QueryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class QueryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'query', `arn:${string}:sqlworkbench:${string}:${string}:query/${string}`> {
  readonly [ArnResourceTypeBrand] = 'query' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: QueryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sqlworkbench:${this.region}:${this.account}:query/${this.resourceId}` as const
  }
}
export type { QueryArn }
export function queryArn<Partition extends ArnPartition = 'aws'>(parameters: QueryArnParameters<Partition>) {
  return new QueryArn<Partition>(parameters)
}

export interface ChartArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ChartArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'chart', `arn:${string}:sqlworkbench:${string}:${string}:chart/${string}`> {
  readonly [ArnResourceTypeBrand] = 'chart' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ChartArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sqlworkbench:${this.region}:${this.account}:chart/${this.resourceId}` as const
  }
}
export type { ChartArn }
export function chartArn<Partition extends ArnPartition = 'aws'>(parameters: ChartArnParameters<Partition>) {
  return new ChartArn<Partition>(parameters)
}

export interface NotebookArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class NotebookArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'notebook', `arn:${string}:sqlworkbench:${string}:${string}:notebook/${string}`> {
  readonly [ArnResourceTypeBrand] = 'notebook' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: NotebookArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sqlworkbench:${this.region}:${this.account}:notebook/${this.resourceId}` as const
  }
}
export type { NotebookArn }
export function notebookArn<Partition extends ArnPartition = 'aws'>(parameters: NotebookArnParameters<Partition>) {
  return new NotebookArn<Partition>(parameters)
}
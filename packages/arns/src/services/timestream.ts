import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DatabaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
}
class DatabaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'database', `arn:${string}:timestream:${string}:${string}:database/${string}`> {
  readonly [ArnResourceTypeBrand] = 'database' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  constructor(parameters: DatabaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.databaseName = parameters.databaseName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream:${this.region}:${this.account}:database/${this.databaseName}` as const
  }
}
export type { DatabaseArn }
export function databaseArn<Partition extends ArnPartition = 'aws'>(parameters: DatabaseArnParameters<Partition>) {
  return new DatabaseArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  readonly tableName: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'table', `arn:${string}:timestream:${string}:${string}:database/${string}/table/${string}`> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly databaseName: string
  readonly tableName: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.databaseName = parameters.databaseName
    this.tableName = parameters.tableName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream:${this.region}:${this.account}:database/${this.databaseName}/table/${this.tableName}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(parameters: TableArnParameters<Partition>) {
  return new TableArn<Partition>(parameters)
}

export interface ScheduledQueryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scheduledQueryName: string
}
class ScheduledQueryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'scheduled-query', `arn:${string}:timestream:${string}:${string}:scheduled-query/${string}`> {
  readonly [ArnResourceTypeBrand] = 'scheduled-query' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scheduledQueryName: string
  constructor(parameters: ScheduledQueryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.scheduledQueryName = parameters.scheduledQueryName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream:${this.region}:${this.account}:scheduled-query/${this.scheduledQueryName}` as const
  }
}
export type { ScheduledQueryArn }
export function scheduledQueryArn<Partition extends ArnPartition = 'aws'>(parameters: ScheduledQueryArnParameters<Partition>) {
  return new ScheduledQueryArn<Partition>(parameters)
}
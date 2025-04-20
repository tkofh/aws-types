import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DatabaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
}
class DatabaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'database',
  `arn:${string}:timestream:${string}:${string}:database/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'database' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  constructor(parameters: DatabaseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDatabase = parameters.nameDatabase
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream:${this.region}:${this.account}:database/${this.nameDatabase}` as const
  }
}
export type { DatabaseArn }
export function databaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatabaseArnParameters<Partition>,
) {
  return new DatabaseArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  readonly nameTable: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'table',
  `arn:${string}:timestream:${string}:${string}:database/${string}/table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDatabase: string
  readonly nameTable: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDatabase = parameters.nameDatabase
    this.nameTable = parameters.nameTable
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream:${this.region}:${this.account}:database/${this.nameDatabase}/table/${this.nameTable}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableArnParameters<Partition>,
) {
  return new TableArn<Partition>(parameters)
}

export interface QueryScheduledArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueryScheduled: string
}
class QueryScheduledArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'scheduled-query',
  `arn:${string}:timestream:${string}:${string}:scheduled-query/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'scheduled-query' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueryScheduled: string
  constructor(parameters: QueryScheduledArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameQueryScheduled = parameters.nameQueryScheduled
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream:${this.region}:${this.account}:scheduled-query/${this.nameQueryScheduled}` as const
  }
}
export type { QueryScheduledArn }
export function queryScheduledArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueryScheduledArnParameters<Partition>,
) {
  return new QueryScheduledArn<Partition>(parameters)
}

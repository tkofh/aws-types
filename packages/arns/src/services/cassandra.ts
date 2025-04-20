import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface KeyspaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keySpaceName: string
}
class KeyspaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'keyspace',
  `arn:${string}:cassandra:${string}:${string}:/keyspace/${string}/`
> {
  readonly [ArnResourceTypeBrand] = 'keyspace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keySpaceName: string
  constructor(parameters: KeyspaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.keySpaceName = parameters.keySpaceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cassandra:${this.region}:${this.account}:/keyspace/${this.keySpaceName}/` as const
  }
}
export type { KeyspaceArn }
export function keyspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyspaceArnParameters<Partition>,
) {
  return new KeyspaceArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keySpaceName: string
  readonly tableName: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'table',
  `arn:${string}:cassandra:${string}:${string}:/keyspace/${string}/table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keySpaceName: string
  readonly tableName: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.keySpaceName = parameters.keySpaceName
    this.tableName = parameters.tableName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cassandra:${this.region}:${this.account}:/keyspace/${this.keySpaceName}/table/${this.tableName}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableArnParameters<Partition>,
) {
  return new TableArn<Partition>(parameters)
}

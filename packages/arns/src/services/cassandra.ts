import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface KeyspaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSpaceKey: string
}
class KeyspaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'keyspace',
  `arn:${string}:cassandra:${string}:${string}:/keyspace/${string}/`
> {
  readonly [ArnResourceTypeBrand] = 'keyspace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSpaceKey: string
  constructor(parameters: KeyspaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSpaceKey = parameters.nameSpaceKey
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cassandra:${this.region}:${this.account}:/keyspace/${this.nameSpaceKey}/` as const
  }
}
export type { KeyspaceArn }
export function keyspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyspaceArnParameters<Partition>,
) {
  return new KeyspaceArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSpaceKey: string
  readonly nameTable: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'table',
  `arn:${string}:cassandra:${string}:${string}:/keyspace/${string}/table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSpaceKey: string
  readonly nameTable: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSpaceKey = parameters.nameSpaceKey
    this.nameTable = parameters.nameTable
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cassandra:${this.region}:${this.account}:/keyspace/${this.nameSpaceKey}/table/${this.nameTable}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableArnParameters<Partition>,
) {
  return new TableArn<Partition>(parameters)
}

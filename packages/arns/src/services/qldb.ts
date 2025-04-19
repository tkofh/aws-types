import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface LedgerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ledgerName: string
}
class LedgerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ledger', `arn:${string}:qldb:${string}:${string}:ledger/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ledger' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ledgerName: string
  constructor(parameters: LedgerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ledgerName = parameters.ledgerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qldb:${this.region}:${this.account}:ledger/${this.ledgerName}` as const
  }
}
export type { LedgerArn }
export function ledgerArn<Partition extends ArnPartition = 'aws'>(parameters: LedgerArnParameters<Partition>) {
  return new LedgerArn<Partition>(parameters)
}

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ledgerName: string
  readonly streamId: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'stream', `arn:${string}:qldb:${string}:${string}:stream/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'stream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ledgerName: string
  readonly streamId: string
  constructor(parameters: StreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ledgerName = parameters.ledgerName
    this.streamId = parameters.streamId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qldb:${this.region}:${this.account}:stream/${this.ledgerName}/${this.streamId}` as const
  }
}
export type { StreamArn }
export function streamArn<Partition extends ArnPartition = 'aws'>(parameters: StreamArnParameters<Partition>) {
  return new StreamArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ledgerName: string
  readonly tableId: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'table', `arn:${string}:qldb:${string}:${string}:ledger/${string}/table/${string}`> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ledgerName: string
  readonly tableId: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ledgerName = parameters.ledgerName
    this.tableId = parameters.tableId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qldb:${this.region}:${this.account}:ledger/${this.ledgerName}/table/${this.tableId}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(parameters: TableArnParameters<Partition>) {
  return new TableArn<Partition>(parameters)
}

export interface CatalogArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ledgerName: string
}
class CatalogArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'catalog', `arn:${string}:qldb:${string}:${string}:ledger/${string}/information_schema/user_tables`> {
  readonly [ArnResourceTypeBrand] = 'catalog' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ledgerName: string
  constructor(parameters: CatalogArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ledgerName = parameters.ledgerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qldb:${this.region}:${this.account}:ledger/${this.ledgerName}/information_schema/user_tables` as const
  }
}
export type { CatalogArn }
export function catalogArn<Partition extends ArnPartition = 'aws'>(parameters: CatalogArnParameters<Partition>) {
  return new CatalogArn<Partition>(parameters)
}
import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly indexName: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'index', `arn:${string}:dynamodb:${string}:${string}:table/${string}/index/${string}`> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly indexName: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tableName = parameters.tableName
    this.indexName = parameters.indexName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.tableName}/index/${this.indexName}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(parameters: IndexArnParameters<Partition>) {
  return new IndexArn<Partition>(parameters)
}

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly streamLabel: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'stream', `arn:${string}:dynamodb:${string}:${string}:table/${string}/stream/${string}`> {
  readonly [ArnResourceTypeBrand] = 'stream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly streamLabel: string
  constructor(parameters: StreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tableName = parameters.tableName
    this.streamLabel = parameters.streamLabel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.tableName}/stream/${this.streamLabel}` as const
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
  readonly tableName: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'table', `arn:${string}:dynamodb:${string}:${string}:table/${string}`> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tableName = parameters.tableName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.tableName}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(parameters: TableArnParameters<Partition>) {
  return new TableArn<Partition>(parameters)
}

export interface BackupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly backupName: string
}
class BackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'backup', `arn:${string}:dynamodb:${string}:${string}:table/${string}/backup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'backup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly backupName: string
  constructor(parameters: BackupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tableName = parameters.tableName
    this.backupName = parameters.backupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.tableName}/backup/${this.backupName}` as const
  }
}
export type { BackupArn }
export function backupArn<Partition extends ArnPartition = 'aws'>(parameters: BackupArnParameters<Partition>) {
  return new BackupArn<Partition>(parameters)
}

export interface ExportArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly exportName: string
}
class ExportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'export', `arn:${string}:dynamodb:${string}:${string}:table/${string}/export/${string}`> {
  readonly [ArnResourceTypeBrand] = 'export' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly exportName: string
  constructor(parameters: ExportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tableName = parameters.tableName
    this.exportName = parameters.exportName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.tableName}/export/${this.exportName}` as const
  }
}
export type { ExportArn }
export function exportArn<Partition extends ArnPartition = 'aws'>(parameters: ExportArnParameters<Partition>) {
  return new ExportArn<Partition>(parameters)
}

export interface GlobalTableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly globalTableName: string
}
class GlobalTableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'global-table', `arn:${string}:dynamodb::${string}:global-table/${string}`> {
  readonly [ArnResourceTypeBrand] = 'global-table' as const
  readonly partition: Partition
  readonly account: string
  readonly globalTableName: string
  constructor(parameters: GlobalTableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.globalTableName = parameters.globalTableName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb::${this.account}:global-table/${this.globalTableName}` as const
  }
}
export type { GlobalTableArn }
export function globalTableArn<Partition extends ArnPartition = 'aws'>(parameters: GlobalTableArnParameters<Partition>) {
  return new GlobalTableArn<Partition>(parameters)
}

export interface ImportArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly importName: string
}
class ImportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'import', `arn:${string}:dynamodb:${string}:${string}:table/${string}/import/${string}`> {
  readonly [ArnResourceTypeBrand] = 'import' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tableName: string
  readonly importName: string
  constructor(parameters: ImportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tableName = parameters.tableName
    this.importName = parameters.importName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.tableName}/import/${this.importName}` as const
  }
}
export type { ImportArn }
export function importArn<Partition extends ArnPartition = 'aws'>(parameters: ImportArnParameters<Partition>) {
  return new ImportArn<Partition>(parameters)
}
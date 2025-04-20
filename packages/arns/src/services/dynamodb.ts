import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly nameIndex: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'index',
  `arn:${string}:dynamodb:${string}:${string}:table/${string}/index/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly nameIndex: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTable = parameters.nameTable
    this.nameIndex = parameters.nameIndex
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.nameTable}/index/${this.nameIndex}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(
  parameters: IndexArnParameters<Partition>,
) {
  return new IndexArn<Partition>(parameters)
}

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly labelStream: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stream',
  `arn:${string}:dynamodb:${string}:${string}:table/${string}/stream/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stream' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly labelStream: string
  constructor(parameters: StreamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTable = parameters.nameTable
    this.labelStream = parameters.labelStream
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.nameTable}/stream/${this.labelStream}` as const
  }
}
export type { StreamArn }
export function streamArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamArnParameters<Partition>,
) {
  return new StreamArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'table',
  `arn:${string}:dynamodb:${string}:${string}:table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTable = parameters.nameTable
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.nameTable}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableArnParameters<Partition>,
) {
  return new TableArn<Partition>(parameters)
}

export interface BackupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly nameBackup: string
}
class BackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'backup',
  `arn:${string}:dynamodb:${string}:${string}:table/${string}/backup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'backup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly nameBackup: string
  constructor(parameters: BackupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTable = parameters.nameTable
    this.nameBackup = parameters.nameBackup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.nameTable}/backup/${this.nameBackup}` as const
  }
}
export type { BackupArn }
export function backupArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupArnParameters<Partition>,
) {
  return new BackupArn<Partition>(parameters)
}

export interface ExportArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly nameExport: string
}
class ExportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'export',
  `arn:${string}:dynamodb:${string}:${string}:table/${string}/export/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'export' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly nameExport: string
  constructor(parameters: ExportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTable = parameters.nameTable
    this.nameExport = parameters.nameExport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.nameTable}/export/${this.nameExport}` as const
  }
}
export type { ExportArn }
export function exportArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportArnParameters<Partition>,
) {
  return new ExportArn<Partition>(parameters)
}

export interface TableGlobalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly nameTableGlobal: string
}
class TableGlobalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'global-table',
  `arn:${string}:dynamodb::${string}:global-table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'global-table' as const
  readonly partition: string
  readonly account: string
  readonly nameTableGlobal: string
  constructor(parameters: TableGlobalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameTableGlobal = parameters.nameTableGlobal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb::${this.account}:global-table/${this.nameTableGlobal}` as const
  }
}
export type { TableGlobalArn }
export function tableGlobalArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableGlobalArnParameters<Partition>,
) {
  return new TableGlobalArn<Partition>(parameters)
}

export interface ImportArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly nameImport: string
}
class ImportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'import',
  `arn:${string}:dynamodb:${string}:${string}:table/${string}/import/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTable: string
  readonly nameImport: string
  constructor(parameters: ImportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTable = parameters.nameTable
    this.nameImport = parameters.nameImport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dynamodb:${this.region}:${this.account}:table/${this.nameTable}/import/${this.nameImport}` as const
  }
}
export type { ImportArn }
export function importArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImportArnParameters<Partition>,
) {
  return new ImportArn<Partition>(parameters)
}

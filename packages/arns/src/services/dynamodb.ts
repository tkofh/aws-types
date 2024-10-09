export interface IndexArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tableName: string
  indexName: string
}
export type IndexArn = `arn:${string}:dynamodb:${string}:${string}:table/${string}/index/${string}`
export function indexArn(parameters: IndexArnParameters): IndexArn {
  return `arn:${parameters.partition ?? ''}:dynamodb:${parameters.region}:${parameters.account}:table/${parameters.tableName}/index/${parameters.indexName}`
}

export interface StreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tableName: string
  streamLabel: string
}
export type StreamArn = `arn:${string}:dynamodb:${string}:${string}:table/${string}/stream/${string}`
export function streamArn(parameters: StreamArnParameters): StreamArn {
  return `arn:${parameters.partition ?? ''}:dynamodb:${parameters.region}:${parameters.account}:table/${parameters.tableName}/stream/${parameters.streamLabel}`
}

export interface TableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tableName: string
}
export type TableArn = `arn:${string}:dynamodb:${string}:${string}:table/${string}`
export function tableArn(parameters: TableArnParameters): TableArn {
  return `arn:${parameters.partition ?? ''}:dynamodb:${parameters.region}:${parameters.account}:table/${parameters.tableName}`
}

export interface BackupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tableName: string
  backupName: string
}
export type BackupArn = `arn:${string}:dynamodb:${string}:${string}:table/${string}/backup/${string}`
export function backupArn(parameters: BackupArnParameters): BackupArn {
  return `arn:${parameters.partition ?? ''}:dynamodb:${parameters.region}:${parameters.account}:table/${parameters.tableName}/backup/${parameters.backupName}`
}

export interface ExportArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tableName: string
  exportName: string
}
export type ExportArn = `arn:${string}:dynamodb:${string}:${string}:table/${string}/export/${string}`
export function exportArn(parameters: ExportArnParameters): ExportArn {
  return `arn:${parameters.partition ?? ''}:dynamodb:${parameters.region}:${parameters.account}:table/${parameters.tableName}/export/${parameters.exportName}`
}

export interface GlobalTableArnParameters {
  partition?: string | undefined
  account: string
  globalTableName: string
}
export type GlobalTableArn = `arn:${string}:dynamodb::${string}:global-table/${string}`
export function globalTableArn(parameters: GlobalTableArnParameters): GlobalTableArn {
  return `arn:${parameters.partition ?? ''}:dynamodb::${parameters.account}:global-table/${parameters.globalTableName}`
}

export interface ImportArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tableName: string
  importName: string
}
export type ImportArn = `arn:${string}:dynamodb:${string}:${string}:table/${string}/import/${string}`
export function importArn(parameters: ImportArnParameters): ImportArn {
  return `arn:${parameters.partition ?? ''}:dynamodb:${parameters.region}:${parameters.account}:table/${parameters.tableName}/import/${parameters.importName}`
}
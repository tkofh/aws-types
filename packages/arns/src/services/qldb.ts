export interface LedgerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ledgerName: string
}
export type LedgerArn = `arn:${string}:qldb:${string}:${string}:ledger/${string}`
export function ledgerArn(parameters: LedgerArnParameters): LedgerArn {
  return `arn:${parameters.partition ?? ''}:qldb:${parameters.region}:${parameters.account}:ledger/${parameters.ledgerName}`
}

export interface StreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ledgerName: string
  streamId: string
}
export type StreamArn = `arn:${string}:qldb:${string}:${string}:stream/${string}/${string}`
export function streamArn(parameters: StreamArnParameters): StreamArn {
  return `arn:${parameters.partition ?? ''}:qldb:${parameters.region}:${parameters.account}:stream/${parameters.ledgerName}/${parameters.streamId}`
}

export interface TableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ledgerName: string
  tableId: string
}
export type TableArn = `arn:${string}:qldb:${string}:${string}:ledger/${string}/table/${string}`
export function tableArn(parameters: TableArnParameters): TableArn {
  return `arn:${parameters.partition ?? ''}:qldb:${parameters.region}:${parameters.account}:ledger/${parameters.ledgerName}/table/${parameters.tableId}`
}

export interface CatalogArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ledgerName: string
}
export type CatalogArn = `arn:${string}:qldb:${string}:${string}:ledger/${string}/information_schema/user_tables`
export function catalogArn(parameters: CatalogArnParameters): CatalogArn {
  return `arn:${parameters.partition ?? ''}:qldb:${parameters.region}:${parameters.account}:ledger/${parameters.ledgerName}/information_schema/user_tables`
}
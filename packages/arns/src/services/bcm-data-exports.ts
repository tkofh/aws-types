export interface ExportArnParameters {
  partition?: string | undefined
  region: string
  account: string
  identifier: string
}
export type ExportArn = `arn:${string}:bcm-data-exports:${string}:${string}:export/${string}`
export function exportArn(parameters: ExportArnParameters): ExportArn {
  return `arn:${parameters.partition ?? ''}:bcm-data-exports:${parameters.region}:${parameters.account}:export/${parameters.identifier}`
}

export interface TableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  identifier: string
}
export type TableArn = `arn:${string}:bcm-data-exports:${string}:${string}:table/${string}`
export function tableArn(parameters: TableArnParameters): TableArn {
  return `arn:${parameters.partition ?? ''}:bcm-data-exports:${parameters.region}:${parameters.account}:table/${parameters.identifier}`
}
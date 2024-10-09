export interface DatabaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  databaseName: string
}
export type DatabaseArn = `arn:${string}:timestream:${string}:${string}:database/${string}`
export function databaseArn(parameters: DatabaseArnParameters): DatabaseArn {
  return `arn:${parameters.partition ?? ''}:timestream:${parameters.region}:${parameters.account}:database/${parameters.databaseName}`
}

export interface TableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  databaseName: string
  tableName: string
}
export type TableArn = `arn:${string}:timestream:${string}:${string}:database/${string}/table/${string}`
export function tableArn(parameters: TableArnParameters): TableArn {
  return `arn:${parameters.partition ?? ''}:timestream:${parameters.region}:${parameters.account}:database/${parameters.databaseName}/table/${parameters.tableName}`
}

export interface ScheduledQueryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scheduledQueryName: string
}
export type ScheduledQueryArn = `arn:${string}:timestream:${string}:${string}:scheduled-query/${string}`
export function scheduledQueryArn(parameters: ScheduledQueryArnParameters): ScheduledQueryArn {
  return `arn:${parameters.partition ?? ''}:timestream:${parameters.region}:${parameters.account}:scheduled-query/${parameters.scheduledQueryName}`
}
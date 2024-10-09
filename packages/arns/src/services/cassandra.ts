export interface KeyspaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  keyspaceName: string
}
export type KeyspaceArn = `arn:${string}:cassandra:${string}:${string}:/keyspace/${string}/`
export function keyspaceArn(parameters: KeyspaceArnParameters): KeyspaceArn {
  return `arn:${parameters.partition ?? ''}:cassandra:${parameters.region}:${parameters.account}:/keyspace/${parameters.keyspaceName}/`
}

export interface TableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  keyspaceName: string
  tableName: string
}
export type TableArn = `arn:${string}:cassandra:${string}:${string}:/keyspace/${string}/table/${string}`
export function tableArn(parameters: TableArnParameters): TableArn {
  return `arn:${parameters.partition ?? ''}:cassandra:${parameters.region}:${parameters.account}:/keyspace/${parameters.keyspaceName}/table/${parameters.tableName}`
}
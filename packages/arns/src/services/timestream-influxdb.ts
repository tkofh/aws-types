export interface DbInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbInstanceIdentifier: string
}
export type DbInstanceArn = `arn:${string}:timestream-influxdb:${string}:${string}:db-instance/${string}`
export function dbInstanceArn(parameters: DbInstanceArnParameters): DbInstanceArn {
  return `arn:${parameters.partition ?? ''}:timestream-influxdb:${parameters.region}:${parameters.account}:db-instance/${parameters.dbInstanceIdentifier}`
}

export interface DbParameterGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbParameterGroupIdentifier: string
}
export type DbParameterGroupArn = `arn:${string}:timestream-influxdb:${string}:${string}:db-parameter-group/${string}`
export function dbParameterGroupArn(parameters: DbParameterGroupArnParameters): DbParameterGroupArn {
  return `arn:${parameters.partition ?? ''}:timestream-influxdb:${parameters.region}:${parameters.account}:db-parameter-group/${parameters.dbParameterGroupIdentifier}`
}
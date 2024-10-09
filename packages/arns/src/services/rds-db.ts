export interface DbUserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbiResourceId: string
  dbUserName: string
}
export type DbUserArn = `arn:${string}:rds-db:${string}:${string}:dbuser:${string}/${string}`
export function dbUserArn(parameters: DbUserArnParameters): DbUserArn {
  return `arn:${parameters.partition ?? ''}:rds-db:${parameters.region}:${parameters.account}:dbuser:${parameters.dbiResourceId}/${parameters.dbUserName}`
}
export interface DatabaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterResourceId: string
}
export type DatabaseArn = `arn:${string}:neptune-db:${string}:${string}:${string}/*`
export function databaseArn(parameters: DatabaseArnParameters): DatabaseArn {
  return `arn:${parameters.partition ?? ''}:neptune-db:${parameters.region}:${parameters.account}:${parameters.clusterResourceId}/*`
}
export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbClusterInstanceName: string
}
export type ClusterArn = `arn:${string}:rds:${string}:${string}:cluster:${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:cluster:${parameters.dbClusterInstanceName}`
}
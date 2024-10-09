export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
}
export type ClusterArn = `arn:${string}:eks:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:cluster/${parameters.clusterName}`
}
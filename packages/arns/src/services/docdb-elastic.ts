export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ClusterArn = `arn:${string}:docdb-elastic:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:docdb-elastic:${parameters.region}:${parameters.account}:cluster/${parameters.resourceId}`
}

export interface ClusterSnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ClusterSnapshotArn = `arn:${string}:docdb-elastic:${string}:${string}:cluster-snapshot/${string}`
export function clusterSnapshotArn(parameters: ClusterSnapshotArnParameters): ClusterSnapshotArn {
  return `arn:${parameters.partition ?? ''}:docdb-elastic:${parameters.region}:${parameters.account}:cluster-snapshot/${parameters.resourceId}`
}
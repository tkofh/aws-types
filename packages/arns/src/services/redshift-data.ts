export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
}
export type ClusterArn = `arn:${string}:redshift:${string}:${string}:cluster:${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:cluster:${parameters.clusterName}`
}

export interface WorkgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workgroupId: string
}
export type WorkgroupArn = `arn:${string}:redshift-serverless:${string}:${string}:workgroup/${string}`
export function workgroupArn(parameters: WorkgroupArnParameters): WorkgroupArn {
  return `arn:${parameters.partition ?? ''}:redshift-serverless:${parameters.region}:${parameters.account}:workgroup/${parameters.workgroupId}`
}
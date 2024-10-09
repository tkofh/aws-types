export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterIdentifier: string
}
export type ClusterArn = `arn:${string}:pcs:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:pcs:${parameters.region}:${parameters.account}:cluster/${parameters.clusterIdentifier}`
}

export interface ComputenodegroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterIdentifier: string
  computeNodeGroupIdentifier: string
}
export type ComputenodegroupArn = `arn:${string}:pcs:${string}:${string}:cluster/${string}/computenodegroup/${string}`
export function computenodegroupArn(parameters: ComputenodegroupArnParameters): ComputenodegroupArn {
  return `arn:${parameters.partition ?? ''}:pcs:${parameters.region}:${parameters.account}:cluster/${parameters.clusterIdentifier}/computenodegroup/${parameters.computeNodeGroupIdentifier}`
}

export interface QueueArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterIdentifier: string
  queueIdentifier: string
}
export type QueueArn = `arn:${string}:pcs:${string}:${string}:cluster/${string}/queue/${string}`
export function queueArn(parameters: QueueArnParameters): QueueArn {
  return `arn:${parameters.partition ?? ''}:pcs:${parameters.region}:${parameters.account}:cluster/${parameters.clusterIdentifier}/queue/${parameters.queueIdentifier}`
}
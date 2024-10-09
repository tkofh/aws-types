export interface GraphArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type GraphArn = `arn:${string}:neptune-graph:${string}:${string}:graph/${string}`
export function graphArn(parameters: GraphArnParameters): GraphArn {
  return `arn:${parameters.partition ?? ''}:neptune-graph:${parameters.region}:${parameters.account}:graph/${parameters.resourceId}`
}

export interface GraphSnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type GraphSnapshotArn = `arn:${string}:neptune-graph:${string}:${string}:graph-snapshot/${string}`
export function graphSnapshotArn(parameters: GraphSnapshotArnParameters): GraphSnapshotArn {
  return `arn:${parameters.partition ?? ''}:neptune-graph:${parameters.region}:${parameters.account}:graph-snapshot/${parameters.resourceId}`
}

export interface ImportTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ImportTaskArn = `arn:${string}:neptune-graph:${string}:${string}:import-task/${string}`
export function importTaskArn(parameters: ImportTaskArnParameters): ImportTaskArn {
  return `arn:${parameters.partition ?? ''}:neptune-graph:${parameters.region}:${parameters.account}:import-task/${parameters.resourceId}`
}
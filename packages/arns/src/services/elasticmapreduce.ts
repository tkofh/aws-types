export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterId: string
}
export type ClusterArn = `arn:${string}:elasticmapreduce:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:elasticmapreduce:${parameters.region}:${parameters.account}:cluster/${parameters.clusterId}`
}

export interface EditorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  editorId: string
}
export type EditorArn = `arn:${string}:elasticmapreduce:${string}:${string}:editor/${string}`
export function editorArn(parameters: EditorArnParameters): EditorArn {
  return `arn:${parameters.partition ?? ''}:elasticmapreduce:${parameters.region}:${parameters.account}:editor/${parameters.editorId}`
}

export interface NotebookExecutionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  notebookExecutionId: string
}
export type NotebookExecutionArn = `arn:${string}:elasticmapreduce:${string}:${string}:notebook-execution/${string}`
export function notebookExecutionArn(parameters: NotebookExecutionArnParameters): NotebookExecutionArn {
  return `arn:${parameters.partition ?? ''}:elasticmapreduce:${parameters.region}:${parameters.account}:notebook-execution/${parameters.notebookExecutionId}`
}

export interface StudioArnParameters {
  partition?: string | undefined
  region: string
  account: string
  studioId: string
}
export type StudioArn = `arn:${string}:elasticmapreduce:${string}:${string}:studio/${string}`
export function studioArn(parameters: StudioArnParameters): StudioArn {
  return `arn:${parameters.partition ?? ''}:elasticmapreduce:${parameters.region}:${parameters.account}:studio/${parameters.studioId}`
}
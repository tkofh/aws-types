export interface WorkspaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type WorkspaceArn = `arn:${string}:grafana:${string}:${string}:/workspaces/${string}`
export function workspaceArn(parameters: WorkspaceArnParameters): WorkspaceArn {
  return `arn:${parameters.partition ?? ''}:grafana:${parameters.region}:${parameters.account}:/workspaces/${parameters.resourceId}`
}
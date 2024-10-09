export interface WorkflowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type WorkflowArn = `arn:${string}:migrationhub-orchestrator:${string}:${string}:workflow/${string}`
export function workflowArn(parameters: WorkflowArnParameters): WorkflowArn {
  return `arn:${parameters.partition ?? ''}:migrationhub-orchestrator:${parameters.region}:${parameters.account}:workflow/${parameters.resourceId}`
}

export interface TemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TemplateArn = `arn:${string}:migrationhub-orchestrator:${string}:${string}:template/${string}`
export function templateArn(parameters: TemplateArnParameters): TemplateArn {
  return `arn:${parameters.partition ?? ''}:migrationhub-orchestrator:${parameters.region}:${parameters.account}:template/${parameters.resourceId}`
}
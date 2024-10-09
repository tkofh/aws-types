export interface ExecutionArnParameters {
  partition?: string | undefined
  account: string
  userId: string
  toolId: string
  executionId: string
}
export type ExecutionArn = `arn:${string}:ts::${string}:execution/${string}/${string}/${string}`
export function executionArn(parameters: ExecutionArnParameters): ExecutionArn {
  return `arn:${parameters.partition ?? ''}:ts::${parameters.account}:execution/${parameters.userId}/${parameters.toolId}/${parameters.executionId}`
}

export interface ToolArnParameters {
  partition?: string | undefined
  toolId: string
}
export type ToolArn = `arn:${string}:ts::aws:tool/${string}`
export function toolArn(parameters: ToolArnParameters): ToolArn {
  return `arn:${parameters.partition ?? ''}:ts::aws:tool/${parameters.toolId}`
}
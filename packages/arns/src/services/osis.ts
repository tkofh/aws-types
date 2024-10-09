export interface PipelineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  pipelineName: string
}
export type PipelineArn = `arn:${string}:osis:${string}:${string}:pipeline/${string}`
export function pipelineArn(parameters: PipelineArnParameters): PipelineArn {
  return `arn:${parameters.partition ?? ''}:osis:${parameters.region}:${parameters.account}:pipeline/${parameters.pipelineName}`
}

export interface PipelineBlueprintArnParameters {
  partition?: string | undefined
  region: string
  account: string
  blueprintName: string
}
export type PipelineBlueprintArn = `arn:${string}:osis:${string}:${string}:blueprint/${string}`
export function pipelineBlueprintArn(parameters: PipelineBlueprintArnParameters): PipelineBlueprintArn {
  return `arn:${parameters.partition ?? ''}:osis:${parameters.region}:${parameters.account}:blueprint/${parameters.blueprintName}`
}
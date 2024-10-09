export interface PipelineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  pipelineId: string
}
export type PipelineArn = `arn:${string}:datapipeline:${string}:${string}:pipeline/${string}`
export function pipelineArn(parameters: PipelineArnParameters): PipelineArn {
  return `arn:${parameters.partition ?? ''}:datapipeline:${parameters.region}:${parameters.account}:pipeline/${parameters.pipelineId}`
}
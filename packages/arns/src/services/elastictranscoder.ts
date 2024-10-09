export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type JobArn = `arn:${string}:elastictranscoder:${string}:${string}:job/${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:elastictranscoder:${parameters.region}:${parameters.account}:job/${parameters.jobId}`
}

export interface PipelineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  pipelineId: string
}
export type PipelineArn = `arn:${string}:elastictranscoder:${string}:${string}:pipeline/${string}`
export function pipelineArn(parameters: PipelineArnParameters): PipelineArn {
  return `arn:${parameters.partition ?? ''}:elastictranscoder:${parameters.region}:${parameters.account}:pipeline/${parameters.pipelineId}`
}

export interface PresetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  presetId: string
}
export type PresetArn = `arn:${string}:elastictranscoder:${string}:${string}:preset/${string}`
export function presetArn(parameters: PresetArnParameters): PresetArn {
  return `arn:${parameters.partition ?? ''}:elastictranscoder:${parameters.region}:${parameters.account}:preset/${parameters.presetId}`
}
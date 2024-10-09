export interface ActionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  pipelineName: string
  stageName: string
  actionName: string
}
export type ActionArn = `arn:${string}:codepipeline:${string}:${string}:${string}/${string}/${string}`
export function actionArn(parameters: ActionArnParameters): ActionArn {
  return `arn:${parameters.partition ?? ''}:codepipeline:${parameters.region}:${parameters.account}:${parameters.pipelineName}/${parameters.stageName}/${parameters.actionName}`
}

export interface ActiontypeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  owner: string
  category: string
  provider: string
  version: string
}
export type ActiontypeArn = `arn:${string}:codepipeline:${string}:${string}:actiontype:${string}/${string}/${string}/${string}`
export function actiontypeArn(parameters: ActiontypeArnParameters): ActiontypeArn {
  return `arn:${parameters.partition ?? ''}:codepipeline:${parameters.region}:${parameters.account}:actiontype:${parameters.owner}/${parameters.category}/${parameters.provider}/${parameters.version}`
}

export interface PipelineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  pipelineName: string
}
export type PipelineArn = `arn:${string}:codepipeline:${string}:${string}:${string}`
export function pipelineArn(parameters: PipelineArnParameters): PipelineArn {
  return `arn:${parameters.partition ?? ''}:codepipeline:${parameters.region}:${parameters.account}:${parameters.pipelineName}`
}

export interface StageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  pipelineName: string
  stageName: string
}
export type StageArn = `arn:${string}:codepipeline:${string}:${string}:${string}/${string}`
export function stageArn(parameters: StageArnParameters): StageArn {
  return `arn:${parameters.partition ?? ''}:codepipeline:${parameters.region}:${parameters.account}:${parameters.pipelineName}/${parameters.stageName}`
}

export interface WebhookArnParameters {
  partition?: string | undefined
  region: string
  account: string
  webhookName: string
}
export type WebhookArn = `arn:${string}:codepipeline:${string}:${string}:webhook:${string}`
export function webhookArn(parameters: WebhookArnParameters): WebhookArn {
  return `arn:${parameters.partition ?? ''}:codepipeline:${parameters.region}:${parameters.account}:webhook:${parameters.webhookName}`
}
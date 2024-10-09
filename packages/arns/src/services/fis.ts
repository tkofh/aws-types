export interface ActionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ActionArn = `arn:${string}:fis:${string}:${string}:action/${string}`
export function actionArn(parameters: ActionArnParameters): ActionArn {
  return `arn:${parameters.partition ?? ''}:fis:${parameters.region}:${parameters.account}:action/${parameters.id}`
}

export interface ExperimentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ExperimentArn = `arn:${string}:fis:${string}:${string}:experiment/${string}`
export function experimentArn(parameters: ExperimentArnParameters): ExperimentArn {
  return `arn:${parameters.partition ?? ''}:fis:${parameters.region}:${parameters.account}:experiment/${parameters.id}`
}

export interface ExperimentTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ExperimentTemplateArn = `arn:${string}:fis:${string}:${string}:experiment-template/${string}`
export function experimentTemplateArn(parameters: ExperimentTemplateArnParameters): ExperimentTemplateArn {
  return `arn:${parameters.partition ?? ''}:fis:${parameters.region}:${parameters.account}:experiment-template/${parameters.id}`
}

export interface SafetyLeverArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type SafetyLeverArn = `arn:${string}:fis:${string}:${string}:safety-lever/${string}`
export function safetyLeverArn(parameters: SafetyLeverArnParameters): SafetyLeverArn {
  return `arn:${parameters.partition ?? ''}:fis:${parameters.region}:${parameters.account}:safety-lever/${parameters.id}`
}
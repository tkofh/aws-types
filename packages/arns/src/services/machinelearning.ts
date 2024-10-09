export interface BatchpredictionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  batchPredictionId: string
}
export type BatchpredictionArn = `arn:${string}:machinelearning:${string}:${string}:batchprediction/${string}`
export function batchpredictionArn(parameters: BatchpredictionArnParameters): BatchpredictionArn {
  return `arn:${parameters.partition ?? ''}:machinelearning:${parameters.region}:${parameters.account}:batchprediction/${parameters.batchPredictionId}`
}

export interface DatasourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  datasourceId: string
}
export type DatasourceArn = `arn:${string}:machinelearning:${string}:${string}:datasource/${string}`
export function datasourceArn(parameters: DatasourceArnParameters): DatasourceArn {
  return `arn:${parameters.partition ?? ''}:machinelearning:${parameters.region}:${parameters.account}:datasource/${parameters.datasourceId}`
}

export interface EvaluationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  evaluationId: string
}
export type EvaluationArn = `arn:${string}:machinelearning:${string}:${string}:evaluation/${string}`
export function evaluationArn(parameters: EvaluationArnParameters): EvaluationArn {
  return `arn:${parameters.partition ?? ''}:machinelearning:${parameters.region}:${parameters.account}:evaluation/${parameters.evaluationId}`
}

export interface MlmodelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  mlModelId: string
}
export type MlmodelArn = `arn:${string}:machinelearning:${string}:${string}:mlmodel/${string}`
export function mlmodelArn(parameters: MlmodelArnParameters): MlmodelArn {
  return `arn:${parameters.partition ?? ''}:machinelearning:${parameters.region}:${parameters.account}:mlmodel/${parameters.mlModelId}`
}
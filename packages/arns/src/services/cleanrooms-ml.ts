export interface TrainingdatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TrainingdatasetArn = `arn:${string}:cleanrooms-ml:${string}:${string}:training-dataset/${string}`
export function trainingdatasetArn(parameters: TrainingdatasetArnParameters): TrainingdatasetArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms-ml:${parameters.region}:${parameters.account}:training-dataset/${parameters.resourceId}`
}

export interface AudiencemodelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AudiencemodelArn = `arn:${string}:cleanrooms-ml:${string}:${string}:audience-model/${string}`
export function audiencemodelArn(parameters: AudiencemodelArnParameters): AudiencemodelArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms-ml:${parameters.region}:${parameters.account}:audience-model/${parameters.resourceId}`
}

export interface ConfiguredaudiencemodelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ConfiguredaudiencemodelArn = `arn:${string}:cleanrooms-ml:${string}:${string}:configured-audience-model/${string}`
export function configuredaudiencemodelArn(parameters: ConfiguredaudiencemodelArnParameters): ConfiguredaudiencemodelArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms-ml:${parameters.region}:${parameters.account}:configured-audience-model/${parameters.resourceId}`
}

export interface AudiencegenerationjobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AudiencegenerationjobArn = `arn:${string}:cleanrooms-ml:${string}:${string}:audience-generation-job/${string}`
export function audiencegenerationjobArn(parameters: AudiencegenerationjobArnParameters): AudiencegenerationjobArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms-ml:${parameters.region}:${parameters.account}:audience-generation-job/${parameters.resourceId}`
}
export interface ModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelId: string
}
export type ModelArn = `arn:${string}:deepcomposer:${string}:${string}:model/${string}`
export function modelArn(parameters: ModelArnParameters): ModelArn {
  return `arn:${parameters.partition ?? ''}:deepcomposer:${parameters.region}:${parameters.account}:model/${parameters.modelId}`
}

export interface CompositionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  compositionId: string
}
export type CompositionArn = `arn:${string}:deepcomposer:${string}:${string}:composition/${string}`
export function compositionArn(parameters: CompositionArnParameters): CompositionArn {
  return `arn:${parameters.partition ?? ''}:deepcomposer:${parameters.region}:${parameters.account}:composition/${parameters.compositionId}`
}

export interface AudioArnParameters {
  partition?: string | undefined
  region: string
  account: string
  audioId: string
}
export type AudioArn = `arn:${string}:deepcomposer:${string}:${string}:audio/${string}`
export function audioArn(parameters: AudioArnParameters): AudioArn {
  return `arn:${parameters.partition ?? ''}:deepcomposer:${parameters.region}:${parameters.account}:audio/${parameters.audioId}`
}
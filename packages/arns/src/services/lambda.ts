export interface CodeSigningConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  codeSigningConfigId: string
}
export type CodeSigningConfigArn = `arn:${string}:lambda:${string}:${string}:code-signing-config:${string}`
export function codeSigningConfigArn(parameters: CodeSigningConfigArnParameters): CodeSigningConfigArn {
  return `arn:${parameters.partition ?? ''}:lambda:${parameters.region}:${parameters.account}:code-signing-config:${parameters.codeSigningConfigId}`
}

export interface EventSourceMappingArnParameters {
  partition?: string | undefined
  region: string
  account: string
  uuid: string
}
export type EventSourceMappingArn = `arn:${string}:lambda:${string}:${string}:event-source-mapping:${string}`
export function eventSourceMappingArn(parameters: EventSourceMappingArnParameters): EventSourceMappingArn {
  return `arn:${parameters.partition ?? ''}:lambda:${parameters.region}:${parameters.account}:event-source-mapping:${parameters.uuid}`
}

export interface FunctionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  functionName: string
}
export type FunctionArn = `arn:${string}:lambda:${string}:${string}:function:${string}`
export function functionArn(parameters: FunctionArnParameters): FunctionArn {
  return `arn:${parameters.partition ?? ''}:lambda:${parameters.region}:${parameters.account}:function:${parameters.functionName}`
}

export interface FunctionAliasArnParameters {
  partition?: string | undefined
  region: string
  account: string
  functionName: string
  alias: string
}
export type FunctionAliasArn = `arn:${string}:lambda:${string}:${string}:function:${string}:${string}`
export function functionAliasArn(parameters: FunctionAliasArnParameters): FunctionAliasArn {
  return `arn:${parameters.partition ?? ''}:lambda:${parameters.region}:${parameters.account}:function:${parameters.functionName}:${parameters.alias}`
}

export interface FunctionVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  functionName: string
  version: string
}
export type FunctionVersionArn = `arn:${string}:lambda:${string}:${string}:function:${string}:${string}`
export function functionVersionArn(parameters: FunctionVersionArnParameters): FunctionVersionArn {
  return `arn:${parameters.partition ?? ''}:lambda:${parameters.region}:${parameters.account}:function:${parameters.functionName}:${parameters.version}`
}

export interface LayerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  layerName: string
}
export type LayerArn = `arn:${string}:lambda:${string}:${string}:layer:${string}`
export function layerArn(parameters: LayerArnParameters): LayerArn {
  return `arn:${parameters.partition ?? ''}:lambda:${parameters.region}:${parameters.account}:layer:${parameters.layerName}`
}

export interface LayerVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  layerName: string
  layerVersion: string
}
export type LayerVersionArn = `arn:${string}:lambda:${string}:${string}:layer:${string}:${string}`
export function layerVersionArn(parameters: LayerVersionArnParameters): LayerVersionArn {
  return `arn:${parameters.partition ?? ''}:lambda:${parameters.region}:${parameters.account}:layer:${parameters.layerName}:${parameters.layerVersion}`
}
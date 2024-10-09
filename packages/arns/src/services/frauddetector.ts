export interface BatchPredictionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type BatchPredictionArn = `arn:${string}:frauddetector:${string}:${string}:batch-prediction/${string}`
export function batchPredictionArn(parameters: BatchPredictionArnParameters): BatchPredictionArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:batch-prediction/${parameters.resourcePath}`
}

export interface DetectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type DetectorArn = `arn:${string}:frauddetector:${string}:${string}:detector/${string}`
export function detectorArn(parameters: DetectorArnParameters): DetectorArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:detector/${parameters.resourcePath}`
}

export interface DetectorVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type DetectorVersionArn = `arn:${string}:frauddetector:${string}:${string}:detector-version/${string}`
export function detectorVersionArn(parameters: DetectorVersionArnParameters): DetectorVersionArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:detector-version/${parameters.resourcePath}`
}

export interface EntityTypeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type EntityTypeArn = `arn:${string}:frauddetector:${string}:${string}:entity-type/${string}`
export function entityTypeArn(parameters: EntityTypeArnParameters): EntityTypeArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:entity-type/${parameters.resourcePath}`
}

export interface ExternalModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type ExternalModelArn = `arn:${string}:frauddetector:${string}:${string}:external-model/${string}`
export function externalModelArn(parameters: ExternalModelArnParameters): ExternalModelArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:external-model/${parameters.resourcePath}`
}

export interface EventTypeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type EventTypeArn = `arn:${string}:frauddetector:${string}:${string}:event-type/${string}`
export function eventTypeArn(parameters: EventTypeArnParameters): EventTypeArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:event-type/${parameters.resourcePath}`
}

export interface LabelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type LabelArn = `arn:${string}:frauddetector:${string}:${string}:label/${string}`
export function labelArn(parameters: LabelArnParameters): LabelArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:label/${parameters.resourcePath}`
}

export interface ModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type ModelArn = `arn:${string}:frauddetector:${string}:${string}:model/${string}`
export function modelArn(parameters: ModelArnParameters): ModelArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:model/${parameters.resourcePath}`
}

export interface ModelVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type ModelVersionArn = `arn:${string}:frauddetector:${string}:${string}:model-version/${string}`
export function modelVersionArn(parameters: ModelVersionArnParameters): ModelVersionArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:model-version/${parameters.resourcePath}`
}

export interface OutcomeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type OutcomeArn = `arn:${string}:frauddetector:${string}:${string}:outcome/${string}`
export function outcomeArn(parameters: OutcomeArnParameters): OutcomeArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:outcome/${parameters.resourcePath}`
}

export interface RuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type RuleArn = `arn:${string}:frauddetector:${string}:${string}:rule/${string}`
export function ruleArn(parameters: RuleArnParameters): RuleArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:rule/${parameters.resourcePath}`
}

export interface VariableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type VariableArn = `arn:${string}:frauddetector:${string}:${string}:variable/${string}`
export function variableArn(parameters: VariableArnParameters): VariableArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:variable/${parameters.resourcePath}`
}

export interface BatchImportArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type BatchImportArn = `arn:${string}:frauddetector:${string}:${string}:batch-import/${string}`
export function batchImportArn(parameters: BatchImportArnParameters): BatchImportArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:batch-import/${parameters.resourcePath}`
}

export interface ListArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourcePath: string
}
export type ListArn = `arn:${string}:frauddetector:${string}:${string}:list/${string}`
export function listArn(parameters: ListArnParameters): ListArn {
  return `arn:${parameters.partition ?? ''}:frauddetector:${parameters.region}:${parameters.account}:list/${parameters.resourcePath}`
}
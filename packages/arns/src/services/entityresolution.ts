export interface MatchingWorkflowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workflowName: string
}
export type MatchingWorkflowArn = `arn:${string}:entityresolution:${string}:${string}:matchingworkflow/${string}`
export function matchingWorkflowArn(parameters: MatchingWorkflowArnParameters): MatchingWorkflowArn {
  return `arn:${parameters.partition ?? ''}:entityresolution:${parameters.region}:${parameters.account}:matchingworkflow/${parameters.workflowName}`
}

export interface SchemaMappingArnParameters {
  partition?: string | undefined
  region: string
  account: string
  schemaName: string
}
export type SchemaMappingArn = `arn:${string}:entityresolution:${string}:${string}:schemamapping/${string}`
export function schemaMappingArn(parameters: SchemaMappingArnParameters): SchemaMappingArn {
  return `arn:${parameters.partition ?? ''}:entityresolution:${parameters.region}:${parameters.account}:schemamapping/${parameters.schemaName}`
}

export interface IdMappingWorkflowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workflowName: string
}
export type IdMappingWorkflowArn = `arn:${string}:entityresolution:${string}:${string}:idmappingworkflow/${string}`
export function idMappingWorkflowArn(parameters: IdMappingWorkflowArnParameters): IdMappingWorkflowArn {
  return `arn:${parameters.partition ?? ''}:entityresolution:${parameters.region}:${parameters.account}:idmappingworkflow/${parameters.workflowName}`
}

export interface ProviderServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  providerName: string
  providerServiceName: string
}
export type ProviderServiceArn = `arn:${string}:entityresolution:${string}:${string}:providerservice/${string}/${string}`
export function providerServiceArn(parameters: ProviderServiceArnParameters): ProviderServiceArn {
  return `arn:${parameters.partition ?? ''}:entityresolution:${parameters.region}:${parameters.account}:providerservice/${parameters.providerName}/${parameters.providerServiceName}`
}

export interface IdNamespaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  idNamespaceName: string
}
export type IdNamespaceArn = `arn:${string}:entityresolution:${string}:${string}:idnamespace/${string}`
export function idNamespaceArn(parameters: IdNamespaceArnParameters): IdNamespaceArn {
  return `arn:${parameters.partition ?? ''}:entityresolution:${parameters.region}:${parameters.account}:idnamespace/${parameters.idNamespaceName}`
}
export interface PolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type PolicyArn = `arn:${string}:fms:${string}:${string}:policy/${string}`
export function policyArn(parameters: PolicyArnParameters): PolicyArn {
  return `arn:${parameters.partition ?? ''}:fms:${parameters.region}:${parameters.account}:policy/${parameters.id}`
}

export interface ApplicationsListArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ApplicationsListArn = `arn:${string}:fms:${string}:${string}:applications-list/${string}`
export function applicationsListArn(parameters: ApplicationsListArnParameters): ApplicationsListArn {
  return `arn:${parameters.partition ?? ''}:fms:${parameters.region}:${parameters.account}:applications-list/${parameters.id}`
}

export interface ProtocolsListArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ProtocolsListArn = `arn:${string}:fms:${string}:${string}:protocols-list/${string}`
export function protocolsListArn(parameters: ProtocolsListArnParameters): ProtocolsListArn {
  return `arn:${parameters.partition ?? ''}:fms:${parameters.region}:${parameters.account}:protocols-list/${parameters.id}`
}

export interface ResourceSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ResourceSetArn = `arn:${string}:fms:${string}:${string}:resource-set/${string}`
export function resourceSetArn(parameters: ResourceSetArnParameters): ResourceSetArn {
  return `arn:${parameters.partition ?? ''}:fms:${parameters.region}:${parameters.account}:resource-set/${parameters.id}`
}
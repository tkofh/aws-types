export interface ChangesetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  changeSetName: string
  id: string
}
export type ChangesetArn = `arn:${string}:cloudformation:${string}:${string}:changeSet/${string}/${string}`
export function changesetArn(parameters: ChangesetArnParameters): ChangesetArn {
  return `arn:${parameters.partition ?? ''}:cloudformation:${parameters.region}:${parameters.account}:changeSet/${parameters.changeSetName}/${parameters.id}`
}

export interface StackArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stackName: string
  id: string
}
export type StackArn = `arn:${string}:cloudformation:${string}:${string}:stack/${string}/${string}`
export function stackArn(parameters: StackArnParameters): StackArn {
  return `arn:${parameters.partition ?? ''}:cloudformation:${parameters.region}:${parameters.account}:stack/${parameters.stackName}/${parameters.id}`
}

export interface StacksetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stackSetName: string
  id: string
}
export type StacksetArn = `arn:${string}:cloudformation:${string}:${string}:stackset/${string}:${string}`
export function stacksetArn(parameters: StacksetArnParameters): StacksetArn {
  return `arn:${parameters.partition ?? ''}:cloudformation:${parameters.region}:${parameters.account}:stackset/${parameters.stackSetName}:${parameters.id}`
}

export interface StacksetTargetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stackSetTarget: string
}
export type StacksetTargetArn = `arn:${string}:cloudformation:${string}:${string}:stackset-target/${string}`
export function stacksetTargetArn(parameters: StacksetTargetArnParameters): StacksetTargetArn {
  return `arn:${parameters.partition ?? ''}:cloudformation:${parameters.region}:${parameters.account}:stackset-target/${parameters.stackSetTarget}`
}

export interface TypeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  type: string
}
export type TypeArn = `arn:${string}:cloudformation:${string}:${string}:type/resource/${string}`
export function typeArn(parameters: TypeArnParameters): TypeArn {
  return `arn:${parameters.partition ?? ''}:cloudformation:${parameters.region}:${parameters.account}:type/resource/${parameters.type}`
}

export interface GeneratedtemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type GeneratedtemplateArn = `arn:${string}:cloudformation:${string}:${string}:generatedTemplate/${string}`
export function generatedtemplateArn(parameters: GeneratedtemplateArnParameters): GeneratedtemplateArn {
  return `arn:${parameters.partition ?? ''}:cloudformation:${parameters.region}:${parameters.account}:generatedTemplate/${parameters.id}`
}

export interface ResourcescanArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ResourcescanArn = `arn:${string}:cloudformation:${string}:${string}:resourceScan/${string}`
export function resourcescanArn(parameters: ResourcescanArnParameters): ResourcescanArn {
  return `arn:${parameters.partition ?? ''}:cloudformation:${parameters.region}:${parameters.account}:resourceScan/${parameters.id}`
}
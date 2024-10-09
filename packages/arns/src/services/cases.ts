export interface CaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
  caseId: string
}
export type CaseArn = `arn:${string}:cases:${string}:${string}:domain/${string}/case/${string}`
export function caseArn(parameters: CaseArnParameters): CaseArn {
  return `arn:${parameters.partition ?? ''}:cases:${parameters.region}:${parameters.account}:domain/${parameters.domainId}/case/${parameters.caseId}`
}

export interface DomainArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
}
export type DomainArn = `arn:${string}:cases:${string}:${string}:domain/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? ''}:cases:${parameters.region}:${parameters.account}:domain/${parameters.domainId}`
}

export interface FieldArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
  fieldId: string
}
export type FieldArn = `arn:${string}:cases:${string}:${string}:domain/${string}/field/${string}`
export function fieldArn(parameters: FieldArnParameters): FieldArn {
  return `arn:${parameters.partition ?? ''}:cases:${parameters.region}:${parameters.account}:domain/${parameters.domainId}/field/${parameters.fieldId}`
}

export interface LayoutArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
  layoutId: string
}
export type LayoutArn = `arn:${string}:cases:${string}:${string}:domain/${string}/layout/${string}`
export function layoutArn(parameters: LayoutArnParameters): LayoutArn {
  return `arn:${parameters.partition ?? ''}:cases:${parameters.region}:${parameters.account}:domain/${parameters.domainId}/layout/${parameters.layoutId}`
}

export interface RelatedItemArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
  caseId: string
  relatedItemId: string
}
export type RelatedItemArn = `arn:${string}:cases:${string}:${string}:domain/${string}/case/${string}/related-item/${string}`
export function relatedItemArn(parameters: RelatedItemArnParameters): RelatedItemArn {
  return `arn:${parameters.partition ?? ''}:cases:${parameters.region}:${parameters.account}:domain/${parameters.domainId}/case/${parameters.caseId}/related-item/${parameters.relatedItemId}`
}

export interface TemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
  templateId: string
}
export type TemplateArn = `arn:${string}:cases:${string}:${string}:domain/${string}/template/${string}`
export function templateArn(parameters: TemplateArnParameters): TemplateArn {
  return `arn:${parameters.partition ?? ''}:cases:${parameters.region}:${parameters.account}:domain/${parameters.domainId}/template/${parameters.templateId}`
}
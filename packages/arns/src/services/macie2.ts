export interface AllowListArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AllowListArn = `arn:${string}:macie2:${string}:${string}:allow-list/${string}`
export function allowListArn(parameters: AllowListArnParameters): AllowListArn {
  return `arn:${parameters.partition ?? ''}:macie2:${parameters.region}:${parameters.account}:allow-list/${parameters.resourceId}`
}

export interface ClassificationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ClassificationJobArn = `arn:${string}:macie2:${string}:${string}:classification-job/${string}`
export function classificationJobArn(parameters: ClassificationJobArnParameters): ClassificationJobArn {
  return `arn:${parameters.partition ?? ''}:macie2:${parameters.region}:${parameters.account}:classification-job/${parameters.resourceId}`
}

export interface CustomDataIdentifierArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type CustomDataIdentifierArn = `arn:${string}:macie2:${string}:${string}:custom-data-identifier/${string}`
export function customDataIdentifierArn(parameters: CustomDataIdentifierArnParameters): CustomDataIdentifierArn {
  return `arn:${parameters.partition ?? ''}:macie2:${parameters.region}:${parameters.account}:custom-data-identifier/${parameters.resourceId}`
}

export interface FindingsFilterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type FindingsFilterArn = `arn:${string}:macie2:${string}:${string}:findings-filter/${string}`
export function findingsFilterArn(parameters: FindingsFilterArnParameters): FindingsFilterArn {
  return `arn:${parameters.partition ?? ''}:macie2:${parameters.region}:${parameters.account}:findings-filter/${parameters.resourceId}`
}

export interface MemberArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type MemberArn = `arn:${string}:macie2:${string}:${string}:member/${string}`
export function memberArn(parameters: MemberArnParameters): MemberArn {
  return `arn:${parameters.partition ?? ''}:macie2:${parameters.region}:${parameters.account}:member/${parameters.resourceId}`
}
export interface AssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AssociationArn = `arn:${string}:codeguru-reviewer:${string}:${string}:association:${string}`
export function associationArn(parameters: AssociationArnParameters): AssociationArn {
  return `arn:${parameters.partition ?? ''}:codeguru-reviewer:${parameters.region}:${parameters.account}:association:${parameters.resourceId}`
}

export interface CodereviewArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
  codeReviewId: string
}
export type CodereviewArn = `arn:${string}:codeguru-reviewer:${string}:${string}:association:${string}:codereview:${string}`
export function codereviewArn(parameters: CodereviewArnParameters): CodereviewArn {
  return `arn:${parameters.partition ?? ''}:codeguru-reviewer:${parameters.region}:${parameters.account}:association:${parameters.resourceId}:codereview:${parameters.codeReviewId}`
}
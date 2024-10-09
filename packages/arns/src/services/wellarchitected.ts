export interface WorkloadArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type WorkloadArn = `arn:${string}:wellarchitected:${string}:${string}:workload/${string}`
export function workloadArn(parameters: WorkloadArnParameters): WorkloadArn {
  return `arn:${parameters.partition ?? ''}:wellarchitected:${parameters.region}:${parameters.account}:workload/${parameters.resourceId}`
}

export interface LensArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type LensArn = `arn:${string}:wellarchitected:${string}:${string}:lens/${string}`
export function lensArn(parameters: LensArnParameters): LensArn {
  return `arn:${parameters.partition ?? ''}:wellarchitected:${parameters.region}:${parameters.account}:lens/${parameters.resourceId}`
}

export interface ProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ProfileArn = `arn:${string}:wellarchitected:${string}:${string}:profile/${string}`
export function profileArn(parameters: ProfileArnParameters): ProfileArn {
  return `arn:${parameters.partition ?? ''}:wellarchitected:${parameters.region}:${parameters.account}:profile/${parameters.resourceId}`
}

export interface ReviewTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ReviewTemplateArn = `arn:${string}:wellarchitected:${string}:${string}:review-template/${string}`
export function reviewTemplateArn(parameters: ReviewTemplateArnParameters): ReviewTemplateArn {
  return `arn:${parameters.partition ?? ''}:wellarchitected:${parameters.region}:${parameters.account}:review-template/${parameters.resourceId}`
}
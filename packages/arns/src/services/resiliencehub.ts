export interface ResiliencyPolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resiliencyPolicyId: string
}
export type ResiliencyPolicyArn = `arn:${string}:resiliencehub:${string}:${string}:resiliency-policy/${string}`
export function resiliencyPolicyArn(parameters: ResiliencyPolicyArnParameters): ResiliencyPolicyArn {
  return `arn:${parameters.partition ?? ''}:resiliencehub:${parameters.region}:${parameters.account}:resiliency-policy/${parameters.resiliencyPolicyId}`
}

export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type ApplicationArn = `arn:${string}:resiliencehub:${string}:${string}:app/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:resiliencehub:${parameters.region}:${parameters.account}:app/${parameters.appId}`
}

export interface AppAssessmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appAssessmentId: string
}
export type AppAssessmentArn = `arn:${string}:resiliencehub:${string}:${string}:app-assessment/${string}`
export function appAssessmentArn(parameters: AppAssessmentArnParameters): AppAssessmentArn {
  return `arn:${parameters.partition ?? ''}:resiliencehub:${parameters.region}:${parameters.account}:app-assessment/${parameters.appAssessmentId}`
}

export interface RecommendationTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  recommendationTemplateId: string
}
export type RecommendationTemplateArn = `arn:${string}:resiliencehub:${string}:${string}:recommendation-template/${string}`
export function recommendationTemplateArn(parameters: RecommendationTemplateArnParameters): RecommendationTemplateArn {
  return `arn:${parameters.partition ?? ''}:resiliencehub:${parameters.region}:${parameters.account}:recommendation-template/${parameters.recommendationTemplateId}`
}
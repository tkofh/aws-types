export interface ApplicationsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ApplicationsArn = `arn:${string}:serverlessrepo:${string}:${string}:applications/${string}`
export function applicationsArn(parameters: ApplicationsArnParameters): ApplicationsArn {
  return `arn:${parameters.partition ?? ''}:serverlessrepo:${parameters.region}:${parameters.account}:applications/${parameters.resourceId}`
}
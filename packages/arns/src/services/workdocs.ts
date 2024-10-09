export interface OrganizationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type OrganizationArn = `arn:${string}:workdocs:${string}:${string}:organization/${string}`
export function organizationArn(parameters: OrganizationArnParameters): OrganizationArn {
  return `arn:${parameters.partition ?? ''}:workdocs:${parameters.region}:${parameters.account}:organization/${parameters.resourceId}`
}
export interface ProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ProfileArn = `arn:${string}:route53profiles:${string}:${string}:profile/${string}`
export function profileArn(parameters: ProfileArnParameters): ProfileArn {
  return `arn:${parameters.partition ?? ''}:route53profiles:${parameters.region}:${parameters.account}:profile/${parameters.resourceId}`
}

export interface ProfileAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ProfileAssociationArn = `arn:${string}:route53profiles:${string}:${string}:profile-association/${string}`
export function profileAssociationArn(parameters: ProfileAssociationArnParameters): ProfileAssociationArn {
  return `arn:${parameters.partition ?? ''}:route53profiles:${parameters.region}:${parameters.account}:profile-association/${parameters.resourceId}`
}
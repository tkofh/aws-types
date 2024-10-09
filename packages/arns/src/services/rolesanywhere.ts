export interface TrustAnchorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trustAnchorId: string
}
export type TrustAnchorArn = `arn:${string}:rolesanywhere:${string}:${string}:trust-anchor/${string}`
export function trustAnchorArn(parameters: TrustAnchorArnParameters): TrustAnchorArn {
  return `arn:${parameters.partition ?? ''}:rolesanywhere:${parameters.region}:${parameters.account}:trust-anchor/${parameters.trustAnchorId}`
}

export interface ProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  profileId: string
}
export type ProfileArn = `arn:${string}:rolesanywhere:${string}:${string}:profile/${string}`
export function profileArn(parameters: ProfileArnParameters): ProfileArn {
  return `arn:${parameters.partition ?? ''}:rolesanywhere:${parameters.region}:${parameters.account}:profile/${parameters.profileId}`
}

export interface SubjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subjectId: string
}
export type SubjectArn = `arn:${string}:rolesanywhere:${string}:${string}:subject/${string}`
export function subjectArn(parameters: SubjectArnParameters): SubjectArn {
  return `arn:${parameters.partition ?? ''}:rolesanywhere:${parameters.region}:${parameters.account}:subject/${parameters.subjectId}`
}

export interface CrlArnParameters {
  partition?: string | undefined
  region: string
  account: string
  crlId: string
}
export type CrlArn = `arn:${string}:rolesanywhere:${string}:${string}:crl/${string}`
export function crlArn(parameters: CrlArnParameters): CrlArn {
  return `arn:${parameters.partition ?? ''}:rolesanywhere:${parameters.region}:${parameters.account}:crl/${parameters.crlId}`
}
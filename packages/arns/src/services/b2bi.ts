export interface ProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ProfileArn = `arn:${string}:b2bi:${string}:${string}:profile/${string}`
export function profileArn(parameters: ProfileArnParameters): ProfileArn {
  return `arn:${parameters.partition ?? ''}:b2bi:${parameters.region}:${parameters.account}:profile/${parameters.resourceId}`
}

export interface CapabilityArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type CapabilityArn = `arn:${string}:b2bi:${string}:${string}:capability/${string}`
export function capabilityArn(parameters: CapabilityArnParameters): CapabilityArn {
  return `arn:${parameters.partition ?? ''}:b2bi:${parameters.region}:${parameters.account}:capability/${parameters.resourceId}`
}

export interface PartnershipArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type PartnershipArn = `arn:${string}:b2bi:${string}:${string}:partnership/${string}`
export function partnershipArn(parameters: PartnershipArnParameters): PartnershipArn {
  return `arn:${parameters.partition ?? ''}:b2bi:${parameters.region}:${parameters.account}:partnership/${parameters.resourceId}`
}

export interface TransformerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type TransformerArn = `arn:${string}:b2bi:${string}:${string}:transformer/${string}`
export function transformerArn(parameters: TransformerArnParameters): TransformerArn {
  return `arn:${parameters.partition ?? ''}:b2bi:${parameters.region}:${parameters.account}:transformer/${parameters.resourceId}`
}
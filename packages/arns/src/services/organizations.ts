export interface AccountArnParameters {
  partition?: string | undefined
  account: string
  organizationId: string
  accountId: string
}
export type AccountArn = `arn:${string}:organizations::${string}:account/o-${string}/${string}`
export function accountArn(parameters: AccountArnParameters): AccountArn {
  return `arn:${parameters.partition ?? ''}:organizations::${parameters.account}:account/o-${parameters.organizationId}/${parameters.accountId}`
}

export interface HandshakeArnParameters {
  partition?: string | undefined
  account: string
  organizationId: string
  handshakeType: string
  handshakeId: string
}
export type HandshakeArn = `arn:${string}:organizations::${string}:handshake/o-${string}/${string}/h-${string}`
export function handshakeArn(parameters: HandshakeArnParameters): HandshakeArn {
  return `arn:${parameters.partition ?? ''}:organizations::${parameters.account}:handshake/o-${parameters.organizationId}/${parameters.handshakeType}/h-${parameters.handshakeId}`
}

export interface OrganizationArnParameters {
  partition?: string | undefined
  account: string
  organizationId: string
}
export type OrganizationArn = `arn:${string}:organizations::${string}:organization/o-${string}`
export function organizationArn(parameters: OrganizationArnParameters): OrganizationArn {
  return `arn:${parameters.partition ?? ''}:organizations::${parameters.account}:organization/o-${parameters.organizationId}`
}

export interface OrganizationalunitArnParameters {
  partition?: string | undefined
  account: string
  organizationId: string
  organizationalUnitId: string
}
export type OrganizationalunitArn = `arn:${string}:organizations::${string}:ou/o-${string}/ou-${string}`
export function organizationalunitArn(parameters: OrganizationalunitArnParameters): OrganizationalunitArn {
  return `arn:${parameters.partition ?? ''}:organizations::${parameters.account}:ou/o-${parameters.organizationId}/ou-${parameters.organizationalUnitId}`
}

export interface PolicyArnParameters {
  partition?: string | undefined
  account: string
  organizationId: string
  policyType: string
  policyId: string
}
export type PolicyArn = `arn:${string}:organizations::${string}:policy/o-${string}/${string}/p-${string}`
export function policyArn(parameters: PolicyArnParameters): PolicyArn {
  return `arn:${parameters.partition ?? ''}:organizations::${parameters.account}:policy/o-${parameters.organizationId}/${parameters.policyType}/p-${parameters.policyId}`
}

export interface ResourcepolicyArnParameters {
  partition?: string | undefined
  account: string
  organizationId: string
  resourcePolicyId: string
}
export type ResourcepolicyArn = `arn:${string}:organizations::${string}:resourcepolicy/o-${string}/rp-${string}`
export function resourcepolicyArn(parameters: ResourcepolicyArnParameters): ResourcepolicyArn {
  return `arn:${parameters.partition ?? ''}:organizations::${parameters.account}:resourcepolicy/o-${parameters.organizationId}/rp-${parameters.resourcePolicyId}`
}

export interface AwspolicyArnParameters {
  partition?: string | undefined
  policyType: string
  policyId: string
}
export type AwspolicyArn = `arn:${string}:organizations::aws:policy/${string}/p-${string}`
export function awspolicyArn(parameters: AwspolicyArnParameters): AwspolicyArn {
  return `arn:${parameters.partition ?? ''}:organizations::aws:policy/${parameters.policyType}/p-${parameters.policyId}`
}

export interface RootArnParameters {
  partition?: string | undefined
  account: string
  organizationId: string
  rootId: string
}
export type RootArn = `arn:${string}:organizations::${string}:root/o-${string}/r-${string}`
export function rootArn(parameters: RootArnParameters): RootArn {
  return `arn:${parameters.partition ?? ''}:organizations::${parameters.account}:root/o-${parameters.organizationId}/r-${parameters.rootId}`
}
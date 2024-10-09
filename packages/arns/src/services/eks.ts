export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
}
export type ClusterArn = `arn:${string}:eks:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:cluster/${parameters.clusterName}`
}

export interface NodegroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  nodegroupName: string
  uuid: string
}
export type NodegroupArn = `arn:${string}:eks:${string}:${string}:nodegroup/${string}/${string}/${string}`
export function nodegroupArn(parameters: NodegroupArnParameters): NodegroupArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:nodegroup/${parameters.clusterName}/${parameters.nodegroupName}/${parameters.uuid}`
}

export interface AddonArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  addonName: string
  uuid: string
}
export type AddonArn = `arn:${string}:eks:${string}:${string}:addon/${string}/${string}/${string}`
export function addonArn(parameters: AddonArnParameters): AddonArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:addon/${parameters.clusterName}/${parameters.addonName}/${parameters.uuid}`
}

export interface FargateprofileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  fargateProfileName: string
  uuid: string
}
export type FargateprofileArn = `arn:${string}:eks:${string}:${string}:fargateprofile/${string}/${string}/${string}`
export function fargateprofileArn(parameters: FargateprofileArnParameters): FargateprofileArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:fargateprofile/${parameters.clusterName}/${parameters.fargateProfileName}/${parameters.uuid}`
}

export interface IdentityproviderconfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  identityProviderType: string
  identityProviderConfigName: string
  uuid: string
}
export type IdentityproviderconfigArn = `arn:${string}:eks:${string}:${string}:identityproviderconfig/${string}/${string}/${string}/${string}`
export function identityproviderconfigArn(parameters: IdentityproviderconfigArnParameters): IdentityproviderconfigArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:identityproviderconfig/${parameters.clusterName}/${parameters.identityProviderType}/${parameters.identityProviderConfigName}/${parameters.uuid}`
}

export interface EksAnywhereSubscriptionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  uuid: string
}
export type EksAnywhereSubscriptionArn = `arn:${string}:eks:${string}:${string}:eks-anywhere-subscription/${string}`
export function eksAnywhereSubscriptionArn(parameters: EksAnywhereSubscriptionArnParameters): EksAnywhereSubscriptionArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:eks-anywhere-subscription/${parameters.uuid}`
}

export interface PodidentityassociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  uuid: string
}
export type PodidentityassociationArn = `arn:${string}:eks:${string}:${string}:podidentityassociation/${string}/${string}`
export function podidentityassociationArn(parameters: PodidentityassociationArnParameters): PodidentityassociationArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:podidentityassociation/${parameters.clusterName}/${parameters.uuid}`
}

export interface AccessEntryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  iamIdentityType: string
  iamIdentityAccountId: string
  iamIdentityName: string
  uuid: string
}
export type AccessEntryArn = `arn:${string}:eks:${string}:${string}:access-entry/${string}/${string}/${string}/${string}/${string}`
export function accessEntryArn(parameters: AccessEntryArnParameters): AccessEntryArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:access-entry/${parameters.clusterName}/${parameters.iamIdentityType}/${parameters.iamIdentityAccountId}/${parameters.iamIdentityName}/${parameters.uuid}`
}

export interface AccessPolicyArnParameters {
  partition?: string | undefined
  accessPolicyName: string
}
export type AccessPolicyArn = `arn:${string}:eks::aws:cluster-access-policy/${string}`
export function accessPolicyArn(parameters: AccessPolicyArnParameters): AccessPolicyArn {
  return `arn:${parameters.partition ?? ''}:eks::aws:cluster-access-policy/${parameters.accessPolicyName}`
}
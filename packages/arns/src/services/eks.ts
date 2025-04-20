import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:eks:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:cluster/${this.clusterName}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface NodegroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly nodeGroupName: string
  readonly uuId: string
}
class NodegroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'nodegroup',
  `arn:${string}:eks:${string}:${string}:nodegroup/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'nodegroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly nodeGroupName: string
  readonly uuId: string
  constructor(parameters: NodegroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.nodeGroupName = parameters.nodeGroupName
    this.uuId = parameters.uuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:nodegroup/${this.clusterName}/${this.nodeGroupName}/${this.uuId}` as const
  }
}
export type { NodegroupArn }
export function nodegroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: NodegroupArnParameters<Partition>,
) {
  return new NodegroupArn<Partition>(parameters)
}

export interface AddonArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly addonName: string
  readonly uuId: string
}
class AddonArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'addon',
  `arn:${string}:eks:${string}:${string}:addon/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'addon' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly addonName: string
  readonly uuId: string
  constructor(parameters: AddonArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.addonName = parameters.addonName
    this.uuId = parameters.uuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:addon/${this.clusterName}/${this.addonName}/${this.uuId}` as const
  }
}
export type { AddonArn }
export function addonArn<Partition extends ArnPartition = 'aws'>(
  parameters: AddonArnParameters<Partition>,
) {
  return new AddonArn<Partition>(parameters)
}

export interface FargateProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly fargateProfileName: string
  readonly uuId: string
}
class FargateProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'fargateprofile',
  `arn:${string}:eks:${string}:${string}:fargateprofile/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fargateprofile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly fargateProfileName: string
  readonly uuId: string
  constructor(parameters: FargateProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.fargateProfileName = parameters.fargateProfileName
    this.uuId = parameters.uuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:fargateprofile/${this.clusterName}/${this.fargateProfileName}/${this.uuId}` as const
  }
}
export type { FargateProfileArn }
export function fargateProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: FargateProfileArnParameters<Partition>,
) {
  return new FargateProfileArn<Partition>(parameters)
}

export interface IdentityProviderConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly identityProviderType: string
  readonly identityProviderConfigName: string
  readonly uuId: string
}
class IdentityProviderConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'identityproviderconfig',
  `arn:${string}:eks:${string}:${string}:identityproviderconfig/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identityproviderconfig' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly identityProviderType: string
  readonly identityProviderConfigName: string
  readonly uuId: string
  constructor(parameters: IdentityProviderConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.identityProviderType = parameters.identityProviderType
    this.identityProviderConfigName = parameters.identityProviderConfigName
    this.uuId = parameters.uuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:identityproviderconfig/${this.clusterName}/${this.identityProviderType}/${this.identityProviderConfigName}/${this.uuId}` as const
  }
}
export type { IdentityProviderConfigArn }
export function identityProviderConfigArn<
  Partition extends ArnPartition = 'aws',
>(parameters: IdentityProviderConfigArnParameters<Partition>) {
  return new IdentityProviderConfigArn<Partition>(parameters)
}

export interface EksAnywhereSubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly uuId: string
}
class EksAnywhereSubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eks-anywhere-subscription',
  `arn:${string}:eks:${string}:${string}:eks-anywhere-subscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eks-anywhere-subscription' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly uuId: string
  constructor(parameters: EksAnywhereSubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.uuId = parameters.uuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:eks-anywhere-subscription/${this.uuId}` as const
  }
}
export type { EksAnywhereSubscriptionArn }
export function eksAnywhereSubscriptionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EksAnywhereSubscriptionArnParameters<Partition>) {
  return new EksAnywhereSubscriptionArn<Partition>(parameters)
}

export interface PodIdentityAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly uuId: string
}
class PodIdentityAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'podidentityassociation',
  `arn:${string}:eks:${string}:${string}:podidentityassociation/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'podidentityassociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly uuId: string
  constructor(parameters: PodIdentityAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.uuId = parameters.uuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:podidentityassociation/${this.clusterName}/${this.uuId}` as const
  }
}
export type { PodIdentityAssociationArn }
export function podIdentityAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PodIdentityAssociationArnParameters<Partition>) {
  return new PodIdentityAssociationArn<Partition>(parameters)
}

export interface AccessEntryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly iamIdentityType: string
  readonly iamIdentityAccountId: string
  readonly iamIdentityName: string
  readonly uuId: string
}
class AccessEntryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-entry',
  `arn:${string}:eks:${string}:${string}:access-entry/${string}/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-entry' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly iamIdentityType: string
  readonly iamIdentityAccountId: string
  readonly iamIdentityName: string
  readonly uuId: string
  constructor(parameters: AccessEntryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.iamIdentityType = parameters.iamIdentityType
    this.iamIdentityAccountId = parameters.iamIdentityAccountId
    this.iamIdentityName = parameters.iamIdentityName
    this.uuId = parameters.uuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:access-entry/${this.clusterName}/${this.iamIdentityType}/${this.iamIdentityAccountId}/${this.iamIdentityName}/${this.uuId}` as const
  }
}
export type { AccessEntryArn }
export function accessEntryArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessEntryArnParameters<Partition>,
) {
  return new AccessEntryArn<Partition>(parameters)
}

export interface AccessPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly accessPolicyName: string
}
class AccessPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-policy',
  `arn:${string}:eks::aws:cluster-access-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-policy' as const
  readonly partition: Partition
  readonly accessPolicyName: string
  constructor(parameters: AccessPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.accessPolicyName = parameters.accessPolicyName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks::aws:cluster-access-policy/${this.accessPolicyName}` as const
  }
}
export type { AccessPolicyArn }
export function accessPolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessPolicyArnParameters<Partition>,
) {
  return new AccessPolicyArn<Partition>(parameters)
}

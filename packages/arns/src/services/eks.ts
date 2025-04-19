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
  readonly nodegroupName: string
  readonly uuid: string
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
  readonly nodegroupName: string
  readonly uuid: string
  constructor(parameters: NodegroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.nodegroupName = parameters.nodegroupName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:nodegroup/${this.clusterName}/${this.nodegroupName}/${this.uuid}` as const
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
  readonly uuid: string
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
  readonly uuid: string
  constructor(parameters: AddonArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.addonName = parameters.addonName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:addon/${this.clusterName}/${this.addonName}/${this.uuid}` as const
  }
}
export type { AddonArn }
export function addonArn<Partition extends ArnPartition = 'aws'>(
  parameters: AddonArnParameters<Partition>,
) {
  return new AddonArn<Partition>(parameters)
}

export interface FargateprofileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly fargateProfileName: string
  readonly uuid: string
}
class FargateprofileArn<
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
  readonly uuid: string
  constructor(parameters: FargateprofileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.fargateProfileName = parameters.fargateProfileName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:fargateprofile/${this.clusterName}/${this.fargateProfileName}/${this.uuid}` as const
  }
}
export type { FargateprofileArn }
export function fargateprofileArn<Partition extends ArnPartition = 'aws'>(
  parameters: FargateprofileArnParameters<Partition>,
) {
  return new FargateprofileArn<Partition>(parameters)
}

export interface IdentityproviderconfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly identityProviderType: string
  readonly identityProviderConfigName: string
  readonly uuid: string
}
class IdentityproviderconfigArn<
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
  readonly uuid: string
  constructor(parameters: IdentityproviderconfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.identityProviderType = parameters.identityProviderType
    this.identityProviderConfigName = parameters.identityProviderConfigName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:identityproviderconfig/${this.clusterName}/${this.identityProviderType}/${this.identityProviderConfigName}/${this.uuid}` as const
  }
}
export type { IdentityproviderconfigArn }
export function identityproviderconfigArn<
  Partition extends ArnPartition = 'aws',
>(parameters: IdentityproviderconfigArnParameters<Partition>) {
  return new IdentityproviderconfigArn<Partition>(parameters)
}

export interface EksAnywhereSubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly uuid: string
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
  readonly uuid: string
  constructor(parameters: EksAnywhereSubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:eks-anywhere-subscription/${this.uuid}` as const
  }
}
export type { EksAnywhereSubscriptionArn }
export function eksAnywhereSubscriptionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EksAnywhereSubscriptionArnParameters<Partition>) {
  return new EksAnywhereSubscriptionArn<Partition>(parameters)
}

export interface PodidentityassociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly uuid: string
}
class PodidentityassociationArn<
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
  readonly uuid: string
  constructor(parameters: PodidentityassociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:podidentityassociation/${this.clusterName}/${this.uuid}` as const
  }
}
export type { PodidentityassociationArn }
export function podidentityassociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PodidentityassociationArnParameters<Partition>) {
  return new PodidentityassociationArn<Partition>(parameters)
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
  readonly uuid: string
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
  readonly uuid: string
  constructor(parameters: AccessEntryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.iamIdentityType = parameters.iamIdentityType
    this.iamIdentityAccountId = parameters.iamIdentityAccountId
    this.iamIdentityName = parameters.iamIdentityName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:access-entry/${this.clusterName}/${this.iamIdentityType}/${this.iamIdentityAccountId}/${this.iamIdentityName}/${this.uuid}` as const
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

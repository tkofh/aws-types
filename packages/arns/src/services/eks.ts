import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:eks:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:cluster/${this.nameCluster}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameGroupNode: string
  readonly idUu: string
}
class NodegroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'nodegroup',
  `arn:${string}:eks:${string}:${string}:nodegroup/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'nodegroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameGroupNode: string
  readonly idUu: string
  constructor(parameters: NodegroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.nameGroupNode = parameters.nameGroupNode
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:nodegroup/${this.nameCluster}/${this.nameGroupNode}/${this.idUu}` as const
  }
}
export type { NodegroupArn }
export function nodegroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: NodegroupArnParameters<Partition>,
) {
  return new NodegroupArn<Partition>(parameters)
}

export interface AddonArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameAddon: string
  readonly idUu: string
}
class AddonArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'addon',
  `arn:${string}:eks:${string}:${string}:addon/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'addon' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameAddon: string
  readonly idUu: string
  constructor(parameters: AddonArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.nameAddon = parameters.nameAddon
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:addon/${this.nameCluster}/${this.nameAddon}/${this.idUu}` as const
  }
}
export type { AddonArn }
export function addonArn<Partition extends ArnPartition = 'aws'>(
  parameters: AddonArnParameters<Partition>,
) {
  return new AddonArn<Partition>(parameters)
}

export interface ProfileFargateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameProfileFargate: string
  readonly idUu: string
}
class ProfileFargateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'fargateprofile',
  `arn:${string}:eks:${string}:${string}:fargateprofile/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fargateprofile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameProfileFargate: string
  readonly idUu: string
  constructor(parameters: ProfileFargateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.nameProfileFargate = parameters.nameProfileFargate
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:fargateprofile/${this.nameCluster}/${this.nameProfileFargate}/${this.idUu}` as const
  }
}
export type { ProfileFargateArn }
export function profileFargateArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileFargateArnParameters<Partition>,
) {
  return new ProfileFargateArn<Partition>(parameters)
}

export interface ConfigProviderIdentityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly typeProviderIdentity: string
  readonly nameConfigProviderIdentity: string
  readonly idUu: string
}
class ConfigProviderIdentityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'identityproviderconfig',
  `arn:${string}:eks:${string}:${string}:identityproviderconfig/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identityproviderconfig' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly typeProviderIdentity: string
  readonly nameConfigProviderIdentity: string
  readonly idUu: string
  constructor(parameters: ConfigProviderIdentityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.typeProviderIdentity = parameters.typeProviderIdentity
    this.nameConfigProviderIdentity = parameters.nameConfigProviderIdentity
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:identityproviderconfig/${this.nameCluster}/${this.typeProviderIdentity}/${this.nameConfigProviderIdentity}/${this.idUu}` as const
  }
}
export type { ConfigProviderIdentityArn }
export function configProviderIdentityArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigProviderIdentityArnParameters<Partition>) {
  return new ConfigProviderIdentityArn<Partition>(parameters)
}

export interface SubscriptionAnywhereEksArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUu: string
}
class SubscriptionAnywhereEksArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eks-anywhere-subscription',
  `arn:${string}:eks:${string}:${string}:eks-anywhere-subscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eks-anywhere-subscription' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUu: string
  constructor(parameters: SubscriptionAnywhereEksArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:eks-anywhere-subscription/${this.idUu}` as const
  }
}
export type { SubscriptionAnywhereEksArn }
export function subscriptionAnywhereEksArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SubscriptionAnywhereEksArnParameters<Partition>) {
  return new SubscriptionAnywhereEksArn<Partition>(parameters)
}

export interface AssociationIdentityPodArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUu: string
}
class AssociationIdentityPodArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'podidentityassociation',
  `arn:${string}:eks:${string}:${string}:podidentityassociation/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'podidentityassociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idUu: string
  constructor(parameters: AssociationIdentityPodArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:podidentityassociation/${this.nameCluster}/${this.idUu}` as const
  }
}
export type { AssociationIdentityPodArn }
export function associationIdentityPodArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationIdentityPodArnParameters<Partition>) {
  return new AssociationIdentityPodArn<Partition>(parameters)
}

export interface EntryAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly typeIdentityIam: string
  readonly idAccountIdentityIam: string
  readonly nameIdentityIam: string
  readonly idUu: string
}
class EntryAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-entry',
  `arn:${string}:eks:${string}:${string}:access-entry/${string}/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-entry' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly typeIdentityIam: string
  readonly idAccountIdentityIam: string
  readonly nameIdentityIam: string
  readonly idUu: string
  constructor(parameters: EntryAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.typeIdentityIam = parameters.typeIdentityIam
    this.idAccountIdentityIam = parameters.idAccountIdentityIam
    this.nameIdentityIam = parameters.nameIdentityIam
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks:${this.region}:${this.account}:access-entry/${this.nameCluster}/${this.typeIdentityIam}/${this.idAccountIdentityIam}/${this.nameIdentityIam}/${this.idUu}` as const
  }
}
export type { EntryAccessArn }
export function entryAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: EntryAccessArnParameters<Partition>,
) {
  return new EntryAccessArn<Partition>(parameters)
}

export interface PolicyAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly namePolicyAccess: string
}
class PolicyAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-policy',
  `arn:${string}:eks::aws:cluster-access-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-policy' as const
  readonly partition: string
  readonly namePolicyAccess: string
  constructor(parameters: PolicyAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.namePolicyAccess = parameters.namePolicyAccess
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:eks::aws:cluster-access-policy/${this.namePolicyAccess}` as const
  }
}
export type { PolicyAccessArn }
export function policyAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyAccessArnParameters<Partition>,
) {
  return new PolicyAccessArn<Partition>(parameters)
}

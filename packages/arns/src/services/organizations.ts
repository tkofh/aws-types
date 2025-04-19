import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly organizationId: string
  readonly accountId: string
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'account', `arn:${string}:organizations::${string}:account/o-${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'account' as const
  readonly partition: Partition
  readonly account: string
  readonly organizationId: string
  readonly accountId: string
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.organizationId = parameters.organizationId
    this.accountId = parameters.accountId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:account/o-${this.organizationId}/${this.accountId}` as const
  }
}
export type { AccountArn }
export function accountArn<Partition extends ArnPartition = 'aws'>(parameters: AccountArnParameters<Partition>) {
  return new AccountArn<Partition>(parameters)
}

export interface HandshakeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly organizationId: string
  readonly handshakeType: string
  readonly handshakeId: string
}
class HandshakeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'handshake', `arn:${string}:organizations::${string}:handshake/o-${string}/${string}/h-${string}`> {
  readonly [ArnResourceTypeBrand] = 'handshake' as const
  readonly partition: Partition
  readonly account: string
  readonly organizationId: string
  readonly handshakeType: string
  readonly handshakeId: string
  constructor(parameters: HandshakeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.organizationId = parameters.organizationId
    this.handshakeType = parameters.handshakeType
    this.handshakeId = parameters.handshakeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:handshake/o-${this.organizationId}/${this.handshakeType}/h-${this.handshakeId}` as const
  }
}
export type { HandshakeArn }
export function handshakeArn<Partition extends ArnPartition = 'aws'>(parameters: HandshakeArnParameters<Partition>) {
  return new HandshakeArn<Partition>(parameters)
}

export interface OrganizationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly organizationId: string
}
class OrganizationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'organization', `arn:${string}:organizations::${string}:organization/o-${string}`> {
  readonly [ArnResourceTypeBrand] = 'organization' as const
  readonly partition: Partition
  readonly account: string
  readonly organizationId: string
  constructor(parameters: OrganizationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.organizationId = parameters.organizationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:organization/o-${this.organizationId}` as const
  }
}
export type { OrganizationArn }
export function organizationArn<Partition extends ArnPartition = 'aws'>(parameters: OrganizationArnParameters<Partition>) {
  return new OrganizationArn<Partition>(parameters)
}

export interface OrganizationalunitArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly organizationId: string
  readonly organizationalUnitId: string
}
class OrganizationalunitArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'organizationalunit', `arn:${string}:organizations::${string}:ou/o-${string}/ou-${string}`> {
  readonly [ArnResourceTypeBrand] = 'organizationalunit' as const
  readonly partition: Partition
  readonly account: string
  readonly organizationId: string
  readonly organizationalUnitId: string
  constructor(parameters: OrganizationalunitArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.organizationId = parameters.organizationId
    this.organizationalUnitId = parameters.organizationalUnitId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:ou/o-${this.organizationId}/ou-${this.organizationalUnitId}` as const
  }
}
export type { OrganizationalunitArn }
export function organizationalunitArn<Partition extends ArnPartition = 'aws'>(parameters: OrganizationalunitArnParameters<Partition>) {
  return new OrganizationalunitArn<Partition>(parameters)
}

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly organizationId: string
  readonly policyType: string
  readonly policyId: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'policy', `arn:${string}:organizations::${string}:policy/o-${string}/${string}/p-${string}`> {
  readonly [ArnResourceTypeBrand] = 'policy' as const
  readonly partition: Partition
  readonly account: string
  readonly organizationId: string
  readonly policyType: string
  readonly policyId: string
  constructor(parameters: PolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.organizationId = parameters.organizationId
    this.policyType = parameters.policyType
    this.policyId = parameters.policyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:policy/o-${this.organizationId}/${this.policyType}/p-${this.policyId}` as const
  }
}
export type { PolicyArn }
export function policyArn<Partition extends ArnPartition = 'aws'>(parameters: PolicyArnParameters<Partition>) {
  return new PolicyArn<Partition>(parameters)
}

export interface ResourcepolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly organizationId: string
  readonly resourcePolicyId: string
}
class ResourcepolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'resourcepolicy', `arn:${string}:organizations::${string}:resourcepolicy/o-${string}/rp-${string}`> {
  readonly [ArnResourceTypeBrand] = 'resourcepolicy' as const
  readonly partition: Partition
  readonly account: string
  readonly organizationId: string
  readonly resourcePolicyId: string
  constructor(parameters: ResourcepolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.organizationId = parameters.organizationId
    this.resourcePolicyId = parameters.resourcePolicyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:resourcepolicy/o-${this.organizationId}/rp-${this.resourcePolicyId}` as const
  }
}
export type { ResourcepolicyArn }
export function resourcepolicyArn<Partition extends ArnPartition = 'aws'>(parameters: ResourcepolicyArnParameters<Partition>) {
  return new ResourcepolicyArn<Partition>(parameters)
}

export interface AwspolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly policyType: string
  readonly policyId: string
}
class AwspolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'awspolicy', `arn:${string}:organizations::aws:policy/${string}/p-${string}`> {
  readonly [ArnResourceTypeBrand] = 'awspolicy' as const
  readonly partition: Partition
  readonly policyType: string
  readonly policyId: string
  constructor(parameters: AwspolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.policyType = parameters.policyType
    this.policyId = parameters.policyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::aws:policy/${this.policyType}/p-${this.policyId}` as const
  }
}
export type { AwspolicyArn }
export function awspolicyArn<Partition extends ArnPartition = 'aws'>(parameters: AwspolicyArnParameters<Partition>) {
  return new AwspolicyArn<Partition>(parameters)
}

export interface RootArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly organizationId: string
  readonly rootId: string
}
class RootArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'root', `arn:${string}:organizations::${string}:root/o-${string}/r-${string}`> {
  readonly [ArnResourceTypeBrand] = 'root' as const
  readonly partition: Partition
  readonly account: string
  readonly organizationId: string
  readonly rootId: string
  constructor(parameters: RootArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.organizationId = parameters.organizationId
    this.rootId = parameters.rootId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:root/o-${this.organizationId}/r-${this.rootId}` as const
  }
}
export type { RootArn }
export function rootArn<Partition extends ArnPartition = 'aws'>(parameters: RootArnParameters<Partition>) {
  return new RootArn<Partition>(parameters)
}
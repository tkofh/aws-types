import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly idAccount: string
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'account',
  `arn:${string}:organizations::${string}:account/o-${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'account' as const
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly idAccount: string
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idOrganization = parameters.idOrganization
    this.idAccount = parameters.idAccount
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:account/o-${this.idOrganization}/${this.idAccount}` as const
  }
}
export type { AccountArn }
export function accountArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccountArnParameters<Partition>,
) {
  return new AccountArn<Partition>(parameters)
}

export interface HandshakeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly typeHandshake: string
  readonly idHandshake: string
}
class HandshakeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'handshake',
  `arn:${string}:organizations::${string}:handshake/o-${string}/${string}/h-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'handshake' as const
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly typeHandshake: string
  readonly idHandshake: string
  constructor(parameters: HandshakeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idOrganization = parameters.idOrganization
    this.typeHandshake = parameters.typeHandshake
    this.idHandshake = parameters.idHandshake
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:handshake/o-${this.idOrganization}/${this.typeHandshake}/h-${this.idHandshake}` as const
  }
}
export type { HandshakeArn }
export function handshakeArn<Partition extends ArnPartition = 'aws'>(
  parameters: HandshakeArnParameters<Partition>,
) {
  return new HandshakeArn<Partition>(parameters)
}

export interface OrganizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
}
class OrganizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'organization',
  `arn:${string}:organizations::${string}:organization/o-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'organization' as const
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  constructor(parameters: OrganizationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idOrganization = parameters.idOrganization
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:organization/o-${this.idOrganization}` as const
  }
}
export type { OrganizationArn }
export function organizationArn<Partition extends ArnPartition = 'aws'>(
  parameters: OrganizationArnParameters<Partition>,
) {
  return new OrganizationArn<Partition>(parameters)
}

export interface UnitOrganizationalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly idUnitOrganizational: string
}
class UnitOrganizationalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'organizationalunit',
  `arn:${string}:organizations::${string}:ou/o-${string}/ou-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'organizationalunit' as const
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly idUnitOrganizational: string
  constructor(parameters: UnitOrganizationalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idOrganization = parameters.idOrganization
    this.idUnitOrganizational = parameters.idUnitOrganizational
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:ou/o-${this.idOrganization}/ou-${this.idUnitOrganizational}` as const
  }
}
export type { UnitOrganizationalArn }
export function unitOrganizationalArn<Partition extends ArnPartition = 'aws'>(
  parameters: UnitOrganizationalArnParameters<Partition>,
) {
  return new UnitOrganizationalArn<Partition>(parameters)
}

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly typePolicy: string
  readonly idPolicy: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'policy',
  `arn:${string}:organizations::${string}:policy/o-${string}/${string}/p-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'policy' as const
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly typePolicy: string
  readonly idPolicy: string
  constructor(parameters: PolicyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idOrganization = parameters.idOrganization
    this.typePolicy = parameters.typePolicy
    this.idPolicy = parameters.idPolicy
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:policy/o-${this.idOrganization}/${this.typePolicy}/p-${this.idPolicy}` as const
  }
}
export type { PolicyArn }
export function policyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyArnParameters<Partition>,
) {
  return new PolicyArn<Partition>(parameters)
}

export interface PolicyResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly idPolicyResource: string
}
class PolicyResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resourcepolicy',
  `arn:${string}:organizations::${string}:resourcepolicy/o-${string}/rp-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resourcepolicy' as const
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly idPolicyResource: string
  constructor(parameters: PolicyResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idOrganization = parameters.idOrganization
    this.idPolicyResource = parameters.idPolicyResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:resourcepolicy/o-${this.idOrganization}/rp-${this.idPolicyResource}` as const
  }
}
export type { PolicyResourceArn }
export function policyResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyResourceArnParameters<Partition>,
) {
  return new PolicyResourceArn<Partition>(parameters)
}

export interface PolicyAwsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly typePolicy: string
  readonly idPolicy: string
}
class PolicyAwsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'awspolicy',
  `arn:${string}:organizations::aws:policy/${string}/p-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'awspolicy' as const
  readonly partition: string
  readonly typePolicy: string
  readonly idPolicy: string
  constructor(parameters: PolicyAwsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.typePolicy = parameters.typePolicy
    this.idPolicy = parameters.idPolicy
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::aws:policy/${this.typePolicy}/p-${this.idPolicy}` as const
  }
}
export type { PolicyAwsArn }
export function policyAwsArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyAwsArnParameters<Partition>,
) {
  return new PolicyAwsArn<Partition>(parameters)
}

export interface RootArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly idRoot: string
}
class RootArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'root',
  `arn:${string}:organizations::${string}:root/o-${string}/r-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'root' as const
  readonly partition: string
  readonly account: string
  readonly idOrganization: string
  readonly idRoot: string
  constructor(parameters: RootArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idOrganization = parameters.idOrganization
    this.idRoot = parameters.idRoot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:organizations::${this.account}:root/o-${this.idOrganization}/r-${this.idRoot}` as const
  }
}
export type { RootArn }
export function rootArn<Partition extends ArnPartition = 'aws'>(
  parameters: RootArnParameters<Partition>,
) {
  return new RootArn<Partition>(parameters)
}

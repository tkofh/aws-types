import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PermissionSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly instanceId: string
  readonly permissionSetId: string
}
class PermissionSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'PermissionSet',
  `arn:${string}:sso:::permissionSet/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'PermissionSet' as const
  readonly partition: Partition
  readonly instanceId: string
  readonly permissionSetId: string
  constructor(parameters: PermissionSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.instanceId = parameters.instanceId
    this.permissionSetId = parameters.permissionSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso:::permissionSet/${this.instanceId}/${this.permissionSetId}` as const
  }
}
export type { PermissionSetArn }
export function permissionSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: PermissionSetArnParameters<Partition>,
) {
  return new PermissionSetArn<Partition>(parameters)
}

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly accountId: string
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Account',
  `arn:${string}:sso:::account/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Account' as const
  readonly partition: Partition
  readonly accountId: string
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.accountId = parameters.accountId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso:::account/${this.accountId}` as const
  }
}
export type { AccountArn }
export function accountArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccountArnParameters<Partition>,
) {
  return new AccountArn<Partition>(parameters)
}

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly instanceId: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Instance',
  `arn:${string}:sso:::instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Instance' as const
  readonly partition: Partition
  readonly instanceId: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso:::instance/${this.instanceId}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly accountId: string
  readonly instanceId: string
  readonly applicationId: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Application',
  `arn:${string}:sso::${string}:application/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Application' as const
  readonly partition: Partition
  readonly accountId: string
  readonly instanceId: string
  readonly applicationId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.accountId = parameters.accountId
    this.instanceId = parameters.instanceId
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso::${this.accountId}:application/${this.instanceId}/${this.applicationId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface TrustedTokenIssuerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly accountId: string
  readonly instanceId: string
  readonly trustedTokenIssuerId: string
}
class TrustedTokenIssuerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TrustedTokenIssuer',
  `arn:${string}:sso::${string}:trustedTokenIssuer/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TrustedTokenIssuer' as const
  readonly partition: Partition
  readonly accountId: string
  readonly instanceId: string
  readonly trustedTokenIssuerId: string
  constructor(parameters: TrustedTokenIssuerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.accountId = parameters.accountId
    this.instanceId = parameters.instanceId
    this.trustedTokenIssuerId = parameters.trustedTokenIssuerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso::${this.accountId}:trustedTokenIssuer/${this.instanceId}/${this.trustedTokenIssuerId}` as const
  }
}
export type { TrustedTokenIssuerArn }
export function trustedTokenIssuerArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrustedTokenIssuerArnParameters<Partition>,
) {
  return new TrustedTokenIssuerArn<Partition>(parameters)
}

export interface ApplicationProviderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly applicationProviderId: string
}
class ApplicationProviderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ApplicationProvider',
  `arn:${string}:sso::aws:applicationProvider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ApplicationProvider' as const
  readonly partition: Partition
  readonly applicationProviderId: string
  constructor(parameters: ApplicationProviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.applicationProviderId = parameters.applicationProviderId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso::aws:applicationProvider/${this.applicationProviderId}` as const
  }
}
export type { ApplicationProviderArn }
export function applicationProviderArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationProviderArnParameters<Partition>,
) {
  return new ApplicationProviderArn<Partition>(parameters)
}

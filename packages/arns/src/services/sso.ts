import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SetPermissionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idInstance: string
  readonly idSetPermission: string
}
class SetPermissionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'PermissionSet',
  `arn:${string}:sso:::permissionSet/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'PermissionSet' as const
  readonly partition: string
  readonly idInstance: string
  readonly idSetPermission: string
  constructor(parameters: SetPermissionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idInstance = parameters.idInstance
    this.idSetPermission = parameters.idSetPermission
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso:::permissionSet/${this.idInstance}/${this.idSetPermission}` as const
  }
}
export type { SetPermissionArn }
export function setPermissionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetPermissionArnParameters<Partition>,
) {
  return new SetPermissionArn<Partition>(parameters)
}

export interface AccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idAccount: string
}
class AccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Account',
  `arn:${string}:sso:::account/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Account' as const
  readonly partition: string
  readonly idAccount: string
  constructor(parameters: AccountArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idAccount = parameters.idAccount
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso:::account/${this.idAccount}` as const
  }
}
export type { AccountArn }
export function accountArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccountArnParameters<Partition>,
) {
  return new AccountArn<Partition>(parameters)
}

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idInstance: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Instance',
  `arn:${string}:sso:::instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Instance' as const
  readonly partition: string
  readonly idInstance: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso:::instance/${this.idInstance}` as const
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
  readonly partition: string
  readonly idAccount: string
  readonly idInstance: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Application',
  `arn:${string}:sso::${string}:application/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Application' as const
  readonly partition: string
  readonly idAccount: string
  readonly idInstance: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idAccount = parameters.idAccount
    this.idInstance = parameters.idInstance
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso::${this.idAccount}:application/${this.idInstance}/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface IssuerTokenTrustedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idAccount: string
  readonly idInstance: string
  readonly idIssuerTokenTrusted: string
}
class IssuerTokenTrustedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TrustedTokenIssuer',
  `arn:${string}:sso::${string}:trustedTokenIssuer/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TrustedTokenIssuer' as const
  readonly partition: string
  readonly idAccount: string
  readonly idInstance: string
  readonly idIssuerTokenTrusted: string
  constructor(parameters: IssuerTokenTrustedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idAccount = parameters.idAccount
    this.idInstance = parameters.idInstance
    this.idIssuerTokenTrusted = parameters.idIssuerTokenTrusted
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso::${this.idAccount}:trustedTokenIssuer/${this.idInstance}/${this.idIssuerTokenTrusted}` as const
  }
}
export type { IssuerTokenTrustedArn }
export function issuerTokenTrustedArn<Partition extends ArnPartition = 'aws'>(
  parameters: IssuerTokenTrustedArnParameters<Partition>,
) {
  return new IssuerTokenTrustedArn<Partition>(parameters)
}

export interface ProviderApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly idProviderApplication: string
}
class ProviderApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ApplicationProvider',
  `arn:${string}:sso::aws:applicationProvider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ApplicationProvider' as const
  readonly partition: string
  readonly idProviderApplication: string
  constructor(parameters: ProviderApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idProviderApplication = parameters.idProviderApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sso::aws:applicationProvider/${this.idProviderApplication}` as const
  }
}
export type { ProviderApplicationArn }
export function providerApplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderApplicationArnParameters<Partition>,
) {
  return new ProviderApplicationArn<Partition>(parameters)
}

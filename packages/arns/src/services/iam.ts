import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AccessReportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly entityPath: string
}
class AccessReportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-report',
  `arn:${string}:iam::${string}:access-report/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-report' as const
  readonly partition: Partition
  readonly account: string
  readonly entityPath: string
  constructor(parameters: AccessReportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.entityPath = parameters.entityPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:access-report/${this.entityPath}` as const
  }
}
export type { AccessReportArn }
export function accessReportArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessReportArnParameters<Partition>,
) {
  return new AccessReportArn<Partition>(parameters)
}

export interface AssumedRoleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly roleName: string
  readonly roleSessionName: string
}
class AssumedRoleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'assumed-role',
  `arn:${string}:iam::${string}:assumed-role/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assumed-role' as const
  readonly partition: Partition
  readonly account: string
  readonly roleName: string
  readonly roleSessionName: string
  constructor(parameters: AssumedRoleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.roleName = parameters.roleName
    this.roleSessionName = parameters.roleSessionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:assumed-role/${this.roleName}/${this.roleSessionName}` as const
  }
}
export type { AssumedRoleArn }
export function assumedRoleArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssumedRoleArnParameters<Partition>,
) {
  return new AssumedRoleArn<Partition>(parameters)
}

export interface FederatedUserArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly userName: string
}
class FederatedUserArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'federated-user',
  `arn:${string}:iam::${string}:federated-user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'federated-user' as const
  readonly partition: Partition
  readonly account: string
  readonly userName: string
  constructor(parameters: FederatedUserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.userName = parameters.userName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:federated-user/${this.userName}` as const
  }
}
export type { FederatedUserArn }
export function federatedUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: FederatedUserArnParameters<Partition>,
) {
  return new FederatedUserArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly groupNameWithPath: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:iam::${string}:group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: Partition
  readonly account: string
  readonly groupNameWithPath: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.groupNameWithPath = parameters.groupNameWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:group/${this.groupNameWithPath}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface InstanceProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly instanceProfileNameWithPath: string
}
class InstanceProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'instance-profile',
  `arn:${string}:iam::${string}:instance-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance-profile' as const
  readonly partition: Partition
  readonly account: string
  readonly instanceProfileNameWithPath: string
  constructor(parameters: InstanceProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.instanceProfileNameWithPath = parameters.instanceProfileNameWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:instance-profile/${this.instanceProfileNameWithPath}` as const
  }
}
export type { InstanceProfileArn }
export function instanceProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceProfileArnParameters<Partition>,
) {
  return new InstanceProfileArn<Partition>(parameters)
}

export interface MfaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly mfaTokenIdWithPath: string
}
class MfaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'mfa',
  `arn:${string}:iam::${string}:mfa/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mfa' as const
  readonly partition: Partition
  readonly account: string
  readonly mfaTokenIdWithPath: string
  constructor(parameters: MfaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.mfaTokenIdWithPath = parameters.mfaTokenIdWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:mfa/${this.mfaTokenIdWithPath}` as const
  }
}
export type { MfaArn }
export function mfaArn<Partition extends ArnPartition = 'aws'>(
  parameters: MfaArnParameters<Partition>,
) {
  return new MfaArn<Partition>(parameters)
}

export interface OidcProviderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly oidcProviderName: string
}
class OidcProviderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'oidc-provider',
  `arn:${string}:iam::${string}:oidc-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'oidc-provider' as const
  readonly partition: Partition
  readonly account: string
  readonly oidcProviderName: string
  constructor(parameters: OidcProviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.oidcProviderName = parameters.oidcProviderName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:oidc-provider/${this.oidcProviderName}` as const
  }
}
export type { OidcProviderArn }
export function oidcProviderArn<Partition extends ArnPartition = 'aws'>(
  parameters: OidcProviderArnParameters<Partition>,
) {
  return new OidcProviderArn<Partition>(parameters)
}

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly policyNameWithPath: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'policy',
  `arn:${string}:iam::${string}:policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'policy' as const
  readonly partition: Partition
  readonly account: string
  readonly policyNameWithPath: string
  constructor(parameters: PolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.policyNameWithPath = parameters.policyNameWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:policy/${this.policyNameWithPath}` as const
  }
}
export type { PolicyArn }
export function policyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyArnParameters<Partition>,
) {
  return new PolicyArn<Partition>(parameters)
}

export interface RoleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly roleNameWithPath: string
}
class RoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'role',
  `arn:${string}:iam::${string}:role/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'role' as const
  readonly partition: Partition
  readonly account: string
  readonly roleNameWithPath: string
  constructor(parameters: RoleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.roleNameWithPath = parameters.roleNameWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/${this.roleNameWithPath}` as const
  }
}
export type { RoleArn }
export function roleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleArnParameters<Partition>,
) {
  return new RoleArn<Partition>(parameters)
}

export interface SamlProviderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly samlProviderName: string
}
class SamlProviderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'saml-provider',
  `arn:${string}:iam::${string}:saml-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'saml-provider' as const
  readonly partition: Partition
  readonly account: string
  readonly samlProviderName: string
  constructor(parameters: SamlProviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.samlProviderName = parameters.samlProviderName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:saml-provider/${this.samlProviderName}` as const
  }
}
export type { SamlProviderArn }
export function samlProviderArn<Partition extends ArnPartition = 'aws'>(
  parameters: SamlProviderArnParameters<Partition>,
) {
  return new SamlProviderArn<Partition>(parameters)
}

export interface ServerCertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly certificateNameWithPath: string
}
class ServerCertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'server-certificate',
  `arn:${string}:iam::${string}:server-certificate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'server-certificate' as const
  readonly partition: Partition
  readonly account: string
  readonly certificateNameWithPath: string
  constructor(parameters: ServerCertificateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.certificateNameWithPath = parameters.certificateNameWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:server-certificate/${this.certificateNameWithPath}` as const
  }
}
export type { ServerCertificateArn }
export function serverCertificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServerCertificateArnParameters<Partition>,
) {
  return new ServerCertificateArn<Partition>(parameters)
}

export interface SmsMfaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly mfaTokenIdWithPath: string
}
class SmsMfaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'sms-mfa',
  `arn:${string}:iam::${string}:sms-mfa/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sms-mfa' as const
  readonly partition: Partition
  readonly account: string
  readonly mfaTokenIdWithPath: string
  constructor(parameters: SmsMfaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.mfaTokenIdWithPath = parameters.mfaTokenIdWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:sms-mfa/${this.mfaTokenIdWithPath}` as const
  }
}
export type { SmsMfaArn }
export function smsMfaArn<Partition extends ArnPartition = 'aws'>(
  parameters: SmsMfaArnParameters<Partition>,
) {
  return new SmsMfaArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly userNameWithPath: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:iam::${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly account: string
  readonly userNameWithPath: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.userNameWithPath = parameters.userNameWithPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:user/${this.userNameWithPath}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

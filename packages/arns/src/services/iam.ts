import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ReportAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly pathEntity: string
}
class ReportAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-report',
  `arn:${string}:iam::${string}:access-report/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-report' as const
  readonly partition: string
  readonly account: string
  readonly pathEntity: string
  constructor(parameters: ReportAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathEntity = parameters.pathEntity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:access-report/${this.pathEntity}` as const
  }
}
export type { ReportAccessArn }
export function reportAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReportAccessArnParameters<Partition>,
) {
  return new ReportAccessArn<Partition>(parameters)
}

export interface RoleAssumedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly nameRole: string
  readonly nameSessionRole: string
}
class RoleAssumedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'assumed-role',
  `arn:${string}:iam::${string}:assumed-role/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'assumed-role' as const
  readonly partition: string
  readonly account: string
  readonly nameRole: string
  readonly nameSessionRole: string
  constructor(parameters: RoleAssumedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameRole = parameters.nameRole
    this.nameSessionRole = parameters.nameSessionRole
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:assumed-role/${this.nameRole}/${this.nameSessionRole}` as const
  }
}
export type { RoleAssumedArn }
export function roleAssumedArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleAssumedArnParameters<Partition>,
) {
  return new RoleAssumedArn<Partition>(parameters)
}

export interface UserFederatedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly nameUser: string
}
class UserFederatedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'federated-user',
  `arn:${string}:iam::${string}:federated-user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'federated-user' as const
  readonly partition: string
  readonly account: string
  readonly nameUser: string
  constructor(parameters: UserFederatedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameUser = parameters.nameUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:federated-user/${this.nameUser}` as const
  }
}
export type { UserFederatedArn }
export function userFederatedArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserFederatedArnParameters<Partition>,
) {
  return new UserFederatedArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly pathWithNameGroup: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:iam::${string}:group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: string
  readonly account: string
  readonly pathWithNameGroup: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithNameGroup = parameters.pathWithNameGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:group/${this.pathWithNameGroup}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface ProfileInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly pathWithNameProfileInstance: string
}
class ProfileInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'instance-profile',
  `arn:${string}:iam::${string}:instance-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance-profile' as const
  readonly partition: string
  readonly account: string
  readonly pathWithNameProfileInstance: string
  constructor(parameters: ProfileInstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithNameProfileInstance = parameters.pathWithNameProfileInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:instance-profile/${this.pathWithNameProfileInstance}` as const
  }
}
export type { ProfileInstanceArn }
export function profileInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileInstanceArnParameters<Partition>,
) {
  return new ProfileInstanceArn<Partition>(parameters)
}

export interface MfaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly pathWithIdTokenMfa: string
}
class MfaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'mfa',
  `arn:${string}:iam::${string}:mfa/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mfa' as const
  readonly partition: string
  readonly account: string
  readonly pathWithIdTokenMfa: string
  constructor(parameters: MfaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithIdTokenMfa = parameters.pathWithIdTokenMfa
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:mfa/${this.pathWithIdTokenMfa}` as const
  }
}
export type { MfaArn }
export function mfaArn<Partition extends ArnPartition = 'aws'>(
  parameters: MfaArnParameters<Partition>,
) {
  return new MfaArn<Partition>(parameters)
}

export interface ProviderOidcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly nameProviderOidc: string
}
class ProviderOidcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'oidc-provider',
  `arn:${string}:iam::${string}:oidc-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'oidc-provider' as const
  readonly partition: string
  readonly account: string
  readonly nameProviderOidc: string
  constructor(parameters: ProviderOidcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameProviderOidc = parameters.nameProviderOidc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:oidc-provider/${this.nameProviderOidc}` as const
  }
}
export type { ProviderOidcArn }
export function providerOidcArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderOidcArnParameters<Partition>,
) {
  return new ProviderOidcArn<Partition>(parameters)
}

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly pathWithNamePolicy: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'policy',
  `arn:${string}:iam::${string}:policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'policy' as const
  readonly partition: string
  readonly account: string
  readonly pathWithNamePolicy: string
  constructor(parameters: PolicyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithNamePolicy = parameters.pathWithNamePolicy
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:policy/${this.pathWithNamePolicy}` as const
  }
}
export type { PolicyArn }
export function policyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyArnParameters<Partition>,
) {
  return new PolicyArn<Partition>(parameters)
}

export interface RoleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly pathWithNameRole: string
}
class RoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'role',
  `arn:${string}:iam::${string}:role/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'role' as const
  readonly partition: string
  readonly account: string
  readonly pathWithNameRole: string
  constructor(parameters: RoleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithNameRole = parameters.pathWithNameRole
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/${this.pathWithNameRole}` as const
  }
}
export type { RoleArn }
export function roleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleArnParameters<Partition>,
) {
  return new RoleArn<Partition>(parameters)
}

export interface ProviderSamlArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly nameProviderSaml: string
}
class ProviderSamlArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'saml-provider',
  `arn:${string}:iam::${string}:saml-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'saml-provider' as const
  readonly partition: string
  readonly account: string
  readonly nameProviderSaml: string
  constructor(parameters: ProviderSamlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameProviderSaml = parameters.nameProviderSaml
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:saml-provider/${this.nameProviderSaml}` as const
  }
}
export type { ProviderSamlArn }
export function providerSamlArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderSamlArnParameters<Partition>,
) {
  return new ProviderSamlArn<Partition>(parameters)
}

export interface CertificateServerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly pathWithNameCertificate: string
}
class CertificateServerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'server-certificate',
  `arn:${string}:iam::${string}:server-certificate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'server-certificate' as const
  readonly partition: string
  readonly account: string
  readonly pathWithNameCertificate: string
  constructor(parameters: CertificateServerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithNameCertificate = parameters.pathWithNameCertificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:server-certificate/${this.pathWithNameCertificate}` as const
  }
}
export type { CertificateServerArn }
export function certificateServerArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateServerArnParameters<Partition>,
) {
  return new CertificateServerArn<Partition>(parameters)
}

export interface MfaSmsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly pathWithIdTokenMfa: string
}
class MfaSmsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'sms-mfa',
  `arn:${string}:iam::${string}:sms-mfa/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sms-mfa' as const
  readonly partition: string
  readonly account: string
  readonly pathWithIdTokenMfa: string
  constructor(parameters: MfaSmsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithIdTokenMfa = parameters.pathWithIdTokenMfa
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:sms-mfa/${this.pathWithIdTokenMfa}` as const
  }
}
export type { MfaSmsArn }
export function mfaSmsArn<Partition extends ArnPartition = 'aws'>(
  parameters: MfaSmsArnParameters<Partition>,
) {
  return new MfaSmsArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly pathWithNameUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:iam::${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly account: string
  readonly pathWithNameUser: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.pathWithNameUser = parameters.pathWithNameUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:user/${this.pathWithNameUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

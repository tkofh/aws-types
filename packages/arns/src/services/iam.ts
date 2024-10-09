export interface AccessReportArnParameters {
  partition?: string | undefined
  account: string
  entityPath: string
}
export type AccessReportArn = `arn:${string}:iam::${string}:access-report/${string}`
export function accessReportArn(parameters: AccessReportArnParameters): AccessReportArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:access-report/${parameters.entityPath}`
}

export interface AssumedRoleArnParameters {
  partition?: string | undefined
  account: string
  roleName: string
  roleSessionName: string
}
export type AssumedRoleArn = `arn:${string}:iam::${string}:assumed-role/${string}/${string}`
export function assumedRoleArn(parameters: AssumedRoleArnParameters): AssumedRoleArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:assumed-role/${parameters.roleName}/${parameters.roleSessionName}`
}

export interface FederatedUserArnParameters {
  partition?: string | undefined
  account: string
  userName: string
}
export type FederatedUserArn = `arn:${string}:iam::${string}:federated-user/${string}`
export function federatedUserArn(parameters: FederatedUserArnParameters): FederatedUserArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:federated-user/${parameters.userName}`
}

export interface GroupArnParameters {
  partition?: string | undefined
  account: string
  groupNameWithPath: string
}
export type GroupArn = `arn:${string}:iam::${string}:group/${string}`
export function groupArn(parameters: GroupArnParameters): GroupArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:group/${parameters.groupNameWithPath}`
}

export interface InstanceProfileArnParameters {
  partition?: string | undefined
  account: string
  instanceProfileNameWithPath: string
}
export type InstanceProfileArn = `arn:${string}:iam::${string}:instance-profile/${string}`
export function instanceProfileArn(parameters: InstanceProfileArnParameters): InstanceProfileArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:instance-profile/${parameters.instanceProfileNameWithPath}`
}

export interface MfaArnParameters {
  partition?: string | undefined
  account: string
  mfaTokenIdWithPath: string
}
export type MfaArn = `arn:${string}:iam::${string}:mfa/${string}`
export function mfaArn(parameters: MfaArnParameters): MfaArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:mfa/${parameters.mfaTokenIdWithPath}`
}

export interface OidcProviderArnParameters {
  partition?: string | undefined
  account: string
  oidcProviderName: string
}
export type OidcProviderArn = `arn:${string}:iam::${string}:oidc-provider/${string}`
export function oidcProviderArn(parameters: OidcProviderArnParameters): OidcProviderArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:oidc-provider/${parameters.oidcProviderName}`
}

export interface PolicyArnParameters {
  partition?: string | undefined
  account: string
  policyNameWithPath: string
}
export type PolicyArn = `arn:${string}:iam::${string}:policy/${string}`
export function policyArn(parameters: PolicyArnParameters): PolicyArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:policy/${parameters.policyNameWithPath}`
}

export interface RoleArnParameters {
  partition?: string | undefined
  account: string
  roleNameWithPath: string
}
export type RoleArn = `arn:${string}:iam::${string}:role/${string}`
export function roleArn(parameters: RoleArnParameters): RoleArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:role/${parameters.roleNameWithPath}`
}

export interface SamlProviderArnParameters {
  partition?: string | undefined
  account: string
  samlProviderName: string
}
export type SamlProviderArn = `arn:${string}:iam::${string}:saml-provider/${string}`
export function samlProviderArn(parameters: SamlProviderArnParameters): SamlProviderArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:saml-provider/${parameters.samlProviderName}`
}

export interface ServerCertificateArnParameters {
  partition?: string | undefined
  account: string
  certificateNameWithPath: string
}
export type ServerCertificateArn = `arn:${string}:iam::${string}:server-certificate/${string}`
export function serverCertificateArn(parameters: ServerCertificateArnParameters): ServerCertificateArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:server-certificate/${parameters.certificateNameWithPath}`
}

export interface SmsMfaArnParameters {
  partition?: string | undefined
  account: string
  mfaTokenIdWithPath: string
}
export type SmsMfaArn = `arn:${string}:iam::${string}:sms-mfa/${string}`
export function smsMfaArn(parameters: SmsMfaArnParameters): SmsMfaArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:sms-mfa/${parameters.mfaTokenIdWithPath}`
}

export interface UserArnParameters {
  partition?: string | undefined
  account: string
  userNameWithPath: string
}
export type UserArn = `arn:${string}:iam::${string}:user/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:user/${parameters.userNameWithPath}`
}
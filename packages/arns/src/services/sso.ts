export interface PermissionSetArnParameters {
  partition?: string | undefined
  instanceId: string
  permissionSetId: string
}
export type PermissionSetArn = `arn:${string}:sso:::permissionSet/${string}/${string}`
export function permissionSetArn(parameters: PermissionSetArnParameters): PermissionSetArn {
  return `arn:${parameters.partition ?? ''}:sso:::permissionSet/${parameters.instanceId}/${parameters.permissionSetId}`
}

export interface AccountArnParameters {
  partition?: string | undefined
  accountId: string
}
export type AccountArn = `arn:${string}:sso:::account/${string}`
export function accountArn(parameters: AccountArnParameters): AccountArn {
  return `arn:${parameters.partition ?? ''}:sso:::account/${parameters.accountId}`
}

export interface InstanceArnParameters {
  partition?: string | undefined
  instanceId: string
}
export type InstanceArn = `arn:${string}:sso:::instance/${string}`
export function instanceArn(parameters: InstanceArnParameters): InstanceArn {
  return `arn:${parameters.partition ?? ''}:sso:::instance/${parameters.instanceId}`
}

export interface ApplicationArnParameters {
  partition?: string | undefined
  accountId: string
  instanceId: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:sso::${string}:application/${string}/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:sso::${parameters.accountId}:application/${parameters.instanceId}/${parameters.applicationId}`
}

export interface TrustedTokenIssuerArnParameters {
  partition?: string | undefined
  accountId: string
  instanceId: string
  trustedTokenIssuerId: string
}
export type TrustedTokenIssuerArn = `arn:${string}:sso::${string}:trustedTokenIssuer/${string}/${string}`
export function trustedTokenIssuerArn(parameters: TrustedTokenIssuerArnParameters): TrustedTokenIssuerArn {
  return `arn:${parameters.partition ?? ''}:sso::${parameters.accountId}:trustedTokenIssuer/${parameters.instanceId}/${parameters.trustedTokenIssuerId}`
}

export interface ApplicationProviderArnParameters {
  partition?: string | undefined
  applicationProviderId: string
}
export type ApplicationProviderArn = `arn:${string}:sso::aws:applicationProvider/${string}`
export function applicationProviderArn(parameters: ApplicationProviderArnParameters): ApplicationProviderArn {
  return `arn:${parameters.partition ?? ''}:sso::aws:applicationProvider/${parameters.applicationProviderId}`
}
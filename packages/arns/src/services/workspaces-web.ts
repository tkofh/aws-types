export interface BrowserSettingsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  browserSettingsId: string
}
export type BrowserSettingsArn = `arn:${string}:workspaces-web:${string}:${string}:browserSettings/${string}`
export function browserSettingsArn(parameters: BrowserSettingsArnParameters): BrowserSettingsArn {
  return `arn:${parameters.partition ?? ''}:workspaces-web:${parameters.region}:${parameters.account}:browserSettings/${parameters.browserSettingsId}`
}

export interface IdentityProviderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  portalId: string
  identityProviderId: string
}
export type IdentityProviderArn = `arn:${string}:workspaces-web:${string}:${string}:identityProvider/${string}/${string}`
export function identityProviderArn(parameters: IdentityProviderArnParameters): IdentityProviderArn {
  return `arn:${parameters.partition ?? ''}:workspaces-web:${parameters.region}:${parameters.account}:identityProvider/${parameters.portalId}/${parameters.identityProviderId}`
}

export interface NetworkSettingsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkSettingsId: string
}
export type NetworkSettingsArn = `arn:${string}:workspaces-web:${string}:${string}:networkSettings/${string}`
export function networkSettingsArn(parameters: NetworkSettingsArnParameters): NetworkSettingsArn {
  return `arn:${parameters.partition ?? ''}:workspaces-web:${parameters.region}:${parameters.account}:networkSettings/${parameters.networkSettingsId}`
}

export interface PortalArnParameters {
  partition?: string | undefined
  region: string
  account: string
  portalId: string
}
export type PortalArn = `arn:${string}:workspaces-web:${string}:${string}:portal/${string}`
export function portalArn(parameters: PortalArnParameters): PortalArn {
  return `arn:${parameters.partition ?? ''}:workspaces-web:${parameters.region}:${parameters.account}:portal/${parameters.portalId}`
}

export interface TrustStoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trustStoreId: string
}
export type TrustStoreArn = `arn:${string}:workspaces-web:${string}:${string}:trustStore/${string}`
export function trustStoreArn(parameters: TrustStoreArnParameters): TrustStoreArn {
  return `arn:${parameters.partition ?? ''}:workspaces-web:${parameters.region}:${parameters.account}:trustStore/${parameters.trustStoreId}`
}

export interface UserSettingsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  userSettingsId: string
}
export type UserSettingsArn = `arn:${string}:workspaces-web:${string}:${string}:userSettings/${string}`
export function userSettingsArn(parameters: UserSettingsArnParameters): UserSettingsArn {
  return `arn:${parameters.partition ?? ''}:workspaces-web:${parameters.region}:${parameters.account}:userSettings/${parameters.userSettingsId}`
}

export interface UserAccessLoggingSettingsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  userAccessLoggingSettingsId: string
}
export type UserAccessLoggingSettingsArn = `arn:${string}:workspaces-web:${string}:${string}:userAccessLoggingSettings/${string}`
export function userAccessLoggingSettingsArn(parameters: UserAccessLoggingSettingsArnParameters): UserAccessLoggingSettingsArn {
  return `arn:${parameters.partition ?? ''}:workspaces-web:${parameters.region}:${parameters.account}:userAccessLoggingSettings/${parameters.userAccessLoggingSettingsId}`
}

export interface IpAccessSettingsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ipAccessSettingsId: string
}
export type IpAccessSettingsArn = `arn:${string}:workspaces-web:${string}:${string}:ipAccessSettings/${string}`
export function ipAccessSettingsArn(parameters: IpAccessSettingsArnParameters): IpAccessSettingsArn {
  return `arn:${parameters.partition ?? ''}:workspaces-web:${parameters.region}:${parameters.account}:ipAccessSettings/${parameters.ipAccessSettingsId}`
}
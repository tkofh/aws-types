import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SettingsBrowserArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsBrowser: string
}
class SettingsBrowserArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'browserSettings',
  `arn:${string}:workspaces-web:${string}:${string}:browserSettings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'browserSettings' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsBrowser: string
  constructor(parameters: SettingsBrowserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSettingsBrowser = parameters.idSettingsBrowser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:browserSettings/${this.idSettingsBrowser}` as const
  }
}
export type { SettingsBrowserArn }
export function settingsBrowserArn<Partition extends ArnPartition = 'aws'>(
  parameters: SettingsBrowserArnParameters<Partition>,
) {
  return new SettingsBrowserArn<Partition>(parameters)
}

export interface ProviderIdentityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPortal: string
  readonly idProviderIdentity: string
}
class ProviderIdentityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'identityProvider',
  `arn:${string}:workspaces-web:${string}:${string}:identityProvider/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identityProvider' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPortal: string
  readonly idProviderIdentity: string
  constructor(parameters: ProviderIdentityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPortal = parameters.idPortal
    this.idProviderIdentity = parameters.idProviderIdentity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:identityProvider/${this.idPortal}/${this.idProviderIdentity}` as const
  }
}
export type { ProviderIdentityArn }
export function providerIdentityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderIdentityArnParameters<Partition>,
) {
  return new ProviderIdentityArn<Partition>(parameters)
}

export interface SettingsNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsNetwork: string
}
class SettingsNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'networkSettings',
  `arn:${string}:workspaces-web:${string}:${string}:networkSettings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'networkSettings' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsNetwork: string
  constructor(parameters: SettingsNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSettingsNetwork = parameters.idSettingsNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:networkSettings/${this.idSettingsNetwork}` as const
  }
}
export type { SettingsNetworkArn }
export function settingsNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: SettingsNetworkArnParameters<Partition>,
) {
  return new SettingsNetworkArn<Partition>(parameters)
}

export interface PortalArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPortal: string
}
class PortalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'portal',
  `arn:${string}:workspaces-web:${string}:${string}:portal/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'portal' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPortal: string
  constructor(parameters: PortalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPortal = parameters.idPortal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:portal/${this.idPortal}` as const
  }
}
export type { PortalArn }
export function portalArn<Partition extends ArnPartition = 'aws'>(
  parameters: PortalArnParameters<Partition>,
) {
  return new PortalArn<Partition>(parameters)
}

export interface StoreTrustArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreTrust: string
}
class StoreTrustArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'trustStore',
  `arn:${string}:workspaces-web:${string}:${string}:trustStore/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trustStore' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStoreTrust: string
  constructor(parameters: StoreTrustArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStoreTrust = parameters.idStoreTrust
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:trustStore/${this.idStoreTrust}` as const
  }
}
export type { StoreTrustArn }
export function storeTrustArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreTrustArnParameters<Partition>,
) {
  return new StoreTrustArn<Partition>(parameters)
}

export interface SettingsUserArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsUser: string
}
class SettingsUserArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'userSettings',
  `arn:${string}:workspaces-web:${string}:${string}:userSettings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'userSettings' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsUser: string
  constructor(parameters: SettingsUserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSettingsUser = parameters.idSettingsUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:userSettings/${this.idSettingsUser}` as const
  }
}
export type { SettingsUserArn }
export function settingsUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: SettingsUserArnParameters<Partition>,
) {
  return new SettingsUserArn<Partition>(parameters)
}

export interface SettingsLoggingAccessUserArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsLoggingAccessUser: string
}
class SettingsLoggingAccessUserArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'userAccessLoggingSettings',
  `arn:${string}:workspaces-web:${string}:${string}:userAccessLoggingSettings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'userAccessLoggingSettings' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsLoggingAccessUser: string
  constructor(parameters: SettingsLoggingAccessUserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSettingsLoggingAccessUser = parameters.idSettingsLoggingAccessUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:userAccessLoggingSettings/${this.idSettingsLoggingAccessUser}` as const
  }
}
export type { SettingsLoggingAccessUserArn }
export function settingsLoggingAccessUserArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SettingsLoggingAccessUserArnParameters<Partition>) {
  return new SettingsLoggingAccessUserArn<Partition>(parameters)
}

export interface SettingsAccessIpArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsAccessIp: string
}
class SettingsAccessIpArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ipAccessSettings',
  `arn:${string}:workspaces-web:${string}:${string}:ipAccessSettings/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipAccessSettings' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSettingsAccessIp: string
  constructor(parameters: SettingsAccessIpArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSettingsAccessIp = parameters.idSettingsAccessIp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:ipAccessSettings/${this.idSettingsAccessIp}` as const
  }
}
export type { SettingsAccessIpArn }
export function settingsAccessIpArn<Partition extends ArnPartition = 'aws'>(
  parameters: SettingsAccessIpArnParameters<Partition>,
) {
  return new SettingsAccessIpArn<Partition>(parameters)
}

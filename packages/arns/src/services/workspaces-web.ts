import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface BrowserSettingsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly browserSettingsId: string
}
class BrowserSettingsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'browserSettings', `arn:${string}:workspaces-web:${string}:${string}:browserSettings/${string}`> {
  readonly [ArnResourceTypeBrand] = 'browserSettings' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly browserSettingsId: string
  constructor(parameters: BrowserSettingsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.browserSettingsId = parameters.browserSettingsId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:browserSettings/${this.browserSettingsId}` as const
  }
}
export type { BrowserSettingsArn }
export function browserSettingsArn<Partition extends ArnPartition = 'aws'>(parameters: BrowserSettingsArnParameters<Partition>) {
  return new BrowserSettingsArn<Partition>(parameters)
}

export interface IdentityProviderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly portalId: string
  readonly identityProviderId: string
}
class IdentityProviderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'identityProvider', `arn:${string}:workspaces-web:${string}:${string}:identityProvider/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'identityProvider' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly portalId: string
  readonly identityProviderId: string
  constructor(parameters: IdentityProviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.portalId = parameters.portalId
    this.identityProviderId = parameters.identityProviderId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:identityProvider/${this.portalId}/${this.identityProviderId}` as const
  }
}
export type { IdentityProviderArn }
export function identityProviderArn<Partition extends ArnPartition = 'aws'>(parameters: IdentityProviderArnParameters<Partition>) {
  return new IdentityProviderArn<Partition>(parameters)
}

export interface NetworkSettingsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkSettingsId: string
}
class NetworkSettingsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'networkSettings', `arn:${string}:workspaces-web:${string}:${string}:networkSettings/${string}`> {
  readonly [ArnResourceTypeBrand] = 'networkSettings' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkSettingsId: string
  constructor(parameters: NetworkSettingsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkSettingsId = parameters.networkSettingsId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:networkSettings/${this.networkSettingsId}` as const
  }
}
export type { NetworkSettingsArn }
export function networkSettingsArn<Partition extends ArnPartition = 'aws'>(parameters: NetworkSettingsArnParameters<Partition>) {
  return new NetworkSettingsArn<Partition>(parameters)
}

export interface PortalArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly portalId: string
}
class PortalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'portal', `arn:${string}:workspaces-web:${string}:${string}:portal/${string}`> {
  readonly [ArnResourceTypeBrand] = 'portal' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly portalId: string
  constructor(parameters: PortalArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.portalId = parameters.portalId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:portal/${this.portalId}` as const
  }
}
export type { PortalArn }
export function portalArn<Partition extends ArnPartition = 'aws'>(parameters: PortalArnParameters<Partition>) {
  return new PortalArn<Partition>(parameters)
}

export interface TrustStoreArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trustStoreId: string
}
class TrustStoreArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'trustStore', `arn:${string}:workspaces-web:${string}:${string}:trustStore/${string}`> {
  readonly [ArnResourceTypeBrand] = 'trustStore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trustStoreId: string
  constructor(parameters: TrustStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trustStoreId = parameters.trustStoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:trustStore/${this.trustStoreId}` as const
  }
}
export type { TrustStoreArn }
export function trustStoreArn<Partition extends ArnPartition = 'aws'>(parameters: TrustStoreArnParameters<Partition>) {
  return new TrustStoreArn<Partition>(parameters)
}

export interface UserSettingsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userSettingsId: string
}
class UserSettingsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'userSettings', `arn:${string}:workspaces-web:${string}:${string}:userSettings/${string}`> {
  readonly [ArnResourceTypeBrand] = 'userSettings' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userSettingsId: string
  constructor(parameters: UserSettingsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.userSettingsId = parameters.userSettingsId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:userSettings/${this.userSettingsId}` as const
  }
}
export type { UserSettingsArn }
export function userSettingsArn<Partition extends ArnPartition = 'aws'>(parameters: UserSettingsArnParameters<Partition>) {
  return new UserSettingsArn<Partition>(parameters)
}

export interface UserAccessLoggingSettingsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userAccessLoggingSettingsId: string
}
class UserAccessLoggingSettingsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'userAccessLoggingSettings', `arn:${string}:workspaces-web:${string}:${string}:userAccessLoggingSettings/${string}`> {
  readonly [ArnResourceTypeBrand] = 'userAccessLoggingSettings' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userAccessLoggingSettingsId: string
  constructor(parameters: UserAccessLoggingSettingsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.userAccessLoggingSettingsId = parameters.userAccessLoggingSettingsId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:userAccessLoggingSettings/${this.userAccessLoggingSettingsId}` as const
  }
}
export type { UserAccessLoggingSettingsArn }
export function userAccessLoggingSettingsArn<Partition extends ArnPartition = 'aws'>(parameters: UserAccessLoggingSettingsArnParameters<Partition>) {
  return new UserAccessLoggingSettingsArn<Partition>(parameters)
}

export interface IpAccessSettingsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ipAccessSettingsId: string
}
class IpAccessSettingsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ipAccessSettings', `arn:${string}:workspaces-web:${string}:${string}:ipAccessSettings/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ipAccessSettings' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ipAccessSettingsId: string
  constructor(parameters: IpAccessSettingsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ipAccessSettingsId = parameters.ipAccessSettingsId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces-web:${this.region}:${this.account}:ipAccessSettings/${this.ipAccessSettingsId}` as const
  }
}
export type { IpAccessSettingsArn }
export function ipAccessSettingsArn<Partition extends ArnPartition = 'aws'>(parameters: IpAccessSettingsArnParameters<Partition>) {
  return new IpAccessSettingsArn<Partition>(parameters)
}
import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface InstanceDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceDevice: string
}
class InstanceDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'device-instance',
  `arn:${string}:one:${string}:${string}:device-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceDevice: string
  constructor(parameters: InstanceDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstanceDevice = parameters.idInstanceDevice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:device-instance/${this.idInstanceDevice}` as const
  }
}
export type { InstanceDeviceArn }
export function instanceDeviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceDeviceArnParameters<Partition>,
) {
  return new InstanceDeviceArn<Partition>(parameters)
}

export interface ConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceDevice: string
  readonly version: string
}
class ConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration',
  `arn:${string}:one:${string}:${string}:device-instance/${string}/configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceDevice: string
  readonly version: string
  constructor(parameters: ConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstanceDevice = parameters.idInstanceDevice
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:device-instance/${this.idInstanceDevice}/configuration/${this.version}` as const
  }
}
export type { ConfigurationArn }
export function configurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationArnParameters<Partition>,
) {
  return new ConfigurationArn<Partition>(parameters)
}

export interface TemplateConfigurationDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplate: string
}
class TemplateConfigurationDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'device-configuration-template',
  `arn:${string}:one:${string}:${string}:device-configuration-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device-configuration-template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplate: string
  constructor(parameters: TemplateConfigurationDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTemplate = parameters.idTemplate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:device-configuration-template/${this.idTemplate}` as const
  }
}
export type { TemplateConfigurationDeviceArn }
export function templateConfigurationDeviceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TemplateConfigurationDeviceArnParameters<Partition>) {
  return new TemplateConfigurationDeviceArn<Partition>(parameters)
}

export interface SiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSite: string
}
class SiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'site',
  `arn:${string}:one:${string}:${string}:site/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'site' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSite: string
  constructor(parameters: SiteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSite = parameters.idSite
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:site/${this.idSite}` as const
  }
}
export type { SiteArn }
export function siteArn<Partition extends ArnPartition = 'aws'>(
  parameters: SiteArnParameters<Partition>,
) {
  return new SiteArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:one:${string}:${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUser: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idUser = parameters.idUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:user/${this.idUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DeviceInstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceInstanceId: string
}
class DeviceInstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'device-instance', `arn:${string}:one:${string}:${string}:device-instance/${string}`> {
  readonly [ArnResourceTypeBrand] = 'device-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceInstanceId: string
  constructor(parameters: DeviceInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceInstanceId = parameters.deviceInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:device-instance/${this.deviceInstanceId}` as const
  }
}
export type { DeviceInstanceArn }
export function deviceInstanceArn<Partition extends ArnPartition = 'aws'>(parameters: DeviceInstanceArnParameters<Partition>) {
  return new DeviceInstanceArn<Partition>(parameters)
}

export interface ConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceInstanceId: string
  readonly version: string
}
class ConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'configuration', `arn:${string}:one:${string}:${string}:device-instance/${string}/configuration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceInstanceId: string
  readonly version: string
  constructor(parameters: ConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceInstanceId = parameters.deviceInstanceId
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:device-instance/${this.deviceInstanceId}/configuration/${this.version}` as const
  }
}
export type { ConfigurationArn }
export function configurationArn<Partition extends ArnPartition = 'aws'>(parameters: ConfigurationArnParameters<Partition>) {
  return new ConfigurationArn<Partition>(parameters)
}

export interface DeviceConfigurationTemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateId: string
}
class DeviceConfigurationTemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'device-configuration-template', `arn:${string}:one:${string}:${string}:device-configuration-template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'device-configuration-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateId: string
  constructor(parameters: DeviceConfigurationTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateId = parameters.templateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:device-configuration-template/${this.templateId}` as const
  }
}
export type { DeviceConfigurationTemplateArn }
export function deviceConfigurationTemplateArn<Partition extends ArnPartition = 'aws'>(parameters: DeviceConfigurationTemplateArnParameters<Partition>) {
  return new DeviceConfigurationTemplateArn<Partition>(parameters)
}

export interface SiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly siteId: string
}
class SiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'site', `arn:${string}:one:${string}:${string}:site/${string}`> {
  readonly [ArnResourceTypeBrand] = 'site' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly siteId: string
  constructor(parameters: SiteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.siteId = parameters.siteId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:site/${this.siteId}` as const
  }
}
export type { SiteArn }
export function siteArn<Partition extends ArnPartition = 'aws'>(parameters: SiteArnParameters<Partition>) {
  return new SiteArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userId: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'user', `arn:${string}:one:${string}:${string}:user/${string}`> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userId: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.userId = parameters.userId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:one:${this.region}:${this.account}:user/${this.userId}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(parameters: UserArnParameters<Partition>) {
  return new UserArn<Partition>(parameters)
}
import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ApplicationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
}
class ApplicationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'application', `arn:${string}:qbusiness:${string}:${string}:application/${string}`> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.applicationId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(parameters: ApplicationArnParameters<Partition>) {
  return new ApplicationArn<Partition>(parameters)
}

export interface RetrieverArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly retrieverId: string
}
class RetrieverArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'retriever', `arn:${string}:qbusiness:${string}:${string}:application/${string}/retriever/${string}`> {
  readonly [ArnResourceTypeBrand] = 'retriever' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly retrieverId: string
  constructor(parameters: RetrieverArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.retrieverId = parameters.retrieverId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.applicationId}/retriever/${this.retrieverId}` as const
  }
}
export type { RetrieverArn }
export function retrieverArn<Partition extends ArnPartition = 'aws'>(parameters: RetrieverArnParameters<Partition>) {
  return new RetrieverArn<Partition>(parameters)
}

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly indexId: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'index', `arn:${string}:qbusiness:${string}:${string}:application/${string}/index/${string}`> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly indexId: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.indexId = parameters.indexId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.applicationId}/index/${this.indexId}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(parameters: IndexArnParameters<Partition>) {
  return new IndexArn<Partition>(parameters)
}

export interface DataSourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly indexId: string
  readonly dataSourceId: string
}
class DataSourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'data-source', `arn:${string}:qbusiness:${string}:${string}:application/${string}/index/${string}/data-source/${string}`> {
  readonly [ArnResourceTypeBrand] = 'data-source' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly indexId: string
  readonly dataSourceId: string
  constructor(parameters: DataSourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.indexId = parameters.indexId
    this.dataSourceId = parameters.dataSourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.applicationId}/index/${this.indexId}/data-source/${this.dataSourceId}` as const
  }
}
export type { DataSourceArn }
export function dataSourceArn<Partition extends ArnPartition = 'aws'>(parameters: DataSourceArnParameters<Partition>) {
  return new DataSourceArn<Partition>(parameters)
}

export interface PluginArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly pluginId: string
}
class PluginArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'plugin', `arn:${string}:qbusiness:${string}:${string}:application/${string}/plugin/${string}`> {
  readonly [ArnResourceTypeBrand] = 'plugin' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly pluginId: string
  constructor(parameters: PluginArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.pluginId = parameters.pluginId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.applicationId}/plugin/${this.pluginId}` as const
  }
}
export type { PluginArn }
export function pluginArn<Partition extends ArnPartition = 'aws'>(parameters: PluginArnParameters<Partition>) {
  return new PluginArn<Partition>(parameters)
}

export interface WebExperienceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly webExperienceId: string
}
class WebExperienceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'web-experience', `arn:${string}:qbusiness:${string}:${string}:application/${string}/web-experience/${string}`> {
  readonly [ArnResourceTypeBrand] = 'web-experience' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly webExperienceId: string
  constructor(parameters: WebExperienceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.webExperienceId = parameters.webExperienceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.applicationId}/web-experience/${this.webExperienceId}` as const
  }
}
export type { WebExperienceArn }
export function webExperienceArn<Partition extends ArnPartition = 'aws'>(parameters: WebExperienceArnParameters<Partition>) {
  return new WebExperienceArn<Partition>(parameters)
}

export interface UserLicenseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly userLicenseId: string
}
class UserLicenseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'user-license', `arn:${string}:qbusiness:${string}:${string}:application/${string}/user-license/${string}`> {
  readonly [ArnResourceTypeBrand] = 'user-license' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly userLicenseId: string
  constructor(parameters: UserLicenseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.userLicenseId = parameters.userLicenseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.applicationId}/user-license/${this.userLicenseId}` as const
  }
}
export type { UserLicenseArn }
export function userLicenseArn<Partition extends ArnPartition = 'aws'>(parameters: UserLicenseArnParameters<Partition>) {
  return new UserLicenseArn<Partition>(parameters)
}

export interface SubscriptionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly subscriptionId: string
}
class SubscriptionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'subscription', `arn:${string}:qbusiness:${string}:${string}:application/${string}/subscription/${string}`> {
  readonly [ArnResourceTypeBrand] = 'subscription' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly subscriptionId: string
  constructor(parameters: SubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.subscriptionId = parameters.subscriptionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.applicationId}/subscription/${this.subscriptionId}` as const
  }
}
export type { SubscriptionArn }
export function subscriptionArn<Partition extends ArnPartition = 'aws'>(parameters: SubscriptionArnParameters<Partition>) {
  return new SubscriptionArn<Partition>(parameters)
}
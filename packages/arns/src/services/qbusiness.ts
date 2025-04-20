import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface RetrieverArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idRetriever: string
}
class RetrieverArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'retriever',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}/retriever/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'retriever' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idRetriever: string
  constructor(parameters: RetrieverArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idRetriever = parameters.idRetriever
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.idApplication}/retriever/${this.idRetriever}` as const
  }
}
export type { RetrieverArn }
export function retrieverArn<Partition extends ArnPartition = 'aws'>(
  parameters: RetrieverArnParameters<Partition>,
) {
  return new RetrieverArn<Partition>(parameters)
}

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idIndex: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'index',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}/index/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idIndex: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idIndex = parameters.idIndex
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.idApplication}/index/${this.idIndex}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(
  parameters: IndexArnParameters<Partition>,
) {
  return new IndexArn<Partition>(parameters)
}

export interface DatasourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idIndex: string
  readonly idSourceData: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'data-source',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}/index/${string}/data-source/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-source' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idIndex: string
  readonly idSourceData: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idIndex = parameters.idIndex
    this.idSourceData = parameters.idSourceData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.idApplication}/index/${this.idIndex}/data-source/${this.idSourceData}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasourceArnParameters<Partition>,
) {
  return new DatasourceArn<Partition>(parameters)
}

export interface PluginArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idPlugin: string
}
class PluginArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'plugin',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}/plugin/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'plugin' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idPlugin: string
  constructor(parameters: PluginArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idPlugin = parameters.idPlugin
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.idApplication}/plugin/${this.idPlugin}` as const
  }
}
export type { PluginArn }
export function pluginArn<Partition extends ArnPartition = 'aws'>(
  parameters: PluginArnParameters<Partition>,
) {
  return new PluginArn<Partition>(parameters)
}

export interface ExperienceWebArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idExperienceWeb: string
}
class ExperienceWebArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'web-experience',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}/web-experience/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'web-experience' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idExperienceWeb: string
  constructor(parameters: ExperienceWebArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idExperienceWeb = parameters.idExperienceWeb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.idApplication}/web-experience/${this.idExperienceWeb}` as const
  }
}
export type { ExperienceWebArn }
export function experienceWebArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExperienceWebArnParameters<Partition>,
) {
  return new ExperienceWebArn<Partition>(parameters)
}

export interface LicenseUserArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idLicenseUser: string
}
class LicenseUserArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'user-license',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}/user-license/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user-license' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idLicenseUser: string
  constructor(parameters: LicenseUserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idLicenseUser = parameters.idLicenseUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.idApplication}/user-license/${this.idLicenseUser}` as const
  }
}
export type { LicenseUserArn }
export function licenseUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: LicenseUserArnParameters<Partition>,
) {
  return new LicenseUserArn<Partition>(parameters)
}

export interface SubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idSubscription: string
}
class SubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subscription',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}/subscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subscription' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idSubscription: string
  constructor(parameters: SubscriptionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idSubscription = parameters.idSubscription
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.idApplication}/subscription/${this.idSubscription}` as const
  }
}
export type { SubscriptionArn }
export function subscriptionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubscriptionArnParameters<Partition>,
) {
  return new SubscriptionArn<Partition>(parameters)
}

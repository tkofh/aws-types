export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:qbusiness:${string}:${string}:application/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:qbusiness:${parameters.region}:${parameters.account}:application/${parameters.applicationId}`
}

export interface RetrieverArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  retrieverId: string
}
export type RetrieverArn = `arn:${string}:qbusiness:${string}:${string}:application/${string}/retriever/${string}`
export function retrieverArn(parameters: RetrieverArnParameters): RetrieverArn {
  return `arn:${parameters.partition ?? ''}:qbusiness:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/retriever/${parameters.retrieverId}`
}

export interface IndexArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  indexId: string
}
export type IndexArn = `arn:${string}:qbusiness:${string}:${string}:application/${string}/index/${string}`
export function indexArn(parameters: IndexArnParameters): IndexArn {
  return `arn:${parameters.partition ?? ''}:qbusiness:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/index/${parameters.indexId}`
}

export interface DataSourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  indexId: string
  dataSourceId: string
}
export type DataSourceArn = `arn:${string}:qbusiness:${string}:${string}:application/${string}/index/${string}/data-source/${string}`
export function dataSourceArn(parameters: DataSourceArnParameters): DataSourceArn {
  return `arn:${parameters.partition ?? ''}:qbusiness:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/index/${parameters.indexId}/data-source/${parameters.dataSourceId}`
}

export interface PluginArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  pluginId: string
}
export type PluginArn = `arn:${string}:qbusiness:${string}:${string}:application/${string}/plugin/${string}`
export function pluginArn(parameters: PluginArnParameters): PluginArn {
  return `arn:${parameters.partition ?? ''}:qbusiness:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/plugin/${parameters.pluginId}`
}

export interface WebExperienceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  webExperienceId: string
}
export type WebExperienceArn = `arn:${string}:qbusiness:${string}:${string}:application/${string}/web-experience/${string}`
export function webExperienceArn(parameters: WebExperienceArnParameters): WebExperienceArn {
  return `arn:${parameters.partition ?? ''}:qbusiness:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/web-experience/${parameters.webExperienceId}`
}

export interface UserLicenseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  userLicenseId: string
}
export type UserLicenseArn = `arn:${string}:qbusiness:${string}:${string}:application/${string}/user-license/${string}`
export function userLicenseArn(parameters: UserLicenseArnParameters): UserLicenseArn {
  return `arn:${parameters.partition ?? ''}:qbusiness:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/user-license/${parameters.userLicenseId}`
}

export interface SubscriptionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  subscriptionId: string
}
export type SubscriptionArn = `arn:${string}:qbusiness:${string}:${string}:application/${string}/subscription/${string}`
export function subscriptionArn(parameters: SubscriptionArnParameters): SubscriptionArn {
  return `arn:${parameters.partition ?? ''}:qbusiness:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/subscription/${parameters.subscriptionId}`
}
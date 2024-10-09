export interface AppbundleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appBundleIdentifier: string
}
export type AppbundleArn = `arn:${string}:appfabric:${string}:${string}:appbundle/${string}`
export function appbundleArn(parameters: AppbundleArnParameters): AppbundleArn {
  return `arn:${parameters.partition ?? ''}:appfabric:${parameters.region}:${parameters.account}:appbundle/${parameters.appBundleIdentifier}`
}

export interface AppauthorizationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appbundleId: string
  appAuthorizationIdentifier: string
}
export type AppauthorizationArn = `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/appauthorization/${string}`
export function appauthorizationArn(parameters: AppauthorizationArnParameters): AppauthorizationArn {
  return `arn:${parameters.partition ?? ''}:appfabric:${parameters.region}:${parameters.account}:appbundle/${parameters.appbundleId}/appauthorization/${parameters.appAuthorizationIdentifier}`
}

export interface IngestionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appbundleId: string
  ingestionIdentifier: string
}
export type IngestionArn = `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/ingestion/${string}`
export function ingestionArn(parameters: IngestionArnParameters): IngestionArn {
  return `arn:${parameters.partition ?? ''}:appfabric:${parameters.region}:${parameters.account}:appbundle/${parameters.appbundleId}/ingestion/${parameters.ingestionIdentifier}`
}

export interface IngestiondestinationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appbundleId: string
  ingestionIdentifier: string
  ingestionDestinationIdentifier: string
}
export type IngestiondestinationArn = `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/ingestion/${string}/ingestiondestination/${string}`
export function ingestiondestinationArn(parameters: IngestiondestinationArnParameters): IngestiondestinationArn {
  return `arn:${parameters.partition ?? ''}:appfabric:${parameters.region}:${parameters.account}:appbundle/${parameters.appbundleId}/ingestion/${parameters.ingestionIdentifier}/ingestiondestination/${parameters.ingestionDestinationIdentifier}`
}
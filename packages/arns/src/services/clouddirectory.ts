export interface AppliedSchemaArnParameters {
  partition?: string | undefined
  region: string
  account: string
  directoryId: string
  schemaName: string
  version: string
}
export type AppliedSchemaArn = `arn:${string}:clouddirectory:${string}:${string}:directory/${string}/schema/${string}/${string}`
export function appliedSchemaArn(parameters: AppliedSchemaArnParameters): AppliedSchemaArn {
  return `arn:${parameters.partition ?? ''}:clouddirectory:${parameters.region}:${parameters.account}:directory/${parameters.directoryId}/schema/${parameters.schemaName}/${parameters.version}`
}

export interface DevelopmentSchemaArnParameters {
  partition?: string | undefined
  region: string
  account: string
  schemaName: string
}
export type DevelopmentSchemaArn = `arn:${string}:clouddirectory:${string}:${string}:schema/development/${string}`
export function developmentSchemaArn(parameters: DevelopmentSchemaArnParameters): DevelopmentSchemaArn {
  return `arn:${parameters.partition ?? ''}:clouddirectory:${parameters.region}:${parameters.account}:schema/development/${parameters.schemaName}`
}

export interface DirectoryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  directoryId: string
}
export type DirectoryArn = `arn:${string}:clouddirectory:${string}:${string}:directory/${string}`
export function directoryArn(parameters: DirectoryArnParameters): DirectoryArn {
  return `arn:${parameters.partition ?? ''}:clouddirectory:${parameters.region}:${parameters.account}:directory/${parameters.directoryId}`
}

export interface PublishedSchemaArnParameters {
  partition?: string | undefined
  region: string
  account: string
  schemaName: string
  version: string
}
export type PublishedSchemaArn = `arn:${string}:clouddirectory:${string}:${string}:schema/published/${string}/${string}`
export function publishedSchemaArn(parameters: PublishedSchemaArnParameters): PublishedSchemaArn {
  return `arn:${parameters.partition ?? ''}:clouddirectory:${parameters.region}:${parameters.account}:schema/published/${parameters.schemaName}/${parameters.version}`
}
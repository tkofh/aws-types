export interface DatasourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  graphQlapiId: string
  datasourceName: string
}
export type DatasourceArn = `arn:${string}:appsync:${string}:${string}:apis/${string}/datasources/${string}`
export function datasourceArn(parameters: DatasourceArnParameters): DatasourceArn {
  return `arn:${parameters.partition ?? ''}:appsync:${parameters.region}:${parameters.account}:apis/${parameters.graphQlapiId}/datasources/${parameters.datasourceName}`
}

export interface DomainArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
}
export type DomainArn = `arn:${string}:appsync:${string}:${string}:domainnames/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? ''}:appsync:${parameters.region}:${parameters.account}:domainnames/${parameters.domainName}`
}

export interface GraphqlapiArnParameters {
  partition?: string | undefined
  region: string
  account: string
  graphQlapiId: string
}
export type GraphqlapiArn = `arn:${string}:appsync:${string}:${string}:apis/${string}`
export function graphqlapiArn(parameters: GraphqlapiArnParameters): GraphqlapiArn {
  return `arn:${parameters.partition ?? ''}:appsync:${parameters.region}:${parameters.account}:apis/${parameters.graphQlapiId}`
}

export interface FieldArnParameters {
  partition?: string | undefined
  region: string
  account: string
  graphQlapiId: string
  typeName: string
  fieldName: string
}
export type FieldArn = `arn:${string}:appsync:${string}:${string}:apis/${string}/types/${string}/fields/${string}`
export function fieldArn(parameters: FieldArnParameters): FieldArn {
  return `arn:${parameters.partition ?? ''}:appsync:${parameters.region}:${parameters.account}:apis/${parameters.graphQlapiId}/types/${parameters.typeName}/fields/${parameters.fieldName}`
}

export interface TypeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  graphQlapiId: string
  typeName: string
}
export type TypeArn = `arn:${string}:appsync:${string}:${string}:apis/${string}/types/${string}`
export function typeArn(parameters: TypeArnParameters): TypeArn {
  return `arn:${parameters.partition ?? ''}:appsync:${parameters.region}:${parameters.account}:apis/${parameters.graphQlapiId}/types/${parameters.typeName}`
}

export interface FunctionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  graphQlapiId: string
  functionId: string
}
export type FunctionArn = `arn:${string}:appsync:${string}:${string}:apis/${string}/functions/${string}`
export function functionArn(parameters: FunctionArnParameters): FunctionArn {
  return `arn:${parameters.partition ?? ''}:appsync:${parameters.region}:${parameters.account}:apis/${parameters.graphQlapiId}/functions/${parameters.functionId}`
}

export interface SourceApiAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  mergedGraphQlapiId: string
  associationid: string
}
export type SourceApiAssociationArn = `arn:${string}:appsync:${string}:${string}:apis/${string}/sourceApiAssociations/${string}`
export function sourceApiAssociationArn(parameters: SourceApiAssociationArnParameters): SourceApiAssociationArn {
  return `arn:${parameters.partition ?? ''}:appsync:${parameters.region}:${parameters.account}:apis/${parameters.mergedGraphQlapiId}/sourceApiAssociations/${parameters.associationid}`
}

export interface MergedApiAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sourceGraphQlapiId: string
  associationid: string
}
export type MergedApiAssociationArn = `arn:${string}:appsync:${string}:${string}:apis/${string}/mergedApiAssociations/${string}`
export function mergedApiAssociationArn(parameters: MergedApiAssociationArnParameters): MergedApiAssociationArn {
  return `arn:${parameters.partition ?? ''}:appsync:${parameters.region}:${parameters.account}:apis/${parameters.sourceGraphQlapiId}/mergedApiAssociations/${parameters.associationid}`
}
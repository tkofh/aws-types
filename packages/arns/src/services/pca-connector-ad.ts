export interface ConnectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorId: string
}
export type ConnectorArn = `arn:${string}:pca-connector-ad:${string}:${string}:connector/${string}`
export function connectorArn(parameters: ConnectorArnParameters): ConnectorArn {
  return `arn:${parameters.partition ?? ''}:pca-connector-ad:${parameters.region}:${parameters.account}:connector/${parameters.connectorId}`
}

export interface DirectoryRegistrationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  directoryId: string
}
export type DirectoryRegistrationArn = `arn:${string}:pca-connector-ad:${string}:${string}:directory-registration/${string}`
export function directoryRegistrationArn(parameters: DirectoryRegistrationArnParameters): DirectoryRegistrationArn {
  return `arn:${parameters.partition ?? ''}:pca-connector-ad:${parameters.region}:${parameters.account}:directory-registration/${parameters.directoryId}`
}

export interface ServicePrincipalNameArnParameters {
  partition?: string | undefined
  region: string
  account: string
  directoryId: string
}
export type ServicePrincipalNameArn = `arn:${string}:pca-connector-ad:${string}:${string}:directory-registration/${string}`
export function servicePrincipalNameArn(parameters: ServicePrincipalNameArnParameters): ServicePrincipalNameArn {
  return `arn:${parameters.partition ?? ''}:pca-connector-ad:${parameters.region}:${parameters.account}:directory-registration/${parameters.directoryId}`
}

export interface TemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorId: string
  templateId: string
}
export type TemplateArn = `arn:${string}:pca-connector-ad:${string}:${string}:connector/${string}/template/${string}`
export function templateArn(parameters: TemplateArnParameters): TemplateArn {
  return `arn:${parameters.partition ?? ''}:pca-connector-ad:${parameters.region}:${parameters.account}:connector/${parameters.connectorId}/template/${parameters.templateId}`
}

export interface TemplateGroupAccessControlEntryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorId: string
  templateId: string
}
export type TemplateGroupAccessControlEntryArn = `arn:${string}:pca-connector-ad:${string}:${string}:connector/${string}/template/${string}`
export function templateGroupAccessControlEntryArn(parameters: TemplateGroupAccessControlEntryArnParameters): TemplateGroupAccessControlEntryArn {
  return `arn:${parameters.partition ?? ''}:pca-connector-ad:${parameters.region}:${parameters.account}:connector/${parameters.connectorId}/template/${parameters.templateId}`
}
export interface AnalysistemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  membershipId: string
  analysisTemplateId: string
}
export type AnalysistemplateArn = `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/analysistemplate/${string}`
export function analysistemplateArn(parameters: AnalysistemplateArnParameters): AnalysistemplateArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms:${parameters.region}:${parameters.account}:membership/${parameters.membershipId}/analysistemplate/${parameters.analysisTemplateId}`
}

export interface CollaborationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  collaborationId: string
}
export type CollaborationArn = `arn:${string}:cleanrooms:${string}:${string}:collaboration/${string}`
export function collaborationArn(parameters: CollaborationArnParameters): CollaborationArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms:${parameters.region}:${parameters.account}:collaboration/${parameters.collaborationId}`
}

export interface ConfiguredaudiencemodelassociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  membershipId: string
  configuredAudienceModelAssociationId: string
}
export type ConfiguredaudiencemodelassociationArn = `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/configuredaudiencemodelassociation/${string}`
export function configuredaudiencemodelassociationArn(parameters: ConfiguredaudiencemodelassociationArnParameters): ConfiguredaudiencemodelassociationArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms:${parameters.region}:${parameters.account}:membership/${parameters.membershipId}/configuredaudiencemodelassociation/${parameters.configuredAudienceModelAssociationId}`
}

export interface ConfiguredtableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configuredTableId: string
}
export type ConfiguredtableArn = `arn:${string}:cleanrooms:${string}:${string}:configuredtable/${string}`
export function configuredtableArn(parameters: ConfiguredtableArnParameters): ConfiguredtableArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms:${parameters.region}:${parameters.account}:configuredtable/${parameters.configuredTableId}`
}

export interface ConfiguredtableassociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  membershipId: string
  configuredTableAssociationId: string
}
export type ConfiguredtableassociationArn = `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/configuredtableassociation/${string}`
export function configuredtableassociationArn(parameters: ConfiguredtableassociationArnParameters): ConfiguredtableassociationArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms:${parameters.region}:${parameters.account}:membership/${parameters.membershipId}/configuredtableassociation/${parameters.configuredTableAssociationId}`
}

export interface IdmappingtableArnParameters {
  partition?: string | undefined
  region: string
  account: string
  membershipId: string
  idMappingTableId: string
}
export type IdmappingtableArn = `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/idmappingtable/${string}`
export function idmappingtableArn(parameters: IdmappingtableArnParameters): IdmappingtableArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms:${parameters.region}:${parameters.account}:membership/${parameters.membershipId}/idmappingtable/${parameters.idMappingTableId}`
}

export interface IdnamespaceassociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  membershipId: string
  idNamespaceAssociationId: string
}
export type IdnamespaceassociationArn = `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/idnamespaceassociation/${string}`
export function idnamespaceassociationArn(parameters: IdnamespaceassociationArnParameters): IdnamespaceassociationArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms:${parameters.region}:${parameters.account}:membership/${parameters.membershipId}/idnamespaceassociation/${parameters.idNamespaceAssociationId}`
}

export interface MembershipArnParameters {
  partition?: string | undefined
  region: string
  account: string
  membershipId: string
}
export type MembershipArn = `arn:${string}:cleanrooms:${string}:${string}:membership/${string}`
export function membershipArn(parameters: MembershipArnParameters): MembershipArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms:${parameters.region}:${parameters.account}:membership/${parameters.membershipId}`
}

export interface PrivacybudgettemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  membershipId: string
  privacyBudgetTemplateId: string
}
export type PrivacybudgettemplateArn = `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/privacybudgettemplate/${string}`
export function privacybudgettemplateArn(parameters: PrivacybudgettemplateArnParameters): PrivacybudgettemplateArn {
  return `arn:${parameters.partition ?? ''}:cleanrooms:${parameters.region}:${parameters.account}:membership/${parameters.membershipId}/privacybudgettemplate/${parameters.privacyBudgetTemplateId}`
}
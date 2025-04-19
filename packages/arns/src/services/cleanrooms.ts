import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AnalysistemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly analysisTemplateId: string
}
class AnalysistemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'analysistemplate', `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/analysistemplate/${string}`> {
  readonly [ArnResourceTypeBrand] = 'analysistemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly analysisTemplateId: string
  constructor(parameters: AnalysistemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.membershipId = parameters.membershipId
    this.analysisTemplateId = parameters.analysisTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.membershipId}/analysistemplate/${this.analysisTemplateId}` as const
  }
}
export type { AnalysistemplateArn }
export function analysistemplateArn<Partition extends ArnPartition = 'aws'>(parameters: AnalysistemplateArnParameters<Partition>) {
  return new AnalysistemplateArn<Partition>(parameters)
}

export interface CollaborationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly collaborationId: string
}
class CollaborationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'collaboration', `arn:${string}:cleanrooms:${string}:${string}:collaboration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'collaboration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly collaborationId: string
  constructor(parameters: CollaborationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.collaborationId = parameters.collaborationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:collaboration/${this.collaborationId}` as const
  }
}
export type { CollaborationArn }
export function collaborationArn<Partition extends ArnPartition = 'aws'>(parameters: CollaborationArnParameters<Partition>) {
  return new CollaborationArn<Partition>(parameters)
}

export interface ConfiguredaudiencemodelassociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly configuredAudienceModelAssociationId: string
}
class ConfiguredaudiencemodelassociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'configuredaudiencemodelassociation', `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/configuredaudiencemodelassociation/${string}`> {
  readonly [ArnResourceTypeBrand] = 'configuredaudiencemodelassociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly configuredAudienceModelAssociationId: string
  constructor(parameters: ConfiguredaudiencemodelassociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.membershipId = parameters.membershipId
    this.configuredAudienceModelAssociationId = parameters.configuredAudienceModelAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.membershipId}/configuredaudiencemodelassociation/${this.configuredAudienceModelAssociationId}` as const
  }
}
export type { ConfiguredaudiencemodelassociationArn }
export function configuredaudiencemodelassociationArn<Partition extends ArnPartition = 'aws'>(parameters: ConfiguredaudiencemodelassociationArnParameters<Partition>) {
  return new ConfiguredaudiencemodelassociationArn<Partition>(parameters)
}

export interface ConfiguredtableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configuredTableId: string
}
class ConfiguredtableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'configuredtable', `arn:${string}:cleanrooms:${string}:${string}:configuredtable/${string}`> {
  readonly [ArnResourceTypeBrand] = 'configuredtable' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configuredTableId: string
  constructor(parameters: ConfiguredtableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configuredTableId = parameters.configuredTableId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:configuredtable/${this.configuredTableId}` as const
  }
}
export type { ConfiguredtableArn }
export function configuredtableArn<Partition extends ArnPartition = 'aws'>(parameters: ConfiguredtableArnParameters<Partition>) {
  return new ConfiguredtableArn<Partition>(parameters)
}

export interface ConfiguredtableassociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly configuredTableAssociationId: string
}
class ConfiguredtableassociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'configuredtableassociation', `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/configuredtableassociation/${string}`> {
  readonly [ArnResourceTypeBrand] = 'configuredtableassociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly configuredTableAssociationId: string
  constructor(parameters: ConfiguredtableassociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.membershipId = parameters.membershipId
    this.configuredTableAssociationId = parameters.configuredTableAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.membershipId}/configuredtableassociation/${this.configuredTableAssociationId}` as const
  }
}
export type { ConfiguredtableassociationArn }
export function configuredtableassociationArn<Partition extends ArnPartition = 'aws'>(parameters: ConfiguredtableassociationArnParameters<Partition>) {
  return new ConfiguredtableassociationArn<Partition>(parameters)
}

export interface IdmappingtableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly idMappingTableId: string
}
class IdmappingtableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'idmappingtable', `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/idmappingtable/${string}`> {
  readonly [ArnResourceTypeBrand] = 'idmappingtable' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly idMappingTableId: string
  constructor(parameters: IdmappingtableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.membershipId = parameters.membershipId
    this.idMappingTableId = parameters.idMappingTableId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.membershipId}/idmappingtable/${this.idMappingTableId}` as const
  }
}
export type { IdmappingtableArn }
export function idmappingtableArn<Partition extends ArnPartition = 'aws'>(parameters: IdmappingtableArnParameters<Partition>) {
  return new IdmappingtableArn<Partition>(parameters)
}

export interface IdnamespaceassociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly idNamespaceAssociationId: string
}
class IdnamespaceassociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'idnamespaceassociation', `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/idnamespaceassociation/${string}`> {
  readonly [ArnResourceTypeBrand] = 'idnamespaceassociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly idNamespaceAssociationId: string
  constructor(parameters: IdnamespaceassociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.membershipId = parameters.membershipId
    this.idNamespaceAssociationId = parameters.idNamespaceAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.membershipId}/idnamespaceassociation/${this.idNamespaceAssociationId}` as const
  }
}
export type { IdnamespaceassociationArn }
export function idnamespaceassociationArn<Partition extends ArnPartition = 'aws'>(parameters: IdnamespaceassociationArnParameters<Partition>) {
  return new IdnamespaceassociationArn<Partition>(parameters)
}

export interface MembershipArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
}
class MembershipArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'membership', `arn:${string}:cleanrooms:${string}:${string}:membership/${string}`> {
  readonly [ArnResourceTypeBrand] = 'membership' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  constructor(parameters: MembershipArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.membershipId = parameters.membershipId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.membershipId}` as const
  }
}
export type { MembershipArn }
export function membershipArn<Partition extends ArnPartition = 'aws'>(parameters: MembershipArnParameters<Partition>) {
  return new MembershipArn<Partition>(parameters)
}

export interface PrivacybudgettemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly privacyBudgetTemplateId: string
}
class PrivacybudgettemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'privacybudgettemplate', `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/privacybudgettemplate/${string}`> {
  readonly [ArnResourceTypeBrand] = 'privacybudgettemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly privacyBudgetTemplateId: string
  constructor(parameters: PrivacybudgettemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.membershipId = parameters.membershipId
    this.privacyBudgetTemplateId = parameters.privacyBudgetTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.membershipId}/privacybudgettemplate/${this.privacyBudgetTemplateId}` as const
  }
}
export type { PrivacybudgettemplateArn }
export function privacybudgettemplateArn<Partition extends ArnPartition = 'aws'>(parameters: PrivacybudgettemplateArnParameters<Partition>) {
  return new PrivacybudgettemplateArn<Partition>(parameters)
}
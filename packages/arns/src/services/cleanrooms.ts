import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AnalysisTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly analysisTemplateId: string
}
class AnalysisTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'analysistemplate',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/analysistemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'analysistemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly analysisTemplateId: string
  constructor(parameters: AnalysisTemplateArnParameters<Partition>) {
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
export type { AnalysisTemplateArn }
export function analysisTemplateArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnalysisTemplateArnParameters<Partition>,
) {
  return new AnalysisTemplateArn<Partition>(parameters)
}

export interface CollaborationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly collaborationId: string
}
class CollaborationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'collaboration',
  `arn:${string}:cleanrooms:${string}:${string}:collaboration/${string}`
> {
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
export function collaborationArn<Partition extends ArnPartition = 'aws'>(
  parameters: CollaborationArnParameters<Partition>,
) {
  return new CollaborationArn<Partition>(parameters)
}

export interface ConfiguredAudienceModelAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly configuredAudienceModelAssociationId: string
}
class ConfiguredAudienceModelAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuredaudiencemodelassociation',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/configuredaudiencemodelassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'configuredaudiencemodelassociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly configuredAudienceModelAssociationId: string
  constructor(
    parameters: ConfiguredAudienceModelAssociationArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.membershipId = parameters.membershipId
    this.configuredAudienceModelAssociationId =
      parameters.configuredAudienceModelAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.membershipId}/configuredaudiencemodelassociation/${this.configuredAudienceModelAssociationId}` as const
  }
}
export type { ConfiguredAudienceModelAssociationArn }
export function configuredAudienceModelAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfiguredAudienceModelAssociationArnParameters<Partition>) {
  return new ConfiguredAudienceModelAssociationArn<Partition>(parameters)
}

export interface ConfiguredTableArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configuredTableId: string
}
class ConfiguredTableArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuredtable',
  `arn:${string}:cleanrooms:${string}:${string}:configuredtable/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuredtable' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configuredTableId: string
  constructor(parameters: ConfiguredTableArnParameters<Partition>) {
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
export type { ConfiguredTableArn }
export function configuredTableArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfiguredTableArnParameters<Partition>,
) {
  return new ConfiguredTableArn<Partition>(parameters)
}

export interface ConfiguredTableAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly configuredTableAssociationId: string
}
class ConfiguredTableAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuredtableassociation',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/configuredtableassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuredtableassociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly configuredTableAssociationId: string
  constructor(parameters: ConfiguredTableAssociationArnParameters<Partition>) {
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
export type { ConfiguredTableAssociationArn }
export function configuredTableAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfiguredTableAssociationArnParameters<Partition>) {
  return new ConfiguredTableAssociationArn<Partition>(parameters)
}

export interface IdMappingTableArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly idMappingTableId: string
}
class IdMappingTableArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'idmappingtable',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/idmappingtable/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'idmappingtable' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly idMappingTableId: string
  constructor(parameters: IdMappingTableArnParameters<Partition>) {
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
export type { IdMappingTableArn }
export function idMappingTableArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdMappingTableArnParameters<Partition>,
) {
  return new IdMappingTableArn<Partition>(parameters)
}

export interface IdNamespaceAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly idNamespaceAssociationId: string
}
class IdNamespaceAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'idnamespaceassociation',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/idnamespaceassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'idnamespaceassociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly idNamespaceAssociationId: string
  constructor(parameters: IdNamespaceAssociationArnParameters<Partition>) {
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
export type { IdNamespaceAssociationArn }
export function idNamespaceAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: IdNamespaceAssociationArnParameters<Partition>) {
  return new IdNamespaceAssociationArn<Partition>(parameters)
}

export interface MembershipArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
}
class MembershipArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'membership',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}`
> {
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
export function membershipArn<Partition extends ArnPartition = 'aws'>(
  parameters: MembershipArnParameters<Partition>,
) {
  return new MembershipArn<Partition>(parameters)
}

export interface PrivacyBudgetTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly privacyBudgetTemplateId: string
}
class PrivacyBudgetTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'privacybudgettemplate',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/privacybudgettemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'privacybudgettemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly membershipId: string
  readonly privacyBudgetTemplateId: string
  constructor(parameters: PrivacyBudgetTemplateArnParameters<Partition>) {
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
export type { PrivacyBudgetTemplateArn }
export function privacyBudgetTemplateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PrivacyBudgetTemplateArnParameters<Partition>) {
  return new PrivacyBudgetTemplateArn<Partition>(parameters)
}

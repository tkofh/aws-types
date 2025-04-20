import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TemplateAnalysisArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idTemplateAnalysis: string
}
class TemplateAnalysisArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'analysistemplate',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/analysistemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'analysistemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idTemplateAnalysis: string
  constructor(parameters: TemplateAnalysisArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMembership = parameters.idMembership
    this.idTemplateAnalysis = parameters.idTemplateAnalysis
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.idMembership}/analysistemplate/${this.idTemplateAnalysis}` as const
  }
}
export type { TemplateAnalysisArn }
export function templateAnalysisArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateAnalysisArnParameters<Partition>,
) {
  return new TemplateAnalysisArn<Partition>(parameters)
}

export interface CollaborationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCollaboration: string
}
class CollaborationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'collaboration',
  `arn:${string}:cleanrooms:${string}:${string}:collaboration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'collaboration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCollaboration: string
  constructor(parameters: CollaborationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCollaboration = parameters.idCollaboration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:collaboration/${this.idCollaboration}` as const
  }
}
export type { CollaborationArn }
export function collaborationArn<Partition extends ArnPartition = 'aws'>(
  parameters: CollaborationArnParameters<Partition>,
) {
  return new CollaborationArn<Partition>(parameters)
}

export interface AssociationModelAudienceConfiguredArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idAssociationModelAudienceConfigured: string
}
class AssociationModelAudienceConfiguredArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuredaudiencemodelassociation',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/configuredaudiencemodelassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'configuredaudiencemodelassociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idAssociationModelAudienceConfigured: string
  constructor(
    parameters: AssociationModelAudienceConfiguredArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMembership = parameters.idMembership
    this.idAssociationModelAudienceConfigured =
      parameters.idAssociationModelAudienceConfigured
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.idMembership}/configuredaudiencemodelassociation/${this.idAssociationModelAudienceConfigured}` as const
  }
}
export type { AssociationModelAudienceConfiguredArn }
export function associationModelAudienceConfiguredArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationModelAudienceConfiguredArnParameters<Partition>) {
  return new AssociationModelAudienceConfiguredArn<Partition>(parameters)
}

export interface TableConfiguredArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTableConfigured: string
}
class TableConfiguredArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuredtable',
  `arn:${string}:cleanrooms:${string}:${string}:configuredtable/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuredtable' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTableConfigured: string
  constructor(parameters: TableConfiguredArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTableConfigured = parameters.idTableConfigured
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:configuredtable/${this.idTableConfigured}` as const
  }
}
export type { TableConfiguredArn }
export function tableConfiguredArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableConfiguredArnParameters<Partition>,
) {
  return new TableConfiguredArn<Partition>(parameters)
}

export interface AssociationTableConfiguredArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idAssociationTableConfigured: string
}
class AssociationTableConfiguredArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuredtableassociation',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/configuredtableassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuredtableassociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idAssociationTableConfigured: string
  constructor(parameters: AssociationTableConfiguredArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMembership = parameters.idMembership
    this.idAssociationTableConfigured = parameters.idAssociationTableConfigured
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.idMembership}/configuredtableassociation/${this.idAssociationTableConfigured}` as const
  }
}
export type { AssociationTableConfiguredArn }
export function associationTableConfiguredArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationTableConfiguredArnParameters<Partition>) {
  return new AssociationTableConfiguredArn<Partition>(parameters)
}

export interface TableMappingIdArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idTableMappingId: string
}
class TableMappingIdArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'idmappingtable',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/idmappingtable/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'idmappingtable' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idTableMappingId: string
  constructor(parameters: TableMappingIdArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMembership = parameters.idMembership
    this.idTableMappingId = parameters.idTableMappingId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.idMembership}/idmappingtable/${this.idTableMappingId}` as const
  }
}
export type { TableMappingIdArn }
export function tableMappingIdArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableMappingIdArnParameters<Partition>,
) {
  return new TableMappingIdArn<Partition>(parameters)
}

export interface AssociationNamespaceIdArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idAssociationNamespaceId: string
}
class AssociationNamespaceIdArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'idnamespaceassociation',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/idnamespaceassociation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'idnamespaceassociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idAssociationNamespaceId: string
  constructor(parameters: AssociationNamespaceIdArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMembership = parameters.idMembership
    this.idAssociationNamespaceId = parameters.idAssociationNamespaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.idMembership}/idnamespaceassociation/${this.idAssociationNamespaceId}` as const
  }
}
export type { AssociationNamespaceIdArn }
export function associationNamespaceIdArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationNamespaceIdArnParameters<Partition>) {
  return new AssociationNamespaceIdArn<Partition>(parameters)
}

export interface MembershipArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
}
class MembershipArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'membership',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'membership' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  constructor(parameters: MembershipArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMembership = parameters.idMembership
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.idMembership}` as const
  }
}
export type { MembershipArn }
export function membershipArn<Partition extends ArnPartition = 'aws'>(
  parameters: MembershipArnParameters<Partition>,
) {
  return new MembershipArn<Partition>(parameters)
}

export interface TemplateBudgetPrivacyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idTemplateBudgetPrivacy: string
}
class TemplateBudgetPrivacyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'privacybudgettemplate',
  `arn:${string}:cleanrooms:${string}:${string}:membership/${string}/privacybudgettemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'privacybudgettemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMembership: string
  readonly idTemplateBudgetPrivacy: string
  constructor(parameters: TemplateBudgetPrivacyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMembership = parameters.idMembership
    this.idTemplateBudgetPrivacy = parameters.idTemplateBudgetPrivacy
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms:${this.region}:${this.account}:membership/${this.idMembership}/privacybudgettemplate/${this.idTemplateBudgetPrivacy}` as const
  }
}
export type { TemplateBudgetPrivacyArn }
export function templateBudgetPrivacyArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TemplateBudgetPrivacyArnParameters<Partition>) {
  return new TemplateBudgetPrivacyArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ConnectorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Connector', `arn:${string}:pca-connector-ad:${string}:${string}:connector/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Connector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorId = parameters.connectorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:connector/${this.connectorId}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectorArnParameters<Partition>) {
  return new ConnectorArn<Partition>(parameters)
}

export interface DirectoryRegistrationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
}
class DirectoryRegistrationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'DirectoryRegistration', `arn:${string}:pca-connector-ad:${string}:${string}:directory-registration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'DirectoryRegistration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
  constructor(parameters: DirectoryRegistrationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.directoryId = parameters.directoryId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:directory-registration/${this.directoryId}` as const
  }
}
export type { DirectoryRegistrationArn }
export function directoryRegistrationArn<Partition extends ArnPartition = 'aws'>(parameters: DirectoryRegistrationArnParameters<Partition>) {
  return new DirectoryRegistrationArn<Partition>(parameters)
}

export interface ServicePrincipalNameArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
}
class ServicePrincipalNameArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ServicePrincipalName', `arn:${string}:pca-connector-ad:${string}:${string}:directory-registration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ServicePrincipalName' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
  constructor(parameters: ServicePrincipalNameArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.directoryId = parameters.directoryId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:directory-registration/${this.directoryId}` as const
  }
}
export type { ServicePrincipalNameArn }
export function servicePrincipalNameArn<Partition extends ArnPartition = 'aws'>(parameters: ServicePrincipalNameArnParameters<Partition>) {
  return new ServicePrincipalNameArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  readonly templateId: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Template', `arn:${string}:pca-connector-ad:${string}:${string}:connector/${string}/template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  readonly templateId: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorId = parameters.connectorId
    this.templateId = parameters.templateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:connector/${this.connectorId}/template/${this.templateId}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(parameters: TemplateArnParameters<Partition>) {
  return new TemplateArn<Partition>(parameters)
}

export interface TemplateGroupAccessControlEntryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  readonly templateId: string
}
class TemplateGroupAccessControlEntryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'TemplateGroupAccessControlEntry', `arn:${string}:pca-connector-ad:${string}:${string}:connector/${string}/template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'TemplateGroupAccessControlEntry' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  readonly templateId: string
  constructor(parameters: TemplateGroupAccessControlEntryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorId = parameters.connectorId
    this.templateId = parameters.templateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:connector/${this.connectorId}/template/${this.templateId}` as const
  }
}
export type { TemplateGroupAccessControlEntryArn }
export function templateGroupAccessControlEntryArn<Partition extends ArnPartition = 'aws'>(parameters: TemplateGroupAccessControlEntryArnParameters<Partition>) {
  return new TemplateGroupAccessControlEntryArn<Partition>(parameters)
}
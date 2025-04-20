import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Connector',
  `arn:${string}:pca-connector-ad:${string}:${string}:connector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Connector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnector = parameters.idConnector
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:connector/${this.idConnector}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorArnParameters<Partition>,
) {
  return new ConnectorArn<Partition>(parameters)
}

export interface RegistrationDirectoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
}
class RegistrationDirectoryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DirectoryRegistration',
  `arn:${string}:pca-connector-ad:${string}:${string}:directory-registration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DirectoryRegistration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
  constructor(parameters: RegistrationDirectoryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDirectory = parameters.idDirectory
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:directory-registration/${this.idDirectory}` as const
  }
}
export type { RegistrationDirectoryArn }
export function registrationDirectoryArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RegistrationDirectoryArnParameters<Partition>) {
  return new RegistrationDirectoryArn<Partition>(parameters)
}

export interface NamePrincipalServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
}
class NamePrincipalServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ServicePrincipalName',
  `arn:${string}:pca-connector-ad:${string}:${string}:directory-registration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ServicePrincipalName' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
  constructor(parameters: NamePrincipalServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDirectory = parameters.idDirectory
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:directory-registration/${this.idDirectory}` as const
  }
}
export type { NamePrincipalServiceArn }
export function namePrincipalServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamePrincipalServiceArnParameters<Partition>,
) {
  return new NamePrincipalServiceArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  readonly idTemplate: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Template',
  `arn:${string}:pca-connector-ad:${string}:${string}:connector/${string}/template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  readonly idTemplate: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnector = parameters.idConnector
    this.idTemplate = parameters.idTemplate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:connector/${this.idConnector}/template/${this.idTemplate}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateArnParameters<Partition>,
) {
  return new TemplateArn<Partition>(parameters)
}

export interface EntryControlAccessGroupTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  readonly idTemplate: string
}
class EntryControlAccessGroupTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TemplateGroupAccessControlEntry',
  `arn:${string}:pca-connector-ad:${string}:${string}:connector/${string}/template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TemplateGroupAccessControlEntry' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  readonly idTemplate: string
  constructor(
    parameters: EntryControlAccessGroupTemplateArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnector = parameters.idConnector
    this.idTemplate = parameters.idTemplate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pca-connector-ad:${this.region}:${this.account}:connector/${this.idConnector}/template/${this.idTemplate}` as const
  }
}
export type { EntryControlAccessGroupTemplateArn }
export function entryControlAccessGroupTemplateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: EntryControlAccessGroupTemplateArnParameters<Partition>) {
  return new EntryControlAccessGroupTemplateArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DatasourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  readonly nameSourceData: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datasource',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/datasources/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  readonly nameSourceData: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApiGraphql = parameters.idApiGraphql
    this.nameSourceData = parameters.nameSourceData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.idApiGraphql}/datasources/${this.nameSourceData}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasourceArnParameters<Partition>,
) {
  return new DatasourceArn<Partition>(parameters)
}

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domain',
  `arn:${string}:appsync:${string}:${string}:domainnames/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:domainnames/${this.nameDomain}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface ApiGraphqlArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
}
class ApiGraphqlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'graphqlapi',
  `arn:${string}:appsync:${string}:${string}:apis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'graphqlapi' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  constructor(parameters: ApiGraphqlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApiGraphql = parameters.idApiGraphql
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.idApiGraphql}` as const
  }
}
export type { ApiGraphqlArn }
export function apiGraphqlArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiGraphqlArnParameters<Partition>,
) {
  return new ApiGraphqlArn<Partition>(parameters)
}

export interface FieldArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  readonly nameType: string
  readonly nameField: string
}
class FieldArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'field',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/types/${string}/fields/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'field' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  readonly nameType: string
  readonly nameField: string
  constructor(parameters: FieldArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApiGraphql = parameters.idApiGraphql
    this.nameType = parameters.nameType
    this.nameField = parameters.nameField
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.idApiGraphql}/types/${this.nameType}/fields/${this.nameField}` as const
  }
}
export type { FieldArn }
export function fieldArn<Partition extends ArnPartition = 'aws'>(
  parameters: FieldArnParameters<Partition>,
) {
  return new FieldArn<Partition>(parameters)
}

export interface TypeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  readonly nameType: string
}
class TypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'type',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/types/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'type' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  readonly nameType: string
  constructor(parameters: TypeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApiGraphql = parameters.idApiGraphql
    this.nameType = parameters.nameType
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.idApiGraphql}/types/${this.nameType}` as const
  }
}
export type { TypeArn }
export function typeArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypeArnParameters<Partition>,
) {
  return new TypeArn<Partition>(parameters)
}

export interface FunctionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  readonly idFunction: string
}
class FunctionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'function',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/functions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  readonly idFunction: string
  constructor(parameters: FunctionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApiGraphql = parameters.idApiGraphql
    this.idFunction = parameters.idFunction
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.idApiGraphql}/functions/${this.idFunction}` as const
  }
}
export type { FunctionArn }
export function functionArn<Partition extends ArnPartition = 'aws'>(
  parameters: FunctionArnParameters<Partition>,
) {
  return new FunctionArn<Partition>(parameters)
}

export interface AssociationApiSourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphqlMerged: string
  readonly idAssociation: string
}
class AssociationApiSourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sourceApiAssociation',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/sourceApiAssociations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sourceApiAssociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphqlMerged: string
  readonly idAssociation: string
  constructor(parameters: AssociationApiSourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApiGraphqlMerged = parameters.idApiGraphqlMerged
    this.idAssociation = parameters.idAssociation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.idApiGraphqlMerged}/sourceApiAssociations/${this.idAssociation}` as const
  }
}
export type { AssociationApiSourceArn }
export function associationApiSourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationApiSourceArnParameters<Partition>,
) {
  return new AssociationApiSourceArn<Partition>(parameters)
}

export interface AssociationApiMergedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphqlSource: string
  readonly idAssociation: string
}
class AssociationApiMergedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mergedApiAssociation',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/mergedApiAssociations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mergedApiAssociation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphqlSource: string
  readonly idAssociation: string
  constructor(parameters: AssociationApiMergedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApiGraphqlSource = parameters.idApiGraphqlSource
    this.idAssociation = parameters.idAssociation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.idApiGraphqlSource}/mergedApiAssociations/${this.idAssociation}` as const
  }
}
export type { AssociationApiMergedArn }
export function associationApiMergedArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationApiMergedArnParameters<Partition>,
) {
  return new AssociationApiMergedArn<Partition>(parameters)
}

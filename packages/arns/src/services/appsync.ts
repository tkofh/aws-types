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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  readonly dataSourceName: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datasource',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/datasources/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  readonly dataSourceName: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphqlApiId = parameters.graphqlApiId
    this.dataSourceName = parameters.dataSourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphqlApiId}/datasources/${this.dataSourceName}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasourceArnParameters<Partition>,
) {
  return new DatasourceArn<Partition>(parameters)
}

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domain',
  `arn:${string}:appsync:${string}:${string}:domainnames/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:domainnames/${this.domainName}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface GraphqlApiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
}
class GraphqlApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'graphqlapi',
  `arn:${string}:appsync:${string}:${string}:apis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'graphqlapi' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  constructor(parameters: GraphqlApiArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphqlApiId = parameters.graphqlApiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphqlApiId}` as const
  }
}
export type { GraphqlApiArn }
export function graphqlApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: GraphqlApiArnParameters<Partition>,
) {
  return new GraphqlApiArn<Partition>(parameters)
}

export interface FieldArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  readonly typeName: string
  readonly fieldName: string
}
class FieldArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'field',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/types/${string}/fields/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'field' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  readonly typeName: string
  readonly fieldName: string
  constructor(parameters: FieldArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphqlApiId = parameters.graphqlApiId
    this.typeName = parameters.typeName
    this.fieldName = parameters.fieldName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphqlApiId}/types/${this.typeName}/fields/${this.fieldName}` as const
  }
}
export type { FieldArn }
export function fieldArn<Partition extends ArnPartition = 'aws'>(
  parameters: FieldArnParameters<Partition>,
) {
  return new FieldArn<Partition>(parameters)
}

export interface TypeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  readonly typeName: string
}
class TypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'type',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/types/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'type' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  readonly typeName: string
  constructor(parameters: TypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphqlApiId = parameters.graphqlApiId
    this.typeName = parameters.typeName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphqlApiId}/types/${this.typeName}` as const
  }
}
export type { TypeArn }
export function typeArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypeArnParameters<Partition>,
) {
  return new TypeArn<Partition>(parameters)
}

export interface FunctionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  readonly functionId: string
}
class FunctionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'function',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/functions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'function' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  readonly functionId: string
  constructor(parameters: FunctionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphqlApiId = parameters.graphqlApiId
    this.functionId = parameters.functionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphqlApiId}/functions/${this.functionId}` as const
  }
}
export type { FunctionArn }
export function functionArn<Partition extends ArnPartition = 'aws'>(
  parameters: FunctionArnParameters<Partition>,
) {
  return new FunctionArn<Partition>(parameters)
}

export interface SourceApiAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mergedGraphqlApiId: string
  readonly associationId: string
}
class SourceApiAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sourceApiAssociation',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/sourceApiAssociations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sourceApiAssociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mergedGraphqlApiId: string
  readonly associationId: string
  constructor(parameters: SourceApiAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.mergedGraphqlApiId = parameters.mergedGraphqlApiId
    this.associationId = parameters.associationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.mergedGraphqlApiId}/sourceApiAssociations/${this.associationId}` as const
  }
}
export type { SourceApiAssociationArn }
export function sourceApiAssociationArn<Partition extends ArnPartition = 'aws'>(
  parameters: SourceApiAssociationArnParameters<Partition>,
) {
  return new SourceApiAssociationArn<Partition>(parameters)
}

export interface MergedApiAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceGraphqlApiId: string
  readonly associationId: string
}
class MergedApiAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mergedApiAssociation',
  `arn:${string}:appsync:${string}:${string}:apis/${string}/mergedApiAssociations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mergedApiAssociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceGraphqlApiId: string
  readonly associationId: string
  constructor(parameters: MergedApiAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sourceGraphqlApiId = parameters.sourceGraphqlApiId
    this.associationId = parameters.associationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.sourceGraphqlApiId}/mergedApiAssociations/${this.associationId}` as const
  }
}
export type { MergedApiAssociationArn }
export function mergedApiAssociationArn<Partition extends ArnPartition = 'aws'>(
  parameters: MergedApiAssociationArnParameters<Partition>,
) {
  return new MergedApiAssociationArn<Partition>(parameters)
}

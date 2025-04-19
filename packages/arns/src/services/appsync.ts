import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DatasourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  readonly datasourceName: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'datasource', `arn:${string}:appsync:${string}:${string}:apis/${string}/datasources/${string}`> {
  readonly [ArnResourceTypeBrand] = 'datasource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  readonly datasourceName: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphQlapiId = parameters.graphQlapiId
    this.datasourceName = parameters.datasourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphQlapiId}/datasources/${this.datasourceName}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(parameters: DatasourceArnParameters<Partition>) {
  return new DatasourceArn<Partition>(parameters)
}

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'domain', `arn:${string}:appsync:${string}:${string}:domainnames/${string}`> {
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
export function domainArn<Partition extends ArnPartition = 'aws'>(parameters: DomainArnParameters<Partition>) {
  return new DomainArn<Partition>(parameters)
}

export interface GraphqlapiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
}
class GraphqlapiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'graphqlapi', `arn:${string}:appsync:${string}:${string}:apis/${string}`> {
  readonly [ArnResourceTypeBrand] = 'graphqlapi' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  constructor(parameters: GraphqlapiArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphQlapiId = parameters.graphQlapiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphQlapiId}` as const
  }
}
export type { GraphqlapiArn }
export function graphqlapiArn<Partition extends ArnPartition = 'aws'>(parameters: GraphqlapiArnParameters<Partition>) {
  return new GraphqlapiArn<Partition>(parameters)
}

export interface FieldArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  readonly typeName: string
  readonly fieldName: string
}
class FieldArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'field', `arn:${string}:appsync:${string}:${string}:apis/${string}/types/${string}/fields/${string}`> {
  readonly [ArnResourceTypeBrand] = 'field' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  readonly typeName: string
  readonly fieldName: string
  constructor(parameters: FieldArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphQlapiId = parameters.graphQlapiId
    this.typeName = parameters.typeName
    this.fieldName = parameters.fieldName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphQlapiId}/types/${this.typeName}/fields/${this.fieldName}` as const
  }
}
export type { FieldArn }
export function fieldArn<Partition extends ArnPartition = 'aws'>(parameters: FieldArnParameters<Partition>) {
  return new FieldArn<Partition>(parameters)
}

export interface TypeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  readonly typeName: string
}
class TypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'type', `arn:${string}:appsync:${string}:${string}:apis/${string}/types/${string}`> {
  readonly [ArnResourceTypeBrand] = 'type' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  readonly typeName: string
  constructor(parameters: TypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphQlapiId = parameters.graphQlapiId
    this.typeName = parameters.typeName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphQlapiId}/types/${this.typeName}` as const
  }
}
export type { TypeArn }
export function typeArn<Partition extends ArnPartition = 'aws'>(parameters: TypeArnParameters<Partition>) {
  return new TypeArn<Partition>(parameters)
}

export interface FunctionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  readonly functionId: string
}
class FunctionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'function', `arn:${string}:appsync:${string}:${string}:apis/${string}/functions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'function' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  readonly functionId: string
  constructor(parameters: FunctionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphQlapiId = parameters.graphQlapiId
    this.functionId = parameters.functionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphQlapiId}/functions/${this.functionId}` as const
  }
}
export type { FunctionArn }
export function functionArn<Partition extends ArnPartition = 'aws'>(parameters: FunctionArnParameters<Partition>) {
  return new FunctionArn<Partition>(parameters)
}

export interface SourceApiAssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mergedGraphQlapiId: string
  readonly associationid: string
}
class SourceApiAssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'sourceApiAssociation', `arn:${string}:appsync:${string}:${string}:apis/${string}/sourceApiAssociations/${string}`> {
  readonly [ArnResourceTypeBrand] = 'sourceApiAssociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mergedGraphQlapiId: string
  readonly associationid: string
  constructor(parameters: SourceApiAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.mergedGraphQlapiId = parameters.mergedGraphQlapiId
    this.associationid = parameters.associationid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.mergedGraphQlapiId}/sourceApiAssociations/${this.associationid}` as const
  }
}
export type { SourceApiAssociationArn }
export function sourceApiAssociationArn<Partition extends ArnPartition = 'aws'>(parameters: SourceApiAssociationArnParameters<Partition>) {
  return new SourceApiAssociationArn<Partition>(parameters)
}

export interface MergedApiAssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceGraphQlapiId: string
  readonly associationid: string
}
class MergedApiAssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'mergedApiAssociation', `arn:${string}:appsync:${string}:${string}:apis/${string}/mergedApiAssociations/${string}`> {
  readonly [ArnResourceTypeBrand] = 'mergedApiAssociation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceGraphQlapiId: string
  readonly associationid: string
  constructor(parameters: MergedApiAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sourceGraphQlapiId = parameters.sourceGraphQlapiId
    this.associationid = parameters.associationid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.sourceGraphQlapiId}/mergedApiAssociations/${this.associationid}` as const
  }
}
export type { MergedApiAssociationArn }
export function mergedApiAssociationArn<Partition extends ArnPartition = 'aws'>(parameters: MergedApiAssociationArnParameters<Partition>) {
  return new MergedApiAssociationArn<Partition>(parameters)
}
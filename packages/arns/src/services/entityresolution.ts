import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface MatchingWorkflowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowName: string
}
class MatchingWorkflowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'MatchingWorkflow',
  `arn:${string}:entityresolution:${string}:${string}:matchingworkflow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'MatchingWorkflow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowName: string
  constructor(parameters: MatchingWorkflowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workflowName = parameters.workflowName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:matchingworkflow/${this.workflowName}` as const
  }
}
export type { MatchingWorkflowArn }
export function matchingWorkflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: MatchingWorkflowArnParameters<Partition>,
) {
  return new MatchingWorkflowArn<Partition>(parameters)
}

export interface SchemaMappingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schemaName: string
}
class SchemaMappingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SchemaMapping',
  `arn:${string}:entityresolution:${string}:${string}:schemamapping/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SchemaMapping' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schemaName: string
  constructor(parameters: SchemaMappingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.schemaName = parameters.schemaName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:schemamapping/${this.schemaName}` as const
  }
}
export type { SchemaMappingArn }
export function schemaMappingArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchemaMappingArnParameters<Partition>,
) {
  return new SchemaMappingArn<Partition>(parameters)
}

export interface IdMappingWorkflowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowName: string
}
class IdMappingWorkflowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'IdMappingWorkflow',
  `arn:${string}:entityresolution:${string}:${string}:idmappingworkflow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'IdMappingWorkflow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowName: string
  constructor(parameters: IdMappingWorkflowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workflowName = parameters.workflowName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:idmappingworkflow/${this.workflowName}` as const
  }
}
export type { IdMappingWorkflowArn }
export function idMappingWorkflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdMappingWorkflowArnParameters<Partition>,
) {
  return new IdMappingWorkflowArn<Partition>(parameters)
}

export interface ProviderServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly providerName: string
  readonly providerServiceName: string
}
class ProviderServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ProviderService',
  `arn:${string}:entityresolution:${string}:${string}:providerservice/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ProviderService' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly providerName: string
  readonly providerServiceName: string
  constructor(parameters: ProviderServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.providerName = parameters.providerName
    this.providerServiceName = parameters.providerServiceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:providerservice/${this.providerName}/${this.providerServiceName}` as const
  }
}
export type { ProviderServiceArn }
export function providerServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderServiceArnParameters<Partition>,
) {
  return new ProviderServiceArn<Partition>(parameters)
}

export interface IdNamespaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly idNamespaceName: string
}
class IdNamespaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'IdNamespace',
  `arn:${string}:entityresolution:${string}:${string}:idnamespace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'IdNamespace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly idNamespaceName: string
  constructor(parameters: IdNamespaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNamespaceName = parameters.idNamespaceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:idnamespace/${this.idNamespaceName}` as const
  }
}
export type { IdNamespaceArn }
export function idNamespaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdNamespaceArnParameters<Partition>,
) {
  return new IdNamespaceArn<Partition>(parameters)
}

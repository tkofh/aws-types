import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface WorkflowMatchingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkflow: string
}
class WorkflowMatchingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'MatchingWorkflow',
  `arn:${string}:entityresolution:${string}:${string}:matchingworkflow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'MatchingWorkflow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkflow: string
  constructor(parameters: WorkflowMatchingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameWorkflow = parameters.nameWorkflow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:matchingworkflow/${this.nameWorkflow}` as const
  }
}
export type { WorkflowMatchingArn }
export function workflowMatchingArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkflowMatchingArnParameters<Partition>,
) {
  return new WorkflowMatchingArn<Partition>(parameters)
}

export interface MappingSchemaArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchema: string
}
class MappingSchemaArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SchemaMapping',
  `arn:${string}:entityresolution:${string}:${string}:schemamapping/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SchemaMapping' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchema: string
  constructor(parameters: MappingSchemaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSchema = parameters.nameSchema
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:schemamapping/${this.nameSchema}` as const
  }
}
export type { MappingSchemaArn }
export function mappingSchemaArn<Partition extends ArnPartition = 'aws'>(
  parameters: MappingSchemaArnParameters<Partition>,
) {
  return new MappingSchemaArn<Partition>(parameters)
}

export interface WorkflowMappingIdArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkflow: string
}
class WorkflowMappingIdArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'IdMappingWorkflow',
  `arn:${string}:entityresolution:${string}:${string}:idmappingworkflow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'IdMappingWorkflow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkflow: string
  constructor(parameters: WorkflowMappingIdArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameWorkflow = parameters.nameWorkflow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:idmappingworkflow/${this.nameWorkflow}` as const
  }
}
export type { WorkflowMappingIdArn }
export function workflowMappingIdArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkflowMappingIdArnParameters<Partition>,
) {
  return new WorkflowMappingIdArn<Partition>(parameters)
}

export interface ServiceProviderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProvider: string
  readonly nameServiceProvider: string
}
class ServiceProviderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ProviderService',
  `arn:${string}:entityresolution:${string}:${string}:providerservice/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ProviderService' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProvider: string
  readonly nameServiceProvider: string
  constructor(parameters: ServiceProviderArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProvider = parameters.nameProvider
    this.nameServiceProvider = parameters.nameServiceProvider
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:providerservice/${this.nameProvider}/${this.nameServiceProvider}` as const
  }
}
export type { ServiceProviderArn }
export function serviceProviderArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceProviderArnParameters<Partition>,
) {
  return new ServiceProviderArn<Partition>(parameters)
}

export interface NamespaceIdArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNamespaceId: string
}
class NamespaceIdArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'IdNamespace',
  `arn:${string}:entityresolution:${string}:${string}:idnamespace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'IdNamespace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNamespaceId: string
  constructor(parameters: NamespaceIdArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameNamespaceId = parameters.nameNamespaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:entityresolution:${this.region}:${this.account}:idnamespace/${this.nameNamespaceId}` as const
  }
}
export type { NamespaceIdArn }
export function namespaceIdArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamespaceIdArnParameters<Partition>,
) {
  return new NamespaceIdArn<Partition>(parameters)
}

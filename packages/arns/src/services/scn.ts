import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:scn:${string}:${string}:instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scn:${this.region}:${this.account}:instance/${this.instanceId}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface BillOfMaterialsImportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly jobId: string
}
class BillOfMaterialsImportJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'bill-of-materials-import-job',
  `arn:${string}:scn:${string}:${string}:instance/${string}/bill-of-materials-import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bill-of-materials-import-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly jobId: string
  constructor(parameters: BillOfMaterialsImportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scn:${this.region}:${this.account}:instance/${this.instanceId}/bill-of-materials-import-job/${this.jobId}` as const
  }
}
export type { BillOfMaterialsImportJobArn }
export function billOfMaterialsImportJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: BillOfMaterialsImportJobArnParameters<Partition>) {
  return new BillOfMaterialsImportJobArn<Partition>(parameters)
}

export interface DataIntegrationFlowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly flowName: string
}
class DataIntegrationFlowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'data-integration-flow',
  `arn:${string}:scn:${string}:${string}:instance/${string}/data-integration-flows/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-integration-flow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly flowName: string
  constructor(parameters: DataIntegrationFlowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.flowName = parameters.flowName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scn:${this.region}:${this.account}:instance/${this.instanceId}/data-integration-flows/${this.flowName}` as const
  }
}
export type { DataIntegrationFlowArn }
export function dataIntegrationFlowArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataIntegrationFlowArnParameters<Partition>,
) {
  return new DataIntegrationFlowArn<Partition>(parameters)
}

export interface DatasetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly namespace: string
  readonly datasetName: string
}
class DatasetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:scn:${string}:${string}:instance/${string}/namespaces/${string}/datasets/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly namespace: string
  readonly datasetName: string
  constructor(parameters: DatasetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.namespace = parameters.namespace
    this.datasetName = parameters.datasetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scn:${this.region}:${this.account}:instance/${this.instanceId}/namespaces/${this.namespace}/datasets/${this.datasetName}` as const
  }
}
export type { DatasetArn }
export function datasetArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasetArnParameters<Partition>,
) {
  return new DatasetArn<Partition>(parameters)
}

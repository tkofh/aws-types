import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:scn:${string}:${string}:instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scn:${this.region}:${this.account}:instance/${this.idInstance}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface JobImportMaterialsOfBillArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idJob: string
}
class JobImportMaterialsOfBillArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'bill-of-materials-import-job',
  `arn:${string}:scn:${string}:${string}:instance/${string}/bill-of-materials-import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bill-of-materials-import-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idJob: string
  constructor(parameters: JobImportMaterialsOfBillArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scn:${this.region}:${this.account}:instance/${this.idInstance}/bill-of-materials-import-job/${this.idJob}` as const
  }
}
export type { JobImportMaterialsOfBillArn }
export function jobImportMaterialsOfBillArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobImportMaterialsOfBillArnParameters<Partition>) {
  return new JobImportMaterialsOfBillArn<Partition>(parameters)
}

export interface FlowIntegrationDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly nameFlow: string
}
class FlowIntegrationDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'data-integration-flow',
  `arn:${string}:scn:${string}:${string}:instance/${string}/data-integration-flows/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-integration-flow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly nameFlow: string
  constructor(parameters: FlowIntegrationDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.nameFlow = parameters.nameFlow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scn:${this.region}:${this.account}:instance/${this.idInstance}/data-integration-flows/${this.nameFlow}` as const
  }
}
export type { FlowIntegrationDataArn }
export function flowIntegrationDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlowIntegrationDataArnParameters<Partition>,
) {
  return new FlowIntegrationDataArn<Partition>(parameters)
}

export interface SetDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly namespace: string
  readonly nameSetData: string
}
class SetDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:scn:${string}:${string}:instance/${string}/namespaces/${string}/datasets/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly namespace: string
  readonly nameSetData: string
  constructor(parameters: SetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.namespace = parameters.namespace
    this.nameSetData = parameters.nameSetData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scn:${this.region}:${this.account}:instance/${this.idInstance}/namespaces/${this.namespace}/datasets/${this.nameSetData}` as const
  }
}
export type { SetDataArn }
export function setDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataArnParameters<Partition>,
) {
  return new SetDataArn<Partition>(parameters)
}

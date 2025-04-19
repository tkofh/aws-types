import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DatasetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasetName: string
  readonly datasetId: string
}
class DatasetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dataset', `arn:${string}:lookoutequipment:${string}:${string}:dataset/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasetName: string
  readonly datasetId: string
  constructor(parameters: DatasetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.datasetName = parameters.datasetName
    this.datasetId = parameters.datasetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:dataset/${this.datasetName}/${this.datasetId}` as const
  }
}
export type { DatasetArn }
export function datasetArn<Partition extends ArnPartition = 'aws'>(parameters: DatasetArnParameters<Partition>) {
  return new DatasetArn<Partition>(parameters)
}

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
  readonly modelId: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'model', `arn:${string}:lookoutequipment:${string}:${string}:model/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
  readonly modelId: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelName = parameters.modelName
    this.modelId = parameters.modelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:model/${this.modelName}/${this.modelId}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(parameters: ModelArnParameters<Partition>) {
  return new ModelArn<Partition>(parameters)
}

export interface ModelVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
  readonly modelId: string
  readonly modelVersionNumber: string
}
class ModelVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'model-version', `arn:${string}:lookoutequipment:${string}:${string}:model/${string}/${string}/model-version/${string}`> {
  readonly [ArnResourceTypeBrand] = 'model-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
  readonly modelId: string
  readonly modelVersionNumber: string
  constructor(parameters: ModelVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelName = parameters.modelName
    this.modelId = parameters.modelId
    this.modelVersionNumber = parameters.modelVersionNumber
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:model/${this.modelName}/${this.modelId}/model-version/${this.modelVersionNumber}` as const
  }
}
export type { ModelVersionArn }
export function modelVersionArn<Partition extends ArnPartition = 'aws'>(parameters: ModelVersionArnParameters<Partition>) {
  return new ModelVersionArn<Partition>(parameters)
}

export interface InferenceSchedulerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inferenceSchedulerName: string
  readonly inferenceSchedulerId: string
}
class InferenceSchedulerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'inference-scheduler', `arn:${string}:lookoutequipment:${string}:${string}:inference-scheduler/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'inference-scheduler' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly inferenceSchedulerName: string
  readonly inferenceSchedulerId: string
  constructor(parameters: InferenceSchedulerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.inferenceSchedulerName = parameters.inferenceSchedulerName
    this.inferenceSchedulerId = parameters.inferenceSchedulerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:inference-scheduler/${this.inferenceSchedulerName}/${this.inferenceSchedulerId}` as const
  }
}
export type { InferenceSchedulerArn }
export function inferenceSchedulerArn<Partition extends ArnPartition = 'aws'>(parameters: InferenceSchedulerArnParameters<Partition>) {
  return new InferenceSchedulerArn<Partition>(parameters)
}

export interface LabelGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly labelGroupName: string
  readonly labelGroupId: string
}
class LabelGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'label-group', `arn:${string}:lookoutequipment:${string}:${string}:label-group/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'label-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly labelGroupName: string
  readonly labelGroupId: string
  constructor(parameters: LabelGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.labelGroupName = parameters.labelGroupName
    this.labelGroupId = parameters.labelGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutequipment:${this.region}:${this.account}:label-group/${this.labelGroupName}/${this.labelGroupId}` as const
  }
}
export type { LabelGroupArn }
export function labelGroupArn<Partition extends ArnPartition = 'aws'>(parameters: LabelGroupArnParameters<Partition>) {
  return new LabelGroupArn<Partition>(parameters)
}
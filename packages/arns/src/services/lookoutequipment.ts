export interface DatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  datasetName: string
  datasetId: string
}
export type DatasetArn = `arn:${string}:lookoutequipment:${string}:${string}:dataset/${string}/${string}`
export function datasetArn(parameters: DatasetArnParameters): DatasetArn {
  return `arn:${parameters.partition ?? ''}:lookoutequipment:${parameters.region}:${parameters.account}:dataset/${parameters.datasetName}/${parameters.datasetId}`
}

export interface ModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelName: string
  modelId: string
}
export type ModelArn = `arn:${string}:lookoutequipment:${string}:${string}:model/${string}/${string}`
export function modelArn(parameters: ModelArnParameters): ModelArn {
  return `arn:${parameters.partition ?? ''}:lookoutequipment:${parameters.region}:${parameters.account}:model/${parameters.modelName}/${parameters.modelId}`
}

export interface ModelVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  modelName: string
  modelId: string
  modelVersionNumber: string
}
export type ModelVersionArn = `arn:${string}:lookoutequipment:${string}:${string}:model/${string}/${string}/model-version/${string}`
export function modelVersionArn(parameters: ModelVersionArnParameters): ModelVersionArn {
  return `arn:${parameters.partition ?? ''}:lookoutequipment:${parameters.region}:${parameters.account}:model/${parameters.modelName}/${parameters.modelId}/model-version/${parameters.modelVersionNumber}`
}

export interface InferenceSchedulerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  inferenceSchedulerName: string
  inferenceSchedulerId: string
}
export type InferenceSchedulerArn = `arn:${string}:lookoutequipment:${string}:${string}:inference-scheduler/${string}/${string}`
export function inferenceSchedulerArn(parameters: InferenceSchedulerArnParameters): InferenceSchedulerArn {
  return `arn:${parameters.partition ?? ''}:lookoutequipment:${parameters.region}:${parameters.account}:inference-scheduler/${parameters.inferenceSchedulerName}/${parameters.inferenceSchedulerId}`
}

export interface LabelGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  labelGroupName: string
  labelGroupId: string
}
export type LabelGroupArn = `arn:${string}:lookoutequipment:${string}:${string}:label-group/${string}/${string}`
export function labelGroupArn(parameters: LabelGroupArnParameters): LabelGroupArn {
  return `arn:${parameters.partition ?? ''}:lookoutequipment:${parameters.region}:${parameters.account}:label-group/${parameters.labelGroupName}/${parameters.labelGroupId}`
}
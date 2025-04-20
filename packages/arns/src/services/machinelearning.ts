import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PredictionBatchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPredictionBatch: string
}
class PredictionBatchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'batchprediction',
  `arn:${string}:machinelearning:${string}:${string}:batchprediction/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'batchprediction' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPredictionBatch: string
  constructor(parameters: PredictionBatchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPredictionBatch = parameters.idPredictionBatch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:machinelearning:${this.region}:${this.account}:batchprediction/${this.idPredictionBatch}` as const
  }
}
export type { PredictionBatchArn }
export function predictionBatchArn<Partition extends ArnPartition = 'aws'>(
  parameters: PredictionBatchArnParameters<Partition>,
) {
  return new PredictionBatchArn<Partition>(parameters)
}

export interface DatasourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSourceData: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datasource',
  `arn:${string}:machinelearning:${string}:${string}:datasource/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSourceData: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSourceData = parameters.idSourceData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:machinelearning:${this.region}:${this.account}:datasource/${this.idSourceData}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasourceArnParameters<Partition>,
) {
  return new DatasourceArn<Partition>(parameters)
}

export interface EvaluationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEvaluation: string
}
class EvaluationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'evaluation',
  `arn:${string}:machinelearning:${string}:${string}:evaluation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'evaluation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEvaluation: string
  constructor(parameters: EvaluationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEvaluation = parameters.idEvaluation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:machinelearning:${this.region}:${this.account}:evaluation/${this.idEvaluation}` as const
  }
}
export type { EvaluationArn }
export function evaluationArn<Partition extends ArnPartition = 'aws'>(
  parameters: EvaluationArnParameters<Partition>,
) {
  return new EvaluationArn<Partition>(parameters)
}

export interface ModelMlArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idModelMl: string
}
class ModelMlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'mlmodel',
  `arn:${string}:machinelearning:${string}:${string}:mlmodel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mlmodel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idModelMl: string
  constructor(parameters: ModelMlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idModelMl = parameters.idModelMl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:machinelearning:${this.region}:${this.account}:mlmodel/${this.idModelMl}` as const
  }
}
export type { ModelMlArn }
export function modelMlArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelMlArnParameters<Partition>,
) {
  return new ModelMlArn<Partition>(parameters)
}

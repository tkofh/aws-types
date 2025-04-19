import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface BatchpredictionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly batchPredictionId: string
}
class BatchpredictionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'batchprediction', `arn:${string}:machinelearning:${string}:${string}:batchprediction/${string}`> {
  readonly [ArnResourceTypeBrand] = 'batchprediction' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly batchPredictionId: string
  constructor(parameters: BatchpredictionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.batchPredictionId = parameters.batchPredictionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:machinelearning:${this.region}:${this.account}:batchprediction/${this.batchPredictionId}` as const
  }
}
export type { BatchpredictionArn }
export function batchpredictionArn<Partition extends ArnPartition = 'aws'>(parameters: BatchpredictionArnParameters<Partition>) {
  return new BatchpredictionArn<Partition>(parameters)
}

export interface DatasourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasourceId: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'datasource', `arn:${string}:machinelearning:${string}:${string}:datasource/${string}`> {
  readonly [ArnResourceTypeBrand] = 'datasource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datasourceId: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.datasourceId = parameters.datasourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:machinelearning:${this.region}:${this.account}:datasource/${this.datasourceId}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(parameters: DatasourceArnParameters<Partition>) {
  return new DatasourceArn<Partition>(parameters)
}

export interface EvaluationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly evaluationId: string
}
class EvaluationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'evaluation', `arn:${string}:machinelearning:${string}:${string}:evaluation/${string}`> {
  readonly [ArnResourceTypeBrand] = 'evaluation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly evaluationId: string
  constructor(parameters: EvaluationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.evaluationId = parameters.evaluationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:machinelearning:${this.region}:${this.account}:evaluation/${this.evaluationId}` as const
  }
}
export type { EvaluationArn }
export function evaluationArn<Partition extends ArnPartition = 'aws'>(parameters: EvaluationArnParameters<Partition>) {
  return new EvaluationArn<Partition>(parameters)
}

export interface MlmodelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mlModelId: string
}
class MlmodelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'mlmodel', `arn:${string}:machinelearning:${string}:${string}:mlmodel/${string}`> {
  readonly [ArnResourceTypeBrand] = 'mlmodel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mlModelId: string
  constructor(parameters: MlmodelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.mlModelId = parameters.mlModelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:machinelearning:${this.region}:${this.account}:mlmodel/${this.mlModelId}` as const
  }
}
export type { MlmodelArn }
export function mlmodelArn<Partition extends ArnPartition = 'aws'>(parameters: MlmodelArnParameters<Partition>) {
  return new MlmodelArn<Partition>(parameters)
}
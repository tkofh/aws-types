import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:elastictranscoder:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elastictranscoder:${this.region}:${this.account}:job/${this.idJob}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPipeline: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pipeline',
  `arn:${string}:elastictranscoder:${string}:${string}:pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPipeline: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPipeline = parameters.idPipeline
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elastictranscoder:${this.region}:${this.account}:pipeline/${this.idPipeline}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineArnParameters<Partition>,
) {
  return new PipelineArn<Partition>(parameters)
}

export interface PresetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPreset: string
}
class PresetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'preset',
  `arn:${string}:elastictranscoder:${string}:${string}:preset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'preset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPreset: string
  constructor(parameters: PresetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPreset = parameters.idPreset
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elastictranscoder:${this.region}:${this.account}:preset/${this.idPreset}` as const
  }
}
export type { PresetArn }
export function presetArn<Partition extends ArnPartition = 'aws'>(
  parameters: PresetArnParameters<Partition>,
) {
  return new PresetArn<Partition>(parameters)
}

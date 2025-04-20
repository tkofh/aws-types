import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TrainingDataSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TrainingDataSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trainingdataset',
  `arn:${string}:cleanrooms-ml:${string}:${string}:training-dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trainingdataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TrainingDataSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms-ml:${this.region}:${this.account}:training-dataset/${this.resourceId}` as const
  }
}
export type { TrainingDataSetArn }
export function trainingDataSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrainingDataSetArnParameters<Partition>,
) {
  return new TrainingDataSetArn<Partition>(parameters)
}

export interface AudienceModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AudienceModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'audiencemodel',
  `arn:${string}:cleanrooms-ml:${string}:${string}:audience-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'audiencemodel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AudienceModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms-ml:${this.region}:${this.account}:audience-model/${this.resourceId}` as const
  }
}
export type { AudienceModelArn }
export function audienceModelArn<Partition extends ArnPartition = 'aws'>(
  parameters: AudienceModelArnParameters<Partition>,
) {
  return new AudienceModelArn<Partition>(parameters)
}

export interface ConfiguredAudienceModelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ConfiguredAudienceModelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuredaudiencemodel',
  `arn:${string}:cleanrooms-ml:${string}:${string}:configured-audience-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuredaudiencemodel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ConfiguredAudienceModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms-ml:${this.region}:${this.account}:configured-audience-model/${this.resourceId}` as const
  }
}
export type { ConfiguredAudienceModelArn }
export function configuredAudienceModelArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfiguredAudienceModelArnParameters<Partition>) {
  return new ConfiguredAudienceModelArn<Partition>(parameters)
}

export interface AudienceGenerationJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AudienceGenerationJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'audiencegenerationjob',
  `arn:${string}:cleanrooms-ml:${string}:${string}:audience-generation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'audiencegenerationjob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AudienceGenerationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms-ml:${this.region}:${this.account}:audience-generation-job/${this.resourceId}` as const
  }
}
export type { AudienceGenerationJobArn }
export function audienceGenerationJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AudienceGenerationJobArnParameters<Partition>) {
  return new AudienceGenerationJobArn<Partition>(parameters)
}

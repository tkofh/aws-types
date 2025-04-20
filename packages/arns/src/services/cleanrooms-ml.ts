import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SetDataTrainingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SetDataTrainingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trainingdataset',
  `arn:${string}:cleanrooms-ml:${string}:${string}:training-dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trainingdataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SetDataTrainingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms-ml:${this.region}:${this.account}:training-dataset/${this.idResource}` as const
  }
}
export type { SetDataTrainingArn }
export function setDataTrainingArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataTrainingArnParameters<Partition>,
) {
  return new SetDataTrainingArn<Partition>(parameters)
}

export interface ModelAudienceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ModelAudienceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'audiencemodel',
  `arn:${string}:cleanrooms-ml:${string}:${string}:audience-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'audiencemodel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ModelAudienceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms-ml:${this.region}:${this.account}:audience-model/${this.idResource}` as const
  }
}
export type { ModelAudienceArn }
export function modelAudienceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelAudienceArnParameters<Partition>,
) {
  return new ModelAudienceArn<Partition>(parameters)
}

export interface ModelAudienceConfiguredArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ModelAudienceConfiguredArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuredaudiencemodel',
  `arn:${string}:cleanrooms-ml:${string}:${string}:configured-audience-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuredaudiencemodel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ModelAudienceConfiguredArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms-ml:${this.region}:${this.account}:configured-audience-model/${this.idResource}` as const
  }
}
export type { ModelAudienceConfiguredArn }
export function modelAudienceConfiguredArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ModelAudienceConfiguredArnParameters<Partition>) {
  return new ModelAudienceConfiguredArn<Partition>(parameters)
}

export interface JobGenerationAudienceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobGenerationAudienceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'audiencegenerationjob',
  `arn:${string}:cleanrooms-ml:${string}:${string}:audience-generation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'audiencegenerationjob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobGenerationAudienceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cleanrooms-ml:${this.region}:${this.account}:audience-generation-job/${this.idResource}` as const
  }
}
export type { JobGenerationAudienceArn }
export function jobGenerationAudienceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobGenerationAudienceArnParameters<Partition>) {
  return new JobGenerationAudienceArn<Partition>(parameters)
}

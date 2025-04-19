import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TrainingdatasetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TrainingdatasetArn<
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
  constructor(parameters: TrainingdatasetArnParameters<Partition>) {
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
export type { TrainingdatasetArn }
export function trainingdatasetArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrainingdatasetArnParameters<Partition>,
) {
  return new TrainingdatasetArn<Partition>(parameters)
}

export interface AudiencemodelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AudiencemodelArn<
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
  constructor(parameters: AudiencemodelArnParameters<Partition>) {
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
export type { AudiencemodelArn }
export function audiencemodelArn<Partition extends ArnPartition = 'aws'>(
  parameters: AudiencemodelArnParameters<Partition>,
) {
  return new AudiencemodelArn<Partition>(parameters)
}

export interface ConfiguredaudiencemodelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ConfiguredaudiencemodelArn<
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
  constructor(parameters: ConfiguredaudiencemodelArnParameters<Partition>) {
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
export type { ConfiguredaudiencemodelArn }
export function configuredaudiencemodelArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfiguredaudiencemodelArnParameters<Partition>) {
  return new ConfiguredaudiencemodelArn<Partition>(parameters)
}

export interface AudiencegenerationjobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AudiencegenerationjobArn<
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
  constructor(parameters: AudiencegenerationjobArnParameters<Partition>) {
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
export type { AudiencegenerationjobArn }
export function audiencegenerationjobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AudiencegenerationjobArnParameters<Partition>) {
  return new AudiencegenerationjobArn<Partition>(parameters)
}

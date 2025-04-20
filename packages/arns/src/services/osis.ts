import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pipeline',
  `arn:${string}:osis:${string}:${string}:pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePipeline: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePipeline = parameters.namePipeline
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:osis:${this.region}:${this.account}:pipeline/${this.namePipeline}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineArnParameters<Partition>,
) {
  return new PipelineArn<Partition>(parameters)
}

export interface BlueprintPipelineArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBlueprint: string
}
class BlueprintPipelineArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pipeline-blueprint',
  `arn:${string}:osis:${string}:${string}:blueprint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline-blueprint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBlueprint: string
  constructor(parameters: BlueprintPipelineArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBlueprint = parameters.nameBlueprint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:osis:${this.region}:${this.account}:blueprint/${this.nameBlueprint}` as const
  }
}
export type { BlueprintPipelineArn }
export function blueprintPipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: BlueprintPipelineArnParameters<Partition>,
) {
  return new BlueprintPipelineArn<Partition>(parameters)
}

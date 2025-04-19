import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pipeline',
  `arn:${string}:osis:${string}:${string}:pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineName: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.pipelineName = parameters.pipelineName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:osis:${this.region}:${this.account}:pipeline/${this.pipelineName}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineArnParameters<Partition>,
) {
  return new PipelineArn<Partition>(parameters)
}

export interface PipelineBlueprintArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly blueprintName: string
}
class PipelineBlueprintArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pipeline-blueprint',
  `arn:${string}:osis:${string}:${string}:blueprint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pipeline-blueprint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly blueprintName: string
  constructor(parameters: PipelineBlueprintArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.blueprintName = parameters.blueprintName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:osis:${this.region}:${this.account}:blueprint/${this.blueprintName}` as const
  }
}
export type { PipelineBlueprintArn }
export function pipelineBlueprintArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineBlueprintArnParameters<Partition>,
) {
  return new PipelineBlueprintArn<Partition>(parameters)
}

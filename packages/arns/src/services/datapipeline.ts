import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface PipelineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineId: string
}
class PipelineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'pipeline', `arn:${string}:datapipeline:${string}:${string}:pipeline/${string}`> {
  readonly [ArnResourceTypeBrand] = 'pipeline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly pipelineId: string
  constructor(parameters: PipelineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.pipelineId = parameters.pipelineId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datapipeline:${this.region}:${this.account}:pipeline/${this.pipelineId}` as const
  }
}
export type { PipelineArn }
export function pipelineArn<Partition extends ArnPartition = 'aws'>(parameters: PipelineArnParameters<Partition>) {
  return new PipelineArn<Partition>(parameters)
}
import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface GraphArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class GraphArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Graph', `arn:${string}:detective:${string}:${string}:graph:${string}`> {
  readonly [ArnResourceTypeBrand] = 'Graph' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: GraphArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:detective:${this.region}:${this.account}:graph:${this.resourceId}` as const
  }
}
export type { GraphArn }
export function graphArn<Partition extends ArnPartition = 'aws'>(parameters: GraphArnParameters<Partition>) {
  return new GraphArn<Partition>(parameters)
}
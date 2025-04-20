import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GraphArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class GraphArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Graph',
  `arn:${string}:detective:${string}:${string}:graph:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Graph' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GraphArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:detective:${this.region}:${this.account}:graph:${this.idResource}` as const
  }
}
export type { GraphArn }
export function graphArn<Partition extends ArnPartition = 'aws'>(
  parameters: GraphArnParameters<Partition>,
) {
  return new GraphArn<Partition>(parameters)
}

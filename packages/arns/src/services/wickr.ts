import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkId: string
}
class NetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'network',
  `arn:${string}:wickr:${string}:${string}:network/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkId: string
  constructor(parameters: NetworkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkId = parameters.networkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wickr:${this.region}:${this.account}:network/${this.networkId}` as const
  }
}
export type { NetworkArn }
export function networkArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkArnParameters<Partition>,
) {
  return new NetworkArn<Partition>(parameters)
}

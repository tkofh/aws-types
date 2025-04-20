import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNetwork: string
}
class NetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'network',
  `arn:${string}:wickr:${string}:${string}:network/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNetwork: string
  constructor(parameters: NetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNetwork = parameters.idNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wickr:${this.region}:${this.account}:network/${this.idNetwork}` as const
  }
}
export type { NetworkArn }
export function networkArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkArnParameters<Partition>,
) {
  return new NetworkArn<Partition>(parameters)
}

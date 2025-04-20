import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SpaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SpaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'space',
  `arn:${string}:repostspace:${string}:${string}:space/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'space' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SpaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:repostspace:${this.region}:${this.account}:space/${this.idResource}` as const
  }
}
export type { SpaceArn }
export function spaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SpaceArnParameters<Partition>,
) {
  return new SpaceArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SpaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class SpaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'space',
  `arn:${string}:repostspace:${string}:${string}:space/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'space' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: SpaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:repostspace:${this.region}:${this.account}:space/${this.resourceId}` as const
  }
}
export type { SpaceArn }
export function spaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SpaceArnParameters<Partition>,
) {
  return new SpaceArn<Partition>(parameters)
}

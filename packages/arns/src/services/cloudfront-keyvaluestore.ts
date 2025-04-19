import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface KeyValueStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class KeyValueStoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'key-value-store',
  `arn:${string}:cloudfront::${string}:key-value-store/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'key-value-store' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: KeyValueStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:key-value-store/${this.resourceId}` as const
  }
}
export type { KeyValueStoreArn }
export function keyValueStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyValueStoreArnParameters<Partition>,
) {
  return new KeyValueStoreArn<Partition>(parameters)
}

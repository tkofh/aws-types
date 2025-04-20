import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StoreValueKeyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class StoreValueKeyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'key-value-store',
  `arn:${string}:cloudfront::${string}:key-value-store/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'key-value-store' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: StoreValueKeyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudfront::${this.account}:key-value-store/${this.idResource}` as const
  }
}
export type { StoreValueKeyArn }
export function storeValueKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreValueKeyArnParameters<Partition>,
) {
  return new StoreValueKeyArn<Partition>(parameters)
}

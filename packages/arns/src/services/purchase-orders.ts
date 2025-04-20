import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface OrderPurchaseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly nameResource: string
}
class OrderPurchaseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'purchase-order',
  `arn:${string}:purchase-orders::${string}:purchase-order/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'purchase-order' as const
  readonly partition: string
  readonly account: string
  readonly nameResource: string
  constructor(parameters: OrderPurchaseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameResource = parameters.nameResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:purchase-orders::${this.account}:purchase-order/${this.nameResource}` as const
  }
}
export type { OrderPurchaseArn }
export function orderPurchaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: OrderPurchaseArnParameters<Partition>,
) {
  return new OrderPurchaseArn<Partition>(parameters)
}

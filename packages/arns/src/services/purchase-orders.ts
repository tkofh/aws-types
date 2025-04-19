import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface PurchaseOrderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceName: string
}
class PurchaseOrderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'purchase-order', `arn:${string}:purchase-orders::${string}:purchase-order/${string}`> {
  readonly [ArnResourceTypeBrand] = 'purchase-order' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceName: string
  constructor(parameters: PurchaseOrderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceName = parameters.resourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:purchase-orders::${this.account}:purchase-order/${this.resourceName}` as const
  }
}
export type { PurchaseOrderArn }
export function purchaseOrderArn<Partition extends ArnPartition = 'aws'>(parameters: PurchaseOrderArnParameters<Partition>) {
  return new PurchaseOrderArn<Partition>(parameters)
}
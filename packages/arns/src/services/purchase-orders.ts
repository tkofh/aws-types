export interface PurchaseOrderArnParameters {
  partition?: string | undefined
  account: string
  resourceName: string
}
export type PurchaseOrderArn = `arn:${string}:purchase-orders::${string}:purchase-order/${string}`
export function purchaseOrderArn(parameters: PurchaseOrderArnParameters): PurchaseOrderArn {
  return `arn:${parameters.partition ?? ''}:purchase-orders::${parameters.account}:purchase-order/${parameters.resourceName}`
}
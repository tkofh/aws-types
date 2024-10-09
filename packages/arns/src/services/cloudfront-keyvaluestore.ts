export interface KeyValueStoreArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type KeyValueStoreArn = `arn:${string}:cloudfront::${string}:key-value-store/${string}`
export function keyValueStoreArn(parameters: KeyValueStoreArnParameters): KeyValueStoreArn {
  return `arn:${parameters.partition ?? ''}:cloudfront::${parameters.account}:key-value-store/${parameters.resourceId}`
}
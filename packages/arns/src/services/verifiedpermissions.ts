export interface PolicyStoreArnParameters {
  partition?: string | undefined
  account: string
  policyStoreId: string
}
export type PolicyStoreArn = `arn:${string}:verifiedpermissions::${string}:policy-store/${string}`
export function policyStoreArn(parameters: PolicyStoreArnParameters): PolicyStoreArn {
  return `arn:${parameters.partition ?? ''}:verifiedpermissions::${parameters.account}:policy-store/${parameters.policyStoreId}`
}
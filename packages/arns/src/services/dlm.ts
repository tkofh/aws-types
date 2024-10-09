export interface PolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceName: string
}
export type PolicyArn = `arn:${string}:dlm:${string}:${string}:policy/${string}`
export function policyArn(parameters: PolicyArnParameters): PolicyArn {
  return `arn:${parameters.partition ?? ''}:dlm:${parameters.region}:${parameters.account}:policy/${parameters.resourceName}`
}
export interface SavingsplanArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type SavingsplanArn = `arn:${string}:savingsplans::${string}:savingsplan/${string}`
export function savingsplanArn(parameters: SavingsplanArnParameters): SavingsplanArn {
  return `arn:${parameters.partition ?? ''}:savingsplans::${parameters.account}:savingsplan/${parameters.resourceId}`
}
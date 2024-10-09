export interface QuotaArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceCode: string
  quotaCode: string
}
export type QuotaArn = `arn:${string}:servicequotas:${string}:${string}:${string}/${string}`
export function quotaArn(parameters: QuotaArnParameters): QuotaArn {
  return `arn:${parameters.partition ?? ''}:servicequotas:${parameters.region}:${parameters.account}:${parameters.serviceCode}/${parameters.quotaCode}`
}
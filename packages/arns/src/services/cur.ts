export interface CurArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reportName: string
}
export type CurArn = `arn:${string}:cur:${string}:${string}:definition/${string}`
export function curArn(parameters: CurArnParameters): CurArn {
  return `arn:${parameters.partition ?? ''}:cur:${parameters.region}:${parameters.account}:definition/${parameters.reportName}`
}
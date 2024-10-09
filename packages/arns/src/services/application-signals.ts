export interface SloArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sloName: string
}
export type SloArn = `arn:${string}:application-signals:${string}:${string}:slo/${string}`
export function sloArn(parameters: SloArnParameters): SloArn {
  return `arn:${parameters.partition ?? ''}:application-signals:${parameters.region}:${parameters.account}:slo/${parameters.sloName}`
}
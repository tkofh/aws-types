export interface ChecksArnParameters {
  partition?: string | undefined
  region: string
  account: string
  categoryCode: string
  checkId: string
}
export type ChecksArn = `arn:${string}:trustedadvisor:${string}:${string}:checks/${string}/${string}`
export function checksArn(parameters: ChecksArnParameters): ChecksArn {
  return `arn:${parameters.partition ?? ''}:trustedadvisor:${parameters.region}:${parameters.account}:checks/${parameters.categoryCode}/${parameters.checkId}`
}
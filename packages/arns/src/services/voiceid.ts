export interface DomainArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainId: string
}
export type DomainArn = `arn:${string}:voiceid:${string}:${string}:domain/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? ''}:voiceid:${parameters.region}:${parameters.account}:domain/${parameters.domainId}`
}
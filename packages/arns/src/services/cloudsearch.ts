export interface DomainArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
}
export type DomainArn = `arn:${string}:cloudsearch:${string}:${string}:domain/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? ''}:cloudsearch:${parameters.region}:${parameters.account}:domain/${parameters.domainName}`
}
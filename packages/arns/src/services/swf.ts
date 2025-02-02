export interface DomainArnParameters {
  partition?: string | undefined
  account: string
  domainName: string
}
export type DomainArn = `arn:${string}:swf::${string}:/domain/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? 'aws'}:swf::${parameters.account}:/domain/${parameters.domainName}`
}
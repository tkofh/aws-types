export interface OutpostArnParameters {
  partition?: string | undefined
  region: string
  account: string
  outpostId: string
}
export type OutpostArn = `arn:${string}:outposts:${string}:${string}:outpost/${string}`
export function outpostArn(parameters: OutpostArnParameters): OutpostArn {
  return `arn:${parameters.partition ?? ''}:outposts:${parameters.region}:${parameters.account}:outpost/${parameters.outpostId}`
}

export interface SiteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  siteId: string
}
export type SiteArn = `arn:${string}:outposts:${string}:${string}:site/${string}`
export function siteArn(parameters: SiteArnParameters): SiteArn {
  return `arn:${parameters.partition ?? ''}:outposts:${parameters.region}:${parameters.account}:site/${parameters.siteId}`
}
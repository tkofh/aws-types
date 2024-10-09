export interface WorkspaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workspaceId: string
}
export type WorkspaceArn = `arn:${string}:aps:${string}:${string}:workspace/${string}`
export function workspaceArn(parameters: WorkspaceArnParameters): WorkspaceArn {
  return `arn:${parameters.partition ?? ''}:aps:${parameters.region}:${parameters.account}:workspace/${parameters.workspaceId}`
}

export interface RulegroupsnamespaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workspaceId: string
  namespace: string
}
export type RulegroupsnamespaceArn = `arn:${string}:aps:${string}:${string}:rulegroupsnamespace/${string}/${string}`
export function rulegroupsnamespaceArn(parameters: RulegroupsnamespaceArnParameters): RulegroupsnamespaceArn {
  return `arn:${parameters.partition ?? ''}:aps:${parameters.region}:${parameters.account}:rulegroupsnamespace/${parameters.workspaceId}/${parameters.namespace}`
}

export interface ScraperArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scraperId: string
}
export type ScraperArn = `arn:${string}:aps:${string}:${string}:scraper/${string}`
export function scraperArn(parameters: ScraperArnParameters): ScraperArn {
  return `arn:${parameters.partition ?? ''}:aps:${parameters.region}:${parameters.account}:scraper/${parameters.scraperId}`
}

export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
}
export type ClusterArn = `arn:${string}:eks:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:eks:${parameters.region}:${parameters.account}:cluster/${parameters.clusterName}`
}
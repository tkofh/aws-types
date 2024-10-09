export interface LinkArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type LinkArn = `arn:${string}:oam:${string}:${string}:link/${string}`
export function linkArn(parameters: LinkArnParameters): LinkArn {
  return `arn:${parameters.partition ?? ''}:oam:${parameters.region}:${parameters.account}:link/${parameters.resourceId}`
}

export interface SinkArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type SinkArn = `arn:${string}:oam:${string}:${string}:sink/${string}`
export function sinkArn(parameters: SinkArnParameters): SinkArn {
  return `arn:${parameters.partition ?? ''}:oam:${parameters.region}:${parameters.account}:sink/${parameters.resourceId}`
}
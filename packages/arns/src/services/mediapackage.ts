export interface ChannelsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelIdentifier: string
}
export type ChannelsArn = `arn:${string}:mediapackage:${string}:${string}:channels/${string}`
export function channelsArn(parameters: ChannelsArnParameters): ChannelsArn {
  return `arn:${parameters.partition ?? ''}:mediapackage:${parameters.region}:${parameters.account}:channels/${parameters.channelIdentifier}`
}

export interface OriginEndpointsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  originEndpointIdentifier: string
}
export type OriginEndpointsArn = `arn:${string}:mediapackage:${string}:${string}:origin_endpoints/${string}`
export function originEndpointsArn(parameters: OriginEndpointsArnParameters): OriginEndpointsArn {
  return `arn:${parameters.partition ?? ''}:mediapackage:${parameters.region}:${parameters.account}:origin_endpoints/${parameters.originEndpointIdentifier}`
}

export interface HarvestJobsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  harvestJobIdentifier: string
}
export type HarvestJobsArn = `arn:${string}:mediapackage:${string}:${string}:harvest_jobs/${string}`
export function harvestJobsArn(parameters: HarvestJobsArnParameters): HarvestJobsArn {
  return `arn:${parameters.partition ?? ''}:mediapackage:${parameters.region}:${parameters.account}:harvest_jobs/${parameters.harvestJobIdentifier}`
}
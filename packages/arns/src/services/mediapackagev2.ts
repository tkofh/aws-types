export interface ChannelGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelGroupName: string
}
export type ChannelGroupArn = `arn:${string}:mediapackagev2:${string}:${string}:channelGroup/${string}`
export function channelGroupArn(parameters: ChannelGroupArnParameters): ChannelGroupArn {
  return `arn:${parameters.partition ?? ''}:mediapackagev2:${parameters.region}:${parameters.account}:channelGroup/${parameters.channelGroupName}`
}

export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelGroupName: string
  channelName: string
}
export type ChannelArn = `arn:${string}:mediapackagev2:${string}:${string}:channelGroup/${string}/channel/${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:mediapackagev2:${parameters.region}:${parameters.account}:channelGroup/${parameters.channelGroupName}/channel/${parameters.channelName}`
}

export interface OriginEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelGroupName: string
  channelName: string
  originEndpointName: string
}
export type OriginEndpointArn = `arn:${string}:mediapackagev2:${string}:${string}:channelGroup/${string}/channel/${string}/originEndpoint/${string}`
export function originEndpointArn(parameters: OriginEndpointArnParameters): OriginEndpointArn {
  return `arn:${parameters.partition ?? ''}:mediapackagev2:${parameters.region}:${parameters.account}:channelGroup/${parameters.channelGroupName}/channel/${parameters.channelName}/originEndpoint/${parameters.originEndpointName}`
}
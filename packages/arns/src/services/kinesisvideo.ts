export interface StreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  streamName: string
  creationTime: string
}
export type StreamArn = `arn:${string}:kinesisvideo:${string}:${string}:stream/${string}/${string}`
export function streamArn(parameters: StreamArnParameters): StreamArn {
  return `arn:${parameters.partition ?? ''}:kinesisvideo:${parameters.region}:${parameters.account}:stream/${parameters.streamName}/${parameters.creationTime}`
}

export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelName: string
  creationTime: string
}
export type ChannelArn = `arn:${string}:kinesisvideo:${string}:${string}:channel/${string}/${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:kinesisvideo:${parameters.region}:${parameters.account}:channel/${parameters.channelName}/${parameters.creationTime}`
}
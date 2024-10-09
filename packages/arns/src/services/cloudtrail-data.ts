export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelId: string
}
export type ChannelArn = `arn:${string}:cloudtrail:${string}:${string}:channel/${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:cloudtrail:${parameters.region}:${parameters.account}:channel/${parameters.channelId}`
}
export interface TrailArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trailName: string
}
export type TrailArn = `arn:${string}:cloudtrail:${string}:${string}:trail/${string}`
export function trailArn(parameters: TrailArnParameters): TrailArn {
  return `arn:${parameters.partition ?? ''}:cloudtrail:${parameters.region}:${parameters.account}:trail/${parameters.trailName}`
}

export interface EventdatastoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventDataStoreId: string
}
export type EventdatastoreArn = `arn:${string}:cloudtrail:${string}:${string}:eventdatastore/${string}`
export function eventdatastoreArn(parameters: EventdatastoreArnParameters): EventdatastoreArn {
  return `arn:${parameters.partition ?? ''}:cloudtrail:${parameters.region}:${parameters.account}:eventdatastore/${parameters.eventDataStoreId}`
}

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
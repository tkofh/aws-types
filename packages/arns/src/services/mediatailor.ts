export interface PlaybackConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type PlaybackConfigurationArn = `arn:${string}:mediatailor:${string}:${string}:playbackConfiguration/${string}`
export function playbackConfigurationArn(parameters: PlaybackConfigurationArnParameters): PlaybackConfigurationArn {
  return `arn:${parameters.partition ?? ''}:mediatailor:${parameters.region}:${parameters.account}:playbackConfiguration/${parameters.resourceId}`
}

export interface PrefetchScheduleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type PrefetchScheduleArn = `arn:${string}:mediatailor:${string}:${string}:prefetchSchedule/${string}`
export function prefetchScheduleArn(parameters: PrefetchScheduleArnParameters): PrefetchScheduleArn {
  return `arn:${parameters.partition ?? ''}:mediatailor:${parameters.region}:${parameters.account}:prefetchSchedule/${parameters.resourceId}`
}

export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelName: string
}
export type ChannelArn = `arn:${string}:mediatailor:${string}:${string}:channel/${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:mediatailor:${parameters.region}:${parameters.account}:channel/${parameters.channelName}`
}

export interface ProgramArnParameters {
  partition?: string | undefined
  region: string
  account: string
  channelName: string
  programName: string
}
export type ProgramArn = `arn:${string}:mediatailor:${string}:${string}:program/${string}/${string}`
export function programArn(parameters: ProgramArnParameters): ProgramArn {
  return `arn:${parameters.partition ?? ''}:mediatailor:${parameters.region}:${parameters.account}:program/${parameters.channelName}/${parameters.programName}`
}

export interface SourceLocationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sourceLocationName: string
}
export type SourceLocationArn = `arn:${string}:mediatailor:${string}:${string}:sourceLocation/${string}`
export function sourceLocationArn(parameters: SourceLocationArnParameters): SourceLocationArn {
  return `arn:${parameters.partition ?? ''}:mediatailor:${parameters.region}:${parameters.account}:sourceLocation/${parameters.sourceLocationName}`
}

export interface VodSourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sourceLocationName: string
  vodSourceName: string
}
export type VodSourceArn = `arn:${string}:mediatailor:${string}:${string}:vodSource/${string}/${string}`
export function vodSourceArn(parameters: VodSourceArnParameters): VodSourceArn {
  return `arn:${parameters.partition ?? ''}:mediatailor:${parameters.region}:${parameters.account}:vodSource/${parameters.sourceLocationName}/${parameters.vodSourceName}`
}

export interface LiveSourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sourceLocationName: string
  liveSourceName: string
}
export type LiveSourceArn = `arn:${string}:mediatailor:${string}:${string}:liveSource/${string}/${string}`
export function liveSourceArn(parameters: LiveSourceArnParameters): LiveSourceArn {
  return `arn:${parameters.partition ?? ''}:mediatailor:${parameters.region}:${parameters.account}:liveSource/${parameters.sourceLocationName}/${parameters.liveSourceName}`
}
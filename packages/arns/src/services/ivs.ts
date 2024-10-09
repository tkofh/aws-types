export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ChannelArn = `arn:${string}:ivs:${string}:${string}:channel/${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:channel/${parameters.resourceId}`
}

export interface StreamKeyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type StreamKeyArn = `arn:${string}:ivs:${string}:${string}:stream-key/${string}`
export function streamKeyArn(parameters: StreamKeyArnParameters): StreamKeyArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:stream-key/${parameters.resourceId}`
}

export interface PlaybackKeyPairArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type PlaybackKeyPairArn = `arn:${string}:ivs:${string}:${string}:playback-key/${string}`
export function playbackKeyPairArn(parameters: PlaybackKeyPairArnParameters): PlaybackKeyPairArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:playback-key/${parameters.resourceId}`
}

export interface PlaybackRestrictionPolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type PlaybackRestrictionPolicyArn = `arn:${string}:ivs:${string}:${string}:playback-restriction-policy/${string}`
export function playbackRestrictionPolicyArn(parameters: PlaybackRestrictionPolicyArnParameters): PlaybackRestrictionPolicyArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:playback-restriction-policy/${parameters.resourceId}`
}

export interface RecordingConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type RecordingConfigurationArn = `arn:${string}:ivs:${string}:${string}:recording-configuration/${string}`
export function recordingConfigurationArn(parameters: RecordingConfigurationArnParameters): RecordingConfigurationArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:recording-configuration/${parameters.resourceId}`
}

export interface StageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type StageArn = `arn:${string}:ivs:${string}:${string}:stage/${string}`
export function stageArn(parameters: StageArnParameters): StageArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:stage/${parameters.resourceId}`
}

export interface CompositionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type CompositionArn = `arn:${string}:ivs:${string}:${string}:composition/${string}`
export function compositionArn(parameters: CompositionArnParameters): CompositionArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:composition/${parameters.resourceId}`
}

export interface EncoderConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type EncoderConfigurationArn = `arn:${string}:ivs:${string}:${string}:encoder-configuration/${string}`
export function encoderConfigurationArn(parameters: EncoderConfigurationArnParameters): EncoderConfigurationArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:encoder-configuration/${parameters.resourceId}`
}

export interface StorageConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type StorageConfigurationArn = `arn:${string}:ivs:${string}:${string}:storage-configuration/${string}`
export function storageConfigurationArn(parameters: StorageConfigurationArnParameters): StorageConfigurationArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:storage-configuration/${parameters.resourceId}`
}

export interface PublicKeyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type PublicKeyArn = `arn:${string}:ivs:${string}:${string}:public-key/${string}`
export function publicKeyArn(parameters: PublicKeyArnParameters): PublicKeyArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:public-key/${parameters.resourceId}`
}

export interface IngestConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type IngestConfigurationArn = `arn:${string}:ivs:${string}:${string}:ingest-configuration/${string}`
export function ingestConfigurationArn(parameters: IngestConfigurationArnParameters): IngestConfigurationArn {
  return `arn:${parameters.partition ?? ''}:ivs:${parameters.region}:${parameters.account}:ingest-configuration/${parameters.resourceId}`
}
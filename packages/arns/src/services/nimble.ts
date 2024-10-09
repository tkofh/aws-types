export interface StudioArnParameters {
  partition?: string | undefined
  region: string
  account: string
  studioId: string
}
export type StudioArn = `arn:${string}:nimble:${string}:${string}:studio/${string}`
export function studioArn(parameters: StudioArnParameters): StudioArn {
  return `arn:${parameters.partition ?? ''}:nimble:${parameters.region}:${parameters.account}:studio/${parameters.studioId}`
}

export interface StreamingImageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  streamingImageId: string
}
export type StreamingImageArn = `arn:${string}:nimble:${string}:${string}:streaming-image/${string}`
export function streamingImageArn(parameters: StreamingImageArnParameters): StreamingImageArn {
  return `arn:${parameters.partition ?? ''}:nimble:${parameters.region}:${parameters.account}:streaming-image/${parameters.streamingImageId}`
}

export interface StudioComponentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  studioComponentId: string
}
export type StudioComponentArn = `arn:${string}:nimble:${string}:${string}:studio-component/${string}`
export function studioComponentArn(parameters: StudioComponentArnParameters): StudioComponentArn {
  return `arn:${parameters.partition ?? ''}:nimble:${parameters.region}:${parameters.account}:studio-component/${parameters.studioComponentId}`
}

export interface LaunchProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  launchProfileId: string
}
export type LaunchProfileArn = `arn:${string}:nimble:${string}:${string}:launch-profile/${string}`
export function launchProfileArn(parameters: LaunchProfileArnParameters): LaunchProfileArn {
  return `arn:${parameters.partition ?? ''}:nimble:${parameters.region}:${parameters.account}:launch-profile/${parameters.launchProfileId}`
}

export interface StreamingSessionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  streamingSessionId: string
}
export type StreamingSessionArn = `arn:${string}:nimble:${string}:${string}:streaming-session/${string}`
export function streamingSessionArn(parameters: StreamingSessionArnParameters): StreamingSessionArn {
  return `arn:${parameters.partition ?? ''}:nimble:${parameters.region}:${parameters.account}:streaming-session/${parameters.streamingSessionId}`
}

export interface StreamingSessionBackupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  streamingSessionBackupId: string
}
export type StreamingSessionBackupArn = `arn:${string}:nimble:${string}:${string}:streaming-session-backup/${string}`
export function streamingSessionBackupArn(parameters: StreamingSessionBackupArnParameters): StreamingSessionBackupArn {
  return `arn:${parameters.partition ?? ''}:nimble:${parameters.region}:${parameters.account}:streaming-session-backup/${parameters.streamingSessionBackupId}`
}

export interface EulaArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eulaId: string
}
export type EulaArn = `arn:${string}:nimble:${string}:${string}:eula/${string}`
export function eulaArn(parameters: EulaArnParameters): EulaArn {
  return `arn:${parameters.partition ?? ''}:nimble:${parameters.region}:${parameters.account}:eula/${parameters.eulaId}`
}

export interface EulaAcceptanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eulaAcceptanceId: string
}
export type EulaAcceptanceArn = `arn:${string}:nimble:${string}:${string}:eula-acceptance/${string}`
export function eulaAcceptanceArn(parameters: EulaAcceptanceArnParameters): EulaAcceptanceArn {
  return `arn:${parameters.partition ?? ''}:nimble:${parameters.region}:${parameters.account}:eula-acceptance/${parameters.eulaAcceptanceId}`
}
export interface MeetingArnParameters {
  partition?: string | undefined
  accountId: string
  meetingId: string
}
export type MeetingArn = `arn:${string}:chime::${string}:meeting/${string}`
export function meetingArn(parameters: MeetingArnParameters): MeetingArn {
  return `arn:${parameters.partition ?? ''}:chime::${parameters.accountId}:meeting/${parameters.meetingId}`
}

export interface AppInstanceArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  appInstanceId: string
}
export type AppInstanceArn = `arn:${string}:chime:${string}:${string}:app-instance/${string}`
export function appInstanceArn(parameters: AppInstanceArnParameters): AppInstanceArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:app-instance/${parameters.appInstanceId}`
}

export interface AppInstanceUserArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  appInstanceId: string
  appInstanceUserId: string
}
export type AppInstanceUserArn = `arn:${string}:chime:${string}:${string}:app-instance/${string}/user/${string}`
export function appInstanceUserArn(parameters: AppInstanceUserArnParameters): AppInstanceUserArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:app-instance/${parameters.appInstanceId}/user/${parameters.appInstanceUserId}`
}

export interface AppInstanceBotArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  appInstanceId: string
  appInstanceBotId: string
}
export type AppInstanceBotArn = `arn:${string}:chime:${string}:${string}:app-instance/${string}/bot/${string}`
export function appInstanceBotArn(parameters: AppInstanceBotArnParameters): AppInstanceBotArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:app-instance/${parameters.appInstanceId}/bot/${parameters.appInstanceBotId}`
}

export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  appInstanceId: string
  channelId: string
}
export type ChannelArn = `arn:${string}:chime:${string}:${string}:app-instance/${string}/channel/${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:app-instance/${parameters.appInstanceId}/channel/${parameters.channelId}`
}

export interface ChannelFlowArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  appInstanceId: string
  channelFlowId: string
}
export type ChannelFlowArn = `arn:${string}:chime:${string}:${string}:app-instance/${string}/channel-flow/${string}`
export function channelFlowArn(parameters: ChannelFlowArnParameters): ChannelFlowArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:app-instance/${parameters.appInstanceId}/channel-flow/${parameters.channelFlowId}`
}

export interface MediaPipelineArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  mediaPipelineId: string
}
export type MediaPipelineArn = `arn:${string}:chime:${string}:${string}:media-pipeline/${string}`
export function mediaPipelineArn(parameters: MediaPipelineArnParameters): MediaPipelineArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:media-pipeline/${parameters.mediaPipelineId}`
}

export interface MediaInsightsPipelineConfigurationArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  configurationName: string
}
export type MediaInsightsPipelineConfigurationArn = `arn:${string}:chime:${string}:${string}:media-insights-pipeline-configuration/${string}`
export function mediaInsightsPipelineConfigurationArn(parameters: MediaInsightsPipelineConfigurationArnParameters): MediaInsightsPipelineConfigurationArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:media-insights-pipeline-configuration/${parameters.configurationName}`
}

export interface MediaPipelineKinesisVideoStreamPoolArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  poolName: string
}
export type MediaPipelineKinesisVideoStreamPoolArn = `arn:${string}:chime:${string}:${string}:media-pipeline-kinesis-video-stream-pool/${string}`
export function mediaPipelineKinesisVideoStreamPoolArn(parameters: MediaPipelineKinesisVideoStreamPoolArnParameters): MediaPipelineKinesisVideoStreamPoolArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:media-pipeline-kinesis-video-stream-pool/${parameters.poolName}`
}

export interface VoiceProfileDomainArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  voiceProfileDomainId: string
}
export type VoiceProfileDomainArn = `arn:${string}:chime:${string}:${string}:voice-profile-domain/${string}`
export function voiceProfileDomainArn(parameters: VoiceProfileDomainArnParameters): VoiceProfileDomainArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:voice-profile-domain/${parameters.voiceProfileDomainId}`
}

export interface VoiceProfileArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  voiceProfileId: string
}
export type VoiceProfileArn = `arn:${string}:chime:${string}:${string}:voice-profile/${string}`
export function voiceProfileArn(parameters: VoiceProfileArnParameters): VoiceProfileArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:voice-profile/${parameters.voiceProfileId}`
}

export interface VoiceConnectorArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  voiceConnectorId: string
}
export type VoiceConnectorArn = `arn:${string}:chime:${string}:${string}:vc/${string}`
export function voiceConnectorArn(parameters: VoiceConnectorArnParameters): VoiceConnectorArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:vc/${parameters.voiceConnectorId}`
}

export interface SipMediaApplicationArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  sipMediaApplicationId: string
}
export type SipMediaApplicationArn = `arn:${string}:chime:${string}:${string}:sma/${string}`
export function sipMediaApplicationArn(parameters: SipMediaApplicationArnParameters): SipMediaApplicationArn {
  return `arn:${parameters.partition ?? ''}:chime:${parameters.region}:${parameters.accountId}:sma/${parameters.sipMediaApplicationId}`
}
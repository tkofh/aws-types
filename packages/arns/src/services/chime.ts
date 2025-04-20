import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface MeetingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly accountId: string
  readonly meetingId: string
}
class MeetingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'meeting',
  `arn:${string}:chime::${string}:meeting/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'meeting' as const
  readonly partition: Partition
  readonly accountId: string
  readonly meetingId: string
  constructor(parameters: MeetingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.accountId = parameters.accountId
    this.meetingId = parameters.meetingId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime::${this.accountId}:meeting/${this.meetingId}` as const
  }
}
export type { MeetingArn }
export function meetingArn<Partition extends ArnPartition = 'aws'>(
  parameters: MeetingArnParameters<Partition>,
) {
  return new MeetingArn<Partition>(parameters)
}

export interface AppInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
}
class AppInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-instance',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
  constructor(parameters: AppInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.appInstanceId = parameters.appInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:app-instance/${this.appInstanceId}` as const
  }
}
export type { AppInstanceArn }
export function appInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppInstanceArnParameters<Partition>,
) {
  return new AppInstanceArn<Partition>(parameters)
}

export interface AppInstanceUserArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
  readonly appInstanceUserId: string
}
class AppInstanceUserArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-instance-user',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}/user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-instance-user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
  readonly appInstanceUserId: string
  constructor(parameters: AppInstanceUserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.appInstanceId = parameters.appInstanceId
    this.appInstanceUserId = parameters.appInstanceUserId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:app-instance/${this.appInstanceId}/user/${this.appInstanceUserId}` as const
  }
}
export type { AppInstanceUserArn }
export function appInstanceUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppInstanceUserArnParameters<Partition>,
) {
  return new AppInstanceUserArn<Partition>(parameters)
}

export interface AppInstanceBotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
  readonly appInstanceBotId: string
}
class AppInstanceBotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-instance-bot',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}/bot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-instance-bot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
  readonly appInstanceBotId: string
  constructor(parameters: AppInstanceBotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.appInstanceId = parameters.appInstanceId
    this.appInstanceBotId = parameters.appInstanceBotId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:app-instance/${this.appInstanceId}/bot/${this.appInstanceBotId}` as const
  }
}
export type { AppInstanceBotArn }
export function appInstanceBotArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppInstanceBotArnParameters<Partition>,
) {
  return new AppInstanceBotArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
  readonly channelId: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}/channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
  readonly channelId: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.appInstanceId = parameters.appInstanceId
    this.channelId = parameters.channelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:app-instance/${this.appInstanceId}/channel/${this.channelId}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface ChannelFlowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
  readonly channelFlowId: string
}
class ChannelFlowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'channel-flow',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}/channel-flow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel-flow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly appInstanceId: string
  readonly channelFlowId: string
  constructor(parameters: ChannelFlowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.appInstanceId = parameters.appInstanceId
    this.channelFlowId = parameters.channelFlowId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:app-instance/${this.appInstanceId}/channel-flow/${this.channelFlowId}` as const
  }
}
export type { ChannelFlowArn }
export function channelFlowArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelFlowArnParameters<Partition>,
) {
  return new ChannelFlowArn<Partition>(parameters)
}

export interface MediaPipelineArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly mediaPipelineId: string
}
class MediaPipelineArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'media-pipeline',
  `arn:${string}:chime:${string}:${string}:media-pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'media-pipeline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly mediaPipelineId: string
  constructor(parameters: MediaPipelineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.mediaPipelineId = parameters.mediaPipelineId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:media-pipeline/${this.mediaPipelineId}` as const
  }
}
export type { MediaPipelineArn }
export function mediaPipelineArn<Partition extends ArnPartition = 'aws'>(
  parameters: MediaPipelineArnParameters<Partition>,
) {
  return new MediaPipelineArn<Partition>(parameters)
}

export interface MediaInsightsPipelineConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly configurationName: string
}
class MediaInsightsPipelineConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'media-insights-pipeline-configuration',
  `arn:${string}:chime:${string}:${string}:media-insights-pipeline-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'media-insights-pipeline-configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly configurationName: string
  constructor(
    parameters: MediaInsightsPipelineConfigurationArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.configurationName = parameters.configurationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:media-insights-pipeline-configuration/${this.configurationName}` as const
  }
}
export type { MediaInsightsPipelineConfigurationArn }
export function mediaInsightsPipelineConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MediaInsightsPipelineConfigurationArnParameters<Partition>) {
  return new MediaInsightsPipelineConfigurationArn<Partition>(parameters)
}

export interface MediaPipelineKinesisVideoStreamPoolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly poolName: string
}
class MediaPipelineKinesisVideoStreamPoolArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'media-pipeline-kinesis-video-stream-pool',
  `arn:${string}:chime:${string}:${string}:media-pipeline-kinesis-video-stream-pool/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'media-pipeline-kinesis-video-stream-pool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly poolName: string
  constructor(
    parameters: MediaPipelineKinesisVideoStreamPoolArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.poolName = parameters.poolName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:media-pipeline-kinesis-video-stream-pool/${this.poolName}` as const
  }
}
export type { MediaPipelineKinesisVideoStreamPoolArn }
export function mediaPipelineKinesisVideoStreamPoolArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MediaPipelineKinesisVideoStreamPoolArnParameters<Partition>) {
  return new MediaPipelineKinesisVideoStreamPoolArn<Partition>(parameters)
}

export interface VoiceProfileDomainArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly voiceProfileDomainId: string
}
class VoiceProfileDomainArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'voice-profile-domain',
  `arn:${string}:chime:${string}:${string}:voice-profile-domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'voice-profile-domain' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly voiceProfileDomainId: string
  constructor(parameters: VoiceProfileDomainArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.voiceProfileDomainId = parameters.voiceProfileDomainId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:voice-profile-domain/${this.voiceProfileDomainId}` as const
  }
}
export type { VoiceProfileDomainArn }
export function voiceProfileDomainArn<Partition extends ArnPartition = 'aws'>(
  parameters: VoiceProfileDomainArnParameters<Partition>,
) {
  return new VoiceProfileDomainArn<Partition>(parameters)
}

export interface VoiceProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly voiceProfileId: string
}
class VoiceProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'voice-profile',
  `arn:${string}:chime:${string}:${string}:voice-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'voice-profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly voiceProfileId: string
  constructor(parameters: VoiceProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.voiceProfileId = parameters.voiceProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:voice-profile/${this.voiceProfileId}` as const
  }
}
export type { VoiceProfileArn }
export function voiceProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: VoiceProfileArnParameters<Partition>,
) {
  return new VoiceProfileArn<Partition>(parameters)
}

export interface VoiceConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly voiceConnectorId: string
}
class VoiceConnectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'voice-connector',
  `arn:${string}:chime:${string}:${string}:vc/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'voice-connector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly voiceConnectorId: string
  constructor(parameters: VoiceConnectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.voiceConnectorId = parameters.voiceConnectorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:vc/${this.voiceConnectorId}` as const
  }
}
export type { VoiceConnectorArn }
export function voiceConnectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: VoiceConnectorArnParameters<Partition>,
) {
  return new VoiceConnectorArn<Partition>(parameters)
}

export interface SipMediaApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly sipMediaApplicationId: string
}
class SipMediaApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sip-media-application',
  `arn:${string}:chime:${string}:${string}:sma/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sip-media-application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly sipMediaApplicationId: string
  constructor(parameters: SipMediaApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.sipMediaApplicationId = parameters.sipMediaApplicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.accountId}:sma/${this.sipMediaApplicationId}` as const
  }
}
export type { SipMediaApplicationArn }
export function sipMediaApplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: SipMediaApplicationArnParameters<Partition>,
) {
  return new SipMediaApplicationArn<Partition>(parameters)
}

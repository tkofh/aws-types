import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface MeetingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idAccount: string
  readonly idMeeting: string
}
class MeetingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'meeting',
  `arn:${string}:chime::${string}:meeting/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'meeting' as const
  readonly partition: string
  readonly idAccount: string
  readonly idMeeting: string
  constructor(parameters: MeetingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idAccount = parameters.idAccount
    this.idMeeting = parameters.idMeeting
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime::${this.idAccount}:meeting/${this.idMeeting}` as const
  }
}
export type { MeetingArn }
export function meetingArn<Partition extends ArnPartition = 'aws'>(
  parameters: MeetingArnParameters<Partition>,
) {
  return new MeetingArn<Partition>(parameters)
}

export interface InstanceAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
}
class InstanceAppArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-instance',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-instance' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
  constructor(parameters: InstanceAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idInstanceApp = parameters.idInstanceApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:app-instance/${this.idInstanceApp}` as const
  }
}
export type { InstanceAppArn }
export function instanceAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceAppArnParameters<Partition>,
) {
  return new InstanceAppArn<Partition>(parameters)
}

export interface UserInstanceAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
  readonly idUserInstanceApp: string
}
class UserInstanceAppArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-instance-user',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}/user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-instance-user' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
  readonly idUserInstanceApp: string
  constructor(parameters: UserInstanceAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idInstanceApp = parameters.idInstanceApp
    this.idUserInstanceApp = parameters.idUserInstanceApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:app-instance/${this.idInstanceApp}/user/${this.idUserInstanceApp}` as const
  }
}
export type { UserInstanceAppArn }
export function userInstanceAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserInstanceAppArnParameters<Partition>,
) {
  return new UserInstanceAppArn<Partition>(parameters)
}

export interface BotInstanceAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
  readonly idBotInstanceApp: string
}
class BotInstanceAppArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-instance-bot',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}/bot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-instance-bot' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
  readonly idBotInstanceApp: string
  constructor(parameters: BotInstanceAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idInstanceApp = parameters.idInstanceApp
    this.idBotInstanceApp = parameters.idBotInstanceApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:app-instance/${this.idInstanceApp}/bot/${this.idBotInstanceApp}` as const
  }
}
export type { BotInstanceAppArn }
export function botInstanceAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: BotInstanceAppArnParameters<Partition>,
) {
  return new BotInstanceAppArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
  readonly idChannel: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}/channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
  readonly idChannel: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idInstanceApp = parameters.idInstanceApp
    this.idChannel = parameters.idChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:app-instance/${this.idInstanceApp}/channel/${this.idChannel}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface FlowChannelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
  readonly idFlowChannel: string
}
class FlowChannelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'channel-flow',
  `arn:${string}:chime:${string}:${string}:app-instance/${string}/channel-flow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel-flow' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idInstanceApp: string
  readonly idFlowChannel: string
  constructor(parameters: FlowChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idInstanceApp = parameters.idInstanceApp
    this.idFlowChannel = parameters.idFlowChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:app-instance/${this.idInstanceApp}/channel-flow/${this.idFlowChannel}` as const
  }
}
export type { FlowChannelArn }
export function flowChannelArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlowChannelArnParameters<Partition>,
) {
  return new FlowChannelArn<Partition>(parameters)
}

export interface PipelineMediaArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idPipelineMedia: string
}
class PipelineMediaArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'media-pipeline',
  `arn:${string}:chime:${string}:${string}:media-pipeline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'media-pipeline' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idPipelineMedia: string
  constructor(parameters: PipelineMediaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idPipelineMedia = parameters.idPipelineMedia
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:media-pipeline/${this.idPipelineMedia}` as const
  }
}
export type { PipelineMediaArn }
export function pipelineMediaArn<Partition extends ArnPartition = 'aws'>(
  parameters: PipelineMediaArnParameters<Partition>,
) {
  return new PipelineMediaArn<Partition>(parameters)
}

export interface ConfigurationPipelineInsightsMediaArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly nameConfiguration: string
}
class ConfigurationPipelineInsightsMediaArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'media-insights-pipeline-configuration',
  `arn:${string}:chime:${string}:${string}:media-insights-pipeline-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'media-insights-pipeline-configuration' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly nameConfiguration: string
  constructor(
    parameters: ConfigurationPipelineInsightsMediaArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.nameConfiguration = parameters.nameConfiguration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:media-insights-pipeline-configuration/${this.nameConfiguration}` as const
  }
}
export type { ConfigurationPipelineInsightsMediaArn }
export function configurationPipelineInsightsMediaArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationPipelineInsightsMediaArnParameters<Partition>) {
  return new ConfigurationPipelineInsightsMediaArn<Partition>(parameters)
}

export interface PoolStreamVideoKinesisPipelineMediaArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly namePool: string
}
class PoolStreamVideoKinesisPipelineMediaArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'media-pipeline-kinesis-video-stream-pool',
  `arn:${string}:chime:${string}:${string}:media-pipeline-kinesis-video-stream-pool/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'media-pipeline-kinesis-video-stream-pool' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly namePool: string
  constructor(
    parameters: PoolStreamVideoKinesisPipelineMediaArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.namePool = parameters.namePool
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:media-pipeline-kinesis-video-stream-pool/${this.namePool}` as const
  }
}
export type { PoolStreamVideoKinesisPipelineMediaArn }
export function poolStreamVideoKinesisPipelineMediaArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PoolStreamVideoKinesisPipelineMediaArnParameters<Partition>) {
  return new PoolStreamVideoKinesisPipelineMediaArn<Partition>(parameters)
}

export interface DomainProfileVoiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idDomainProfileVoice: string
}
class DomainProfileVoiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'voice-profile-domain',
  `arn:${string}:chime:${string}:${string}:voice-profile-domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'voice-profile-domain' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idDomainProfileVoice: string
  constructor(parameters: DomainProfileVoiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idDomainProfileVoice = parameters.idDomainProfileVoice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:voice-profile-domain/${this.idDomainProfileVoice}` as const
  }
}
export type { DomainProfileVoiceArn }
export function domainProfileVoiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainProfileVoiceArnParameters<Partition>,
) {
  return new DomainProfileVoiceArn<Partition>(parameters)
}

export interface ProfileVoiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idProfileVoice: string
}
class ProfileVoiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'voice-profile',
  `arn:${string}:chime:${string}:${string}:voice-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'voice-profile' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idProfileVoice: string
  constructor(parameters: ProfileVoiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idProfileVoice = parameters.idProfileVoice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:voice-profile/${this.idProfileVoice}` as const
  }
}
export type { ProfileVoiceArn }
export function profileVoiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileVoiceArnParameters<Partition>,
) {
  return new ProfileVoiceArn<Partition>(parameters)
}

export interface ConnectorVoiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idConnectorVoice: string
}
class ConnectorVoiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'voice-connector',
  `arn:${string}:chime:${string}:${string}:vc/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'voice-connector' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idConnectorVoice: string
  constructor(parameters: ConnectorVoiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idConnectorVoice = parameters.idConnectorVoice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:vc/${this.idConnectorVoice}` as const
  }
}
export type { ConnectorVoiceArn }
export function connectorVoiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorVoiceArnParameters<Partition>,
) {
  return new ConnectorVoiceArn<Partition>(parameters)
}

export interface ApplicationMediaSipArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idApplicationMediaSip: string
}
class ApplicationMediaSipArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sip-media-application',
  `arn:${string}:chime:${string}:${string}:sma/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sip-media-application' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idApplicationMediaSip: string
  constructor(parameters: ApplicationMediaSipArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idApplicationMediaSip = parameters.idApplicationMediaSip
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:chime:${this.region}:${this.idAccount}:sma/${this.idApplicationMediaSip}` as const
  }
}
export type { ApplicationMediaSipArn }
export function applicationMediaSipArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationMediaSipArnParameters<Partition>,
) {
  return new ApplicationMediaSipArn<Partition>(parameters)
}

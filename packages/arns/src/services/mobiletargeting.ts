import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AppArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class AppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'app',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: AppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}` as const
  }
}
export type { AppArn }
export function appArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppArnParameters<Partition>,
) {
  return new AppArn<Partition>(parameters)
}

export interface AppsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class AppsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'apps',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/*`
> {
  readonly [ArnResourceTypeBrand] = 'apps' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: AppsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/*` as const
  }
}
export type { AppsArn }
export function appsArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppsArnParameters<Partition>,
) {
  return new AppsArn<Partition>(parameters)
}

export interface CampaignArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idCampaign: string
}
class CampaignArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'campaign',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/campaigns/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'campaign' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idCampaign: string
  constructor(parameters: CampaignArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idCampaign = parameters.idCampaign
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/campaigns/${this.idCampaign}` as const
  }
}
export type { CampaignArn }
export function campaignArn<Partition extends ArnPartition = 'aws'>(
  parameters: CampaignArnParameters<Partition>,
) {
  return new CampaignArn<Partition>(parameters)
}

export interface JourneyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJourney: string
}
class JourneyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'journey',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'journey' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJourney: string
  constructor(parameters: JourneyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idJourney = parameters.idJourney
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/journeys/${this.idJourney}` as const
  }
}
export type { JourneyArn }
export function journeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: JourneyArnParameters<Partition>,
) {
  return new JourneyArn<Partition>(parameters)
}

export interface JourneysArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class JourneysArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'journeys',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys`
> {
  readonly [ArnResourceTypeBrand] = 'journeys' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: JourneysArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/journeys` as const
  }
}
export type { JourneysArn }
export function journeysArn<Partition extends ArnPartition = 'aws'>(
  parameters: JourneysArnParameters<Partition>,
) {
  return new JourneysArn<Partition>(parameters)
}

export interface SegmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idSegment: string
}
class SegmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'segment',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/segments/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'segment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idSegment: string
  constructor(parameters: SegmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idSegment = parameters.idSegment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/segments/${this.idSegment}` as const
  }
}
export type { SegmentArn }
export function segmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: SegmentArnParameters<Partition>,
) {
  return new SegmentArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly typeTemplate: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'template',
  `arn:${string}:mobiletargeting:${string}:${string}:templates/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  readonly typeTemplate: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplate = parameters.nameTemplate
    this.typeTemplate = parameters.typeTemplate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:templates/${this.nameTemplate}/${this.typeTemplate}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateArnParameters<Partition>,
) {
  return new TemplateArn<Partition>(parameters)
}

export interface TemplatesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class TemplatesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'templates',
  `arn:${string}:mobiletargeting:${string}:${string}:templates`
> {
  readonly [ArnResourceTypeBrand] = 'templates' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: TemplatesArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:templates` as const
  }
}
export type { TemplatesArn }
export function templatesArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplatesArnParameters<Partition>,
) {
  return new TemplatesArn<Partition>(parameters)
}

export interface RecommenderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRecommender: string
}
class RecommenderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recommender',
  `arn:${string}:mobiletargeting:${string}:${string}:recommenders/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recommender' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRecommender: string
  constructor(parameters: RecommenderArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRecommender = parameters.idRecommender
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:recommenders/${this.idRecommender}` as const
  }
}
export type { RecommenderArn }
export function recommenderArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecommenderArnParameters<Partition>,
) {
  return new RecommenderArn<Partition>(parameters)
}

export interface RecommendersArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class RecommendersArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recommenders',
  `arn:${string}:mobiletargeting:${string}:${string}:recommenders/*`
> {
  readonly [ArnResourceTypeBrand] = 'recommenders' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: RecommendersArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:recommenders/*` as const
  }
}
export type { RecommendersArn }
export function recommendersArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecommendersArnParameters<Partition>,
) {
  return new RecommendersArn<Partition>(parameters)
}

export interface ValidateNumberPhoneArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class ValidateNumberPhoneArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'phone-number-validate',
  `arn:${string}:mobiletargeting:${string}:${string}:phone/number/validate`
> {
  readonly [ArnResourceTypeBrand] = 'phone-number-validate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: ValidateNumberPhoneArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:phone/number/validate` as const
  }
}
export type { ValidateNumberPhoneArn }
export function validateNumberPhoneArn<Partition extends ArnPartition = 'aws'>(
  parameters: ValidateNumberPhoneArnParameters<Partition>,
) {
  return new ValidateNumberPhoneArn<Partition>(parameters)
}

export interface ChannelsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class ChannelsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channels',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/channels`
> {
  readonly [ArnResourceTypeBrand] = 'channels' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: ChannelsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/channels` as const
  }
}
export type { ChannelsArn }
export function channelsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelsArnParameters<Partition>,
) {
  return new ChannelsArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly typeChannel: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/channels/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly typeChannel: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.typeChannel = parameters.typeChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/channels/${this.typeChannel}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface StreamEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class StreamEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'event-stream',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/eventstream`
> {
  readonly [ArnResourceTypeBrand] = 'event-stream' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: StreamEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/eventstream` as const
  }
}
export type { StreamEventArn }
export function streamEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamEventArnParameters<Partition>,
) {
  return new StreamEventArn<Partition>(parameters)
}

export interface EventsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class EventsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'events',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/events`
> {
  readonly [ArnResourceTypeBrand] = 'events' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: EventsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/events` as const
  }
}
export type { EventsArn }
export function eventsArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventsArnParameters<Partition>,
) {
  return new EventsArn<Partition>(parameters)
}

export interface MessagesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class MessagesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'messages',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/messages`
> {
  readonly [ArnResourceTypeBrand] = 'messages' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: MessagesArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/messages` as const
  }
}
export type { MessagesArn }
export function messagesArn<Partition extends ArnPartition = 'aws'>(
  parameters: MessagesArnParameters<Partition>,
) {
  return new MessagesArn<Partition>(parameters)
}

export interface OtpVerifyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class OtpVerifyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'verify-otp',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/verify-otp`
> {
  readonly [ArnResourceTypeBrand] = 'verify-otp' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: OtpVerifyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/verify-otp` as const
  }
}
export type { OtpVerifyArn }
export function otpVerifyArn<Partition extends ArnPartition = 'aws'>(
  parameters: OtpVerifyArnParameters<Partition>,
) {
  return new OtpVerifyArn<Partition>(parameters)
}

export interface OtpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class OtpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'otp',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/otp`
> {
  readonly [ArnResourceTypeBrand] = 'otp' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: OtpArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/otp` as const
  }
}
export type { OtpArn }
export function otpArn<Partition extends ArnPartition = 'aws'>(
  parameters: OtpArnParameters<Partition>,
) {
  return new OtpArn<Partition>(parameters)
}

export interface AttributeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly typeAttribute: string
}
class AttributeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'attribute',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/attributes/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attribute' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly typeAttribute: string
  constructor(parameters: AttributeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.typeAttribute = parameters.typeAttribute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/attributes/${this.typeAttribute}` as const
  }
}
export type { AttributeArn }
export function attributeArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttributeArnParameters<Partition>,
) {
  return new AttributeArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/users/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idUser: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idUser = parameters.idUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/users/${this.idUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idEndpoint: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'endpoint',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/endpoints/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idEndpoint: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idEndpoint = parameters.idEndpoint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/endpoints/${this.idEndpoint}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointArnParameters<Partition>,
) {
  return new EndpointArn<Partition>(parameters)
}

export interface JobImportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJob: string
}
class JobImportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'import-job',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/jobs/import/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJob: string
  constructor(parameters: JobImportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/jobs/import/${this.idJob}` as const
  }
}
export type { JobImportArn }
export function jobImportArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobImportArnParameters<Partition>,
) {
  return new JobImportArn<Partition>(parameters)
}

export interface JobExportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJob: string
}
class JobExportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'export-job',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/jobs/export/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'export-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJob: string
  constructor(parameters: JobExportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/jobs/export/${this.idJob}` as const
  }
}
export type { JobExportArn }
export function jobExportArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobExportArnParameters<Partition>,
) {
  return new JobExportArn<Partition>(parameters)
}

export interface MetricsApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameKpi: string
}
class MetricsApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application-metrics',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/kpis/daterange/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application-metrics' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly nameKpi: string
  constructor(parameters: MetricsApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.nameKpi = parameters.nameKpi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/kpis/daterange/${this.nameKpi}` as const
  }
}
export type { MetricsApplicationArn }
export function metricsApplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: MetricsApplicationArnParameters<Partition>,
) {
  return new MetricsApplicationArn<Partition>(parameters)
}

export interface MetricsCampaignArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idCampaign: string
  readonly nameKpi: string
}
class MetricsCampaignArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'campaign-metrics',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/campaigns/${string}/kpis/daterange/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'campaign-metrics' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idCampaign: string
  readonly nameKpi: string
  constructor(parameters: MetricsCampaignArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idCampaign = parameters.idCampaign
    this.nameKpi = parameters.nameKpi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/campaigns/${this.idCampaign}/kpis/daterange/${this.nameKpi}` as const
  }
}
export type { MetricsCampaignArn }
export function metricsCampaignArn<Partition extends ArnPartition = 'aws'>(
  parameters: MetricsCampaignArnParameters<Partition>,
) {
  return new MetricsCampaignArn<Partition>(parameters)
}

export interface MetricsJourneyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJourney: string
  readonly nameKpi: string
}
class MetricsJourneyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'journey-metrics',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}/kpis/daterange/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'journey-metrics' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJourney: string
  readonly nameKpi: string
  constructor(parameters: MetricsJourneyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idJourney = parameters.idJourney
    this.nameKpi = parameters.nameKpi
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/journeys/${this.idJourney}/kpis/daterange/${this.nameKpi}` as const
  }
}
export type { MetricsJourneyArn }
export function metricsJourneyArn<Partition extends ArnPartition = 'aws'>(
  parameters: MetricsJourneyArnParameters<Partition>,
) {
  return new MetricsJourneyArn<Partition>(parameters)
}

export interface MetricsExecutionJourneyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJourney: string
}
class MetricsExecutionJourneyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'journey-execution-metrics',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}/execution-metrics`
> {
  readonly [ArnResourceTypeBrand] = 'journey-execution-metrics' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJourney: string
  constructor(parameters: MetricsExecutionJourneyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idJourney = parameters.idJourney
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/journeys/${this.idJourney}/execution-metrics` as const
  }
}
export type { MetricsExecutionJourneyArn }
export function metricsExecutionJourneyArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MetricsExecutionJourneyArnParameters<Partition>) {
  return new MetricsExecutionJourneyArn<Partition>(parameters)
}

export interface MetricsActivityExecutionJourneyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJourney: string
  readonly idActivityJourney: string
}
class MetricsActivityExecutionJourneyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'journey-execution-activity-metrics',
  `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}/activities/${string}/execution-metrics`
> {
  readonly [ArnResourceTypeBrand] =
    'journey-execution-activity-metrics' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  readonly idJourney: string
  readonly idActivityJourney: string
  constructor(
    parameters: MetricsActivityExecutionJourneyArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
    this.idJourney = parameters.idJourney
    this.idActivityJourney = parameters.idActivityJourney
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.idApp}/journeys/${this.idJourney}/activities/${this.idActivityJourney}/execution-metrics` as const
  }
}
export type { MetricsActivityExecutionJourneyArn }
export function metricsActivityExecutionJourneyArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MetricsActivityExecutionJourneyArnParameters<Partition>) {
  return new MetricsActivityExecutionJourneyArn<Partition>(parameters)
}

export interface ReportsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class ReportsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'reports',
  `arn:${string}:mobiletargeting:${string}:${string}:reports`
> {
  readonly [ArnResourceTypeBrand] = 'reports' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: ReportsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:reports` as const
  }
}
export type { ReportsArn }
export function reportsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReportsArnParameters<Partition>,
) {
  return new ReportsArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AppArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class AppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'app', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}`> {
  readonly [ArnResourceTypeBrand] = 'app' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: AppArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}` as const
  }
}
export type { AppArn }
export function appArn<Partition extends ArnPartition = 'aws'>(parameters: AppArnParameters<Partition>) {
  return new AppArn<Partition>(parameters)
}

export interface AppsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class AppsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'apps', `arn:${string}:mobiletargeting:${string}:${string}:apps/*`> {
  readonly [ArnResourceTypeBrand] = 'apps' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: AppsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/*` as const
  }
}
export type { AppsArn }
export function appsArn<Partition extends ArnPartition = 'aws'>(parameters: AppsArnParameters<Partition>) {
  return new AppsArn<Partition>(parameters)
}

export interface CampaignArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly campaignId: string
}
class CampaignArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'campaign', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/campaigns/${string}`> {
  readonly [ArnResourceTypeBrand] = 'campaign' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly campaignId: string
  constructor(parameters: CampaignArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.campaignId = parameters.campaignId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/campaigns/${this.campaignId}` as const
  }
}
export type { CampaignArn }
export function campaignArn<Partition extends ArnPartition = 'aws'>(parameters: CampaignArnParameters<Partition>) {
  return new CampaignArn<Partition>(parameters)
}

export interface JourneyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly journeyId: string
}
class JourneyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'journey', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}`> {
  readonly [ArnResourceTypeBrand] = 'journey' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly journeyId: string
  constructor(parameters: JourneyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.journeyId = parameters.journeyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/journeys/${this.journeyId}` as const
  }
}
export type { JourneyArn }
export function journeyArn<Partition extends ArnPartition = 'aws'>(parameters: JourneyArnParameters<Partition>) {
  return new JourneyArn<Partition>(parameters)
}

export interface JourneysArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class JourneysArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'journeys', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys`> {
  readonly [ArnResourceTypeBrand] = 'journeys' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: JourneysArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/journeys` as const
  }
}
export type { JourneysArn }
export function journeysArn<Partition extends ArnPartition = 'aws'>(parameters: JourneysArnParameters<Partition>) {
  return new JourneysArn<Partition>(parameters)
}

export interface SegmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly segmentId: string
}
class SegmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'segment', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/segments/${string}`> {
  readonly [ArnResourceTypeBrand] = 'segment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly segmentId: string
  constructor(parameters: SegmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.segmentId = parameters.segmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/segments/${this.segmentId}` as const
  }
}
export type { SegmentArn }
export function segmentArn<Partition extends ArnPartition = 'aws'>(parameters: SegmentArnParameters<Partition>) {
  return new SegmentArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly templateType: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'template', `arn:${string}:mobiletargeting:${string}:${string}:templates/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  readonly templateType: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateName = parameters.templateName
    this.templateType = parameters.templateType
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:templates/${this.templateName}/${this.templateType}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(parameters: TemplateArnParameters<Partition>) {
  return new TemplateArn<Partition>(parameters)
}

export interface TemplatesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class TemplatesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'templates', `arn:${string}:mobiletargeting:${string}:${string}:templates`> {
  readonly [ArnResourceTypeBrand] = 'templates' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: TemplatesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:templates` as const
  }
}
export type { TemplatesArn }
export function templatesArn<Partition extends ArnPartition = 'aws'>(parameters: TemplatesArnParameters<Partition>) {
  return new TemplatesArn<Partition>(parameters)
}

export interface RecommenderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly recommenderId: string
}
class RecommenderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'recommender', `arn:${string}:mobiletargeting:${string}:${string}:recommenders/${string}`> {
  readonly [ArnResourceTypeBrand] = 'recommender' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly recommenderId: string
  constructor(parameters: RecommenderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.recommenderId = parameters.recommenderId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:recommenders/${this.recommenderId}` as const
  }
}
export type { RecommenderArn }
export function recommenderArn<Partition extends ArnPartition = 'aws'>(parameters: RecommenderArnParameters<Partition>) {
  return new RecommenderArn<Partition>(parameters)
}

export interface RecommendersArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class RecommendersArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'recommenders', `arn:${string}:mobiletargeting:${string}:${string}:recommenders/*`> {
  readonly [ArnResourceTypeBrand] = 'recommenders' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: RecommendersArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:recommenders/*` as const
  }
}
export type { RecommendersArn }
export function recommendersArn<Partition extends ArnPartition = 'aws'>(parameters: RecommendersArnParameters<Partition>) {
  return new RecommendersArn<Partition>(parameters)
}

export interface PhoneNumberValidateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class PhoneNumberValidateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'phone-number-validate', `arn:${string}:mobiletargeting:${string}:${string}:phone/number/validate`> {
  readonly [ArnResourceTypeBrand] = 'phone-number-validate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: PhoneNumberValidateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:phone/number/validate` as const
  }
}
export type { PhoneNumberValidateArn }
export function phoneNumberValidateArn<Partition extends ArnPartition = 'aws'>(parameters: PhoneNumberValidateArnParameters<Partition>) {
  return new PhoneNumberValidateArn<Partition>(parameters)
}

export interface ChannelsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class ChannelsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'channels', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/channels`> {
  readonly [ArnResourceTypeBrand] = 'channels' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: ChannelsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/channels` as const
  }
}
export type { ChannelsArn }
export function channelsArn<Partition extends ArnPartition = 'aws'>(parameters: ChannelsArnParameters<Partition>) {
  return new ChannelsArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly channelType: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'channel', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/channels/${string}`> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly channelType: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.channelType = parameters.channelType
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/channels/${this.channelType}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(parameters: ChannelArnParameters<Partition>) {
  return new ChannelArn<Partition>(parameters)
}

export interface EventStreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class EventStreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'event-stream', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/eventstream`> {
  readonly [ArnResourceTypeBrand] = 'event-stream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: EventStreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/eventstream` as const
  }
}
export type { EventStreamArn }
export function eventStreamArn<Partition extends ArnPartition = 'aws'>(parameters: EventStreamArnParameters<Partition>) {
  return new EventStreamArn<Partition>(parameters)
}

export interface EventsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class EventsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'events', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/events`> {
  readonly [ArnResourceTypeBrand] = 'events' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: EventsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/events` as const
  }
}
export type { EventsArn }
export function eventsArn<Partition extends ArnPartition = 'aws'>(parameters: EventsArnParameters<Partition>) {
  return new EventsArn<Partition>(parameters)
}

export interface MessagesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class MessagesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'messages', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/messages`> {
  readonly [ArnResourceTypeBrand] = 'messages' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: MessagesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/messages` as const
  }
}
export type { MessagesArn }
export function messagesArn<Partition extends ArnPartition = 'aws'>(parameters: MessagesArnParameters<Partition>) {
  return new MessagesArn<Partition>(parameters)
}

export interface VerifyOtpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class VerifyOtpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'verify-otp', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/verify-otp`> {
  readonly [ArnResourceTypeBrand] = 'verify-otp' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: VerifyOtpArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/verify-otp` as const
  }
}
export type { VerifyOtpArn }
export function verifyOtpArn<Partition extends ArnPartition = 'aws'>(parameters: VerifyOtpArnParameters<Partition>) {
  return new VerifyOtpArn<Partition>(parameters)
}

export interface OtpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class OtpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'otp', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/otp`> {
  readonly [ArnResourceTypeBrand] = 'otp' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: OtpArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/otp` as const
  }
}
export type { OtpArn }
export function otpArn<Partition extends ArnPartition = 'aws'>(parameters: OtpArnParameters<Partition>) {
  return new OtpArn<Partition>(parameters)
}

export interface AttributeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly attributeType: string
}
class AttributeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'attribute', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/attributes/${string}`> {
  readonly [ArnResourceTypeBrand] = 'attribute' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly attributeType: string
  constructor(parameters: AttributeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.attributeType = parameters.attributeType
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/attributes/${this.attributeType}` as const
  }
}
export type { AttributeArn }
export function attributeArn<Partition extends ArnPartition = 'aws'>(parameters: AttributeArnParameters<Partition>) {
  return new AttributeArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly userId: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'user', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/users/${string}`> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly userId: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.userId = parameters.userId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/users/${this.userId}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(parameters: UserArnParameters<Partition>) {
  return new UserArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly endpointId: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'endpoint', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/endpoints/${string}`> {
  readonly [ArnResourceTypeBrand] = 'endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly endpointId: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.endpointId = parameters.endpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/endpoints/${this.endpointId}` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(parameters: EndpointArnParameters<Partition>) {
  return new EndpointArn<Partition>(parameters)
}

export interface ImportJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly jobId: string
}
class ImportJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'import-job', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/jobs/import/${string}`> {
  readonly [ArnResourceTypeBrand] = 'import-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly jobId: string
  constructor(parameters: ImportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/jobs/import/${this.jobId}` as const
  }
}
export type { ImportJobArn }
export function importJobArn<Partition extends ArnPartition = 'aws'>(parameters: ImportJobArnParameters<Partition>) {
  return new ImportJobArn<Partition>(parameters)
}

export interface ExportJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly jobId: string
}
class ExportJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'export-job', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/jobs/export/${string}`> {
  readonly [ArnResourceTypeBrand] = 'export-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly jobId: string
  constructor(parameters: ExportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/jobs/export/${this.jobId}` as const
  }
}
export type { ExportJobArn }
export function exportJobArn<Partition extends ArnPartition = 'aws'>(parameters: ExportJobArnParameters<Partition>) {
  return new ExportJobArn<Partition>(parameters)
}

export interface ApplicationMetricsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly kpiName: string
}
class ApplicationMetricsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'application-metrics', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/kpis/daterange/${string}`> {
  readonly [ArnResourceTypeBrand] = 'application-metrics' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly kpiName: string
  constructor(parameters: ApplicationMetricsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.kpiName = parameters.kpiName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/kpis/daterange/${this.kpiName}` as const
  }
}
export type { ApplicationMetricsArn }
export function applicationMetricsArn<Partition extends ArnPartition = 'aws'>(parameters: ApplicationMetricsArnParameters<Partition>) {
  return new ApplicationMetricsArn<Partition>(parameters)
}

export interface CampaignMetricsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly campaignId: string
  readonly kpiName: string
}
class CampaignMetricsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'campaign-metrics', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/campaigns/${string}/kpis/daterange/${string}`> {
  readonly [ArnResourceTypeBrand] = 'campaign-metrics' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly campaignId: string
  readonly kpiName: string
  constructor(parameters: CampaignMetricsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.campaignId = parameters.campaignId
    this.kpiName = parameters.kpiName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/campaigns/${this.campaignId}/kpis/daterange/${this.kpiName}` as const
  }
}
export type { CampaignMetricsArn }
export function campaignMetricsArn<Partition extends ArnPartition = 'aws'>(parameters: CampaignMetricsArnParameters<Partition>) {
  return new CampaignMetricsArn<Partition>(parameters)
}

export interface JourneyMetricsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly journeyId: string
  readonly kpiName: string
}
class JourneyMetricsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'journey-metrics', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}/kpis/daterange/${string}`> {
  readonly [ArnResourceTypeBrand] = 'journey-metrics' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly journeyId: string
  readonly kpiName: string
  constructor(parameters: JourneyMetricsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.journeyId = parameters.journeyId
    this.kpiName = parameters.kpiName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/journeys/${this.journeyId}/kpis/daterange/${this.kpiName}` as const
  }
}
export type { JourneyMetricsArn }
export function journeyMetricsArn<Partition extends ArnPartition = 'aws'>(parameters: JourneyMetricsArnParameters<Partition>) {
  return new JourneyMetricsArn<Partition>(parameters)
}

export interface JourneyExecutionMetricsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly journeyId: string
}
class JourneyExecutionMetricsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'journey-execution-metrics', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}/execution-metrics`> {
  readonly [ArnResourceTypeBrand] = 'journey-execution-metrics' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly journeyId: string
  constructor(parameters: JourneyExecutionMetricsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.journeyId = parameters.journeyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/journeys/${this.journeyId}/execution-metrics` as const
  }
}
export type { JourneyExecutionMetricsArn }
export function journeyExecutionMetricsArn<Partition extends ArnPartition = 'aws'>(parameters: JourneyExecutionMetricsArnParameters<Partition>) {
  return new JourneyExecutionMetricsArn<Partition>(parameters)
}

export interface JourneyExecutionActivityMetricsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly journeyId: string
  readonly journeyActivityId: string
}
class JourneyExecutionActivityMetricsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'journey-execution-activity-metrics', `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}/activities/${string}/execution-metrics`> {
  readonly [ArnResourceTypeBrand] = 'journey-execution-activity-metrics' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  readonly journeyId: string
  readonly journeyActivityId: string
  constructor(parameters: JourneyExecutionActivityMetricsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
    this.journeyId = parameters.journeyId
    this.journeyActivityId = parameters.journeyActivityId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:apps/${this.appId}/journeys/${this.journeyId}/activities/${this.journeyActivityId}/execution-metrics` as const
  }
}
export type { JourneyExecutionActivityMetricsArn }
export function journeyExecutionActivityMetricsArn<Partition extends ArnPartition = 'aws'>(parameters: JourneyExecutionActivityMetricsArnParameters<Partition>) {
  return new JourneyExecutionActivityMetricsArn<Partition>(parameters)
}

export interface ReportsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class ReportsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'reports', `arn:${string}:mobiletargeting:${string}:${string}:reports`> {
  readonly [ArnResourceTypeBrand] = 'reports' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: ReportsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mobiletargeting:${this.region}:${this.account}:reports` as const
  }
}
export type { ReportsArn }
export function reportsArn<Partition extends ArnPartition = 'aws'>(parameters: ReportsArnParameters<Partition>) {
  return new ReportsArn<Partition>(parameters)
}
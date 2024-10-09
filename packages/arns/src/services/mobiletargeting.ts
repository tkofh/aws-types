export interface AppArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type AppArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}`
export function appArn(parameters: AppArnParameters): AppArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}`
}

export interface AppsArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type AppsArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/*`
export function appsArn(parameters: AppsArnParameters): AppsArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/*`
}

export interface CampaignArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  campaignId: string
}
export type CampaignArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/campaigns/${string}`
export function campaignArn(parameters: CampaignArnParameters): CampaignArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/campaigns/${parameters.campaignId}`
}

export interface JourneyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  journeyId: string
}
export type JourneyArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}`
export function journeyArn(parameters: JourneyArnParameters): JourneyArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/journeys/${parameters.journeyId}`
}

export interface JourneysArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type JourneysArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys`
export function journeysArn(parameters: JourneysArnParameters): JourneysArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/journeys`
}

export interface SegmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  segmentId: string
}
export type SegmentArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/segments/${string}`
export function segmentArn(parameters: SegmentArnParameters): SegmentArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/segments/${parameters.segmentId}`
}

export interface TemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateName: string
  templateType: string
}
export type TemplateArn = `arn:${string}:mobiletargeting:${string}:${string}:templates/${string}/${string}`
export function templateArn(parameters: TemplateArnParameters): TemplateArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:templates/${parameters.templateName}/${parameters.templateType}`
}

export interface TemplatesArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type TemplatesArn = `arn:${string}:mobiletargeting:${string}:${string}:templates`
export function templatesArn(parameters: TemplatesArnParameters): TemplatesArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:templates`
}

export interface RecommenderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  recommenderId: string
}
export type RecommenderArn = `arn:${string}:mobiletargeting:${string}:${string}:recommenders/${string}`
export function recommenderArn(parameters: RecommenderArnParameters): RecommenderArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:recommenders/${parameters.recommenderId}`
}

export interface RecommendersArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type RecommendersArn = `arn:${string}:mobiletargeting:${string}:${string}:recommenders/*`
export function recommendersArn(parameters: RecommendersArnParameters): RecommendersArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:recommenders/*`
}

export interface PhoneNumberValidateArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type PhoneNumberValidateArn = `arn:${string}:mobiletargeting:${string}:${string}:phone/number/validate`
export function phoneNumberValidateArn(parameters: PhoneNumberValidateArnParameters): PhoneNumberValidateArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:phone/number/validate`
}

export interface ChannelsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type ChannelsArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/channels`
export function channelsArn(parameters: ChannelsArnParameters): ChannelsArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/channels`
}

export interface ChannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  channelType: string
}
export type ChannelArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/channels/${string}`
export function channelArn(parameters: ChannelArnParameters): ChannelArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/channels/${parameters.channelType}`
}

export interface EventStreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type EventStreamArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/eventstream`
export function eventStreamArn(parameters: EventStreamArnParameters): EventStreamArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/eventstream`
}

export interface EventsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type EventsArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/events`
export function eventsArn(parameters: EventsArnParameters): EventsArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/events`
}

export interface MessagesArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type MessagesArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/messages`
export function messagesArn(parameters: MessagesArnParameters): MessagesArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/messages`
}

export interface VerifyOtpArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type VerifyOtpArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/verify-otp`
export function verifyOtpArn(parameters: VerifyOtpArnParameters): VerifyOtpArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/verify-otp`
}

export interface OtpArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type OtpArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/otp`
export function otpArn(parameters: OtpArnParameters): OtpArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/otp`
}

export interface AttributeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  attributeType: string
}
export type AttributeArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/attributes/${string}`
export function attributeArn(parameters: AttributeArnParameters): AttributeArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/attributes/${parameters.attributeType}`
}

export interface UserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  userId: string
}
export type UserArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/users/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/users/${parameters.userId}`
}

export interface EndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  endpointId: string
}
export type EndpointArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/endpoints/${string}`
export function endpointArn(parameters: EndpointArnParameters): EndpointArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/endpoints/${parameters.endpointId}`
}

export interface ImportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  jobId: string
}
export type ImportJobArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/jobs/import/${string}`
export function importJobArn(parameters: ImportJobArnParameters): ImportJobArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/jobs/import/${parameters.jobId}`
}

export interface ExportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  jobId: string
}
export type ExportJobArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/jobs/export/${string}`
export function exportJobArn(parameters: ExportJobArnParameters): ExportJobArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/jobs/export/${parameters.jobId}`
}

export interface ApplicationMetricsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  kpiName: string
}
export type ApplicationMetricsArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/kpis/daterange/${string}`
export function applicationMetricsArn(parameters: ApplicationMetricsArnParameters): ApplicationMetricsArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/kpis/daterange/${parameters.kpiName}`
}

export interface CampaignMetricsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  campaignId: string
  kpiName: string
}
export type CampaignMetricsArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/campaigns/${string}/kpis/daterange/${string}`
export function campaignMetricsArn(parameters: CampaignMetricsArnParameters): CampaignMetricsArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/campaigns/${parameters.campaignId}/kpis/daterange/${parameters.kpiName}`
}

export interface JourneyMetricsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  journeyId: string
  kpiName: string
}
export type JourneyMetricsArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}/kpis/daterange/${string}`
export function journeyMetricsArn(parameters: JourneyMetricsArnParameters): JourneyMetricsArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/journeys/${parameters.journeyId}/kpis/daterange/${parameters.kpiName}`
}

export interface JourneyExecutionMetricsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  journeyId: string
}
export type JourneyExecutionMetricsArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}/execution-metrics`
export function journeyExecutionMetricsArn(parameters: JourneyExecutionMetricsArnParameters): JourneyExecutionMetricsArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/journeys/${parameters.journeyId}/execution-metrics`
}

export interface JourneyExecutionActivityMetricsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
  journeyId: string
  journeyActivityId: string
}
export type JourneyExecutionActivityMetricsArn = `arn:${string}:mobiletargeting:${string}:${string}:apps/${string}/journeys/${string}/activities/${string}/execution-metrics`
export function journeyExecutionActivityMetricsArn(parameters: JourneyExecutionActivityMetricsArnParameters): JourneyExecutionActivityMetricsArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:apps/${parameters.appId}/journeys/${parameters.journeyId}/activities/${parameters.journeyActivityId}/execution-metrics`
}

export interface ReportsArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type ReportsArn = `arn:${string}:mobiletargeting:${string}:${string}:reports`
export function reportsArn(parameters: ReportsArnParameters): ReportsArn {
  return `arn:${parameters.partition ?? ''}:mobiletargeting:${parameters.region}:${parameters.account}:reports`
}
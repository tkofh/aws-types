export interface ContactArnParameters {
  partition?: string | undefined
  region: string
  account: string
  contactAlias: string
}
export type ContactArn = `arn:${string}:ssm-contacts:${string}:${string}:contact/${string}`
export function contactArn(parameters: ContactArnParameters): ContactArn {
  return `arn:${parameters.partition ?? ''}:ssm-contacts:${parameters.region}:${parameters.account}:contact/${parameters.contactAlias}`
}

export interface ContactchannelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  contactAlias: string
  contactChannelId: string
}
export type ContactchannelArn = `arn:${string}:ssm-contacts:${string}:${string}:contactchannel/${string}/${string}`
export function contactchannelArn(parameters: ContactchannelArnParameters): ContactchannelArn {
  return `arn:${parameters.partition ?? ''}:ssm-contacts:${parameters.region}:${parameters.account}:contactchannel/${parameters.contactAlias}/${parameters.contactChannelId}`
}

export interface EngagementArnParameters {
  partition?: string | undefined
  region: string
  account: string
  contactAlias: string
  engagementId: string
}
export type EngagementArn = `arn:${string}:ssm-contacts:${string}:${string}:engagement/${string}/${string}`
export function engagementArn(parameters: EngagementArnParameters): EngagementArn {
  return `arn:${parameters.partition ?? ''}:ssm-contacts:${parameters.region}:${parameters.account}:engagement/${parameters.contactAlias}/${parameters.engagementId}`
}

export interface PageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  contactAlias: string
  pageId: string
}
export type PageArn = `arn:${string}:ssm-contacts:${string}:${string}:page/${string}/${string}`
export function pageArn(parameters: PageArnParameters): PageArn {
  return `arn:${parameters.partition ?? ''}:ssm-contacts:${parameters.region}:${parameters.account}:page/${parameters.contactAlias}/${parameters.pageId}`
}

export interface RotationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  rotationId: string
}
export type RotationArn = `arn:${string}:ssm-contacts:${string}:${string}:rotation/${string}`
export function rotationArn(parameters: RotationArnParameters): RotationArn {
  return `arn:${parameters.partition ?? ''}:ssm-contacts:${parameters.region}:${parameters.account}:rotation/${parameters.rotationId}`
}
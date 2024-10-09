export interface EventRuleArnParameters {
  partition?: string | undefined
  account: string
  notificationConfigurationId: string
  eventRuleId: string
}
export type EventRuleArn = `arn:${string}:notifications::${string}:configuration/${string}/rule/${string}`
export function eventRuleArn(parameters: EventRuleArnParameters): EventRuleArn {
  return `arn:${parameters.partition ?? ''}:notifications::${parameters.account}:configuration/${parameters.notificationConfigurationId}/rule/${parameters.eventRuleId}`
}

export interface NotificationConfigurationArnParameters {
  partition?: string | undefined
  account: string
  notificationConfigurationId: string
}
export type NotificationConfigurationArn = `arn:${string}:notifications::${string}:configuration/${string}`
export function notificationConfigurationArn(parameters: NotificationConfigurationArnParameters): NotificationConfigurationArn {
  return `arn:${parameters.partition ?? ''}:notifications::${parameters.account}:configuration/${parameters.notificationConfigurationId}`
}

export interface NotificationEventArnParameters {
  partition?: string | undefined
  region: string
  account: string
  notificationConfigurationId: string
  notificationEventId: string
}
export type NotificationEventArn = `arn:${string}:notifications:${string}:${string}:configuration/${string}/event/${string}`
export function notificationEventArn(parameters: NotificationEventArnParameters): NotificationEventArn {
  return `arn:${parameters.partition ?? ''}:notifications:${parameters.region}:${parameters.account}:configuration/${parameters.notificationConfigurationId}/event/${parameters.notificationEventId}`
}
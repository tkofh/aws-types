import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface EventRuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly notificationConfigurationId: string
  readonly eventRuleId: string
}
class EventRuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'EventRule', `arn:${string}:notifications::${string}:configuration/${string}/rule/${string}`> {
  readonly [ArnResourceTypeBrand] = 'EventRule' as const
  readonly partition: Partition
  readonly account: string
  readonly notificationConfigurationId: string
  readonly eventRuleId: string
  constructor(parameters: EventRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.notificationConfigurationId = parameters.notificationConfigurationId
    this.eventRuleId = parameters.eventRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:notifications::${this.account}:configuration/${this.notificationConfigurationId}/rule/${this.eventRuleId}` as const
  }
}
export type { EventRuleArn }
export function eventRuleArn<Partition extends ArnPartition = 'aws'>(parameters: EventRuleArnParameters<Partition>) {
  return new EventRuleArn<Partition>(parameters)
}

export interface NotificationConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly notificationConfigurationId: string
}
class NotificationConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'NotificationConfiguration', `arn:${string}:notifications::${string}:configuration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'NotificationConfiguration' as const
  readonly partition: Partition
  readonly account: string
  readonly notificationConfigurationId: string
  constructor(parameters: NotificationConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.notificationConfigurationId = parameters.notificationConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:notifications::${this.account}:configuration/${this.notificationConfigurationId}` as const
  }
}
export type { NotificationConfigurationArn }
export function notificationConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: NotificationConfigurationArnParameters<Partition>) {
  return new NotificationConfigurationArn<Partition>(parameters)
}

export interface NotificationEventArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notificationConfigurationId: string
  readonly notificationEventId: string
}
class NotificationEventArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'NotificationEvent', `arn:${string}:notifications:${string}:${string}:configuration/${string}/event/${string}`> {
  readonly [ArnResourceTypeBrand] = 'NotificationEvent' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notificationConfigurationId: string
  readonly notificationEventId: string
  constructor(parameters: NotificationEventArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.notificationConfigurationId = parameters.notificationConfigurationId
    this.notificationEventId = parameters.notificationEventId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:notifications:${this.region}:${this.account}:configuration/${this.notificationConfigurationId}/event/${this.notificationEventId}` as const
  }
}
export type { NotificationEventArn }
export function notificationEventArn<Partition extends ArnPartition = 'aws'>(parameters: NotificationEventArnParameters<Partition>) {
  return new NotificationEventArn<Partition>(parameters)
}
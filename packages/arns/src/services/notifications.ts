import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface RuleEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idConfigurationNotification: string
  readonly idRuleEvent: string
}
class RuleEventArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'EventRule',
  `arn:${string}:notifications::${string}:configuration/${string}/rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'EventRule' as const
  readonly partition: string
  readonly account: string
  readonly idConfigurationNotification: string
  readonly idRuleEvent: string
  constructor(parameters: RuleEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idConfigurationNotification = parameters.idConfigurationNotification
    this.idRuleEvent = parameters.idRuleEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:notifications::${this.account}:configuration/${this.idConfigurationNotification}/rule/${this.idRuleEvent}` as const
  }
}
export type { RuleEventArn }
export function ruleEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleEventArnParameters<Partition>,
) {
  return new RuleEventArn<Partition>(parameters)
}

export interface ConfigurationNotificationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idConfigurationNotification: string
}
class ConfigurationNotificationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'NotificationConfiguration',
  `arn:${string}:notifications::${string}:configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'NotificationConfiguration' as const
  readonly partition: string
  readonly account: string
  readonly idConfigurationNotification: string
  constructor(parameters: ConfigurationNotificationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idConfigurationNotification = parameters.idConfigurationNotification
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:notifications::${this.account}:configuration/${this.idConfigurationNotification}` as const
  }
}
export type { ConfigurationNotificationArn }
export function configurationNotificationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationNotificationArnParameters<Partition>) {
  return new ConfigurationNotificationArn<Partition>(parameters)
}

export interface EventNotificationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationNotification: string
  readonly idEventNotification: string
}
class EventNotificationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'NotificationEvent',
  `arn:${string}:notifications:${string}:${string}:configuration/${string}/event/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'NotificationEvent' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationNotification: string
  readonly idEventNotification: string
  constructor(parameters: EventNotificationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfigurationNotification = parameters.idConfigurationNotification
    this.idEventNotification = parameters.idEventNotification
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:notifications:${this.region}:${this.account}:configuration/${this.idConfigurationNotification}/event/${this.idEventNotification}` as const
  }
}
export type { EventNotificationArn }
export function eventNotificationArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventNotificationArnParameters<Partition>,
) {
  return new EventNotificationArn<Partition>(parameters)
}

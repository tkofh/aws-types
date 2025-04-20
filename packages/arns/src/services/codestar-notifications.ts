import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface RuleNotificationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleNotification: string
}
class RuleNotificationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'notificationrule',
  `arn:${string}:codestar-notifications:${string}:${string}:notificationrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'notificationrule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleNotification: string
  constructor(parameters: RuleNotificationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRuleNotification = parameters.idRuleNotification
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar-notifications:${this.region}:${this.account}:notificationrule/${this.idRuleNotification}` as const
  }
}
export type { RuleNotificationArn }
export function ruleNotificationArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleNotificationArnParameters<Partition>,
) {
  return new RuleNotificationArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NotificationRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notificationRuleId: string
}
class NotificationRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'notificationrule',
  `arn:${string}:codestar-notifications:${string}:${string}:notificationrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'notificationrule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notificationRuleId: string
  constructor(parameters: NotificationRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.notificationRuleId = parameters.notificationRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar-notifications:${this.region}:${this.account}:notificationrule/${this.notificationRuleId}` as const
  }
}
export type { NotificationRuleArn }
export function notificationRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: NotificationRuleArnParameters<Partition>,
) {
  return new NotificationRuleArn<Partition>(parameters)
}

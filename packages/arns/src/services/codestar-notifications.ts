import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface NotificationruleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notificationRuleId: string
}
class NotificationruleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'notificationrule', `arn:${string}:codestar-notifications:${string}:${string}:notificationrule/${string}`> {
  readonly [ArnResourceTypeBrand] = 'notificationrule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly notificationRuleId: string
  constructor(parameters: NotificationruleArnParameters<Partition>) {
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
export type { NotificationruleArn }
export function notificationruleArn<Partition extends ArnPartition = 'aws'>(parameters: NotificationruleArnParameters<Partition>) {
  return new NotificationruleArn<Partition>(parameters)
}
import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GroupScheduleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
}
class GroupScheduleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'schedule-group',
  `arn:${string}:scheduler:${string}:${string}:schedule-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'schedule-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
  constructor(parameters: GroupScheduleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroup = parameters.nameGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scheduler:${this.region}:${this.account}:schedule-group/${this.nameGroup}` as const
  }
}
export type { GroupScheduleArn }
export function groupScheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupScheduleArnParameters<Partition>,
) {
  return new GroupScheduleArn<Partition>(parameters)
}

export interface ScheduleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
  readonly nameSchedule: string
}
class ScheduleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'schedule',
  `arn:${string}:scheduler:${string}:${string}:schedule/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'schedule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
  readonly nameSchedule: string
  constructor(parameters: ScheduleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroup = parameters.nameGroup
    this.nameSchedule = parameters.nameSchedule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scheduler:${this.region}:${this.account}:schedule/${this.nameGroup}/${this.nameSchedule}` as const
  }
}
export type { ScheduleArn }
export function scheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScheduleArnParameters<Partition>,
) {
  return new ScheduleArn<Partition>(parameters)
}

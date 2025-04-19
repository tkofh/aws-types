import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ScheduleGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
}
class ScheduleGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'schedule-group', `arn:${string}:scheduler:${string}:${string}:schedule-group/${string}`> {
  readonly [ArnResourceTypeBrand] = 'schedule-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
  constructor(parameters: ScheduleGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupName = parameters.groupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scheduler:${this.region}:${this.account}:schedule-group/${this.groupName}` as const
  }
}
export type { ScheduleGroupArn }
export function scheduleGroupArn<Partition extends ArnPartition = 'aws'>(parameters: ScheduleGroupArnParameters<Partition>) {
  return new ScheduleGroupArn<Partition>(parameters)
}

export interface ScheduleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
  readonly scheduleName: string
}
class ScheduleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'schedule', `arn:${string}:scheduler:${string}:${string}:schedule/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'schedule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
  readonly scheduleName: string
  constructor(parameters: ScheduleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupName = parameters.groupName
    this.scheduleName = parameters.scheduleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:scheduler:${this.region}:${this.account}:schedule/${this.groupName}/${this.scheduleName}` as const
  }
}
export type { ScheduleArn }
export function scheduleArn<Partition extends ArnPartition = 'aws'>(parameters: ScheduleArnParameters<Partition>) {
  return new ScheduleArn<Partition>(parameters)
}
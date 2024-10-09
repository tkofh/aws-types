export interface ScheduleGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupName: string
}
export type ScheduleGroupArn = `arn:${string}:scheduler:${string}:${string}:schedule-group/${string}`
export function scheduleGroupArn(parameters: ScheduleGroupArnParameters): ScheduleGroupArn {
  return `arn:${parameters.partition ?? ''}:scheduler:${parameters.region}:${parameters.account}:schedule-group/${parameters.groupName}`
}

export interface ScheduleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupName: string
  scheduleName: string
}
export type ScheduleArn = `arn:${string}:scheduler:${string}:${string}:schedule/${string}/${string}`
export function scheduleArn(parameters: ScheduleArnParameters): ScheduleArn {
  return `arn:${parameters.partition ?? ''}:scheduler:${parameters.region}:${parameters.account}:schedule/${parameters.groupName}/${parameters.scheduleName}`
}
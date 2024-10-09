export interface ProfilingGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  profilingGroupName: string
}
export type ProfilingGroupArn = `arn:${string}:codeguru-profiler:${string}:${string}:profilingGroup/${string}`
export function profilingGroupArn(parameters: ProfilingGroupArnParameters): ProfilingGroupArn {
  return `arn:${parameters.partition ?? ''}:codeguru-profiler:${parameters.region}:${parameters.account}:profilingGroup/${parameters.profilingGroupName}`
}
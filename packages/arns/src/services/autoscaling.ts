export interface AutoScalingGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupId: string
  groupFriendlyName: string
}
export type AutoScalingGroupArn = `arn:${string}:autoscaling:${string}:${string}:autoScalingGroup:${string}:autoScalingGroupName/${string}`
export function autoScalingGroupArn(parameters: AutoScalingGroupArnParameters): AutoScalingGroupArn {
  return `arn:${parameters.partition ?? ''}:autoscaling:${parameters.region}:${parameters.account}:autoScalingGroup:${parameters.groupId}:autoScalingGroupName/${parameters.groupFriendlyName}`
}

export interface LaunchConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
  launchConfigurationName: string
}
export type LaunchConfigurationArn = `arn:${string}:autoscaling:${string}:${string}:launchConfiguration:${string}:launchConfigurationName/${string}`
export function launchConfigurationArn(parameters: LaunchConfigurationArnParameters): LaunchConfigurationArn {
  return `arn:${parameters.partition ?? ''}:autoscaling:${parameters.region}:${parameters.account}:launchConfiguration:${parameters.id}:launchConfigurationName/${parameters.launchConfigurationName}`
}
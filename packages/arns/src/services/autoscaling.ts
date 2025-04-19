import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AutoScalingGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  readonly groupFriendlyName: string
}
class AutoScalingGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'autoScalingGroup',
  `arn:${string}:autoscaling:${string}:${string}:autoScalingGroup:${string}:autoScalingGroupName/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'autoScalingGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  readonly groupFriendlyName: string
  constructor(parameters: AutoScalingGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupId = parameters.groupId
    this.groupFriendlyName = parameters.groupFriendlyName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:autoscaling:${this.region}:${this.account}:autoScalingGroup:${this.groupId}:autoScalingGroupName/${this.groupFriendlyName}` as const
  }
}
export type { AutoScalingGroupArn }
export function autoScalingGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: AutoScalingGroupArnParameters<Partition>,
) {
  return new AutoScalingGroupArn<Partition>(parameters)
}

export interface LaunchConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  readonly launchConfigurationName: string
}
class LaunchConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'launchConfiguration',
  `arn:${string}:autoscaling:${string}:${string}:launchConfiguration:${string}:launchConfigurationName/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'launchConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  readonly launchConfigurationName: string
  constructor(parameters: LaunchConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
    this.launchConfigurationName = parameters.launchConfigurationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:autoscaling:${this.region}:${this.account}:launchConfiguration:${this.id}:launchConfigurationName/${this.launchConfigurationName}` as const
  }
}
export type { LaunchConfigurationArn }
export function launchConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: LaunchConfigurationArnParameters<Partition>,
) {
  return new LaunchConfigurationArn<Partition>(parameters)
}

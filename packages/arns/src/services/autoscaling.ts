import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GroupAutoscalingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
  readonly nameFriendlyGroup: string
}
class GroupAutoscalingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'autoScalingGroup',
  `arn:${string}:autoscaling:${string}:${string}:autoScalingGroup:${string}:autoScalingGroupName/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'autoScalingGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
  readonly nameFriendlyGroup: string
  constructor(parameters: GroupAutoscalingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroup = parameters.idGroup
    this.nameFriendlyGroup = parameters.nameFriendlyGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:autoscaling:${this.region}:${this.account}:autoScalingGroup:${this.idGroup}:autoScalingGroupName/${this.nameFriendlyGroup}` as const
  }
}
export type { GroupAutoscalingArn }
export function groupAutoscalingArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupAutoscalingArnParameters<Partition>,
) {
  return new GroupAutoscalingArn<Partition>(parameters)
}

export interface ConfigurationLaunchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  readonly nameConfigurationLaunch: string
}
class ConfigurationLaunchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'launchConfiguration',
  `arn:${string}:autoscaling:${string}:${string}:launchConfiguration:${string}:launchConfigurationName/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'launchConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  readonly nameConfigurationLaunch: string
  constructor(parameters: ConfigurationLaunchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
    this.nameConfigurationLaunch = parameters.nameConfigurationLaunch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:autoscaling:${this.region}:${this.account}:launchConfiguration:${this.id}:launchConfigurationName/${this.nameConfigurationLaunch}` as const
  }
}
export type { ConfigurationLaunchArn }
export function configurationLaunchArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationLaunchArnParameters<Partition>,
) {
  return new ConfigurationLaunchArn<Partition>(parameters)
}

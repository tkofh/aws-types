import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:codedeploy:${string}:${string}:application:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationName = parameters.applicationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codedeploy:${this.region}:${this.account}:application:${this.applicationName}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface DeploymentConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentConfigurationName: string
}
class DeploymentConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deploymentconfig',
  `arn:${string}:codedeploy:${string}:${string}:deploymentconfig:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deploymentconfig' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentConfigurationName: string
  constructor(parameters: DeploymentConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deploymentConfigurationName = parameters.deploymentConfigurationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codedeploy:${this.region}:${this.account}:deploymentconfig:${this.deploymentConfigurationName}` as const
  }
}
export type { DeploymentConfigArn }
export function deploymentConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentConfigArnParameters<Partition>,
) {
  return new DeploymentConfigArn<Partition>(parameters)
}

export interface DeploymentGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly deploymentGroupName: string
}
class DeploymentGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deploymentgroup',
  `arn:${string}:codedeploy:${string}:${string}:deploymentgroup:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deploymentgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly deploymentGroupName: string
  constructor(parameters: DeploymentGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationName = parameters.applicationName
    this.deploymentGroupName = parameters.deploymentGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codedeploy:${this.region}:${this.account}:deploymentgroup:${this.applicationName}/${this.deploymentGroupName}` as const
  }
}
export type { DeploymentGroupArn }
export function deploymentGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentGroupArnParameters<Partition>,
) {
  return new DeploymentGroupArn<Partition>(parameters)
}

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceName: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:codedeploy:${string}:${string}:instance:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceName: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceName = parameters.instanceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codedeploy:${this.region}:${this.account}:instance:${this.instanceName}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

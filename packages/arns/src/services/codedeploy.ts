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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:codedeploy:${string}:${string}:application:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameApplication = parameters.nameApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codedeploy:${this.region}:${this.account}:application:${this.nameApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface ConfigDeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationDeployment: string
}
class ConfigDeploymentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deploymentconfig',
  `arn:${string}:codedeploy:${string}:${string}:deploymentconfig:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deploymentconfig' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationDeployment: string
  constructor(parameters: ConfigDeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigurationDeployment = parameters.nameConfigurationDeployment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codedeploy:${this.region}:${this.account}:deploymentconfig:${this.nameConfigurationDeployment}` as const
  }
}
export type { ConfigDeploymentArn }
export function configDeploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigDeploymentArnParameters<Partition>,
) {
  return new ConfigDeploymentArn<Partition>(parameters)
}

export interface GroupDeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly nameGroupDeployment: string
}
class GroupDeploymentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deploymentgroup',
  `arn:${string}:codedeploy:${string}:${string}:deploymentgroup:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deploymentgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly nameGroupDeployment: string
  constructor(parameters: GroupDeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameApplication = parameters.nameApplication
    this.nameGroupDeployment = parameters.nameGroupDeployment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codedeploy:${this.region}:${this.account}:deploymentgroup:${this.nameApplication}/${this.nameGroupDeployment}` as const
  }
}
export type { GroupDeploymentArn }
export function groupDeploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupDeploymentArnParameters<Partition>,
) {
  return new GroupDeploymentArn<Partition>(parameters)
}

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstance: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:codedeploy:${string}:${string}:instance:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstance: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameInstance = parameters.nameInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codedeploy:${this.region}:${this.account}:instance:${this.nameInstance}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResourceJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class ResourceJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'JobResource',
  `arn:${string}:drs:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'JobResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: ResourceJobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:job/${this.idJob}` as const
  }
}
export type { ResourceJobArn }
export function resourceJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceJobArnParameters<Partition>,
) {
  return new ResourceJobArn<Partition>(parameters)
}

export interface ResourceInstanceRecoveryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceRecovery: string
}
class ResourceInstanceRecoveryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RecoveryInstanceResource',
  `arn:${string}:drs:${string}:${string}:recovery-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RecoveryInstanceResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceRecovery: string
  constructor(parameters: ResourceInstanceRecoveryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstanceRecovery = parameters.idInstanceRecovery
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:recovery-instance/${this.idInstanceRecovery}` as const
  }
}
export type { ResourceInstanceRecoveryArn }
export function resourceInstanceRecoveryArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ResourceInstanceRecoveryArnParameters<Partition>) {
  return new ResourceInstanceRecoveryArn<Partition>(parameters)
}

export interface ResourceTemplateConfigurationReplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateConfigurationReplication: string
}
class ResourceTemplateConfigurationReplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ReplicationConfigurationTemplateResource',
  `arn:${string}:drs:${string}:${string}:replication-configuration-template/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'ReplicationConfigurationTemplateResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateConfigurationReplication: string
  constructor(
    parameters: ResourceTemplateConfigurationReplicationArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTemplateConfigurationReplication =
      parameters.idTemplateConfigurationReplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:replication-configuration-template/${this.idTemplateConfigurationReplication}` as const
  }
}
export type { ResourceTemplateConfigurationReplicationArn }
export function resourceTemplateConfigurationReplicationArn<
  Partition extends ArnPartition = 'aws',
>(
  parameters: ResourceTemplateConfigurationReplicationArnParameters<Partition>,
) {
  return new ResourceTemplateConfigurationReplicationArn<Partition>(parameters)
}

export interface ResourceTemplateConfigurationLaunchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateConfigurationLaunch: string
}
class ResourceTemplateConfigurationLaunchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'LaunchConfigurationTemplateResource',
  `arn:${string}:drs:${string}:${string}:launch-configuration-template/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'LaunchConfigurationTemplateResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateConfigurationLaunch: string
  constructor(
    parameters: ResourceTemplateConfigurationLaunchArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTemplateConfigurationLaunch =
      parameters.idTemplateConfigurationLaunch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:launch-configuration-template/${this.idTemplateConfigurationLaunch}` as const
  }
}
export type { ResourceTemplateConfigurationLaunchArn }
export function resourceTemplateConfigurationLaunchArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ResourceTemplateConfigurationLaunchArnParameters<Partition>) {
  return new ResourceTemplateConfigurationLaunchArn<Partition>(parameters)
}

export interface ResourceServerSourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServerSource: string
}
class ResourceServerSourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SourceServerResource',
  `arn:${string}:drs:${string}:${string}:source-server/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SourceServerResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServerSource: string
  constructor(parameters: ResourceServerSourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idServerSource = parameters.idServerSource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:source-server/${this.idServerSource}` as const
  }
}
export type { ResourceServerSourceArn }
export function resourceServerSourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceServerSourceArnParameters<Partition>,
) {
  return new ResourceServerSourceArn<Partition>(parameters)
}

export interface ResourceNetworkSourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNetworkSource: string
}
class ResourceNetworkSourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SourceNetworkResource',
  `arn:${string}:drs:${string}:${string}:source-network/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SourceNetworkResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNetworkSource: string
  constructor(parameters: ResourceNetworkSourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNetworkSource = parameters.idNetworkSource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:source-network/${this.idNetworkSource}` as const
  }
}
export type { ResourceNetworkSourceArn }
export function resourceNetworkSourceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ResourceNetworkSourceArnParameters<Partition>) {
  return new ResourceNetworkSourceArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface JobResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class JobResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'JobResource', `arn:${string}:drs:${string}:${string}:job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'JobResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: JobResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:job/${this.jobId}` as const
  }
}
export type { JobResourceArn }
export function jobResourceArn<Partition extends ArnPartition = 'aws'>(parameters: JobResourceArnParameters<Partition>) {
  return new JobResourceArn<Partition>(parameters)
}

export interface RecoveryInstanceResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly recoveryInstanceId: string
}
class RecoveryInstanceResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'RecoveryInstanceResource', `arn:${string}:drs:${string}:${string}:recovery-instance/${string}`> {
  readonly [ArnResourceTypeBrand] = 'RecoveryInstanceResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly recoveryInstanceId: string
  constructor(parameters: RecoveryInstanceResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.recoveryInstanceId = parameters.recoveryInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:recovery-instance/${this.recoveryInstanceId}` as const
  }
}
export type { RecoveryInstanceResourceArn }
export function recoveryInstanceResourceArn<Partition extends ArnPartition = 'aws'>(parameters: RecoveryInstanceResourceArnParameters<Partition>) {
  return new RecoveryInstanceResourceArn<Partition>(parameters)
}

export interface ReplicationConfigurationTemplateResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicationConfigurationTemplateId: string
}
class ReplicationConfigurationTemplateResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ReplicationConfigurationTemplateResource', `arn:${string}:drs:${string}:${string}:replication-configuration-template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ReplicationConfigurationTemplateResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicationConfigurationTemplateId: string
  constructor(parameters: ReplicationConfigurationTemplateResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.replicationConfigurationTemplateId = parameters.replicationConfigurationTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:replication-configuration-template/${this.replicationConfigurationTemplateId}` as const
  }
}
export type { ReplicationConfigurationTemplateResourceArn }
export function replicationConfigurationTemplateResourceArn<Partition extends ArnPartition = 'aws'>(parameters: ReplicationConfigurationTemplateResourceArnParameters<Partition>) {
  return new ReplicationConfigurationTemplateResourceArn<Partition>(parameters)
}

export interface LaunchConfigurationTemplateResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly launchConfigurationTemplateId: string
}
class LaunchConfigurationTemplateResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'LaunchConfigurationTemplateResource', `arn:${string}:drs:${string}:${string}:launch-configuration-template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'LaunchConfigurationTemplateResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly launchConfigurationTemplateId: string
  constructor(parameters: LaunchConfigurationTemplateResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.launchConfigurationTemplateId = parameters.launchConfigurationTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:launch-configuration-template/${this.launchConfigurationTemplateId}` as const
  }
}
export type { LaunchConfigurationTemplateResourceArn }
export function launchConfigurationTemplateResourceArn<Partition extends ArnPartition = 'aws'>(parameters: LaunchConfigurationTemplateResourceArnParameters<Partition>) {
  return new LaunchConfigurationTemplateResourceArn<Partition>(parameters)
}

export interface SourceServerResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceServerId: string
}
class SourceServerResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'SourceServerResource', `arn:${string}:drs:${string}:${string}:source-server/${string}`> {
  readonly [ArnResourceTypeBrand] = 'SourceServerResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceServerId: string
  constructor(parameters: SourceServerResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sourceServerId = parameters.sourceServerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:source-server/${this.sourceServerId}` as const
  }
}
export type { SourceServerResourceArn }
export function sourceServerResourceArn<Partition extends ArnPartition = 'aws'>(parameters: SourceServerResourceArnParameters<Partition>) {
  return new SourceServerResourceArn<Partition>(parameters)
}

export interface SourceNetworkResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceNetworkId: string
}
class SourceNetworkResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'SourceNetworkResource', `arn:${string}:drs:${string}:${string}:source-network/${string}`> {
  readonly [ArnResourceTypeBrand] = 'SourceNetworkResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceNetworkId: string
  constructor(parameters: SourceNetworkResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sourceNetworkId = parameters.sourceNetworkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:drs:${this.region}:${this.account}:source-network/${this.sourceNetworkId}` as const
  }
}
export type { SourceNetworkResourceArn }
export function sourceNetworkResourceArn<Partition extends ArnPartition = 'aws'>(parameters: SourceNetworkResourceArnParameters<Partition>) {
  return new SourceNetworkResourceArn<Partition>(parameters)
}
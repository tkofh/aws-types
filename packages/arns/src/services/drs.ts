export interface JobResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type JobResourceArn = `arn:${string}:drs:${string}:${string}:job/${string}`
export function jobResourceArn(parameters: JobResourceArnParameters): JobResourceArn {
  return `arn:${parameters.partition ?? ''}:drs:${parameters.region}:${parameters.account}:job/${parameters.jobId}`
}

export interface RecoveryInstanceResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  recoveryInstanceId: string
}
export type RecoveryInstanceResourceArn = `arn:${string}:drs:${string}:${string}:recovery-instance/${string}`
export function recoveryInstanceResourceArn(parameters: RecoveryInstanceResourceArnParameters): RecoveryInstanceResourceArn {
  return `arn:${parameters.partition ?? ''}:drs:${parameters.region}:${parameters.account}:recovery-instance/${parameters.recoveryInstanceId}`
}

export interface ReplicationConfigurationTemplateResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  replicationConfigurationTemplateId: string
}
export type ReplicationConfigurationTemplateResourceArn = `arn:${string}:drs:${string}:${string}:replication-configuration-template/${string}`
export function replicationConfigurationTemplateResourceArn(parameters: ReplicationConfigurationTemplateResourceArnParameters): ReplicationConfigurationTemplateResourceArn {
  return `arn:${parameters.partition ?? ''}:drs:${parameters.region}:${parameters.account}:replication-configuration-template/${parameters.replicationConfigurationTemplateId}`
}

export interface LaunchConfigurationTemplateResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  launchConfigurationTemplateId: string
}
export type LaunchConfigurationTemplateResourceArn = `arn:${string}:drs:${string}:${string}:launch-configuration-template/${string}`
export function launchConfigurationTemplateResourceArn(parameters: LaunchConfigurationTemplateResourceArnParameters): LaunchConfigurationTemplateResourceArn {
  return `arn:${parameters.partition ?? ''}:drs:${parameters.region}:${parameters.account}:launch-configuration-template/${parameters.launchConfigurationTemplateId}`
}

export interface SourceServerResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sourceServerId: string
}
export type SourceServerResourceArn = `arn:${string}:drs:${string}:${string}:source-server/${string}`
export function sourceServerResourceArn(parameters: SourceServerResourceArnParameters): SourceServerResourceArn {
  return `arn:${parameters.partition ?? ''}:drs:${parameters.region}:${parameters.account}:source-server/${parameters.sourceServerId}`
}

export interface SourceNetworkResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sourceNetworkId: string
}
export type SourceNetworkResourceArn = `arn:${string}:drs:${string}:${string}:source-network/${string}`
export function sourceNetworkResourceArn(parameters: SourceNetworkResourceArnParameters): SourceNetworkResourceArn {
  return `arn:${parameters.partition ?? ''}:drs:${parameters.region}:${parameters.account}:source-network/${parameters.sourceNetworkId}`
}
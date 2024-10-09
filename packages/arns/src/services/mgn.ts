export interface JobResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type JobResourceArn = `arn:${string}:mgn:${string}:${string}:job/${string}`
export function jobResourceArn(parameters: JobResourceArnParameters): JobResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:job/${parameters.jobId}`
}

export interface ReplicationConfigurationTemplateResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  replicationConfigurationTemplateId: string
}
export type ReplicationConfigurationTemplateResourceArn = `arn:${string}:mgn:${string}:${string}:replication-configuration-template/${string}`
export function replicationConfigurationTemplateResourceArn(parameters: ReplicationConfigurationTemplateResourceArnParameters): ReplicationConfigurationTemplateResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:replication-configuration-template/${parameters.replicationConfigurationTemplateId}`
}

export interface LaunchConfigurationTemplateResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  launchConfigurationTemplateId: string
}
export type LaunchConfigurationTemplateResourceArn = `arn:${string}:mgn:${string}:${string}:launch-configuration-template/${string}`
export function launchConfigurationTemplateResourceArn(parameters: LaunchConfigurationTemplateResourceArnParameters): LaunchConfigurationTemplateResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:launch-configuration-template/${parameters.launchConfigurationTemplateId}`
}

export interface VcenterClientResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vcenterClientId: string
}
export type VcenterClientResourceArn = `arn:${string}:mgn:${string}:${string}:vcenter-client/${string}`
export function vcenterClientResourceArn(parameters: VcenterClientResourceArnParameters): VcenterClientResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:vcenter-client/${parameters.vcenterClientId}`
}

export interface SourceServerResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sourceServerId: string
}
export type SourceServerResourceArn = `arn:${string}:mgn:${string}:${string}:source-server/${string}`
export function sourceServerResourceArn(parameters: SourceServerResourceArnParameters): SourceServerResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:source-server/${parameters.sourceServerId}`
}

export interface ApplicationResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
}
export type ApplicationResourceArn = `arn:${string}:mgn:${string}:${string}:application/${string}`
export function applicationResourceArn(parameters: ApplicationResourceArnParameters): ApplicationResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:application/${parameters.applicationId}`
}

export interface WaveResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  waveId: string
}
export type WaveResourceArn = `arn:${string}:mgn:${string}:${string}:wave/${string}`
export function waveResourceArn(parameters: WaveResourceArnParameters): WaveResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:wave/${parameters.waveId}`
}

export interface ImportResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  importId: string
}
export type ImportResourceArn = `arn:${string}:mgn:${string}:${string}:import/${string}`
export function importResourceArn(parameters: ImportResourceArnParameters): ImportResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:import/${parameters.importId}`
}

export interface ExportResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  exportId: string
}
export type ExportResourceArn = `arn:${string}:mgn:${string}:${string}:export/${string}`
export function exportResourceArn(parameters: ExportResourceArnParameters): ExportResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:export/${parameters.exportId}`
}

export interface ConnectorResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorId: string
}
export type ConnectorResourceArn = `arn:${string}:mgn:${string}:${string}:connector/${string}`
export function connectorResourceArn(parameters: ConnectorResourceArnParameters): ConnectorResourceArn {
  return `arn:${parameters.partition ?? ''}:mgn:${parameters.region}:${parameters.account}:connector/${parameters.connectorId}`
}
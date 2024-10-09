export interface VirtualClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  virtualClusterId: string
}
export type VirtualClusterArn = `arn:${string}:emr-containers:${string}:${string}:/virtualclusters/${string}`
export function virtualClusterArn(parameters: VirtualClusterArnParameters): VirtualClusterArn {
  return `arn:${parameters.partition ?? ''}:emr-containers:${parameters.region}:${parameters.account}:/virtualclusters/${parameters.virtualClusterId}`
}

export interface JobRunArnParameters {
  partition?: string | undefined
  region: string
  account: string
  virtualClusterId: string
  jobRunId: string
}
export type JobRunArn = `arn:${string}:emr-containers:${string}:${string}:/virtualclusters/${string}/jobruns/${string}`
export function jobRunArn(parameters: JobRunArnParameters): JobRunArn {
  return `arn:${parameters.partition ?? ''}:emr-containers:${parameters.region}:${parameters.account}:/virtualclusters/${parameters.virtualClusterId}/jobruns/${parameters.jobRunId}`
}

export interface JobTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobTemplateId: string
}
export type JobTemplateArn = `arn:${string}:emr-containers:${string}:${string}:/jobtemplates/${string}`
export function jobTemplateArn(parameters: JobTemplateArnParameters): JobTemplateArn {
  return `arn:${parameters.partition ?? ''}:emr-containers:${parameters.region}:${parameters.account}:/jobtemplates/${parameters.jobTemplateId}`
}

export interface ManagedEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  virtualClusterId: string
  endpointId: string
}
export type ManagedEndpointArn = `arn:${string}:emr-containers:${string}:${string}:/virtualclusters/${string}/endpoints/${string}`
export function managedEndpointArn(parameters: ManagedEndpointArnParameters): ManagedEndpointArn {
  return `arn:${parameters.partition ?? ''}:emr-containers:${parameters.region}:${parameters.account}:/virtualclusters/${parameters.virtualClusterId}/endpoints/${parameters.endpointId}`
}

export interface SecurityConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  securityConfigurationId: string
}
export type SecurityConfigurationArn = `arn:${string}:emr-containers:${string}:${string}:/securityconfigurations/${string}`
export function securityConfigurationArn(parameters: SecurityConfigurationArnParameters): SecurityConfigurationArn {
  return `arn:${parameters.partition ?? ''}:emr-containers:${parameters.region}:${parameters.account}:/securityconfigurations/${parameters.securityConfigurationId}`
}
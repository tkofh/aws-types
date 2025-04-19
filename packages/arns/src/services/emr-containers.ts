import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface VirtualClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly virtualClusterId: string
}
class VirtualClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'virtualCluster', `arn:${string}:emr-containers:${string}:${string}:/virtualclusters/${string}`> {
  readonly [ArnResourceTypeBrand] = 'virtualCluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly virtualClusterId: string
  constructor(parameters: VirtualClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.virtualClusterId = parameters.virtualClusterId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/virtualclusters/${this.virtualClusterId}` as const
  }
}
export type { VirtualClusterArn }
export function virtualClusterArn<Partition extends ArnPartition = 'aws'>(parameters: VirtualClusterArnParameters<Partition>) {
  return new VirtualClusterArn<Partition>(parameters)
}

export interface JobRunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly virtualClusterId: string
  readonly jobRunId: string
}
class JobRunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'jobRun', `arn:${string}:emr-containers:${string}:${string}:/virtualclusters/${string}/jobruns/${string}`> {
  readonly [ArnResourceTypeBrand] = 'jobRun' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly virtualClusterId: string
  readonly jobRunId: string
  constructor(parameters: JobRunArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.virtualClusterId = parameters.virtualClusterId
    this.jobRunId = parameters.jobRunId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/virtualclusters/${this.virtualClusterId}/jobruns/${this.jobRunId}` as const
  }
}
export type { JobRunArn }
export function jobRunArn<Partition extends ArnPartition = 'aws'>(parameters: JobRunArnParameters<Partition>) {
  return new JobRunArn<Partition>(parameters)
}

export interface JobTemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobTemplateId: string
}
class JobTemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'jobTemplate', `arn:${string}:emr-containers:${string}:${string}:/jobtemplates/${string}`> {
  readonly [ArnResourceTypeBrand] = 'jobTemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobTemplateId: string
  constructor(parameters: JobTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobTemplateId = parameters.jobTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/jobtemplates/${this.jobTemplateId}` as const
  }
}
export type { JobTemplateArn }
export function jobTemplateArn<Partition extends ArnPartition = 'aws'>(parameters: JobTemplateArnParameters<Partition>) {
  return new JobTemplateArn<Partition>(parameters)
}

export interface ManagedEndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly virtualClusterId: string
  readonly endpointId: string
}
class ManagedEndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'managedEndpoint', `arn:${string}:emr-containers:${string}:${string}:/virtualclusters/${string}/endpoints/${string}`> {
  readonly [ArnResourceTypeBrand] = 'managedEndpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly virtualClusterId: string
  readonly endpointId: string
  constructor(parameters: ManagedEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.virtualClusterId = parameters.virtualClusterId
    this.endpointId = parameters.endpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/virtualclusters/${this.virtualClusterId}/endpoints/${this.endpointId}` as const
  }
}
export type { ManagedEndpointArn }
export function managedEndpointArn<Partition extends ArnPartition = 'aws'>(parameters: ManagedEndpointArnParameters<Partition>) {
  return new ManagedEndpointArn<Partition>(parameters)
}

export interface SecurityConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityConfigurationId: string
}
class SecurityConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'securityConfiguration', `arn:${string}:emr-containers:${string}:${string}:/securityconfigurations/${string}`> {
  readonly [ArnResourceTypeBrand] = 'securityConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityConfigurationId: string
  constructor(parameters: SecurityConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.securityConfigurationId = parameters.securityConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/securityconfigurations/${this.securityConfigurationId}` as const
  }
}
export type { SecurityConfigurationArn }
export function securityConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: SecurityConfigurationArnParameters<Partition>) {
  return new SecurityConfigurationArn<Partition>(parameters)
}
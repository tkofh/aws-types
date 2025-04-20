import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterVirtualArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClusterVirtual: string
}
class ClusterVirtualArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'virtualCluster',
  `arn:${string}:emr-containers:${string}:${string}:/virtualclusters/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'virtualCluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClusterVirtual: string
  constructor(parameters: ClusterVirtualArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idClusterVirtual = parameters.idClusterVirtual
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/virtualclusters/${this.idClusterVirtual}` as const
  }
}
export type { ClusterVirtualArn }
export function clusterVirtualArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterVirtualArnParameters<Partition>,
) {
  return new ClusterVirtualArn<Partition>(parameters)
}

export interface RunJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClusterVirtual: string
  readonly idRunJob: string
}
class RunJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'jobRun',
  `arn:${string}:emr-containers:${string}:${string}:/virtualclusters/${string}/jobruns/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'jobRun' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClusterVirtual: string
  readonly idRunJob: string
  constructor(parameters: RunJobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idClusterVirtual = parameters.idClusterVirtual
    this.idRunJob = parameters.idRunJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/virtualclusters/${this.idClusterVirtual}/jobruns/${this.idRunJob}` as const
  }
}
export type { RunJobArn }
export function runJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunJobArnParameters<Partition>,
) {
  return new RunJobArn<Partition>(parameters)
}

export interface TemplateJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateJob: string
}
class TemplateJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'jobTemplate',
  `arn:${string}:emr-containers:${string}:${string}:/jobtemplates/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'jobTemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateJob: string
  constructor(parameters: TemplateJobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTemplateJob = parameters.idTemplateJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/jobtemplates/${this.idTemplateJob}` as const
  }
}
export type { TemplateJobArn }
export function templateJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateJobArnParameters<Partition>,
) {
  return new TemplateJobArn<Partition>(parameters)
}

export interface EndpointManagedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClusterVirtual: string
  readonly idEndpoint: string
}
class EndpointManagedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'managedEndpoint',
  `arn:${string}:emr-containers:${string}:${string}:/virtualclusters/${string}/endpoints/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'managedEndpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClusterVirtual: string
  readonly idEndpoint: string
  constructor(parameters: EndpointManagedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idClusterVirtual = parameters.idClusterVirtual
    this.idEndpoint = parameters.idEndpoint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/virtualclusters/${this.idClusterVirtual}/endpoints/${this.idEndpoint}` as const
  }
}
export type { EndpointManagedArn }
export function endpointManagedArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointManagedArnParameters<Partition>,
) {
  return new EndpointManagedArn<Partition>(parameters)
}

export interface ConfigurationSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationSecurity: string
}
class ConfigurationSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securityConfiguration',
  `arn:${string}:emr-containers:${string}:${string}:/securityconfigurations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'securityConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationSecurity: string
  constructor(parameters: ConfigurationSecurityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfigurationSecurity = parameters.idConfigurationSecurity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-containers:${this.region}:${this.account}:/securityconfigurations/${this.idConfigurationSecurity}` as const
  }
}
export type { ConfigurationSecurityArn }
export function configurationSecurityArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationSecurityArnParameters<Partition>) {
  return new ConfigurationSecurityArn<Partition>(parameters)
}

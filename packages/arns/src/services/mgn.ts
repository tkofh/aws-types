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
  `arn:${string}:mgn:${string}:${string}:job/${string}`
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
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:job/${this.idJob}` as const
  }
}
export type { ResourceJobArn }
export function resourceJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceJobArnParameters<Partition>,
) {
  return new ResourceJobArn<Partition>(parameters)
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
  `arn:${string}:mgn:${string}:${string}:replication-configuration-template/${string}`
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
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:replication-configuration-template/${this.idTemplateConfigurationReplication}` as const
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
  `arn:${string}:mgn:${string}:${string}:launch-configuration-template/${string}`
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
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:launch-configuration-template/${this.idTemplateConfigurationLaunch}` as const
  }
}
export type { ResourceTemplateConfigurationLaunchArn }
export function resourceTemplateConfigurationLaunchArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ResourceTemplateConfigurationLaunchArnParameters<Partition>) {
  return new ResourceTemplateConfigurationLaunchArn<Partition>(parameters)
}

export interface ResourceClientVcenterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClientCenterV: string
}
class ResourceClientVcenterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'VcenterClientResource',
  `arn:${string}:mgn:${string}:${string}:vcenter-client/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VcenterClientResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClientCenterV: string
  constructor(parameters: ResourceClientVcenterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idClientCenterV = parameters.idClientCenterV
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:vcenter-client/${this.idClientCenterV}` as const
  }
}
export type { ResourceClientVcenterArn }
export function resourceClientVcenterArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ResourceClientVcenterArnParameters<Partition>) {
  return new ResourceClientVcenterArn<Partition>(parameters)
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
  `arn:${string}:mgn:${string}:${string}:source-server/${string}`
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
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:source-server/${this.idServerSource}` as const
  }
}
export type { ResourceServerSourceArn }
export function resourceServerSourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceServerSourceArnParameters<Partition>,
) {
  return new ResourceServerSourceArn<Partition>(parameters)
}

export interface ResourceApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
}
class ResourceApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ApplicationResource',
  `arn:${string}:mgn:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ApplicationResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  constructor(parameters: ResourceApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:application/${this.idApplication}` as const
  }
}
export type { ResourceApplicationArn }
export function resourceApplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceApplicationArnParameters<Partition>,
) {
  return new ResourceApplicationArn<Partition>(parameters)
}

export interface ResourceWaveArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWave: string
}
class ResourceWaveArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'WaveResource',
  `arn:${string}:mgn:${string}:${string}:wave/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'WaveResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWave: string
  constructor(parameters: ResourceWaveArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWave = parameters.idWave
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:wave/${this.idWave}` as const
  }
}
export type { ResourceWaveArn }
export function resourceWaveArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceWaveArnParameters<Partition>,
) {
  return new ResourceWaveArn<Partition>(parameters)
}

export interface ResourceImportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idImport: string
}
class ResourceImportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ImportResource',
  `arn:${string}:mgn:${string}:${string}:import/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ImportResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idImport: string
  constructor(parameters: ResourceImportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idImport = parameters.idImport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:import/${this.idImport}` as const
  }
}
export type { ResourceImportArn }
export function resourceImportArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceImportArnParameters<Partition>,
) {
  return new ResourceImportArn<Partition>(parameters)
}

export interface ResourceExportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExport: string
}
class ResourceExportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ExportResource',
  `arn:${string}:mgn:${string}:${string}:export/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ExportResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExport: string
  constructor(parameters: ResourceExportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idExport = parameters.idExport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:export/${this.idExport}` as const
  }
}
export type { ResourceExportArn }
export function resourceExportArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceExportArnParameters<Partition>,
) {
  return new ResourceExportArn<Partition>(parameters)
}

export interface ResourceConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
}
class ResourceConnectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ConnectorResource',
  `arn:${string}:mgn:${string}:${string}:connector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ConnectorResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  constructor(parameters: ResourceConnectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnector = parameters.idConnector
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:connector/${this.idConnector}` as const
  }
}
export type { ResourceConnectorArn }
export function resourceConnectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceConnectorArnParameters<Partition>,
) {
  return new ResourceConnectorArn<Partition>(parameters)
}

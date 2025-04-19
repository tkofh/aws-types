import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface JobResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class JobResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'JobResource',
  `arn:${string}:mgn:${string}:${string}:job/${string}`
> {
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
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:job/${this.jobId}` as const
  }
}
export type { JobResourceArn }
export function jobResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobResourceArnParameters<Partition>,
) {
  return new JobResourceArn<Partition>(parameters)
}

export interface ReplicationConfigurationTemplateResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicationConfigurationTemplateId: string
}
class ReplicationConfigurationTemplateResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ReplicationConfigurationTemplateResource',
  `arn:${string}:mgn:${string}:${string}:replication-configuration-template/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'ReplicationConfigurationTemplateResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly replicationConfigurationTemplateId: string
  constructor(
    parameters: ReplicationConfigurationTemplateResourceArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.replicationConfigurationTemplateId =
      parameters.replicationConfigurationTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:replication-configuration-template/${this.replicationConfigurationTemplateId}` as const
  }
}
export type { ReplicationConfigurationTemplateResourceArn }
export function replicationConfigurationTemplateResourceArn<
  Partition extends ArnPartition = 'aws',
>(
  parameters: ReplicationConfigurationTemplateResourceArnParameters<Partition>,
) {
  return new ReplicationConfigurationTemplateResourceArn<Partition>(parameters)
}

export interface LaunchConfigurationTemplateResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly launchConfigurationTemplateId: string
}
class LaunchConfigurationTemplateResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'LaunchConfigurationTemplateResource',
  `arn:${string}:mgn:${string}:${string}:launch-configuration-template/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'LaunchConfigurationTemplateResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly launchConfigurationTemplateId: string
  constructor(
    parameters: LaunchConfigurationTemplateResourceArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.launchConfigurationTemplateId =
      parameters.launchConfigurationTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:launch-configuration-template/${this.launchConfigurationTemplateId}` as const
  }
}
export type { LaunchConfigurationTemplateResourceArn }
export function launchConfigurationTemplateResourceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: LaunchConfigurationTemplateResourceArnParameters<Partition>) {
  return new LaunchConfigurationTemplateResourceArn<Partition>(parameters)
}

export interface VcenterClientResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vcenterClientId: string
}
class VcenterClientResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'VcenterClientResource',
  `arn:${string}:mgn:${string}:${string}:vcenter-client/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VcenterClientResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vcenterClientId: string
  constructor(parameters: VcenterClientResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vcenterClientId = parameters.vcenterClientId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:vcenter-client/${this.vcenterClientId}` as const
  }
}
export type { VcenterClientResourceArn }
export function vcenterClientResourceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VcenterClientResourceArnParameters<Partition>) {
  return new VcenterClientResourceArn<Partition>(parameters)
}

export interface SourceServerResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceServerId: string
}
class SourceServerResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SourceServerResource',
  `arn:${string}:mgn:${string}:${string}:source-server/${string}`
> {
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
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:source-server/${this.sourceServerId}` as const
  }
}
export type { SourceServerResourceArn }
export function sourceServerResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SourceServerResourceArnParameters<Partition>,
) {
  return new SourceServerResourceArn<Partition>(parameters)
}

export interface ApplicationResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
}
class ApplicationResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ApplicationResource',
  `arn:${string}:mgn:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ApplicationResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  constructor(parameters: ApplicationResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:application/${this.applicationId}` as const
  }
}
export type { ApplicationResourceArn }
export function applicationResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationResourceArnParameters<Partition>,
) {
  return new ApplicationResourceArn<Partition>(parameters)
}

export interface WaveResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly waveId: string
}
class WaveResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'WaveResource',
  `arn:${string}:mgn:${string}:${string}:wave/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'WaveResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly waveId: string
  constructor(parameters: WaveResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.waveId = parameters.waveId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:wave/${this.waveId}` as const
  }
}
export type { WaveResourceArn }
export function waveResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: WaveResourceArnParameters<Partition>,
) {
  return new WaveResourceArn<Partition>(parameters)
}

export interface ImportResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importId: string
}
class ImportResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ImportResource',
  `arn:${string}:mgn:${string}:${string}:import/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ImportResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importId: string
  constructor(parameters: ImportResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.importId = parameters.importId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:import/${this.importId}` as const
  }
}
export type { ImportResourceArn }
export function importResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImportResourceArnParameters<Partition>,
) {
  return new ImportResourceArn<Partition>(parameters)
}

export interface ExportResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly exportId: string
}
class ExportResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ExportResource',
  `arn:${string}:mgn:${string}:${string}:export/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ExportResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly exportId: string
  constructor(parameters: ExportResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.exportId = parameters.exportId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:export/${this.exportId}` as const
  }
}
export type { ExportResourceArn }
export function exportResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportResourceArnParameters<Partition>,
) {
  return new ExportResourceArn<Partition>(parameters)
}

export interface ConnectorResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
}
class ConnectorResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ConnectorResource',
  `arn:${string}:mgn:${string}:${string}:connector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ConnectorResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  constructor(parameters: ConnectorResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorId = parameters.connectorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgn:${this.region}:${this.account}:connector/${this.connectorId}` as const
  }
}
export type { ConnectorResourceArn }
export function connectorResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorResourceArnParameters<Partition>,
) {
  return new ConnectorResourceArn<Partition>(parameters)
}

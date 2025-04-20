import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Domain',
  `arn:${string}:lightsail:${string}:${string}:Domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Domain' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:Domain/${this.id}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Instance',
  `arn:${string}:lightsail:${string}:${string}:Instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:Instance/${this.id}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface SnapshotInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class SnapshotInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'InstanceSnapshot',
  `arn:${string}:lightsail:${string}:${string}:InstanceSnapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'InstanceSnapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: SnapshotInstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:InstanceSnapshot/${this.id}` as const
  }
}
export type { SnapshotInstanceArn }
export function snapshotInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotInstanceArnParameters<Partition>,
) {
  return new SnapshotInstanceArn<Partition>(parameters)
}

export interface PairKeyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class PairKeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'KeyPair',
  `arn:${string}:lightsail:${string}:${string}:KeyPair/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'KeyPair' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: PairKeyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:KeyPair/${this.id}` as const
  }
}
export type { PairKeyArn }
export function pairKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PairKeyArnParameters<Partition>,
) {
  return new PairKeyArn<Partition>(parameters)
}

export interface IpStaticArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class IpStaticArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'StaticIp',
  `arn:${string}:lightsail:${string}:${string}:StaticIp/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'StaticIp' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: IpStaticArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:StaticIp/${this.id}` as const
  }
}
export type { IpStaticArn }
export function ipStaticArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpStaticArnParameters<Partition>,
) {
  return new IpStaticArn<Partition>(parameters)
}

export interface DiskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class DiskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Disk',
  `arn:${string}:lightsail:${string}:${string}:Disk/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Disk' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: DiskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:Disk/${this.id}` as const
  }
}
export type { DiskArn }
export function diskArn<Partition extends ArnPartition = 'aws'>(
  parameters: DiskArnParameters<Partition>,
) {
  return new DiskArn<Partition>(parameters)
}

export interface SnapshotDiskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class SnapshotDiskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DiskSnapshot',
  `arn:${string}:lightsail:${string}:${string}:DiskSnapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DiskSnapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: SnapshotDiskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:DiskSnapshot/${this.id}` as const
  }
}
export type { SnapshotDiskArn }
export function snapshotDiskArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotDiskArnParameters<Partition>,
) {
  return new SnapshotDiskArn<Partition>(parameters)
}

export interface BalancerLoadArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class BalancerLoadArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'LoadBalancer',
  `arn:${string}:lightsail:${string}:${string}:LoadBalancer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'LoadBalancer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: BalancerLoadArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:LoadBalancer/${this.id}` as const
  }
}
export type { BalancerLoadArn }
export function balancerLoadArn<Partition extends ArnPartition = 'aws'>(
  parameters: BalancerLoadArnParameters<Partition>,
) {
  return new BalancerLoadArn<Partition>(parameters)
}

export interface CertificateTlsBalancerLoadArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class CertificateTlsBalancerLoadArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'LoadBalancerTlsCertificate',
  `arn:${string}:lightsail:${string}:${string}:LoadBalancerTlsCertificate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'LoadBalancerTlsCertificate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: CertificateTlsBalancerLoadArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:LoadBalancerTlsCertificate/${this.id}` as const
  }
}
export type { CertificateTlsBalancerLoadArn }
export function certificateTlsBalancerLoadArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CertificateTlsBalancerLoadArnParameters<Partition>) {
  return new CertificateTlsBalancerLoadArn<Partition>(parameters)
}

export interface RecordSnapshotExportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class RecordSnapshotExportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ExportSnapshotRecord',
  `arn:${string}:lightsail:${string}:${string}:ExportSnapshotRecord/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ExportSnapshotRecord' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: RecordSnapshotExportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:ExportSnapshotRecord/${this.id}` as const
  }
}
export type { RecordSnapshotExportArn }
export function recordSnapshotExportArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecordSnapshotExportArnParameters<Partition>,
) {
  return new RecordSnapshotExportArn<Partition>(parameters)
}

export interface RecordStackFormationCloudArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class RecordStackFormationCloudArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'CloudFormationStackRecord',
  `arn:${string}:lightsail:${string}:${string}:CloudFormationStackRecord/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'CloudFormationStackRecord' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: RecordStackFormationCloudArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:CloudFormationStackRecord/${this.id}` as const
  }
}
export type { RecordStackFormationCloudArn }
export function recordStackFormationCloudArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RecordStackFormationCloudArnParameters<Partition>) {
  return new RecordStackFormationCloudArn<Partition>(parameters)
}

export interface DatabaseRelationalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class DatabaseRelationalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RelationalDatabase',
  `arn:${string}:lightsail:${string}:${string}:RelationalDatabase/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RelationalDatabase' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: DatabaseRelationalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:RelationalDatabase/${this.id}` as const
  }
}
export type { DatabaseRelationalArn }
export function databaseRelationalArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatabaseRelationalArnParameters<Partition>,
) {
  return new DatabaseRelationalArn<Partition>(parameters)
}

export interface SnapshotDatabaseRelationalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class SnapshotDatabaseRelationalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RelationalDatabaseSnapshot',
  `arn:${string}:lightsail:${string}:${string}:RelationalDatabaseSnapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RelationalDatabaseSnapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: SnapshotDatabaseRelationalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:RelationalDatabaseSnapshot/${this.id}` as const
  }
}
export type { SnapshotDatabaseRelationalArn }
export function snapshotDatabaseRelationalArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SnapshotDatabaseRelationalArnParameters<Partition>) {
  return new SnapshotDatabaseRelationalArn<Partition>(parameters)
}

export interface AlarmArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class AlarmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Alarm',
  `arn:${string}:lightsail:${string}:${string}:Alarm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Alarm' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: AlarmArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:Alarm/${this.id}` as const
  }
}
export type { AlarmArn }
export function alarmArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlarmArnParameters<Partition>,
) {
  return new AlarmArn<Partition>(parameters)
}

export interface CertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class CertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Certificate',
  `arn:${string}:lightsail:${string}:${string}:Certificate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Certificate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:Certificate/${this.id}` as const
  }
}
export type { CertificateArn }
export function certificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateArnParameters<Partition>,
) {
  return new CertificateArn<Partition>(parameters)
}

export interface MethodContactArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class MethodContactArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ContactMethod',
  `arn:${string}:lightsail:${string}:${string}:ContactMethod/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ContactMethod' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: MethodContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:ContactMethod/${this.id}` as const
  }
}
export type { MethodContactArn }
export function methodContactArn<Partition extends ArnPartition = 'aws'>(
  parameters: MethodContactArnParameters<Partition>,
) {
  return new MethodContactArn<Partition>(parameters)
}

export interface ServiceContainerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class ServiceContainerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ContainerService',
  `arn:${string}:lightsail:${string}:${string}:ContainerService/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ContainerService' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: ServiceContainerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:ContainerService/${this.id}` as const
  }
}
export type { ServiceContainerArn }
export function serviceContainerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceContainerArnParameters<Partition>,
) {
  return new ServiceContainerArn<Partition>(parameters)
}

export interface DistributionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class DistributionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Distribution',
  `arn:${string}:lightsail:${string}:${string}:Distribution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Distribution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: DistributionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:Distribution/${this.id}` as const
  }
}
export type { DistributionArn }
export function distributionArn<Partition extends ArnPartition = 'aws'>(
  parameters: DistributionArnParameters<Partition>,
) {
  return new DistributionArn<Partition>(parameters)
}

export interface BucketArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Bucket',
  `arn:${string}:lightsail:${string}:${string}:Bucket/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Bucket' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly id: string
  constructor(parameters: BucketArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:Bucket/${this.id}` as const
  }
}
export type { BucketArn }
export function bucketArn<Partition extends ArnPartition = 'aws'>(
  parameters: BucketArnParameters<Partition>,
) {
  return new BucketArn<Partition>(parameters)
}

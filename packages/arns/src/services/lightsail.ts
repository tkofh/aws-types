import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Domain',
  `arn:${string}:lightsail:${string}:${string}:Domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Domain' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Instance',
  `arn:${string}:lightsail:${string}:${string}:Instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

export interface InstanceSnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class InstanceSnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'InstanceSnapshot',
  `arn:${string}:lightsail:${string}:${string}:InstanceSnapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'InstanceSnapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: InstanceSnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:InstanceSnapshot/${this.id}` as const
  }
}
export type { InstanceSnapshotArn }
export function instanceSnapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceSnapshotArnParameters<Partition>,
) {
  return new InstanceSnapshotArn<Partition>(parameters)
}

export interface KeyPairArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class KeyPairArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'KeyPair',
  `arn:${string}:lightsail:${string}:${string}:KeyPair/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'KeyPair' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: KeyPairArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:KeyPair/${this.id}` as const
  }
}
export type { KeyPairArn }
export function keyPairArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyPairArnParameters<Partition>,
) {
  return new KeyPairArn<Partition>(parameters)
}

export interface StaticIpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class StaticIpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'StaticIp',
  `arn:${string}:lightsail:${string}:${string}:StaticIp/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'StaticIp' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: StaticIpArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:StaticIp/${this.id}` as const
  }
}
export type { StaticIpArn }
export function staticIpArn<Partition extends ArnPartition = 'aws'>(
  parameters: StaticIpArnParameters<Partition>,
) {
  return new StaticIpArn<Partition>(parameters)
}

export interface DiskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class DiskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Disk',
  `arn:${string}:lightsail:${string}:${string}:Disk/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Disk' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: DiskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

export interface DiskSnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class DiskSnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DiskSnapshot',
  `arn:${string}:lightsail:${string}:${string}:DiskSnapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DiskSnapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: DiskSnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:DiskSnapshot/${this.id}` as const
  }
}
export type { DiskSnapshotArn }
export function diskSnapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: DiskSnapshotArnParameters<Partition>,
) {
  return new DiskSnapshotArn<Partition>(parameters)
}

export interface LoadBalancerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class LoadBalancerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'LoadBalancer',
  `arn:${string}:lightsail:${string}:${string}:LoadBalancer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'LoadBalancer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: LoadBalancerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:LoadBalancer/${this.id}` as const
  }
}
export type { LoadBalancerArn }
export function loadBalancerArn<Partition extends ArnPartition = 'aws'>(
  parameters: LoadBalancerArnParameters<Partition>,
) {
  return new LoadBalancerArn<Partition>(parameters)
}

export interface LoadBalancerTlsCertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class LoadBalancerTlsCertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'LoadBalancerTlsCertificate',
  `arn:${string}:lightsail:${string}:${string}:LoadBalancerTlsCertificate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'LoadBalancerTlsCertificate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: LoadBalancerTlsCertificateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:LoadBalancerTlsCertificate/${this.id}` as const
  }
}
export type { LoadBalancerTlsCertificateArn }
export function loadBalancerTlsCertificateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: LoadBalancerTlsCertificateArnParameters<Partition>) {
  return new LoadBalancerTlsCertificateArn<Partition>(parameters)
}

export interface ExportSnapshotRecordArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ExportSnapshotRecordArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ExportSnapshotRecord',
  `arn:${string}:lightsail:${string}:${string}:ExportSnapshotRecord/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ExportSnapshotRecord' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ExportSnapshotRecordArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:ExportSnapshotRecord/${this.id}` as const
  }
}
export type { ExportSnapshotRecordArn }
export function exportSnapshotRecordArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportSnapshotRecordArnParameters<Partition>,
) {
  return new ExportSnapshotRecordArn<Partition>(parameters)
}

export interface CloudFormationStackRecordArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class CloudFormationStackRecordArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'CloudFormationStackRecord',
  `arn:${string}:lightsail:${string}:${string}:CloudFormationStackRecord/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'CloudFormationStackRecord' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: CloudFormationStackRecordArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:CloudFormationStackRecord/${this.id}` as const
  }
}
export type { CloudFormationStackRecordArn }
export function cloudFormationStackRecordArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CloudFormationStackRecordArnParameters<Partition>) {
  return new CloudFormationStackRecordArn<Partition>(parameters)
}

export interface RelationalDatabaseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RelationalDatabaseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RelationalDatabase',
  `arn:${string}:lightsail:${string}:${string}:RelationalDatabase/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RelationalDatabase' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RelationalDatabaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:RelationalDatabase/${this.id}` as const
  }
}
export type { RelationalDatabaseArn }
export function relationalDatabaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: RelationalDatabaseArnParameters<Partition>,
) {
  return new RelationalDatabaseArn<Partition>(parameters)
}

export interface RelationalDatabaseSnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RelationalDatabaseSnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RelationalDatabaseSnapshot',
  `arn:${string}:lightsail:${string}:${string}:RelationalDatabaseSnapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RelationalDatabaseSnapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RelationalDatabaseSnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:RelationalDatabaseSnapshot/${this.id}` as const
  }
}
export type { RelationalDatabaseSnapshotArn }
export function relationalDatabaseSnapshotArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RelationalDatabaseSnapshotArnParameters<Partition>) {
  return new RelationalDatabaseSnapshotArn<Partition>(parameters)
}

export interface AlarmArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class AlarmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Alarm',
  `arn:${string}:lightsail:${string}:${string}:Alarm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Alarm' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: AlarmArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
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
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

export interface ContactMethodArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ContactMethodArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ContactMethod',
  `arn:${string}:lightsail:${string}:${string}:ContactMethod/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ContactMethod' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ContactMethodArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:ContactMethod/${this.id}` as const
  }
}
export type { ContactMethodArn }
export function contactMethodArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactMethodArnParameters<Partition>,
) {
  return new ContactMethodArn<Partition>(parameters)
}

export interface ContainerServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ContainerServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ContainerService',
  `arn:${string}:lightsail:${string}:${string}:ContainerService/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ContainerService' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ContainerServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lightsail:${this.region}:${this.account}:ContainerService/${this.id}` as const
  }
}
export type { ContainerServiceArn }
export function containerServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContainerServiceArnParameters<Partition>,
) {
  return new ContainerServiceArn<Partition>(parameters)
}

export interface DistributionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
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
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: DistributionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Bucket',
  `arn:${string}:lightsail:${string}:${string}:Bucket/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Bucket' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: BucketArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

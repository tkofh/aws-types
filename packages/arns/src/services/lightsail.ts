export interface DomainArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type DomainArn = `arn:${string}:lightsail:${string}:${string}:Domain/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:Domain/${parameters.id}`
}

export interface InstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type InstanceArn = `arn:${string}:lightsail:${string}:${string}:Instance/${string}`
export function instanceArn(parameters: InstanceArnParameters): InstanceArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:Instance/${parameters.id}`
}

export interface InstanceSnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type InstanceSnapshotArn = `arn:${string}:lightsail:${string}:${string}:InstanceSnapshot/${string}`
export function instanceSnapshotArn(parameters: InstanceSnapshotArnParameters): InstanceSnapshotArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:InstanceSnapshot/${parameters.id}`
}

export interface KeyPairArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type KeyPairArn = `arn:${string}:lightsail:${string}:${string}:KeyPair/${string}`
export function keyPairArn(parameters: KeyPairArnParameters): KeyPairArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:KeyPair/${parameters.id}`
}

export interface StaticIpArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type StaticIpArn = `arn:${string}:lightsail:${string}:${string}:StaticIp/${string}`
export function staticIpArn(parameters: StaticIpArnParameters): StaticIpArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:StaticIp/${parameters.id}`
}

export interface DiskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type DiskArn = `arn:${string}:lightsail:${string}:${string}:Disk/${string}`
export function diskArn(parameters: DiskArnParameters): DiskArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:Disk/${parameters.id}`
}

export interface DiskSnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type DiskSnapshotArn = `arn:${string}:lightsail:${string}:${string}:DiskSnapshot/${string}`
export function diskSnapshotArn(parameters: DiskSnapshotArnParameters): DiskSnapshotArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:DiskSnapshot/${parameters.id}`
}

export interface LoadBalancerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type LoadBalancerArn = `arn:${string}:lightsail:${string}:${string}:LoadBalancer/${string}`
export function loadBalancerArn(parameters: LoadBalancerArnParameters): LoadBalancerArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:LoadBalancer/${parameters.id}`
}

export interface LoadBalancerTlsCertificateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type LoadBalancerTlsCertificateArn = `arn:${string}:lightsail:${string}:${string}:LoadBalancerTlsCertificate/${string}`
export function loadBalancerTlsCertificateArn(parameters: LoadBalancerTlsCertificateArnParameters): LoadBalancerTlsCertificateArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:LoadBalancerTlsCertificate/${parameters.id}`
}

export interface ExportSnapshotRecordArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ExportSnapshotRecordArn = `arn:${string}:lightsail:${string}:${string}:ExportSnapshotRecord/${string}`
export function exportSnapshotRecordArn(parameters: ExportSnapshotRecordArnParameters): ExportSnapshotRecordArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:ExportSnapshotRecord/${parameters.id}`
}

export interface CloudFormationStackRecordArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type CloudFormationStackRecordArn = `arn:${string}:lightsail:${string}:${string}:CloudFormationStackRecord/${string}`
export function cloudFormationStackRecordArn(parameters: CloudFormationStackRecordArnParameters): CloudFormationStackRecordArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:CloudFormationStackRecord/${parameters.id}`
}

export interface RelationalDatabaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type RelationalDatabaseArn = `arn:${string}:lightsail:${string}:${string}:RelationalDatabase/${string}`
export function relationalDatabaseArn(parameters: RelationalDatabaseArnParameters): RelationalDatabaseArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:RelationalDatabase/${parameters.id}`
}

export interface RelationalDatabaseSnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type RelationalDatabaseSnapshotArn = `arn:${string}:lightsail:${string}:${string}:RelationalDatabaseSnapshot/${string}`
export function relationalDatabaseSnapshotArn(parameters: RelationalDatabaseSnapshotArnParameters): RelationalDatabaseSnapshotArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:RelationalDatabaseSnapshot/${parameters.id}`
}

export interface AlarmArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type AlarmArn = `arn:${string}:lightsail:${string}:${string}:Alarm/${string}`
export function alarmArn(parameters: AlarmArnParameters): AlarmArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:Alarm/${parameters.id}`
}

export interface CertificateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type CertificateArn = `arn:${string}:lightsail:${string}:${string}:Certificate/${string}`
export function certificateArn(parameters: CertificateArnParameters): CertificateArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:Certificate/${parameters.id}`
}

export interface ContactMethodArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ContactMethodArn = `arn:${string}:lightsail:${string}:${string}:ContactMethod/${string}`
export function contactMethodArn(parameters: ContactMethodArnParameters): ContactMethodArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:ContactMethod/${parameters.id}`
}

export interface ContainerServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type ContainerServiceArn = `arn:${string}:lightsail:${string}:${string}:ContainerService/${string}`
export function containerServiceArn(parameters: ContainerServiceArnParameters): ContainerServiceArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:ContainerService/${parameters.id}`
}

export interface DistributionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type DistributionArn = `arn:${string}:lightsail:${string}:${string}:Distribution/${string}`
export function distributionArn(parameters: DistributionArnParameters): DistributionArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:Distribution/${parameters.id}`
}

export interface BucketArnParameters {
  partition?: string | undefined
  region: string
  account: string
  id: string
}
export type BucketArn = `arn:${string}:lightsail:${string}:${string}:Bucket/${string}`
export function bucketArn(parameters: BucketArnParameters): BucketArn {
  return `arn:${parameters.partition ?? ''}:lightsail:${parameters.region}:${parameters.account}:Bucket/${parameters.id}`
}
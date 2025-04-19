import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceId: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'device', `arn:${string}:panorama:${string}:${string}:device/${string}`> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceId: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceId = parameters.deviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:panorama:${this.region}:${this.account}:device/${this.deviceId}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(parameters: DeviceArnParameters<Partition>) {
  return new DeviceArn<Partition>(parameters)
}

export interface PackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packageId: string
}
class PackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'package', `arn:${string}:panorama:${string}:${string}:package/${string}`> {
  readonly [ArnResourceTypeBrand] = 'package' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packageId: string
  constructor(parameters: PackageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.packageId = parameters.packageId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:panorama:${this.region}:${this.account}:package/${this.packageId}` as const
  }
}
export type { PackageArn }
export function packageArn<Partition extends ArnPartition = 'aws'>(parameters: PackageArnParameters<Partition>) {
  return new PackageArn<Partition>(parameters)
}

export interface ApplicationInstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationInstanceId: string
}
class ApplicationInstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'applicationInstance', `arn:${string}:panorama:${string}:${string}:applicationInstance/${string}`> {
  readonly [ArnResourceTypeBrand] = 'applicationInstance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationInstanceId: string
  constructor(parameters: ApplicationInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationInstanceId = parameters.applicationInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:panorama:${this.region}:${this.account}:applicationInstance/${this.applicationInstanceId}` as const
  }
}
export type { ApplicationInstanceArn }
export function applicationInstanceArn<Partition extends ArnPartition = 'aws'>(parameters: ApplicationInstanceArnParameters<Partition>) {
  return new ApplicationInstanceArn<Partition>(parameters)
}
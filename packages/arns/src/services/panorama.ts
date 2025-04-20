import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDevice: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:panorama:${string}:${string}:device/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDevice: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDevice = parameters.idDevice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:panorama:${this.region}:${this.account}:device/${this.idDevice}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface PackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPackage: string
}
class PackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'package',
  `arn:${string}:panorama:${string}:${string}:package/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'package' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPackage: string
  constructor(parameters: PackageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPackage = parameters.idPackage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:panorama:${this.region}:${this.account}:package/${this.idPackage}` as const
  }
}
export type { PackageArn }
export function packageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageArnParameters<Partition>,
) {
  return new PackageArn<Partition>(parameters)
}

export interface InstanceApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceApplication: string
}
class InstanceApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'applicationInstance',
  `arn:${string}:panorama:${string}:${string}:applicationInstance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'applicationInstance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceApplication: string
  constructor(parameters: InstanceApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstanceApplication = parameters.idInstanceApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:panorama:${this.region}:${this.account}:applicationInstance/${this.idInstanceApplication}` as const
  }
}
export type { InstanceApplicationArn }
export function instanceApplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceApplicationArnParameters<Partition>,
) {
  return new InstanceApplicationArn<Partition>(parameters)
}

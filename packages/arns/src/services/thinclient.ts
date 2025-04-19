import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:thinclient:${string}:${string}:environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:thinclient:${this.region}:${this.account}:environment/${this.environmentId}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceId: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:thinclient:${string}:${string}:device/${string}`
> {
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
    return `arn:${this.partition}:thinclient:${this.region}:${this.account}:device/${this.deviceId}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface SoftwaresetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly softwareSetId: string
}
class SoftwaresetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'softwareset',
  `arn:${string}:thinclient:${string}:${string}:softwareset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'softwareset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly softwareSetId: string
  constructor(parameters: SoftwaresetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.softwareSetId = parameters.softwareSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:thinclient:${this.region}:${this.account}:softwareset/${this.softwareSetId}` as const
  }
}
export type { SoftwaresetArn }
export function softwaresetArn<Partition extends ArnPartition = 'aws'>(
  parameters: SoftwaresetArnParameters<Partition>,
) {
  return new SoftwaresetArn<Partition>(parameters)
}

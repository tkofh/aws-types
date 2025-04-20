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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:thinclient:${string}:${string}:environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:thinclient:${this.region}:${this.account}:environment/${this.idEnvironment}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDevice: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:thinclient:${string}:${string}:device/${string}`
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
    return `arn:${this.partition}:thinclient:${this.region}:${this.account}:device/${this.idDevice}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface SetSoftwareArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetSoftware: string
}
class SetSoftwareArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'softwareset',
  `arn:${string}:thinclient:${string}:${string}:softwareset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'softwareset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetSoftware: string
  constructor(parameters: SetSoftwareArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSetSoftware = parameters.idSetSoftware
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:thinclient:${this.region}:${this.account}:softwareset/${this.idSetSoftware}` as const
  }
}
export type { SetSoftwareArn }
export function setSoftwareArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetSoftwareArnParameters<Partition>,
) {
  return new SetSoftwareArn<Partition>(parameters)
}

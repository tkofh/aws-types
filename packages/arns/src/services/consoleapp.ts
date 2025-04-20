import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IdentityDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idDevice: string
  readonly idIdentity: string
}
class IdentityDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DeviceIdentity',
  `arn:${string}:consoleapp::${string}:device/${string}/identity/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DeviceIdentity' as const
  readonly partition: string
  readonly account: string
  readonly idDevice: string
  readonly idIdentity: string
  constructor(parameters: IdentityDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idDevice = parameters.idDevice
    this.idIdentity = parameters.idIdentity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:consoleapp::${this.account}:device/${this.idDevice}/identity/${this.idIdentity}` as const
  }
}
export type { IdentityDeviceArn }
export function identityDeviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentityDeviceArnParameters<Partition>,
) {
  return new IdentityDeviceArn<Partition>(parameters)
}

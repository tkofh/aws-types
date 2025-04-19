import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeviceIdentityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly deviceId: string
  readonly identityId: string
}
class DeviceIdentityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DeviceIdentity',
  `arn:${string}:consoleapp::${string}:device/${string}/identity/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DeviceIdentity' as const
  readonly partition: Partition
  readonly account: string
  readonly deviceId: string
  readonly identityId: string
  constructor(parameters: DeviceIdentityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.deviceId = parameters.deviceId
    this.identityId = parameters.identityId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:consoleapp::${this.account}:device/${this.deviceId}/identity/${this.identityId}` as const
  }
}
export type { DeviceIdentityArn }
export function deviceIdentityArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceIdentityArnParameters<Partition>,
) {
  return new DeviceIdentityArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PermissionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idRequestPermission: string
}
class PermissionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'permission',
  `arn:${string}:iq-permission:${string}::permission/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'permission' as const
  readonly partition: string
  readonly region: string
  readonly idRequestPermission: string
  constructor(parameters: PermissionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idRequestPermission = parameters.idRequestPermission
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq-permission:${this.region}::permission/${this.idRequestPermission}` as const
  }
}
export type { PermissionArn }
export function permissionArn<Partition extends ArnPartition = 'aws'>(
  parameters: PermissionArnParameters<Partition>,
) {
  return new PermissionArn<Partition>(parameters)
}

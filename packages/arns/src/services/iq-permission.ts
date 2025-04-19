import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface PermissionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly permissionRequestId: string
}
class PermissionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'permission', `arn:${string}:iq-permission:${string}::permission/${string}`> {
  readonly [ArnResourceTypeBrand] = 'permission' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly permissionRequestId: string
  constructor(parameters: PermissionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.permissionRequestId = parameters.permissionRequestId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iq-permission:${this.region}::permission/${this.permissionRequestId}` as const
  }
}
export type { PermissionArn }
export function permissionArn<Partition extends ArnPartition = 'aws'>(parameters: PermissionArnParameters<Partition>) {
  return new PermissionArn<Partition>(parameters)
}
import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ManagedDeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ManagedDeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'managed-device', `arn:${string}:snow-device-management:${string}:${string}:managed-device/${string}`> {
  readonly [ArnResourceTypeBrand] = 'managed-device' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ManagedDeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:snow-device-management:${this.region}:${this.account}:managed-device/${this.resourceId}` as const
  }
}
export type { ManagedDeviceArn }
export function managedDeviceArn<Partition extends ArnPartition = 'aws'>(parameters: ManagedDeviceArnParameters<Partition>) {
  return new ManagedDeviceArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'task', `arn:${string}:snow-device-management:${string}:${string}:task/${string}`> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:snow-device-management:${this.region}:${this.account}:task/${this.resourceId}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(parameters: TaskArnParameters<Partition>) {
  return new TaskArn<Partition>(parameters)
}
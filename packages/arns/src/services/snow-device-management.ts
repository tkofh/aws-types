import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeviceManagedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class DeviceManagedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'managed-device',
  `arn:${string}:snow-device-management:${string}:${string}:managed-device/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'managed-device' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: DeviceManagedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:snow-device-management:${this.region}:${this.account}:managed-device/${this.idResource}` as const
  }
}
export type { DeviceManagedArn }
export function deviceManagedArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceManagedArnParameters<Partition>,
) {
  return new DeviceManagedArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'task',
  `arn:${string}:snow-device-management:${string}:${string}:task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:snow-device-management:${this.region}:${this.account}:task/${this.idResource}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskArnParameters<Partition>,
) {
  return new TaskArn<Partition>(parameters)
}

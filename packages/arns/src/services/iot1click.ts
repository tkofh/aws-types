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
  `arn:${string}:iot1click:${string}:${string}:devices/${string}`
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
    return `arn:${this.partition}:iot1click:${this.region}:${this.account}:devices/${this.idDevice}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:iot1click:${string}:${string}:projects/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot1click:${this.region}:${this.account}:projects/${this.nameProject}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

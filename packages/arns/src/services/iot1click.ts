import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceId: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'device', `arn:${string}:iot1click:${string}:${string}:devices/${string}`> {
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
    return `arn:${this.partition}:iot1click:${this.region}:${this.account}:devices/${this.deviceId}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(parameters: DeviceArnParameters<Partition>) {
  return new DeviceArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'project', `arn:${string}:iot1click:${string}:${string}:projects/${string}`> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot1click:${this.region}:${this.account}:projects/${this.projectName}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(parameters: ProjectArnParameters<Partition>) {
  return new ProjectArn<Partition>(parameters)
}
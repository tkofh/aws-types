import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceName: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:deeplens:${string}:${string}:device/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceName: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceName = parameters.deviceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deeplens:${this.region}:${this.account}:device/${this.deviceName}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:deeplens:${string}:${string}:project/${string}`
> {
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
    return `arn:${this.partition}:deeplens:${this.region}:${this.account}:project/${this.projectName}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model',
  `arn:${string}:deeplens:${string}:${string}:model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelName: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelName = parameters.modelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deeplens:${this.region}:${this.account}:model/${this.modelName}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelArnParameters<Partition>,
) {
  return new ModelArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly modelVersion: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'model', `arn:${string}:lookoutvision:${string}:${string}:model/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
  readonly modelVersion: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectName = parameters.projectName
    this.modelVersion = parameters.modelVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutvision:${this.region}:${this.account}:model/${this.projectName}/${this.modelVersion}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(parameters: ModelArnParameters<Partition>) {
  return new ModelArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectName: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'project', `arn:${string}:lookoutvision:${string}:${string}:project/${string}`> {
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
    return `arn:${this.partition}:lookoutvision:${this.region}:${this.account}:project/${this.projectName}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(parameters: ProjectArnParameters<Partition>) {
  return new ProjectArn<Partition>(parameters)
}
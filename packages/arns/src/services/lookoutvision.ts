import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly versionModel: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model',
  `arn:${string}:lookoutvision:${string}:${string}:model/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
  readonly versionModel: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProject = parameters.nameProject
    this.versionModel = parameters.versionModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutvision:${this.region}:${this.account}:model/${this.nameProject}/${this.versionModel}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelArnParameters<Partition>,
) {
  return new ModelArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProject: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:lookoutvision:${string}:${string}:project/${string}`
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
    return `arn:${this.partition}:lookoutvision:${this.region}:${this.account}:project/${this.nameProject}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

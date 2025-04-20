import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:monitron:${string}:${string}:project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:monitron:${this.region}:${this.account}:project/${this.idResource}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

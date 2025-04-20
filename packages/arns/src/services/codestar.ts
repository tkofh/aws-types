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
  readonly idProject: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:codestar:${string}:${string}:project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProject: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProject = parameters.idProject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar:${this.region}:${this.account}:project/${this.idProject}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly nameUserAws: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:iam::${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly account: string
  readonly nameUserAws: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameUserAws = parameters.nameUserAws
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:user/${this.nameUserAws}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

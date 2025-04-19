import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectId: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:codestar:${string}:${string}:project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectId: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectId = parameters.projectId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar:${this.region}:${this.account}:project/${this.projectId}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly awsUserName: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:iam::${string}:user/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly account: string
  readonly awsUserName: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.awsUserName = parameters.awsUserName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:user/${this.awsUserName}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

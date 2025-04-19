import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'group', `arn:${string}:resource-groups:${string}:${string}:group/${string}`> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupName = parameters.groupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-groups:${this.region}:${this.account}:group/${this.groupName}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(parameters: GroupArnParameters<Partition>) {
  return new GroupArn<Partition>(parameters)
}

export interface TagSyncTaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
  readonly taskId: string
}
class TagSyncTaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'tagSyncTask', `arn:${string}:resource-groups:${string}:${string}:group/${string}/tag-sync-task/${string}`> {
  readonly [ArnResourceTypeBrand] = 'tagSyncTask' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
  readonly taskId: string
  constructor(parameters: TagSyncTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupName = parameters.groupName
    this.taskId = parameters.taskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-groups:${this.region}:${this.account}:group/${this.groupName}/tag-sync-task/${this.taskId}` as const
  }
}
export type { TagSyncTaskArn }
export function tagSyncTaskArn<Partition extends ArnPartition = 'aws'>(parameters: TagSyncTaskArnParameters<Partition>) {
  return new TagSyncTaskArn<Partition>(parameters)
}
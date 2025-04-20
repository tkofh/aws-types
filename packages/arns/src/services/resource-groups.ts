import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:resource-groups:${string}:${string}:group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroup = parameters.nameGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-groups:${this.region}:${this.account}:group/${this.nameGroup}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface TaskSyncTagArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
  readonly idTask: string
}
class TaskSyncTagArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'tagSyncTask',
  `arn:${string}:resource-groups:${string}:${string}:group/${string}/tag-sync-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tagSyncTask' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
  readonly idTask: string
  constructor(parameters: TaskSyncTagArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroup = parameters.nameGroup
    this.idTask = parameters.idTask
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-groups:${this.region}:${this.account}:group/${this.nameGroup}/tag-sync-task/${this.idTask}` as const
  }
}
export type { TaskSyncTagArn }
export function taskSyncTagArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskSyncTagArnParameters<Partition>,
) {
  return new TaskSyncTagArn<Partition>(parameters)
}

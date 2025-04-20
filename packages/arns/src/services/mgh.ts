import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StreamUpdateProgressArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly stream: string
}
class StreamUpdateProgressArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'progressUpdateStream',
  `arn:${string}:mgh:${string}:${string}:progressUpdateStream/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'progressUpdateStream' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly stream: string
  constructor(parameters: StreamUpdateProgressArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.stream = parameters.stream
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgh:${this.region}:${this.account}:progressUpdateStream/${this.stream}` as const
  }
}
export type { StreamUpdateProgressArn }
export function streamUpdateProgressArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamUpdateProgressArnParameters<Partition>,
) {
  return new StreamUpdateProgressArn<Partition>(parameters)
}

export interface TaskMigrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly stream: string
  readonly task: string
}
class TaskMigrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'migrationTask',
  `arn:${string}:mgh:${string}:${string}:progressUpdateStream/${string}/migrationTask/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'migrationTask' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly stream: string
  readonly task: string
  constructor(parameters: TaskMigrationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.stream = parameters.stream
    this.task = parameters.task
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgh:${this.region}:${this.account}:progressUpdateStream/${this.stream}/migrationTask/${this.task}` as const
  }
}
export type { TaskMigrationArn }
export function taskMigrationArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskMigrationArnParameters<Partition>,
) {
  return new TaskMigrationArn<Partition>(parameters)
}

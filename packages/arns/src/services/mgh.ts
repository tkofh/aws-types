import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ProgressUpdateStreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stream: string
}
class ProgressUpdateStreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'progressUpdateStream', `arn:${string}:mgh:${string}:${string}:progressUpdateStream/${string}`> {
  readonly [ArnResourceTypeBrand] = 'progressUpdateStream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stream: string
  constructor(parameters: ProgressUpdateStreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stream = parameters.stream
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgh:${this.region}:${this.account}:progressUpdateStream/${this.stream}` as const
  }
}
export type { ProgressUpdateStreamArn }
export function progressUpdateStreamArn<Partition extends ArnPartition = 'aws'>(parameters: ProgressUpdateStreamArnParameters<Partition>) {
  return new ProgressUpdateStreamArn<Partition>(parameters)
}

export interface MigrationTaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stream: string
  readonly task: string
}
class MigrationTaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'migrationTask', `arn:${string}:mgh:${string}:${string}:progressUpdateStream/${string}/migrationTask/${string}`> {
  readonly [ArnResourceTypeBrand] = 'migrationTask' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly stream: string
  readonly task: string
  constructor(parameters: MigrationTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.stream = parameters.stream
    this.task = parameters.task
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mgh:${this.region}:${this.account}:progressUpdateStream/${this.stream}/migrationTask/${this.task}` as const
  }
}
export type { MigrationTaskArn }
export function migrationTaskArn<Partition extends ArnPartition = 'aws'>(parameters: MigrationTaskArnParameters<Partition>) {
  return new MigrationTaskArn<Partition>(parameters)
}
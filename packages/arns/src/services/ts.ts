import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ExecutionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly userId: string
  readonly toolId: string
  readonly executionId: string
}
class ExecutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'execution', `arn:${string}:ts::${string}:execution/${string}/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'execution' as const
  readonly partition: Partition
  readonly account: string
  readonly userId: string
  readonly toolId: string
  readonly executionId: string
  constructor(parameters: ExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.userId = parameters.userId
    this.toolId = parameters.toolId
    this.executionId = parameters.executionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ts::${this.account}:execution/${this.userId}/${this.toolId}/${this.executionId}` as const
  }
}
export type { ExecutionArn }
export function executionArn<Partition extends ArnPartition = 'aws'>(parameters: ExecutionArnParameters<Partition>) {
  return new ExecutionArn<Partition>(parameters)
}

export interface ToolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly toolId: string
}
class ToolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'tool', `arn:${string}:ts::aws:tool/${string}`> {
  readonly [ArnResourceTypeBrand] = 'tool' as const
  readonly partition: Partition
  readonly toolId: string
  constructor(parameters: ToolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.toolId = parameters.toolId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ts::aws:tool/${this.toolId}` as const
  }
}
export type { ToolArn }
export function toolArn<Partition extends ArnPartition = 'aws'>(parameters: ToolArnParameters<Partition>) {
  return new ToolArn<Partition>(parameters)
}
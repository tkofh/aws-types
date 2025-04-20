import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ExecutionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idUser: string
  readonly idTool: string
  readonly idExecution: string
}
class ExecutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'execution',
  `arn:${string}:ts::${string}:execution/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'execution' as const
  readonly partition: string
  readonly account: string
  readonly idUser: string
  readonly idTool: string
  readonly idExecution: string
  constructor(parameters: ExecutionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idUser = parameters.idUser
    this.idTool = parameters.idTool
    this.idExecution = parameters.idExecution
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ts::${this.account}:execution/${this.idUser}/${this.idTool}/${this.idExecution}` as const
  }
}
export type { ExecutionArn }
export function executionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionArnParameters<Partition>,
) {
  return new ExecutionArn<Partition>(parameters)
}

export interface ToolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idTool: string
}
class ToolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'tool',
  `arn:${string}:ts::aws:tool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tool' as const
  readonly partition: string
  readonly idTool: string
  constructor(parameters: ToolArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idTool = parameters.idTool
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ts::aws:tool/${this.idTool}` as const
  }
}
export type { ToolArn }
export function toolArn<Partition extends ArnPartition = 'aws'>(
  parameters: ToolArnParameters<Partition>,
) {
  return new ToolArn<Partition>(parameters)
}

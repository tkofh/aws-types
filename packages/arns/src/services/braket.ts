import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface QuantumTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly randomId: string
}
class QuantumTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'quantum-task',
  `arn:${string}:braket:${string}:${string}:quantum-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'quantum-task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly randomId: string
  constructor(parameters: QuantumTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.randomId = parameters.randomId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:braket:${this.region}:${this.account}:quantum-task/${this.randomId}` as const
  }
}
export type { QuantumTaskArn }
export function quantumTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: QuantumTaskArnParameters<Partition>,
) {
  return new QuantumTaskArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:braket:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobName: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobName = parameters.jobName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:braket:${this.region}:${this.account}:job/${this.jobName}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TaskQuantumArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRandom: string
}
class TaskQuantumArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'quantum-task',
  `arn:${string}:braket:${string}:${string}:quantum-task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'quantum-task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRandom: string
  constructor(parameters: TaskQuantumArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRandom = parameters.idRandom
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:braket:${this.region}:${this.account}:quantum-task/${this.idRandom}` as const
  }
}
export type { TaskQuantumArn }
export function taskQuantumArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskQuantumArnParameters<Partition>,
) {
  return new TaskQuantumArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:braket:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameJob: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameJob = parameters.nameJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:braket:${this.region}:${this.account}:job/${this.nameJob}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

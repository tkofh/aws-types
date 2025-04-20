import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ComputeEnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly computeEnvironmentName: string
}
class ComputeEnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'compute-environment',
  `arn:${string}:batch:${string}:${string}:compute-environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'compute-environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly computeEnvironmentName: string
  constructor(parameters: ComputeEnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.computeEnvironmentName = parameters.computeEnvironmentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:compute-environment/${this.computeEnvironmentName}` as const
  }
}
export type { ComputeEnvironmentArn }
export function computeEnvironmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComputeEnvironmentArnParameters<Partition>,
) {
  return new ComputeEnvironmentArn<Partition>(parameters)
}

export interface JobQueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobQueueName: string
}
class JobQueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job-queue',
  `arn:${string}:batch:${string}:${string}:job-queue/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job-queue' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobQueueName: string
  constructor(parameters: JobQueueArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobQueueName = parameters.jobQueueName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:job-queue/${this.jobQueueName}` as const
  }
}
export type { JobQueueArn }
export function jobQueueArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobQueueArnParameters<Partition>,
) {
  return new JobQueueArn<Partition>(parameters)
}

export interface JobDefinitionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobDefinitionName: string
}
class JobDefinitionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'job-definition',
  `arn:${string}:batch:${string}:${string}:job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job-definition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobDefinitionName: string
  constructor(parameters: JobDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobDefinitionName = parameters.jobDefinitionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:job-definition/${this.jobDefinitionName}` as const
  }
}
export type { JobDefinitionArn }
export function jobDefinitionArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobDefinitionArnParameters<Partition>,
) {
  return new JobDefinitionArn<Partition>(parameters)
}

export interface JobDefinitionRevisionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobDefinitionName: string
  readonly revision: string
}
class JobDefinitionRevisionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'job-definition-revision',
  `arn:${string}:batch:${string}:${string}:job-definition/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job-definition-revision' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobDefinitionName: string
  readonly revision: string
  constructor(parameters: JobDefinitionRevisionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobDefinitionName = parameters.jobDefinitionName
    this.revision = parameters.revision
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:job-definition/${this.jobDefinitionName}:${this.revision}` as const
  }
}
export type { JobDefinitionRevisionArn }
export function jobDefinitionRevisionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: JobDefinitionRevisionArnParameters<Partition>) {
  return new JobDefinitionRevisionArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:batch:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:job/${this.jobId}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface SchedulingPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schedulingPolicyName: string
}
class SchedulingPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'scheduling-policy',
  `arn:${string}:batch:${string}:${string}:scheduling-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'scheduling-policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly schedulingPolicyName: string
  constructor(parameters: SchedulingPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.schedulingPolicyName = parameters.schedulingPolicyName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:scheduling-policy/${this.schedulingPolicyName}` as const
  }
}
export type { SchedulingPolicyArn }
export function schedulingPolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchedulingPolicyArnParameters<Partition>,
) {
  return new SchedulingPolicyArn<Partition>(parameters)
}

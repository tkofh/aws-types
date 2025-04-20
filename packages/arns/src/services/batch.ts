import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EnvironmentComputeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEnvironmentCompute: string
}
class EnvironmentComputeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'compute-environment',
  `arn:${string}:batch:${string}:${string}:compute-environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'compute-environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEnvironmentCompute: string
  constructor(parameters: EnvironmentComputeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameEnvironmentCompute = parameters.nameEnvironmentCompute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:compute-environment/${this.nameEnvironmentCompute}` as const
  }
}
export type { EnvironmentComputeArn }
export function environmentComputeArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentComputeArnParameters<Partition>,
) {
  return new EnvironmentComputeArn<Partition>(parameters)
}

export interface QueueJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueueJob: string
}
class QueueJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job-queue',
  `arn:${string}:batch:${string}:${string}:job-queue/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job-queue' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueueJob: string
  constructor(parameters: QueueJobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameQueueJob = parameters.nameQueueJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:job-queue/${this.nameQueueJob}` as const
  }
}
export type { QueueJobArn }
export function queueJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueJobArnParameters<Partition>,
) {
  return new QueueJobArn<Partition>(parameters)
}

export interface DefinitionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJob: string
}
class DefinitionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'job-definition',
  `arn:${string}:batch:${string}:${string}:job-definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job-definition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJob: string
  constructor(parameters: DefinitionJobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDefinitionJob = parameters.nameDefinitionJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:job-definition/${this.nameDefinitionJob}` as const
  }
}
export type { DefinitionJobArn }
export function definitionJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionJobArnParameters<Partition>,
) {
  return new DefinitionJobArn<Partition>(parameters)
}

export interface RevisionDefinitionJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJob: string
  readonly revision: string
}
class RevisionDefinitionJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'job-definition-revision',
  `arn:${string}:batch:${string}:${string}:job-definition/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job-definition-revision' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionJob: string
  readonly revision: string
  constructor(parameters: RevisionDefinitionJobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDefinitionJob = parameters.nameDefinitionJob
    this.revision = parameters.revision
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:job-definition/${this.nameDefinitionJob}:${this.revision}` as const
  }
}
export type { RevisionDefinitionJobArn }
export function revisionDefinitionJobArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RevisionDefinitionJobArnParameters<Partition>) {
  return new RevisionDefinitionJobArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:batch:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:job/${this.idJob}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface PolicySchedulingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePolicyScheduling: string
}
class PolicySchedulingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'scheduling-policy',
  `arn:${string}:batch:${string}:${string}:scheduling-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'scheduling-policy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePolicyScheduling: string
  constructor(parameters: PolicySchedulingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePolicyScheduling = parameters.namePolicyScheduling
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:batch:${this.region}:${this.account}:scheduling-policy/${this.namePolicyScheduling}` as const
  }
}
export type { PolicySchedulingArn }
export function policySchedulingArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicySchedulingArnParameters<Partition>,
) {
  return new PolicySchedulingArn<Partition>(parameters)
}

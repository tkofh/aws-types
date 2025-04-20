import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:emr-serverless:${string}:${string}:/applications/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-serverless:${this.region}:${this.account}:/applications/${this.applicationId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface JobRunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly jobRunId: string
}
class JobRunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'jobRun',
  `arn:${string}:emr-serverless:${string}:${string}:/applications/${string}/jobruns/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'jobRun' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly jobRunId: string
  constructor(parameters: JobRunArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.jobRunId = parameters.jobRunId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-serverless:${this.region}:${this.account}:/applications/${this.applicationId}/jobruns/${this.jobRunId}` as const
  }
}
export type { JobRunArn }
export function jobRunArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobRunArnParameters<Partition>,
) {
  return new JobRunArn<Partition>(parameters)
}

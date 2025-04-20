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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:emr-serverless:${string}:${string}:/applications/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-serverless:${this.region}:${this.account}:/applications/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface RunJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idRunJob: string
}
class RunJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'jobRun',
  `arn:${string}:emr-serverless:${string}:${string}:/applications/${string}/jobruns/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'jobRun' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idRunJob: string
  constructor(parameters: RunJobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idRunJob = parameters.idRunJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:emr-serverless:${this.region}:${this.account}:/applications/${this.idApplication}/jobruns/${this.idRunJob}` as const
  }
}
export type { RunJobArn }
export function runJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunJobArnParameters<Partition>,
) {
  return new RunJobArn<Partition>(parameters)
}

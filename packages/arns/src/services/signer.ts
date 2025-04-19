import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SigningProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profileName: string
}
class SigningProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'signing-profile',
  `arn:${string}:signer:${string}:${string}:/signing-profiles/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'signing-profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profileName: string
  constructor(parameters: SigningProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.profileName = parameters.profileName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:signer:${this.region}:${this.account}:/signing-profiles/${this.profileName}` as const
  }
}
export type { SigningProfileArn }
export function signingProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: SigningProfileArnParameters<Partition>,
) {
  return new SigningProfileArn<Partition>(parameters)
}

export interface SigningJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class SigningJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'signing-job',
  `arn:${string}:signer:${string}:${string}:/signing-jobs/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'signing-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: SigningJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:signer:${this.region}:${this.account}:/signing-jobs/${this.jobId}` as const
  }
}
export type { SigningJobArn }
export function signingJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: SigningJobArnParameters<Partition>,
) {
  return new SigningJobArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProfileSigningArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfile: string
}
class ProfileSigningArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'signing-profile',
  `arn:${string}:signer:${string}:${string}:/signing-profiles/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'signing-profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfile: string
  constructor(parameters: ProfileSigningArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProfile = parameters.nameProfile
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:signer:${this.region}:${this.account}:/signing-profiles/${this.nameProfile}` as const
  }
}
export type { ProfileSigningArn }
export function profileSigningArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileSigningArnParameters<Partition>,
) {
  return new ProfileSigningArn<Partition>(parameters)
}

export interface JobSigningArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobSigningArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'signing-job',
  `arn:${string}:signer:${string}:${string}:/signing-jobs/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'signing-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobSigningArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:signer:${this.region}:${this.account}:/signing-jobs/${this.idJob}` as const
  }
}
export type { JobSigningArn }
export function jobSigningArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobSigningArnParameters<Partition>,
) {
  return new JobSigningArn<Partition>(parameters)
}

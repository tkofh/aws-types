import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identifier: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'profile',
  `arn:${string}:codewhisperer:${string}:${string}:profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identifier: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codewhisperer:${this.region}:${this.account}:profile/${this.identifier}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileArnParameters<Partition>,
) {
  return new ProfileArn<Partition>(parameters)
}

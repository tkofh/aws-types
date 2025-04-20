import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PoolIdentityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolIdentity: string
}
class PoolIdentityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'identitypool',
  `arn:${string}:cognito-identity:${string}:${string}:identitypool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identitypool' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolIdentity: string
  constructor(parameters: PoolIdentityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPoolIdentity = parameters.idPoolIdentity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-identity:${this.region}:${this.account}:identitypool/${this.idPoolIdentity}` as const
  }
}
export type { PoolIdentityArn }
export function poolIdentityArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolIdentityArnParameters<Partition>,
) {
  return new PoolIdentityArn<Partition>(parameters)
}

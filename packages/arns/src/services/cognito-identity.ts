import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IdentitypoolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
}
class IdentitypoolArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'identitypool',
  `arn:${string}:cognito-identity:${string}:${string}:identitypool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identitypool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  constructor(parameters: IdentitypoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identityPoolId = parameters.identityPoolId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-identity:${this.region}:${this.account}:identitypool/${this.identityPoolId}` as const
  }
}
export type { IdentitypoolArn }
export function identitypoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentitypoolArnParameters<Partition>,
) {
  return new IdentitypoolArn<Partition>(parameters)
}

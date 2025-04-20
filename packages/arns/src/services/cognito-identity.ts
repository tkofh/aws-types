import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IdentityPoolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
}
class IdentityPoolArn<
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
  constructor(parameters: IdentityPoolArnParameters<Partition>) {
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
export type { IdentityPoolArn }
export function identityPoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentityPoolArnParameters<Partition>,
) {
  return new IdentityPoolArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SecretArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly secretId: string
}
class SecretArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Secret',
  `arn:${string}:secretsmanager:${string}:${string}:secret:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Secret' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly secretId: string
  constructor(parameters: SecretArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.secretId = parameters.secretId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:secretsmanager:${this.region}:${this.account}:secret:${this.secretId}` as const
  }
}
export type { SecretArn }
export function secretArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecretArnParameters<Partition>,
) {
  return new SecretArn<Partition>(parameters)
}

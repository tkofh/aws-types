import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SecretArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSecret: string
}
class SecretArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Secret',
  `arn:${string}:secretsmanager:${string}:${string}:secret:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Secret' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSecret: string
  constructor(parameters: SecretArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSecret = parameters.idSecret
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:secretsmanager:${this.region}:${this.account}:secret:${this.idSecret}` as const
  }
}
export type { SecretArn }
export function secretArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecretArnParameters<Partition>,
) {
  return new SecretArn<Partition>(parameters)
}

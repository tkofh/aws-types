import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StorePolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idStorePolicy: string
}
class StorePolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'policy-store',
  `arn:${string}:verifiedpermissions::${string}:policy-store/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'policy-store' as const
  readonly partition: string
  readonly account: string
  readonly idStorePolicy: string
  constructor(parameters: StorePolicyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idStorePolicy = parameters.idStorePolicy
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:verifiedpermissions::${this.account}:policy-store/${this.idStorePolicy}` as const
  }
}
export type { StorePolicyArn }
export function storePolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: StorePolicyArnParameters<Partition>,
) {
  return new StorePolicyArn<Partition>(parameters)
}

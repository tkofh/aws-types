import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PolicyStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly policyStoreId: string
}
class PolicyStoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'policy-store',
  `arn:${string}:verifiedpermissions::${string}:policy-store/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'policy-store' as const
  readonly partition: Partition
  readonly account: string
  readonly policyStoreId: string
  constructor(parameters: PolicyStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.policyStoreId = parameters.policyStoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:verifiedpermissions::${this.account}:policy-store/${this.policyStoreId}` as const
  }
}
export type { PolicyStoreArn }
export function policyStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyStoreArnParameters<Partition>,
) {
  return new PolicyStoreArn<Partition>(parameters)
}

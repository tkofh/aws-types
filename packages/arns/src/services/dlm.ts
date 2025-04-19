import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceName: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'policy',
  `arn:${string}:dlm:${string}:${string}:policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceName: string
  constructor(parameters: PolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceName = parameters.resourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dlm:${this.region}:${this.account}:policy/${this.resourceName}` as const
  }
}
export type { PolicyArn }
export function policyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyArnParameters<Partition>,
) {
  return new PolicyArn<Partition>(parameters)
}

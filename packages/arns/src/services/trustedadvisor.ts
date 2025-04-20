import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChecksArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly codeCategory: string
  readonly idCheck: string
}
class ChecksArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'checks',
  `arn:${string}:trustedadvisor:${string}:${string}:checks/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'checks' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly codeCategory: string
  readonly idCheck: string
  constructor(parameters: ChecksArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.codeCategory = parameters.codeCategory
    this.idCheck = parameters.idCheck
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:trustedadvisor:${this.region}:${this.account}:checks/${this.codeCategory}/${this.idCheck}` as const
  }
}
export type { ChecksArn }
export function checksArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChecksArnParameters<Partition>,
) {
  return new ChecksArn<Partition>(parameters)
}

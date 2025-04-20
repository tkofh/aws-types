import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChecksArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly categoryCode: string
  readonly checkId: string
}
class ChecksArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'checks',
  `arn:${string}:trustedadvisor:${string}:${string}:checks/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'checks' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly categoryCode: string
  readonly checkId: string
  constructor(parameters: ChecksArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.categoryCode = parameters.categoryCode
    this.checkId = parameters.checkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:trustedadvisor:${this.region}:${this.account}:checks/${this.categoryCode}/${this.checkId}` as const
  }
}
export type { ChecksArn }
export function checksArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChecksArnParameters<Partition>,
) {
  return new ChecksArn<Partition>(parameters)
}

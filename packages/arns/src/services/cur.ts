import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CurArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameReport: string
}
class CurArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cur',
  `arn:${string}:cur:${string}:${string}:definition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cur' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameReport: string
  constructor(parameters: CurArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameReport = parameters.nameReport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cur:${this.region}:${this.account}:definition/${this.nameReport}` as const
  }
}
export type { CurArn }
export function curArn<Partition extends ArnPartition = 'aws'>(
  parameters: CurArnParameters<Partition>,
) {
  return new CurArn<Partition>(parameters)
}

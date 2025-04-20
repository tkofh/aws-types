import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SloArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSlo: string
}
class SloArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'slo',
  `arn:${string}:application-signals:${string}:${string}:slo/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'slo' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSlo: string
  constructor(parameters: SloArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSlo = parameters.nameSlo
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:application-signals:${this.region}:${this.account}:slo/${this.nameSlo}` as const
  }
}
export type { SloArn }
export function sloArn<Partition extends ArnPartition = 'aws'>(
  parameters: SloArnParameters<Partition>,
) {
  return new SloArn<Partition>(parameters)
}

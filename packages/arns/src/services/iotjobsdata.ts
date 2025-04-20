import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ThingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
}
class ThingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thing',
  `arn:${string}:iot:${string}:${string}:thing/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thing' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
  constructor(parameters: ThingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameThing = parameters.nameThing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thing/${this.nameThing}` as const
  }
}
export type { ThingArn }
export function thingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThingArnParameters<Partition>,
) {
  return new ThingArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ThingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
}
class ThingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thing',
  `arn:${string}:iot:${string}:${string}:thing/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thing' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
  constructor(parameters: ThingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.thingName = parameters.thingName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thing/${this.thingName}` as const
  }
}
export type { ThingArn }
export function thingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThingArnParameters<Partition>,
) {
  return new ThingArn<Partition>(parameters)
}

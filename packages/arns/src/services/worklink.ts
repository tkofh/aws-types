import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface FleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly nameFleet: string
}
class FleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'fleet',
  `arn:${string}:worklink::${string}:fleet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleet' as const
  readonly partition: string
  readonly account: string
  readonly nameFleet: string
  constructor(parameters: FleetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameFleet = parameters.nameFleet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:worklink::${this.account}:fleet/${this.nameFleet}` as const
  }
}
export type { FleetArn }
export function fleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetArnParameters<Partition>,
) {
  return new FleetArn<Partition>(parameters)
}

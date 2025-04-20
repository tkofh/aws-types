import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EventArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEvent: string
}
class EventArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Event',
  `arn:${string}:bugbust:${string}:${string}:events/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Event' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEvent: string
  constructor(parameters: EventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEvent = parameters.idEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bugbust:${this.region}:${this.account}:events/${this.idEvent}` as const
  }
}
export type { EventArn }
export function eventArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventArnParameters<Partition>,
) {
  return new EventArn<Partition>(parameters)
}

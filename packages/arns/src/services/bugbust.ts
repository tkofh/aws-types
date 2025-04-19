import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface EventArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventId: string
}
class EventArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Event', `arn:${string}:bugbust:${string}:${string}:events/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Event' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventId: string
  constructor(parameters: EventArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventId = parameters.eventId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bugbust:${this.region}:${this.account}:events/${this.eventId}` as const
  }
}
export type { EventArn }
export function eventArn<Partition extends ArnPartition = 'aws'>(parameters: EventArnParameters<Partition>) {
  return new EventArn<Partition>(parameters)
}
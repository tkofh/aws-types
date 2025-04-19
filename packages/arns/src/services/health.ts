import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface EventArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly service: string
  readonly eventTypeCode: string
}
class EventArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'event', `arn:${string}:health:*::event/${string}/${string}/*`> {
  readonly [ArnResourceTypeBrand] = 'event' as const
  readonly partition: Partition
  readonly service: string
  readonly eventTypeCode: string
  constructor(parameters: EventArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.service = parameters.service
    this.eventTypeCode = parameters.eventTypeCode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:health:*::event/${this.service}/${this.eventTypeCode}/*` as const
  }
}
export type { EventArn }
export function eventArn<Partition extends ArnPartition = 'aws'>(parameters: EventArnParameters<Partition>) {
  return new EventArn<Partition>(parameters)
}
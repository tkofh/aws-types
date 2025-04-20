import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface HealthEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitorName: string
  readonly eventId: string
}
class HealthEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'HealthEvent',
  `arn:${string}:internetmonitor:${string}:${string}:monitor/${string}/health-event/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'HealthEvent' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitorName: string
  readonly eventId: string
  constructor(parameters: HealthEventArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.monitorName = parameters.monitorName
    this.eventId = parameters.eventId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:internetmonitor:${this.region}:${this.account}:monitor/${this.monitorName}/health-event/${this.eventId}` as const
  }
}
export type { HealthEventArn }
export function healthEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: HealthEventArnParameters<Partition>,
) {
  return new HealthEventArn<Partition>(parameters)
}

export interface MonitorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitorName: string
}
class MonitorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Monitor',
  `arn:${string}:internetmonitor:${string}:${string}:monitor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Monitor' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitorName: string
  constructor(parameters: MonitorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.monitorName = parameters.monitorName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:internetmonitor:${this.region}:${this.account}:monitor/${this.monitorName}` as const
  }
}
export type { MonitorArn }
export function monitorArn<Partition extends ArnPartition = 'aws'>(
  parameters: MonitorArnParameters<Partition>,
) {
  return new MonitorArn<Partition>(parameters)
}

export interface InternetEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly internetEventId: string
}
class InternetEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'InternetEvent',
  `arn:${string}:internetmonitor::${string}:internet-event/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'InternetEvent' as const
  readonly partition: Partition
  readonly account: string
  readonly internetEventId: string
  constructor(parameters: InternetEventArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.internetEventId = parameters.internetEventId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:internetmonitor::${this.account}:internet-event/${this.internetEventId}` as const
  }
}
export type { InternetEventArn }
export function internetEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: InternetEventArnParameters<Partition>,
) {
  return new InternetEventArn<Partition>(parameters)
}

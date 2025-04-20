import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EventHealthArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMonitor: string
  readonly idEvent: string
}
class EventHealthArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'HealthEvent',
  `arn:${string}:internetmonitor:${string}:${string}:monitor/${string}/health-event/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'HealthEvent' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMonitor: string
  readonly idEvent: string
  constructor(parameters: EventHealthArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMonitor = parameters.nameMonitor
    this.idEvent = parameters.idEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:internetmonitor:${this.region}:${this.account}:monitor/${this.nameMonitor}/health-event/${this.idEvent}` as const
  }
}
export type { EventHealthArn }
export function eventHealthArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventHealthArnParameters<Partition>,
) {
  return new EventHealthArn<Partition>(parameters)
}

export interface MonitorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMonitor: string
}
class MonitorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Monitor',
  `arn:${string}:internetmonitor:${string}:${string}:monitor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Monitor' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMonitor: string
  constructor(parameters: MonitorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMonitor = parameters.nameMonitor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:internetmonitor:${this.region}:${this.account}:monitor/${this.nameMonitor}` as const
  }
}
export type { MonitorArn }
export function monitorArn<Partition extends ArnPartition = 'aws'>(
  parameters: MonitorArnParameters<Partition>,
) {
  return new MonitorArn<Partition>(parameters)
}

export interface EventInternetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idEventInternet: string
}
class EventInternetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'InternetEvent',
  `arn:${string}:internetmonitor::${string}:internet-event/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'InternetEvent' as const
  readonly partition: string
  readonly account: string
  readonly idEventInternet: string
  constructor(parameters: EventInternetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idEventInternet = parameters.idEventInternet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:internetmonitor::${this.account}:internet-event/${this.idEventInternet}` as const
  }
}
export type { EventInternetArn }
export function eventInternetArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventInternetArnParameters<Partition>,
) {
  return new EventInternetArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface MonitorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly monitorName: string
}
class MonitorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'monitor', `arn:${string}:networkmonitor:${string}:${string}:monitor/${string}`> {
  readonly [ArnResourceTypeBrand] = 'monitor' as const
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
    return `arn:${this.partition}:networkmonitor:${this.region}:${this.account}:monitor/${this.monitorName}` as const
  }
}
export type { MonitorArn }
export function monitorArn<Partition extends ArnPartition = 'aws'>(parameters: MonitorArnParameters<Partition>) {
  return new MonitorArn<Partition>(parameters)
}

export interface ProbeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly probeId: string
}
class ProbeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'probe', `arn:${string}:networkmonitor:${string}:${string}:probe/${string}`> {
  readonly [ArnResourceTypeBrand] = 'probe' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly probeId: string
  constructor(parameters: ProbeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.probeId = parameters.probeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmonitor:${this.region}:${this.account}:probe/${this.probeId}` as const
  }
}
export type { ProbeArn }
export function probeArn<Partition extends ArnPartition = 'aws'>(parameters: ProbeArnParameters<Partition>) {
  return new ProbeArn<Partition>(parameters)
}
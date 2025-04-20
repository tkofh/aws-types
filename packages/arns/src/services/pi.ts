import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface MetricResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceType: string
  readonly identifier: string
}
class MetricResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'metric-resource',
  `arn:${string}:pi:${string}:${string}:metrics/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'metric-resource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceType: string
  readonly identifier: string
  constructor(parameters: MetricResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceType = parameters.serviceType
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pi:${this.region}:${this.account}:metrics/${this.serviceType}/${this.identifier}` as const
  }
}
export type { MetricResourceArn }
export function metricResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: MetricResourceArnParameters<Partition>,
) {
  return new MetricResourceArn<Partition>(parameters)
}

export interface PerfReportsResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceType: string
  readonly identifier: string
  readonly reportId: string
}
class PerfReportsResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'perf-reports-resource',
  `arn:${string}:pi:${string}:${string}:perf-reports/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'perf-reports-resource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceType: string
  readonly identifier: string
  readonly reportId: string
  constructor(parameters: PerfReportsResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceType = parameters.serviceType
    this.identifier = parameters.identifier
    this.reportId = parameters.reportId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pi:${this.region}:${this.account}:perf-reports/${this.serviceType}/${this.identifier}/${this.reportId}` as const
  }
}
export type { PerfReportsResourceArn }
export function perfReportsResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: PerfReportsResourceArnParameters<Partition>,
) {
  return new PerfReportsResourceArn<Partition>(parameters)
}

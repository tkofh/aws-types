import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResourceMetricArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeService: string
  readonly identifier: string
}
class ResourceMetricArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'metric-resource',
  `arn:${string}:pi:${string}:${string}:metrics/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'metric-resource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeService: string
  readonly identifier: string
  constructor(parameters: ResourceMetricArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeService = parameters.typeService
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pi:${this.region}:${this.account}:metrics/${this.typeService}/${this.identifier}` as const
  }
}
export type { ResourceMetricArn }
export function resourceMetricArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceMetricArnParameters<Partition>,
) {
  return new ResourceMetricArn<Partition>(parameters)
}

export interface ResourceReportsPerfArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeService: string
  readonly identifier: string
  readonly idReport: string
}
class ResourceReportsPerfArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'perf-reports-resource',
  `arn:${string}:pi:${string}:${string}:perf-reports/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'perf-reports-resource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeService: string
  readonly identifier: string
  readonly idReport: string
  constructor(parameters: ResourceReportsPerfArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeService = parameters.typeService
    this.identifier = parameters.identifier
    this.idReport = parameters.idReport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:pi:${this.region}:${this.account}:perf-reports/${this.typeService}/${this.identifier}/${this.idReport}` as const
  }
}
export type { ResourceReportsPerfArn }
export function resourceReportsPerfArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceReportsPerfArnParameters<Partition>,
) {
  return new ResourceReportsPerfArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AnomalyDetectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly anomalyDetectorName: string
}
class AnomalyDetectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AnomalyDetector',
  `arn:${string}:lookoutmetrics:${string}:${string}:AnomalyDetector:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AnomalyDetector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly anomalyDetectorName: string
  constructor(parameters: AnomalyDetectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.anomalyDetectorName = parameters.anomalyDetectorName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutmetrics:${this.region}:${this.account}:AnomalyDetector:${this.anomalyDetectorName}` as const
  }
}
export type { AnomalyDetectorArn }
export function anomalyDetectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnomalyDetectorArnParameters<Partition>,
) {
  return new AnomalyDetectorArn<Partition>(parameters)
}

export interface MetricSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly anomalyDetectorName: string
  readonly metricSetName: string
}
class MetricSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'MetricSet',
  `arn:${string}:lookoutmetrics:${string}:${string}:MetricSet/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'MetricSet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly anomalyDetectorName: string
  readonly metricSetName: string
  constructor(parameters: MetricSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.anomalyDetectorName = parameters.anomalyDetectorName
    this.metricSetName = parameters.metricSetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutmetrics:${this.region}:${this.account}:MetricSet/${this.anomalyDetectorName}/${this.metricSetName}` as const
  }
}
export type { MetricSetArn }
export function metricSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: MetricSetArnParameters<Partition>,
) {
  return new MetricSetArn<Partition>(parameters)
}

export interface AlertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly alertName: string
}
class AlertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Alert',
  `arn:${string}:lookoutmetrics:${string}:${string}:Alert:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Alert' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly alertName: string
  constructor(parameters: AlertArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.alertName = parameters.alertName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutmetrics:${this.region}:${this.account}:Alert:${this.alertName}` as const
  }
}
export type { AlertArn }
export function alertArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlertArnParameters<Partition>,
) {
  return new AlertArn<Partition>(parameters)
}

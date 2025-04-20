import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DetectorAnomalyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDetectorAnomaly: string
}
class DetectorAnomalyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AnomalyDetector',
  `arn:${string}:lookoutmetrics:${string}:${string}:AnomalyDetector:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AnomalyDetector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDetectorAnomaly: string
  constructor(parameters: DetectorAnomalyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDetectorAnomaly = parameters.nameDetectorAnomaly
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutmetrics:${this.region}:${this.account}:AnomalyDetector:${this.nameDetectorAnomaly}` as const
  }
}
export type { DetectorAnomalyArn }
export function detectorAnomalyArn<Partition extends ArnPartition = 'aws'>(
  parameters: DetectorAnomalyArnParameters<Partition>,
) {
  return new DetectorAnomalyArn<Partition>(parameters)
}

export interface SetMetricArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDetectorAnomaly: string
  readonly nameSetMetric: string
}
class SetMetricArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'MetricSet',
  `arn:${string}:lookoutmetrics:${string}:${string}:MetricSet/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'MetricSet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDetectorAnomaly: string
  readonly nameSetMetric: string
  constructor(parameters: SetMetricArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDetectorAnomaly = parameters.nameDetectorAnomaly
    this.nameSetMetric = parameters.nameSetMetric
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutmetrics:${this.region}:${this.account}:MetricSet/${this.nameDetectorAnomaly}/${this.nameSetMetric}` as const
  }
}
export type { SetMetricArn }
export function setMetricArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetMetricArnParameters<Partition>,
) {
  return new SetMetricArn<Partition>(parameters)
}

export interface AlertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAlert: string
}
class AlertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Alert',
  `arn:${string}:lookoutmetrics:${string}:${string}:Alert:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Alert' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAlert: string
  constructor(parameters: AlertArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameAlert = parameters.nameAlert
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:lookoutmetrics:${this.region}:${this.account}:Alert:${this.nameAlert}` as const
  }
}
export type { AlertArn }
export function alertArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlertArnParameters<Partition>,
) {
  return new AlertArn<Partition>(parameters)
}

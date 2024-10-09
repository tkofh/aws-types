export interface AnomalyDetectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  anomalyDetectorName: string
}
export type AnomalyDetectorArn = `arn:${string}:lookoutmetrics:${string}:${string}:AnomalyDetector:${string}`
export function anomalyDetectorArn(parameters: AnomalyDetectorArnParameters): AnomalyDetectorArn {
  return `arn:${parameters.partition ?? ''}:lookoutmetrics:${parameters.region}:${parameters.account}:AnomalyDetector:${parameters.anomalyDetectorName}`
}

export interface MetricSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  anomalyDetectorName: string
  metricSetName: string
}
export type MetricSetArn = `arn:${string}:lookoutmetrics:${string}:${string}:MetricSet/${string}/${string}`
export function metricSetArn(parameters: MetricSetArnParameters): MetricSetArn {
  return `arn:${parameters.partition ?? ''}:lookoutmetrics:${parameters.region}:${parameters.account}:MetricSet/${parameters.anomalyDetectorName}/${parameters.metricSetName}`
}

export interface AlertArnParameters {
  partition?: string | undefined
  region: string
  account: string
  alertName: string
}
export type AlertArn = `arn:${string}:lookoutmetrics:${string}:${string}:Alert:${string}`
export function alertArn(parameters: AlertArnParameters): AlertArn {
  return `arn:${parameters.partition ?? ''}:lookoutmetrics:${parameters.region}:${parameters.account}:Alert:${parameters.alertName}`
}
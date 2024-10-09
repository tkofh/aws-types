export interface LogGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  logGroupName: string
}
export type LogGroupArn = `arn:${string}:logs:${string}:${string}:log-group:${string}`
export function logGroupArn(parameters: LogGroupArnParameters): LogGroupArn {
  return `arn:${parameters.partition ?? ''}:logs:${parameters.region}:${parameters.account}:log-group:${parameters.logGroupName}`
}

export interface LogStreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  logGroupName: string
  logStreamName: string
}
export type LogStreamArn = `arn:${string}:logs:${string}:${string}:log-group:${string}:log-stream:${string}`
export function logStreamArn(parameters: LogStreamArnParameters): LogStreamArn {
  return `arn:${parameters.partition ?? ''}:logs:${parameters.region}:${parameters.account}:log-group:${parameters.logGroupName}:log-stream:${parameters.logStreamName}`
}

export interface DestinationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  destinationName: string
}
export type DestinationArn = `arn:${string}:logs:${string}:${string}:destination:${string}`
export function destinationArn(parameters: DestinationArnParameters): DestinationArn {
  return `arn:${parameters.partition ?? ''}:logs:${parameters.region}:${parameters.account}:destination:${parameters.destinationName}`
}

export interface DeliverySourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deliverySourceName: string
}
export type DeliverySourceArn = `arn:${string}:logs:${string}:${string}:delivery-source:${string}`
export function deliverySourceArn(parameters: DeliverySourceArnParameters): DeliverySourceArn {
  return `arn:${parameters.partition ?? ''}:logs:${parameters.region}:${parameters.account}:delivery-source:${parameters.deliverySourceName}`
}

export interface DeliveryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deliveryName: string
}
export type DeliveryArn = `arn:${string}:logs:${string}:${string}:delivery:${string}`
export function deliveryArn(parameters: DeliveryArnParameters): DeliveryArn {
  return `arn:${parameters.partition ?? ''}:logs:${parameters.region}:${parameters.account}:delivery:${parameters.deliveryName}`
}

export interface DeliveryDestinationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deliveryDestinationName: string
}
export type DeliveryDestinationArn = `arn:${string}:logs:${string}:${string}:delivery-destination:${string}`
export function deliveryDestinationArn(parameters: DeliveryDestinationArnParameters): DeliveryDestinationArn {
  return `arn:${parameters.partition ?? ''}:logs:${parameters.region}:${parameters.account}:delivery-destination:${parameters.deliveryDestinationName}`
}

export interface AnomalyDetectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  detectorId: string
}
export type AnomalyDetectorArn = `arn:${string}:logs:${string}:${string}:anomaly-detector:${string}`
export function anomalyDetectorArn(parameters: AnomalyDetectorArnParameters): AnomalyDetectorArn {
  return `arn:${parameters.partition ?? ''}:logs:${parameters.region}:${parameters.account}:anomaly-detector:${parameters.detectorId}`
}
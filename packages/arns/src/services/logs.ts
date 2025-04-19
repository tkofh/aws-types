import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface LogGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly logGroupName: string
}
class LogGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'log-group', `arn:${string}:logs:${string}:${string}:log-group:${string}`> {
  readonly [ArnResourceTypeBrand] = 'log-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly logGroupName: string
  constructor(parameters: LogGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.logGroupName = parameters.logGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:log-group:${this.logGroupName}` as const
  }
}
export type { LogGroupArn }
export function logGroupArn<Partition extends ArnPartition = 'aws'>(parameters: LogGroupArnParameters<Partition>) {
  return new LogGroupArn<Partition>(parameters)
}

export interface LogStreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly logGroupName: string
  readonly logStreamName: string
}
class LogStreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'log-stream', `arn:${string}:logs:${string}:${string}:log-group:${string}:log-stream:${string}`> {
  readonly [ArnResourceTypeBrand] = 'log-stream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly logGroupName: string
  readonly logStreamName: string
  constructor(parameters: LogStreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.logGroupName = parameters.logGroupName
    this.logStreamName = parameters.logStreamName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:log-group:${this.logGroupName}:log-stream:${this.logStreamName}` as const
  }
}
export type { LogStreamArn }
export function logStreamArn<Partition extends ArnPartition = 'aws'>(parameters: LogStreamArnParameters<Partition>) {
  return new LogStreamArn<Partition>(parameters)
}

export interface DestinationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly destinationName: string
}
class DestinationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'destination', `arn:${string}:logs:${string}:${string}:destination:${string}`> {
  readonly [ArnResourceTypeBrand] = 'destination' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly destinationName: string
  constructor(parameters: DestinationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.destinationName = parameters.destinationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:destination:${this.destinationName}` as const
  }
}
export type { DestinationArn }
export function destinationArn<Partition extends ArnPartition = 'aws'>(parameters: DestinationArnParameters<Partition>) {
  return new DestinationArn<Partition>(parameters)
}

export interface DeliverySourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliverySourceName: string
}
class DeliverySourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'delivery-source', `arn:${string}:logs:${string}:${string}:delivery-source:${string}`> {
  readonly [ArnResourceTypeBrand] = 'delivery-source' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliverySourceName: string
  constructor(parameters: DeliverySourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deliverySourceName = parameters.deliverySourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:delivery-source:${this.deliverySourceName}` as const
  }
}
export type { DeliverySourceArn }
export function deliverySourceArn<Partition extends ArnPartition = 'aws'>(parameters: DeliverySourceArnParameters<Partition>) {
  return new DeliverySourceArn<Partition>(parameters)
}

export interface DeliveryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliveryName: string
}
class DeliveryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'delivery', `arn:${string}:logs:${string}:${string}:delivery:${string}`> {
  readonly [ArnResourceTypeBrand] = 'delivery' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliveryName: string
  constructor(parameters: DeliveryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deliveryName = parameters.deliveryName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:delivery:${this.deliveryName}` as const
  }
}
export type { DeliveryArn }
export function deliveryArn<Partition extends ArnPartition = 'aws'>(parameters: DeliveryArnParameters<Partition>) {
  return new DeliveryArn<Partition>(parameters)
}

export interface DeliveryDestinationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliveryDestinationName: string
}
class DeliveryDestinationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'delivery-destination', `arn:${string}:logs:${string}:${string}:delivery-destination:${string}`> {
  readonly [ArnResourceTypeBrand] = 'delivery-destination' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deliveryDestinationName: string
  constructor(parameters: DeliveryDestinationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deliveryDestinationName = parameters.deliveryDestinationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:delivery-destination:${this.deliveryDestinationName}` as const
  }
}
export type { DeliveryDestinationArn }
export function deliveryDestinationArn<Partition extends ArnPartition = 'aws'>(parameters: DeliveryDestinationArnParameters<Partition>) {
  return new DeliveryDestinationArn<Partition>(parameters)
}

export interface AnomalyDetectorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
}
class AnomalyDetectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'anomaly-detector', `arn:${string}:logs:${string}:${string}:anomaly-detector:${string}`> {
  readonly [ArnResourceTypeBrand] = 'anomaly-detector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  constructor(parameters: AnomalyDetectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.detectorId = parameters.detectorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:anomaly-detector:${this.detectorId}` as const
  }
}
export type { AnomalyDetectorArn }
export function anomalyDetectorArn<Partition extends ArnPartition = 'aws'>(parameters: AnomalyDetectorArnParameters<Partition>) {
  return new AnomalyDetectorArn<Partition>(parameters)
}
import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GroupLogArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupLog: string
}
class GroupLogArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'log-group',
  `arn:${string}:logs:${string}:${string}:log-group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'log-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupLog: string
  constructor(parameters: GroupLogArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupLog = parameters.nameGroupLog
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:log-group:${this.nameGroupLog}` as const
  }
}
export type { GroupLogArn }
export function groupLogArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupLogArnParameters<Partition>,
) {
  return new GroupLogArn<Partition>(parameters)
}

export interface StreamLogArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupLog: string
  readonly nameStreamLog: string
}
class StreamLogArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'log-stream',
  `arn:${string}:logs:${string}:${string}:log-group:${string}:log-stream:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'log-stream' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupLog: string
  readonly nameStreamLog: string
  constructor(parameters: StreamLogArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupLog = parameters.nameGroupLog
    this.nameStreamLog = parameters.nameStreamLog
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:log-group:${this.nameGroupLog}:log-stream:${this.nameStreamLog}` as const
  }
}
export type { StreamLogArn }
export function streamLogArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamLogArnParameters<Partition>,
) {
  return new StreamLogArn<Partition>(parameters)
}

export interface DestinationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDestination: string
}
class DestinationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'destination',
  `arn:${string}:logs:${string}:${string}:destination:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'destination' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDestination: string
  constructor(parameters: DestinationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDestination = parameters.nameDestination
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:destination:${this.nameDestination}` as const
  }
}
export type { DestinationArn }
export function destinationArn<Partition extends ArnPartition = 'aws'>(
  parameters: DestinationArnParameters<Partition>,
) {
  return new DestinationArn<Partition>(parameters)
}

export interface SourceDeliveryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSourceDelivery: string
}
class SourceDeliveryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'delivery-source',
  `arn:${string}:logs:${string}:${string}:delivery-source:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'delivery-source' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSourceDelivery: string
  constructor(parameters: SourceDeliveryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSourceDelivery = parameters.nameSourceDelivery
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:delivery-source:${this.nameSourceDelivery}` as const
  }
}
export type { SourceDeliveryArn }
export function sourceDeliveryArn<Partition extends ArnPartition = 'aws'>(
  parameters: SourceDeliveryArnParameters<Partition>,
) {
  return new SourceDeliveryArn<Partition>(parameters)
}

export interface DeliveryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDelivery: string
}
class DeliveryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'delivery',
  `arn:${string}:logs:${string}:${string}:delivery:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'delivery' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDelivery: string
  constructor(parameters: DeliveryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDelivery = parameters.nameDelivery
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:delivery:${this.nameDelivery}` as const
  }
}
export type { DeliveryArn }
export function deliveryArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeliveryArnParameters<Partition>,
) {
  return new DeliveryArn<Partition>(parameters)
}

export interface DestinationDeliveryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDestinationDelivery: string
}
class DestinationDeliveryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'delivery-destination',
  `arn:${string}:logs:${string}:${string}:delivery-destination:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'delivery-destination' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDestinationDelivery: string
  constructor(parameters: DestinationDeliveryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDestinationDelivery = parameters.nameDestinationDelivery
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:delivery-destination:${this.nameDestinationDelivery}` as const
  }
}
export type { DestinationDeliveryArn }
export function destinationDeliveryArn<Partition extends ArnPartition = 'aws'>(
  parameters: DestinationDeliveryArnParameters<Partition>,
) {
  return new DestinationDeliveryArn<Partition>(parameters)
}

export interface DetectorAnomalyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
}
class DetectorAnomalyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'anomaly-detector',
  `arn:${string}:logs:${string}:${string}:anomaly-detector:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'anomaly-detector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  constructor(parameters: DetectorAnomalyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDetector = parameters.idDetector
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:logs:${this.region}:${this.account}:anomaly-detector:${this.idDetector}` as const
  }
}
export type { DetectorAnomalyArn }
export function detectorAnomalyArn<Partition extends ArnPartition = 'aws'>(
  parameters: DetectorAnomalyArnParameters<Partition>,
) {
  return new DetectorAnomalyArn<Partition>(parameters)
}

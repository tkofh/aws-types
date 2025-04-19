import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
}
class NetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'network',
  `arn:${string}:private-networks:${string}:${string}:network/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
  constructor(parameters: NetworkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkName = parameters.networkName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:network/${this.networkName}` as const
  }
}
export type { NetworkArn }
export function networkArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkArnParameters<Partition>,
) {
  return new NetworkArn<Partition>(parameters)
}

export interface NetworkSiteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
  readonly networkSiteName: string
}
class NetworkSiteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-site',
  `arn:${string}:private-networks:${string}:${string}:network-site/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-site' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
  readonly networkSiteName: string
  constructor(parameters: NetworkSiteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkName = parameters.networkName
    this.networkSiteName = parameters.networkSiteName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:network-site/${this.networkName}/${this.networkSiteName}` as const
  }
}
export type { NetworkSiteArn }
export function networkSiteArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkSiteArnParameters<Partition>,
) {
  return new NetworkSiteArn<Partition>(parameters)
}

export interface NetworkResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
  readonly resourceId: string
}
class NetworkResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-resource',
  `arn:${string}:private-networks:${string}:${string}:network-resource/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-resource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
  readonly resourceId: string
  constructor(parameters: NetworkResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkName = parameters.networkName
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:network-resource/${this.networkName}/${this.resourceId}` as const
  }
}
export type { NetworkResourceArn }
export function networkResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkResourceArnParameters<Partition>,
) {
  return new NetworkResourceArn<Partition>(parameters)
}

export interface OrderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
  readonly orderId: string
}
class OrderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'order',
  `arn:${string}:private-networks:${string}:${string}:order/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'order' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
  readonly orderId: string
  constructor(parameters: OrderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkName = parameters.networkName
    this.orderId = parameters.orderId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:order/${this.networkName}/${this.orderId}` as const
  }
}
export type { OrderArn }
export function orderArn<Partition extends ArnPartition = 'aws'>(
  parameters: OrderArnParameters<Partition>,
) {
  return new OrderArn<Partition>(parameters)
}

export interface DeviceIdentifierArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
  readonly deviceId: string
}
class DeviceIdentifierArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'device-identifier',
  `arn:${string}:private-networks:${string}:${string}:device-identifier/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device-identifier' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkName: string
  readonly deviceId: string
  constructor(parameters: DeviceIdentifierArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkName = parameters.networkName
    this.deviceId = parameters.deviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:device-identifier/${this.networkName}/${this.deviceId}` as const
  }
}
export type { DeviceIdentifierArn }
export function deviceIdentifierArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceIdentifierArnParameters<Partition>,
) {
  return new DeviceIdentifierArn<Partition>(parameters)
}

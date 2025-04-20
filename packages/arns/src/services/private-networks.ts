import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
}
class NetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'network',
  `arn:${string}:private-networks:${string}:${string}:network/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
  constructor(parameters: NetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameNetwork = parameters.nameNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:network/${this.nameNetwork}` as const
  }
}
export type { NetworkArn }
export function networkArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkArnParameters<Partition>,
) {
  return new NetworkArn<Partition>(parameters)
}

export interface SiteNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
  readonly nameSiteNetwork: string
}
class SiteNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-site',
  `arn:${string}:private-networks:${string}:${string}:network-site/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-site' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
  readonly nameSiteNetwork: string
  constructor(parameters: SiteNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameNetwork = parameters.nameNetwork
    this.nameSiteNetwork = parameters.nameSiteNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:network-site/${this.nameNetwork}/${this.nameSiteNetwork}` as const
  }
}
export type { SiteNetworkArn }
export function siteNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: SiteNetworkArnParameters<Partition>,
) {
  return new SiteNetworkArn<Partition>(parameters)
}

export interface ResourceNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
  readonly idResource: string
}
class ResourceNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'network-resource',
  `arn:${string}:private-networks:${string}:${string}:network-resource/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network-resource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
  readonly idResource: string
  constructor(parameters: ResourceNetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameNetwork = parameters.nameNetwork
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:network-resource/${this.nameNetwork}/${this.idResource}` as const
  }
}
export type { ResourceNetworkArn }
export function resourceNetworkArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceNetworkArnParameters<Partition>,
) {
  return new ResourceNetworkArn<Partition>(parameters)
}

export interface OrderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
  readonly idOrder: string
}
class OrderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'order',
  `arn:${string}:private-networks:${string}:${string}:order/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'order' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
  readonly idOrder: string
  constructor(parameters: OrderArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameNetwork = parameters.nameNetwork
    this.idOrder = parameters.idOrder
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:order/${this.nameNetwork}/${this.idOrder}` as const
  }
}
export type { OrderArn }
export function orderArn<Partition extends ArnPartition = 'aws'>(
  parameters: OrderArnParameters<Partition>,
) {
  return new OrderArn<Partition>(parameters)
}

export interface IdentifierDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
  readonly idDevice: string
}
class IdentifierDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'device-identifier',
  `arn:${string}:private-networks:${string}:${string}:device-identifier/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device-identifier' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameNetwork: string
  readonly idDevice: string
  constructor(parameters: IdentifierDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameNetwork = parameters.nameNetwork
    this.idDevice = parameters.idDevice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:private-networks:${this.region}:${this.account}:device-identifier/${this.nameNetwork}/${this.idDevice}` as const
  }
}
export type { IdentifierDeviceArn }
export function identifierDeviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentifierDeviceArnParameters<Partition>,
) {
  return new IdentifierDeviceArn<Partition>(parameters)
}

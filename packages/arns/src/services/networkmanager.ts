import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NetworkGlobalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class NetworkGlobalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'global-network',
  `arn:${string}:networkmanager::${string}:global-network/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'global-network' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: NetworkGlobalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:global-network/${this.idResource}` as const
  }
}
export type { NetworkGlobalArn }
export function networkGlobalArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkGlobalArnParameters<Partition>,
) {
  return new NetworkGlobalArn<Partition>(parameters)
}

export interface SiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idNetworkGlobal: string
  readonly idResource: string
}
class SiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'site',
  `arn:${string}:networkmanager::${string}:site/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'site' as const
  readonly partition: string
  readonly account: string
  readonly idNetworkGlobal: string
  readonly idResource: string
  constructor(parameters: SiteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idNetworkGlobal = parameters.idNetworkGlobal
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:site/${this.idNetworkGlobal}/${this.idResource}` as const
  }
}
export type { SiteArn }
export function siteArn<Partition extends ArnPartition = 'aws'>(
  parameters: SiteArnParameters<Partition>,
) {
  return new SiteArn<Partition>(parameters)
}

export interface LinkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idNetworkGlobal: string
  readonly idResource: string
}
class LinkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'link',
  `arn:${string}:networkmanager::${string}:link/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'link' as const
  readonly partition: string
  readonly account: string
  readonly idNetworkGlobal: string
  readonly idResource: string
  constructor(parameters: LinkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idNetworkGlobal = parameters.idNetworkGlobal
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:link/${this.idNetworkGlobal}/${this.idResource}` as const
  }
}
export type { LinkArn }
export function linkArn<Partition extends ArnPartition = 'aws'>(
  parameters: LinkArnParameters<Partition>,
) {
  return new LinkArn<Partition>(parameters)
}

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idNetworkGlobal: string
  readonly idResource: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'device',
  `arn:${string}:networkmanager::${string}:device/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: string
  readonly account: string
  readonly idNetworkGlobal: string
  readonly idResource: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idNetworkGlobal = parameters.idNetworkGlobal
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:device/${this.idNetworkGlobal}/${this.idResource}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceArnParameters<Partition>,
) {
  return new DeviceArn<Partition>(parameters)
}

export interface ConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idNetworkGlobal: string
  readonly idResource: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connection',
  `arn:${string}:networkmanager::${string}:connection/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connection' as const
  readonly partition: string
  readonly account: string
  readonly idNetworkGlobal: string
  readonly idResource: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idNetworkGlobal = parameters.idNetworkGlobal
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:connection/${this.idNetworkGlobal}/${this.idResource}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionArnParameters<Partition>,
) {
  return new ConnectionArn<Partition>(parameters)
}

export interface NetworkCoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class NetworkCoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'core-network',
  `arn:${string}:networkmanager::${string}:core-network/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'core-network' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: NetworkCoreArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:core-network/${this.idResource}` as const
  }
}
export type { NetworkCoreArn }
export function networkCoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkCoreArnParameters<Partition>,
) {
  return new NetworkCoreArn<Partition>(parameters)
}

export interface AttachmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class AttachmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'attachment',
  `arn:${string}:networkmanager::${string}:attachment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attachment' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AttachmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:attachment/${this.idResource}` as const
  }
}
export type { AttachmentArn }
export function attachmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttachmentArnParameters<Partition>,
) {
  return new AttachmentArn<Partition>(parameters)
}

export interface PeerConnectArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class PeerConnectArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connect-peer',
  `arn:${string}:networkmanager::${string}:connect-peer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connect-peer' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: PeerConnectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:connect-peer/${this.idResource}` as const
  }
}
export type { PeerConnectArn }
export function peerConnectArn<Partition extends ArnPartition = 'aws'>(
  parameters: PeerConnectArnParameters<Partition>,
) {
  return new PeerConnectArn<Partition>(parameters)
}

export interface PeeringArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class PeeringArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'peering',
  `arn:${string}:networkmanager::${string}:peering/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'peering' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: PeeringArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:peering/${this.idResource}` as const
  }
}
export type { PeeringArn }
export function peeringArn<Partition extends ArnPartition = 'aws'>(
  parameters: PeeringArnParameters<Partition>,
) {
  return new PeeringArn<Partition>(parameters)
}

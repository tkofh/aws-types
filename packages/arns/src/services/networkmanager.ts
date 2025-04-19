import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface GlobalNetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class GlobalNetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'global-network', `arn:${string}:networkmanager::${string}:global-network/${string}`> {
  readonly [ArnResourceTypeBrand] = 'global-network' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: GlobalNetworkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:global-network/${this.resourceId}` as const
  }
}
export type { GlobalNetworkArn }
export function globalNetworkArn<Partition extends ArnPartition = 'aws'>(parameters: GlobalNetworkArnParameters<Partition>) {
  return new GlobalNetworkArn<Partition>(parameters)
}

export interface SiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly globalNetworkId: string
  readonly resourceId: string
}
class SiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'site', `arn:${string}:networkmanager::${string}:site/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'site' as const
  readonly partition: Partition
  readonly account: string
  readonly globalNetworkId: string
  readonly resourceId: string
  constructor(parameters: SiteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.globalNetworkId = parameters.globalNetworkId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:site/${this.globalNetworkId}/${this.resourceId}` as const
  }
}
export type { SiteArn }
export function siteArn<Partition extends ArnPartition = 'aws'>(parameters: SiteArnParameters<Partition>) {
  return new SiteArn<Partition>(parameters)
}

export interface LinkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly globalNetworkId: string
  readonly resourceId: string
}
class LinkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'link', `arn:${string}:networkmanager::${string}:link/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'link' as const
  readonly partition: Partition
  readonly account: string
  readonly globalNetworkId: string
  readonly resourceId: string
  constructor(parameters: LinkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.globalNetworkId = parameters.globalNetworkId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:link/${this.globalNetworkId}/${this.resourceId}` as const
  }
}
export type { LinkArn }
export function linkArn<Partition extends ArnPartition = 'aws'>(parameters: LinkArnParameters<Partition>) {
  return new LinkArn<Partition>(parameters)
}

export interface DeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly globalNetworkId: string
  readonly resourceId: string
}
class DeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'device', `arn:${string}:networkmanager::${string}:device/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'device' as const
  readonly partition: Partition
  readonly account: string
  readonly globalNetworkId: string
  readonly resourceId: string
  constructor(parameters: DeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.globalNetworkId = parameters.globalNetworkId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:device/${this.globalNetworkId}/${this.resourceId}` as const
  }
}
export type { DeviceArn }
export function deviceArn<Partition extends ArnPartition = 'aws'>(parameters: DeviceArnParameters<Partition>) {
  return new DeviceArn<Partition>(parameters)
}

export interface ConnectionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly globalNetworkId: string
  readonly resourceId: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'connection', `arn:${string}:networkmanager::${string}:connection/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'connection' as const
  readonly partition: Partition
  readonly account: string
  readonly globalNetworkId: string
  readonly resourceId: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.globalNetworkId = parameters.globalNetworkId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:connection/${this.globalNetworkId}/${this.resourceId}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectionArnParameters<Partition>) {
  return new ConnectionArn<Partition>(parameters)
}

export interface CoreNetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class CoreNetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'core-network', `arn:${string}:networkmanager::${string}:core-network/${string}`> {
  readonly [ArnResourceTypeBrand] = 'core-network' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CoreNetworkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:core-network/${this.resourceId}` as const
  }
}
export type { CoreNetworkArn }
export function coreNetworkArn<Partition extends ArnPartition = 'aws'>(parameters: CoreNetworkArnParameters<Partition>) {
  return new CoreNetworkArn<Partition>(parameters)
}

export interface AttachmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class AttachmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'attachment', `arn:${string}:networkmanager::${string}:attachment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'attachment' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AttachmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:attachment/${this.resourceId}` as const
  }
}
export type { AttachmentArn }
export function attachmentArn<Partition extends ArnPartition = 'aws'>(parameters: AttachmentArnParameters<Partition>) {
  return new AttachmentArn<Partition>(parameters)
}

export interface ConnectPeerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class ConnectPeerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'connect-peer', `arn:${string}:networkmanager::${string}:connect-peer/${string}`> {
  readonly [ArnResourceTypeBrand] = 'connect-peer' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ConnectPeerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:connect-peer/${this.resourceId}` as const
  }
}
export type { ConnectPeerArn }
export function connectPeerArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectPeerArnParameters<Partition>) {
  return new ConnectPeerArn<Partition>(parameters)
}

export interface PeeringArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class PeeringArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'peering', `arn:${string}:networkmanager::${string}:peering/${string}`> {
  readonly [ArnResourceTypeBrand] = 'peering' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PeeringArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:networkmanager::${this.account}:peering/${this.resourceId}` as const
  }
}
export type { PeeringArn }
export function peeringArn<Partition extends ArnPartition = 'aws'>(parameters: PeeringArnParameters<Partition>) {
  return new PeeringArn<Partition>(parameters)
}
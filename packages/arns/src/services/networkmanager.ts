export interface GlobalNetworkArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type GlobalNetworkArn = `arn:${string}:networkmanager::${string}:global-network/${string}`
export function globalNetworkArn(parameters: GlobalNetworkArnParameters): GlobalNetworkArn {
  return `arn:${parameters.partition ?? ''}:networkmanager::${parameters.account}:global-network/${parameters.resourceId}`
}

export interface SiteArnParameters {
  partition?: string | undefined
  account: string
  globalNetworkId: string
  resourceId: string
}
export type SiteArn = `arn:${string}:networkmanager::${string}:site/${string}/${string}`
export function siteArn(parameters: SiteArnParameters): SiteArn {
  return `arn:${parameters.partition ?? ''}:networkmanager::${parameters.account}:site/${parameters.globalNetworkId}/${parameters.resourceId}`
}

export interface LinkArnParameters {
  partition?: string | undefined
  account: string
  globalNetworkId: string
  resourceId: string
}
export type LinkArn = `arn:${string}:networkmanager::${string}:link/${string}/${string}`
export function linkArn(parameters: LinkArnParameters): LinkArn {
  return `arn:${parameters.partition ?? ''}:networkmanager::${parameters.account}:link/${parameters.globalNetworkId}/${parameters.resourceId}`
}

export interface DeviceArnParameters {
  partition?: string | undefined
  account: string
  globalNetworkId: string
  resourceId: string
}
export type DeviceArn = `arn:${string}:networkmanager::${string}:device/${string}/${string}`
export function deviceArn(parameters: DeviceArnParameters): DeviceArn {
  return `arn:${parameters.partition ?? ''}:networkmanager::${parameters.account}:device/${parameters.globalNetworkId}/${parameters.resourceId}`
}

export interface ConnectionArnParameters {
  partition?: string | undefined
  account: string
  globalNetworkId: string
  resourceId: string
}
export type ConnectionArn = `arn:${string}:networkmanager::${string}:connection/${string}/${string}`
export function connectionArn(parameters: ConnectionArnParameters): ConnectionArn {
  return `arn:${parameters.partition ?? ''}:networkmanager::${parameters.account}:connection/${parameters.globalNetworkId}/${parameters.resourceId}`
}

export interface CoreNetworkArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type CoreNetworkArn = `arn:${string}:networkmanager::${string}:core-network/${string}`
export function coreNetworkArn(parameters: CoreNetworkArnParameters): CoreNetworkArn {
  return `arn:${parameters.partition ?? ''}:networkmanager::${parameters.account}:core-network/${parameters.resourceId}`
}

export interface AttachmentArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type AttachmentArn = `arn:${string}:networkmanager::${string}:attachment/${string}`
export function attachmentArn(parameters: AttachmentArnParameters): AttachmentArn {
  return `arn:${parameters.partition ?? ''}:networkmanager::${parameters.account}:attachment/${parameters.resourceId}`
}

export interface ConnectPeerArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type ConnectPeerArn = `arn:${string}:networkmanager::${string}:connect-peer/${string}`
export function connectPeerArn(parameters: ConnectPeerArnParameters): ConnectPeerArn {
  return `arn:${parameters.partition ?? ''}:networkmanager::${parameters.account}:connect-peer/${parameters.resourceId}`
}

export interface PeeringArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type PeeringArn = `arn:${string}:networkmanager::${string}:peering/${string}`
export function peeringArn(parameters: PeeringArnParameters): PeeringArn {
  return `arn:${parameters.partition ?? ''}:networkmanager::${parameters.account}:peering/${parameters.resourceId}`
}
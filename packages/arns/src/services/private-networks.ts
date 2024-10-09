export interface NetworkArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkName: string
}
export type NetworkArn = `arn:${string}:private-networks:${string}:${string}:network/${string}`
export function networkArn(parameters: NetworkArnParameters): NetworkArn {
  return `arn:${parameters.partition ?? ''}:private-networks:${parameters.region}:${parameters.account}:network/${parameters.networkName}`
}

export interface NetworkSiteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkName: string
  networkSiteName: string
}
export type NetworkSiteArn = `arn:${string}:private-networks:${string}:${string}:network-site/${string}/${string}`
export function networkSiteArn(parameters: NetworkSiteArnParameters): NetworkSiteArn {
  return `arn:${parameters.partition ?? ''}:private-networks:${parameters.region}:${parameters.account}:network-site/${parameters.networkName}/${parameters.networkSiteName}`
}

export interface NetworkResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkName: string
  resourceId: string
}
export type NetworkResourceArn = `arn:${string}:private-networks:${string}:${string}:network-resource/${string}/${string}`
export function networkResourceArn(parameters: NetworkResourceArnParameters): NetworkResourceArn {
  return `arn:${parameters.partition ?? ''}:private-networks:${parameters.region}:${parameters.account}:network-resource/${parameters.networkName}/${parameters.resourceId}`
}

export interface OrderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkName: string
  orderId: string
}
export type OrderArn = `arn:${string}:private-networks:${string}:${string}:order/${string}/${string}`
export function orderArn(parameters: OrderArnParameters): OrderArn {
  return `arn:${parameters.partition ?? ''}:private-networks:${parameters.region}:${parameters.account}:order/${parameters.networkName}/${parameters.orderId}`
}

export interface DeviceIdentifierArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkName: string
  deviceId: string
}
export type DeviceIdentifierArn = `arn:${string}:private-networks:${string}:${string}:device-identifier/${string}/${string}`
export function deviceIdentifierArn(parameters: DeviceIdentifierArnParameters): DeviceIdentifierArn {
  return `arn:${parameters.partition ?? ''}:private-networks:${parameters.region}:${parameters.account}:device-identifier/${parameters.networkName}/${parameters.deviceId}`
}
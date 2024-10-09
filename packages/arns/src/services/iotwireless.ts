export interface WirelessDeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  wirelessDeviceId: string
}
export type WirelessDeviceArn = `arn:${string}:iotwireless:${string}:${string}:WirelessDevice/${string}`
export function wirelessDeviceArn(parameters: WirelessDeviceArnParameters): WirelessDeviceArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:WirelessDevice/${parameters.wirelessDeviceId}`
}

export interface WirelessGatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  wirelessGatewayId: string
}
export type WirelessGatewayArn = `arn:${string}:iotwireless:${string}:${string}:WirelessGateway/${string}`
export function wirelessGatewayArn(parameters: WirelessGatewayArnParameters): WirelessGatewayArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:WirelessGateway/${parameters.wirelessGatewayId}`
}

export interface DeviceProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceProfileId: string
}
export type DeviceProfileArn = `arn:${string}:iotwireless:${string}:${string}:DeviceProfile/${string}`
export function deviceProfileArn(parameters: DeviceProfileArnParameters): DeviceProfileArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:DeviceProfile/${parameters.deviceProfileId}`
}

export interface ServiceProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceProfileId: string
}
export type ServiceProfileArn = `arn:${string}:iotwireless:${string}:${string}:ServiceProfile/${string}`
export function serviceProfileArn(parameters: ServiceProfileArnParameters): ServiceProfileArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:ServiceProfile/${parameters.serviceProfileId}`
}

export interface DestinationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  destinationName: string
}
export type DestinationArn = `arn:${string}:iotwireless:${string}:${string}:Destination/${string}`
export function destinationArn(parameters: DestinationArnParameters): DestinationArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:Destination/${parameters.destinationName}`
}

export interface SidewalkAccountArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sidewalkAccountId: string
}
export type SidewalkAccountArn = `arn:${string}:iotwireless:${string}:${string}:SidewalkAccount/${string}`
export function sidewalkAccountArn(parameters: SidewalkAccountArnParameters): SidewalkAccountArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:SidewalkAccount/${parameters.sidewalkAccountId}`
}

export interface WirelessGatewayTaskDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  wirelessGatewayTaskDefinitionId: string
}
export type WirelessGatewayTaskDefinitionArn = `arn:${string}:iotwireless:${string}:${string}:WirelessGatewayTaskDefinition/${string}`
export function wirelessGatewayTaskDefinitionArn(parameters: WirelessGatewayTaskDefinitionArnParameters): WirelessGatewayTaskDefinitionArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:WirelessGatewayTaskDefinition/${parameters.wirelessGatewayTaskDefinitionId}`
}

export interface FuotaTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fuotaTaskId: string
}
export type FuotaTaskArn = `arn:${string}:iotwireless:${string}:${string}:FuotaTask/${string}`
export function fuotaTaskArn(parameters: FuotaTaskArnParameters): FuotaTaskArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:FuotaTask/${parameters.fuotaTaskId}`
}

export interface MulticastGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  multicastGroupId: string
}
export type MulticastGroupArn = `arn:${string}:iotwireless:${string}:${string}:MulticastGroup/${string}`
export function multicastGroupArn(parameters: MulticastGroupArnParameters): MulticastGroupArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:MulticastGroup/${parameters.multicastGroupId}`
}

export interface NetworkAnalyzerConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkAnalyzerConfigurationName: string
}
export type NetworkAnalyzerConfigurationArn = `arn:${string}:iotwireless:${string}:${string}:NetworkAnalyzerConfiguration/${string}`
export function networkAnalyzerConfigurationArn(parameters: NetworkAnalyzerConfigurationArnParameters): NetworkAnalyzerConfigurationArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:NetworkAnalyzerConfiguration/${parameters.networkAnalyzerConfigurationName}`
}

export interface ThingArnParameters {
  partition?: string | undefined
  region: string
  account: string
  thingName: string
}
export type ThingArn = `arn:${string}:iot:${string}:${string}:thing/${string}`
export function thingArn(parameters: ThingArnParameters): ThingArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:thing/${parameters.thingName}`
}

export interface CertArnParameters {
  partition?: string | undefined
  region: string
  account: string
  certificate: string
}
export type CertArn = `arn:${string}:iot:${string}:${string}:cert/${string}`
export function certArn(parameters: CertArnParameters): CertArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:cert/${parameters.certificate}`
}

export interface ImportTaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  importTaskId: string
}
export type ImportTaskArn = `arn:${string}:iotwireless:${string}:${string}:ImportTask/${string}`
export function importTaskArn(parameters: ImportTaskArnParameters): ImportTaskArn {
  return `arn:${parameters.partition ?? ''}:iotwireless:${parameters.region}:${parameters.account}:ImportTask/${parameters.importTaskId}`
}
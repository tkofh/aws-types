import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface WirelessDeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly wirelessDeviceId: string
}
class WirelessDeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'WirelessDevice', `arn:${string}:iotwireless:${string}:${string}:WirelessDevice/${string}`> {
  readonly [ArnResourceTypeBrand] = 'WirelessDevice' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly wirelessDeviceId: string
  constructor(parameters: WirelessDeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.wirelessDeviceId = parameters.wirelessDeviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:WirelessDevice/${this.wirelessDeviceId}` as const
  }
}
export type { WirelessDeviceArn }
export function wirelessDeviceArn<Partition extends ArnPartition = 'aws'>(parameters: WirelessDeviceArnParameters<Partition>) {
  return new WirelessDeviceArn<Partition>(parameters)
}

export interface WirelessGatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly wirelessGatewayId: string
}
class WirelessGatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'WirelessGateway', `arn:${string}:iotwireless:${string}:${string}:WirelessGateway/${string}`> {
  readonly [ArnResourceTypeBrand] = 'WirelessGateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly wirelessGatewayId: string
  constructor(parameters: WirelessGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.wirelessGatewayId = parameters.wirelessGatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:WirelessGateway/${this.wirelessGatewayId}` as const
  }
}
export type { WirelessGatewayArn }
export function wirelessGatewayArn<Partition extends ArnPartition = 'aws'>(parameters: WirelessGatewayArnParameters<Partition>) {
  return new WirelessGatewayArn<Partition>(parameters)
}

export interface DeviceProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceProfileId: string
}
class DeviceProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'DeviceProfile', `arn:${string}:iotwireless:${string}:${string}:DeviceProfile/${string}`> {
  readonly [ArnResourceTypeBrand] = 'DeviceProfile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceProfileId: string
  constructor(parameters: DeviceProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceProfileId = parameters.deviceProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:DeviceProfile/${this.deviceProfileId}` as const
  }
}
export type { DeviceProfileArn }
export function deviceProfileArn<Partition extends ArnPartition = 'aws'>(parameters: DeviceProfileArnParameters<Partition>) {
  return new DeviceProfileArn<Partition>(parameters)
}

export interface ServiceProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceProfileId: string
}
class ServiceProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ServiceProfile', `arn:${string}:iotwireless:${string}:${string}:ServiceProfile/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ServiceProfile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceProfileId: string
  constructor(parameters: ServiceProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceProfileId = parameters.serviceProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:ServiceProfile/${this.serviceProfileId}` as const
  }
}
export type { ServiceProfileArn }
export function serviceProfileArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceProfileArnParameters<Partition>) {
  return new ServiceProfileArn<Partition>(parameters)
}

export interface DestinationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly destinationName: string
}
class DestinationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Destination', `arn:${string}:iotwireless:${string}:${string}:Destination/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Destination' as const
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
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:Destination/${this.destinationName}` as const
  }
}
export type { DestinationArn }
export function destinationArn<Partition extends ArnPartition = 'aws'>(parameters: DestinationArnParameters<Partition>) {
  return new DestinationArn<Partition>(parameters)
}

export interface SidewalkAccountArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sidewalkAccountId: string
}
class SidewalkAccountArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'SidewalkAccount', `arn:${string}:iotwireless:${string}:${string}:SidewalkAccount/${string}`> {
  readonly [ArnResourceTypeBrand] = 'SidewalkAccount' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sidewalkAccountId: string
  constructor(parameters: SidewalkAccountArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sidewalkAccountId = parameters.sidewalkAccountId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:SidewalkAccount/${this.sidewalkAccountId}` as const
  }
}
export type { SidewalkAccountArn }
export function sidewalkAccountArn<Partition extends ArnPartition = 'aws'>(parameters: SidewalkAccountArnParameters<Partition>) {
  return new SidewalkAccountArn<Partition>(parameters)
}

export interface WirelessGatewayTaskDefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly wirelessGatewayTaskDefinitionId: string
}
class WirelessGatewayTaskDefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'WirelessGatewayTaskDefinition', `arn:${string}:iotwireless:${string}:${string}:WirelessGatewayTaskDefinition/${string}`> {
  readonly [ArnResourceTypeBrand] = 'WirelessGatewayTaskDefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly wirelessGatewayTaskDefinitionId: string
  constructor(parameters: WirelessGatewayTaskDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.wirelessGatewayTaskDefinitionId = parameters.wirelessGatewayTaskDefinitionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:WirelessGatewayTaskDefinition/${this.wirelessGatewayTaskDefinitionId}` as const
  }
}
export type { WirelessGatewayTaskDefinitionArn }
export function wirelessGatewayTaskDefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: WirelessGatewayTaskDefinitionArnParameters<Partition>) {
  return new WirelessGatewayTaskDefinitionArn<Partition>(parameters)
}

export interface FuotaTaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fuotaTaskId: string
}
class FuotaTaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'FuotaTask', `arn:${string}:iotwireless:${string}:${string}:FuotaTask/${string}`> {
  readonly [ArnResourceTypeBrand] = 'FuotaTask' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fuotaTaskId: string
  constructor(parameters: FuotaTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fuotaTaskId = parameters.fuotaTaskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:FuotaTask/${this.fuotaTaskId}` as const
  }
}
export type { FuotaTaskArn }
export function fuotaTaskArn<Partition extends ArnPartition = 'aws'>(parameters: FuotaTaskArnParameters<Partition>) {
  return new FuotaTaskArn<Partition>(parameters)
}

export interface MulticastGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly multicastGroupId: string
}
class MulticastGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'MulticastGroup', `arn:${string}:iotwireless:${string}:${string}:MulticastGroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'MulticastGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly multicastGroupId: string
  constructor(parameters: MulticastGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.multicastGroupId = parameters.multicastGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:MulticastGroup/${this.multicastGroupId}` as const
  }
}
export type { MulticastGroupArn }
export function multicastGroupArn<Partition extends ArnPartition = 'aws'>(parameters: MulticastGroupArnParameters<Partition>) {
  return new MulticastGroupArn<Partition>(parameters)
}

export interface NetworkAnalyzerConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkAnalyzerConfigurationName: string
}
class NetworkAnalyzerConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'NetworkAnalyzerConfiguration', `arn:${string}:iotwireless:${string}:${string}:NetworkAnalyzerConfiguration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'NetworkAnalyzerConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly networkAnalyzerConfigurationName: string
  constructor(parameters: NetworkAnalyzerConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.networkAnalyzerConfigurationName = parameters.networkAnalyzerConfigurationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:NetworkAnalyzerConfiguration/${this.networkAnalyzerConfigurationName}` as const
  }
}
export type { NetworkAnalyzerConfigurationArn }
export function networkAnalyzerConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: NetworkAnalyzerConfigurationArnParameters<Partition>) {
  return new NetworkAnalyzerConfigurationArn<Partition>(parameters)
}

export interface ThingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
}
class ThingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'thing', `arn:${string}:iot:${string}:${string}:thing/${string}`> {
  readonly [ArnResourceTypeBrand] = 'thing' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
  constructor(parameters: ThingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.thingName = parameters.thingName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thing/${this.thingName}` as const
  }
}
export type { ThingArn }
export function thingArn<Partition extends ArnPartition = 'aws'>(parameters: ThingArnParameters<Partition>) {
  return new ThingArn<Partition>(parameters)
}

export interface CertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificate: string
}
class CertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'cert', `arn:${string}:iot:${string}:${string}:cert/${string}`> {
  readonly [ArnResourceTypeBrand] = 'cert' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificate: string
  constructor(parameters: CertArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificate = parameters.certificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:cert/${this.certificate}` as const
  }
}
export type { CertArn }
export function certArn<Partition extends ArnPartition = 'aws'>(parameters: CertArnParameters<Partition>) {
  return new CertArn<Partition>(parameters)
}

export interface ImportTaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importTaskId: string
}
class ImportTaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ImportTask', `arn:${string}:iotwireless:${string}:${string}:ImportTask/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ImportTask' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importTaskId: string
  constructor(parameters: ImportTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.importTaskId = parameters.importTaskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:ImportTask/${this.importTaskId}` as const
  }
}
export type { ImportTaskArn }
export function importTaskArn<Partition extends ArnPartition = 'aws'>(parameters: ImportTaskArnParameters<Partition>) {
  return new ImportTaskArn<Partition>(parameters)
}
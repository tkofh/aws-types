import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DeviceWirelessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDeviceWireless: string
}
class DeviceWirelessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'WirelessDevice',
  `arn:${string}:iotwireless:${string}:${string}:WirelessDevice/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'WirelessDevice' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDeviceWireless: string
  constructor(parameters: DeviceWirelessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDeviceWireless = parameters.idDeviceWireless
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:WirelessDevice/${this.idDeviceWireless}` as const
  }
}
export type { DeviceWirelessArn }
export function deviceWirelessArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceWirelessArnParameters<Partition>,
) {
  return new DeviceWirelessArn<Partition>(parameters)
}

export interface GatewayWirelessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayWireless: string
}
class GatewayWirelessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'WirelessGateway',
  `arn:${string}:iotwireless:${string}:${string}:WirelessGateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'WirelessGateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGatewayWireless: string
  constructor(parameters: GatewayWirelessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGatewayWireless = parameters.idGatewayWireless
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:WirelessGateway/${this.idGatewayWireless}` as const
  }
}
export type { GatewayWirelessArn }
export function gatewayWirelessArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayWirelessArnParameters<Partition>,
) {
  return new GatewayWirelessArn<Partition>(parameters)
}

export interface ProfileDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileDevice: string
}
class ProfileDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DeviceProfile',
  `arn:${string}:iotwireless:${string}:${string}:DeviceProfile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DeviceProfile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileDevice: string
  constructor(parameters: ProfileDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProfileDevice = parameters.idProfileDevice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:DeviceProfile/${this.idProfileDevice}` as const
  }
}
export type { ProfileDeviceArn }
export function profileDeviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileDeviceArnParameters<Partition>,
) {
  return new ProfileDeviceArn<Partition>(parameters)
}

export interface ProfileServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileService: string
}
class ProfileServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ServiceProfile',
  `arn:${string}:iotwireless:${string}:${string}:ServiceProfile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ServiceProfile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileService: string
  constructor(parameters: ProfileServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProfileService = parameters.idProfileService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:ServiceProfile/${this.idProfileService}` as const
  }
}
export type { ProfileServiceArn }
export function profileServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileServiceArnParameters<Partition>,
) {
  return new ProfileServiceArn<Partition>(parameters)
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
  'Destination',
  `arn:${string}:iotwireless:${string}:${string}:Destination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Destination' as const
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
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:Destination/${this.nameDestination}` as const
  }
}
export type { DestinationArn }
export function destinationArn<Partition extends ArnPartition = 'aws'>(
  parameters: DestinationArnParameters<Partition>,
) {
  return new DestinationArn<Partition>(parameters)
}

export interface AccountSidewalkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccountSidewalk: string
}
class AccountSidewalkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SidewalkAccount',
  `arn:${string}:iotwireless:${string}:${string}:SidewalkAccount/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SidewalkAccount' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccountSidewalk: string
  constructor(parameters: AccountSidewalkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAccountSidewalk = parameters.idAccountSidewalk
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:SidewalkAccount/${this.idAccountSidewalk}` as const
  }
}
export type { AccountSidewalkArn }
export function accountSidewalkArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccountSidewalkArnParameters<Partition>,
) {
  return new AccountSidewalkArn<Partition>(parameters)
}

export interface DefinitionTaskGatewayWirelessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionTaskGatewayWireless: string
}
class DefinitionTaskGatewayWirelessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'WirelessGatewayTaskDefinition',
  `arn:${string}:iotwireless:${string}:${string}:WirelessGatewayTaskDefinition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'WirelessGatewayTaskDefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionTaskGatewayWireless: string
  constructor(
    parameters: DefinitionTaskGatewayWirelessArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionTaskGatewayWireless =
      parameters.idDefinitionTaskGatewayWireless
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:WirelessGatewayTaskDefinition/${this.idDefinitionTaskGatewayWireless}` as const
  }
}
export type { DefinitionTaskGatewayWirelessArn }
export function definitionTaskGatewayWirelessArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DefinitionTaskGatewayWirelessArnParameters<Partition>) {
  return new DefinitionTaskGatewayWirelessArn<Partition>(parameters)
}

export interface TaskFuotaArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskFuota: string
}
class TaskFuotaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'FuotaTask',
  `arn:${string}:iotwireless:${string}:${string}:FuotaTask/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'FuotaTask' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskFuota: string
  constructor(parameters: TaskFuotaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTaskFuota = parameters.idTaskFuota
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:FuotaTask/${this.idTaskFuota}` as const
  }
}
export type { TaskFuotaArn }
export function taskFuotaArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskFuotaArnParameters<Partition>,
) {
  return new TaskFuotaArn<Partition>(parameters)
}

export interface GroupMulticastArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupMulticast: string
}
class GroupMulticastArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'MulticastGroup',
  `arn:${string}:iotwireless:${string}:${string}:MulticastGroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'MulticastGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupMulticast: string
  constructor(parameters: GroupMulticastArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupMulticast = parameters.idGroupMulticast
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:MulticastGroup/${this.idGroupMulticast}` as const
  }
}
export type { GroupMulticastArn }
export function groupMulticastArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupMulticastArnParameters<Partition>,
) {
  return new GroupMulticastArn<Partition>(parameters)
}

export interface ConfigurationAnalyzerNetworkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationAnalyzerNetwork: string
}
class ConfigurationAnalyzerNetworkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'NetworkAnalyzerConfiguration',
  `arn:${string}:iotwireless:${string}:${string}:NetworkAnalyzerConfiguration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'NetworkAnalyzerConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationAnalyzerNetwork: string
  constructor(
    parameters: ConfigurationAnalyzerNetworkArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigurationAnalyzerNetwork =
      parameters.nameConfigurationAnalyzerNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:NetworkAnalyzerConfiguration/${this.nameConfigurationAnalyzerNetwork}` as const
  }
}
export type { ConfigurationAnalyzerNetworkArn }
export function configurationAnalyzerNetworkArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationAnalyzerNetworkArnParameters<Partition>) {
  return new ConfigurationAnalyzerNetworkArn<Partition>(parameters)
}

export interface ThingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
}
class ThingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thing',
  `arn:${string}:iot:${string}:${string}:thing/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thing' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
  constructor(parameters: ThingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameThing = parameters.nameThing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thing/${this.nameThing}` as const
  }
}
export type { ThingArn }
export function thingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThingArnParameters<Partition>,
) {
  return new ThingArn<Partition>(parameters)
}

export interface CertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly certificate: string
}
class CertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cert',
  `arn:${string}:iot:${string}:${string}:cert/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cert' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly certificate: string
  constructor(parameters: CertArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificate = parameters.certificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:cert/${this.certificate}` as const
  }
}
export type { CertArn }
export function certArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertArnParameters<Partition>,
) {
  return new CertArn<Partition>(parameters)
}

export interface TaskImportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskImport: string
}
class TaskImportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ImportTask',
  `arn:${string}:iotwireless:${string}:${string}:ImportTask/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ImportTask' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskImport: string
  constructor(parameters: TaskImportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTaskImport = parameters.idTaskImport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotwireless:${this.region}:${this.account}:ImportTask/${this.idTaskImport}` as const
  }
}
export type { TaskImportArn }
export function taskImportArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskImportArnParameters<Partition>,
) {
  return new TaskImportArn<Partition>(parameters)
}

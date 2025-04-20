import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface InfoConnectivityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
}
class InfoConnectivityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connectivityInfo',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/things/${string}/connectivityInfo`
> {
  readonly [ArnResourceTypeBrand] = 'connectivityInfo' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
  constructor(parameters: InfoConnectivityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameThing = parameters.nameThing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/things/${this.nameThing}/connectivityInfo` as const
  }
}
export type { InfoConnectivityArn }
export function infoConnectivityArn<Partition extends ArnPartition = 'aws'>(
  parameters: InfoConnectivityArnParameters<Partition>,
) {
  return new InfoConnectivityArn<Partition>(parameters)
}

export interface ComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponent: string
}
class ComponentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'component',
  `arn:${string}:greengrass:${string}:${string}:components:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'component' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponent: string
  constructor(parameters: ComponentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameComponent = parameters.nameComponent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:components:${this.nameComponent}` as const
  }
}
export type { ComponentArn }
export function componentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentArnParameters<Partition>,
) {
  return new ComponentArn<Partition>(parameters)
}

export interface VersionComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponent: string
  readonly versionComponent: string
}
class VersionComponentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'componentVersion',
  `arn:${string}:greengrass:${string}:${string}:components:${string}:versions:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'componentVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameComponent: string
  readonly versionComponent: string
  constructor(parameters: VersionComponentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameComponent = parameters.nameComponent
    this.versionComponent = parameters.versionComponent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:components:${this.nameComponent}:versions:${this.versionComponent}` as const
  }
}
export type { VersionComponentArn }
export function versionComponentArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionComponentArnParameters<Partition>,
) {
  return new VersionComponentArn<Partition>(parameters)
}

export interface DeviceCoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThingDeviceCore: string
}
class DeviceCoreArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'coreDevice',
  `arn:${string}:greengrass:${string}:${string}:coreDevices:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'coreDevice' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThingDeviceCore: string
  constructor(parameters: DeviceCoreArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameThingDeviceCore = parameters.nameThingDeviceCore
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:coreDevices:${this.nameThingDeviceCore}` as const
  }
}
export type { DeviceCoreArn }
export function deviceCoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeviceCoreArnParameters<Partition>,
) {
  return new DeviceCoreArn<Partition>(parameters)
}

export interface DeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDeployment: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'deployment',
  `arn:${string}:greengrass:${string}:${string}:deployments:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDeployment: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDeployment = parameters.idDeployment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:deployments:${this.idDeployment}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentArnParameters<Partition>,
) {
  return new DeploymentArn<Partition>(parameters)
}

export interface AuthorityCertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
  readonly idAuthorityCertificate: string
}
class AuthorityCertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'certificateAuthority',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/groups/${string}/certificateauthorities/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'certificateAuthority' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
  readonly idAuthorityCertificate: string
  constructor(parameters: AuthorityCertificateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroup = parameters.idGroup
    this.idAuthorityCertificate = parameters.idAuthorityCertificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/groups/${this.idGroup}/certificateauthorities/${this.idAuthorityCertificate}` as const
  }
}
export type { AuthorityCertificateArn }
export function authorityCertificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthorityCertificateArnParameters<Partition>,
) {
  return new AuthorityCertificateArn<Partition>(parameters)
}

export interface DeploymentBulkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDeploymentBulk: string
}
class DeploymentBulkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'bulkDeployment',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/bulk/deployments/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bulkDeployment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDeploymentBulk: string
  constructor(parameters: DeploymentBulkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDeploymentBulk = parameters.idDeploymentBulk
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/bulk/deployments/${this.idDeploymentBulk}` as const
  }
}
export type { DeploymentBulkArn }
export function deploymentBulkArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentBulkArnParameters<Partition>,
) {
  return new DeploymentBulkArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/groups/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroup = parameters.idGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/groups/${this.idGroup}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface VersionGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
  readonly idVersion: string
}
class VersionGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'groupVersion',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/groups/${string}/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'groupVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
  readonly idVersion: string
  constructor(parameters: VersionGroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroup = parameters.idGroup
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/groups/${this.idGroup}/versions/${this.idVersion}` as const
  }
}
export type { VersionGroupArn }
export function versionGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionGroupArnParameters<Partition>,
) {
  return new VersionGroupArn<Partition>(parameters)
}

export interface DefinitionCoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionCore: string
}
class DefinitionCoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'coreDefinition',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/cores/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'coreDefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionCore: string
  constructor(parameters: DefinitionCoreArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionCore = parameters.idDefinitionCore
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/cores/${this.idDefinitionCore}` as const
  }
}
export type { DefinitionCoreArn }
export function definitionCoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionCoreArnParameters<Partition>,
) {
  return new DefinitionCoreArn<Partition>(parameters)
}

export interface VersionDefinitionCoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionCore: string
  readonly idVersion: string
}
class VersionDefinitionCoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'coreDefinitionVersion',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/cores/${string}/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'coreDefinitionVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionCore: string
  readonly idVersion: string
  constructor(parameters: VersionDefinitionCoreArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionCore = parameters.idDefinitionCore
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/cores/${this.idDefinitionCore}/versions/${this.idVersion}` as const
  }
}
export type { VersionDefinitionCoreArn }
export function versionDefinitionCoreArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionDefinitionCoreArnParameters<Partition>) {
  return new VersionDefinitionCoreArn<Partition>(parameters)
}

export interface DefinitionDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionDevice: string
}
class DefinitionDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deviceDefinition',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/devices/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deviceDefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionDevice: string
  constructor(parameters: DefinitionDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionDevice = parameters.idDefinitionDevice
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/devices/${this.idDefinitionDevice}` as const
  }
}
export type { DefinitionDeviceArn }
export function definitionDeviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionDeviceArnParameters<Partition>,
) {
  return new DefinitionDeviceArn<Partition>(parameters)
}

export interface VersionDefinitionDeviceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionDevice: string
  readonly idVersion: string
}
class VersionDefinitionDeviceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deviceDefinitionVersion',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/devices/${string}/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deviceDefinitionVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionDevice: string
  readonly idVersion: string
  constructor(parameters: VersionDefinitionDeviceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionDevice = parameters.idDefinitionDevice
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/devices/${this.idDefinitionDevice}/versions/${this.idVersion}` as const
  }
}
export type { VersionDefinitionDeviceArn }
export function versionDefinitionDeviceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionDefinitionDeviceArnParameters<Partition>) {
  return new VersionDefinitionDeviceArn<Partition>(parameters)
}

export interface DefinitionFunctionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionFunction: string
}
class DefinitionFunctionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'functionDefinition',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/functions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'functionDefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionFunction: string
  constructor(parameters: DefinitionFunctionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionFunction = parameters.idDefinitionFunction
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/functions/${this.idDefinitionFunction}` as const
  }
}
export type { DefinitionFunctionArn }
export function definitionFunctionArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionFunctionArnParameters<Partition>,
) {
  return new DefinitionFunctionArn<Partition>(parameters)
}

export interface VersionDefinitionFunctionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionFunction: string
  readonly idVersion: string
}
class VersionDefinitionFunctionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'functionDefinitionVersion',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/functions/${string}/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'functionDefinitionVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionFunction: string
  readonly idVersion: string
  constructor(parameters: VersionDefinitionFunctionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionFunction = parameters.idDefinitionFunction
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/functions/${this.idDefinitionFunction}/versions/${this.idVersion}` as const
  }
}
export type { VersionDefinitionFunctionArn }
export function versionDefinitionFunctionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionDefinitionFunctionArnParameters<Partition>) {
  return new VersionDefinitionFunctionArn<Partition>(parameters)
}

export interface DefinitionSubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionSubscription: string
}
class DefinitionSubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subscriptionDefinition',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/subscriptions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subscriptionDefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionSubscription: string
  constructor(parameters: DefinitionSubscriptionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionSubscription = parameters.idDefinitionSubscription
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/subscriptions/${this.idDefinitionSubscription}` as const
  }
}
export type { DefinitionSubscriptionArn }
export function definitionSubscriptionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DefinitionSubscriptionArnParameters<Partition>) {
  return new DefinitionSubscriptionArn<Partition>(parameters)
}

export interface VersionDefinitionSubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionSubscription: string
  readonly idVersion: string
}
class VersionDefinitionSubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subscriptionDefinitionVersion',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/subscriptions/${string}/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subscriptionDefinitionVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionSubscription: string
  readonly idVersion: string
  constructor(
    parameters: VersionDefinitionSubscriptionArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionSubscription = parameters.idDefinitionSubscription
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/subscriptions/${this.idDefinitionSubscription}/versions/${this.idVersion}` as const
  }
}
export type { VersionDefinitionSubscriptionArn }
export function versionDefinitionSubscriptionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionDefinitionSubscriptionArnParameters<Partition>) {
  return new VersionDefinitionSubscriptionArn<Partition>(parameters)
}

export interface DefinitionLoggerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionLogger: string
}
class DefinitionLoggerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'loggerDefinition',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/loggers/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'loggerDefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionLogger: string
  constructor(parameters: DefinitionLoggerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionLogger = parameters.idDefinitionLogger
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/loggers/${this.idDefinitionLogger}` as const
  }
}
export type { DefinitionLoggerArn }
export function definitionLoggerArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionLoggerArnParameters<Partition>,
) {
  return new DefinitionLoggerArn<Partition>(parameters)
}

export interface VersionDefinitionLoggerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionLogger: string
  readonly idVersion: string
}
class VersionDefinitionLoggerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'loggerDefinitionVersion',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/loggers/${string}/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'loggerDefinitionVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionLogger: string
  readonly idVersion: string
  constructor(parameters: VersionDefinitionLoggerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionLogger = parameters.idDefinitionLogger
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/loggers/${this.idDefinitionLogger}/versions/${this.idVersion}` as const
  }
}
export type { VersionDefinitionLoggerArn }
export function versionDefinitionLoggerArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionDefinitionLoggerArnParameters<Partition>) {
  return new VersionDefinitionLoggerArn<Partition>(parameters)
}

export interface DefinitionResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionResource: string
}
class DefinitionResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resourceDefinition',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/resources/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resourceDefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionResource: string
  constructor(parameters: DefinitionResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionResource = parameters.idDefinitionResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/resources/${this.idDefinitionResource}` as const
  }
}
export type { DefinitionResourceArn }
export function definitionResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionResourceArnParameters<Partition>,
) {
  return new DefinitionResourceArn<Partition>(parameters)
}

export interface VersionDefinitionResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionResource: string
  readonly idVersion: string
}
class VersionDefinitionResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resourceDefinitionVersion',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/resources/${string}/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resourceDefinitionVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionResource: string
  readonly idVersion: string
  constructor(parameters: VersionDefinitionResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionResource = parameters.idDefinitionResource
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/resources/${this.idDefinitionResource}/versions/${this.idVersion}` as const
  }
}
export type { VersionDefinitionResourceArn }
export function versionDefinitionResourceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionDefinitionResourceArnParameters<Partition>) {
  return new VersionDefinitionResourceArn<Partition>(parameters)
}

export interface DefinitionConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionConnector: string
}
class DefinitionConnectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connectorDefinition',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/connectors/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connectorDefinition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionConnector: string
  constructor(parameters: DefinitionConnectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionConnector = parameters.idDefinitionConnector
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/connectors/${this.idDefinitionConnector}` as const
  }
}
export type { DefinitionConnectorArn }
export function definitionConnectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionConnectorArnParameters<Partition>,
) {
  return new DefinitionConnectorArn<Partition>(parameters)
}

export interface VersionDefinitionConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionConnector: string
  readonly idVersion: string
}
class VersionDefinitionConnectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connectorDefinitionVersion',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/connectors/${string}/versions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connectorDefinitionVersion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDefinitionConnector: string
  readonly idVersion: string
  constructor(parameters: VersionDefinitionConnectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDefinitionConnector = parameters.idDefinitionConnector
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/connectors/${this.idDefinitionConnector}/versions/${this.idVersion}` as const
  }
}
export type { VersionDefinitionConnectorArn }
export function versionDefinitionConnectorArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionDefinitionConnectorArnParameters<Partition>) {
  return new VersionDefinitionConnectorArn<Partition>(parameters)
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

export interface ConfigRuntimeThingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
}
class ConfigRuntimeThingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'thingRuntimeConfig',
  `arn:${string}:greengrass:${string}:${string}:/greengrass/things/${string}/runtimeconfig`
> {
  readonly [ArnResourceTypeBrand] = 'thingRuntimeConfig' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
  constructor(parameters: ConfigRuntimeThingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameThing = parameters.nameThing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/things/${this.nameThing}/runtimeconfig` as const
  }
}
export type { ConfigRuntimeThingArn }
export function configRuntimeThingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigRuntimeThingArnParameters<Partition>,
) {
  return new ConfigRuntimeThingArn<Partition>(parameters)
}

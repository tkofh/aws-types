import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ConnectivityInfoArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
}
class ConnectivityInfoArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'connectivityInfo', `arn:${string}:greengrass:${string}:${string}:/greengrass/things/${string}/connectivityInfo`> {
  readonly [ArnResourceTypeBrand] = 'connectivityInfo' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
  constructor(parameters: ConnectivityInfoArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.thingName = parameters.thingName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/things/${this.thingName}/connectivityInfo` as const
  }
}
export type { ConnectivityInfoArn }
export function connectivityInfoArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectivityInfoArnParameters<Partition>) {
  return new ConnectivityInfoArn<Partition>(parameters)
}

export interface ComponentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly componentName: string
}
class ComponentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'component', `arn:${string}:greengrass:${string}:${string}:components:${string}`> {
  readonly [ArnResourceTypeBrand] = 'component' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly componentName: string
  constructor(parameters: ComponentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.componentName = parameters.componentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:components:${this.componentName}` as const
  }
}
export type { ComponentArn }
export function componentArn<Partition extends ArnPartition = 'aws'>(parameters: ComponentArnParameters<Partition>) {
  return new ComponentArn<Partition>(parameters)
}

export interface ComponentVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly componentName: string
  readonly componentVersion: string
}
class ComponentVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'componentVersion', `arn:${string}:greengrass:${string}:${string}:components:${string}:versions:${string}`> {
  readonly [ArnResourceTypeBrand] = 'componentVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly componentName: string
  readonly componentVersion: string
  constructor(parameters: ComponentVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.componentName = parameters.componentName
    this.componentVersion = parameters.componentVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:components:${this.componentName}:versions:${this.componentVersion}` as const
  }
}
export type { ComponentVersionArn }
export function componentVersionArn<Partition extends ArnPartition = 'aws'>(parameters: ComponentVersionArnParameters<Partition>) {
  return new ComponentVersionArn<Partition>(parameters)
}

export interface CoreDeviceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly coreDeviceThingName: string
}
class CoreDeviceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'coreDevice', `arn:${string}:greengrass:${string}:${string}:coreDevices:${string}`> {
  readonly [ArnResourceTypeBrand] = 'coreDevice' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly coreDeviceThingName: string
  constructor(parameters: CoreDeviceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.coreDeviceThingName = parameters.coreDeviceThingName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:coreDevices:${this.coreDeviceThingName}` as const
  }
}
export type { CoreDeviceArn }
export function coreDeviceArn<Partition extends ArnPartition = 'aws'>(parameters: CoreDeviceArnParameters<Partition>) {
  return new CoreDeviceArn<Partition>(parameters)
}

export interface DeploymentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentId: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'deployment', `arn:${string}:greengrass:${string}:${string}:deployments:${string}`> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentId: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deploymentId = parameters.deploymentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:deployments:${this.deploymentId}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(parameters: DeploymentArnParameters<Partition>) {
  return new DeploymentArn<Partition>(parameters)
}

export interface CertificateAuthorityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  readonly certificateAuthorityId: string
}
class CertificateAuthorityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'certificateAuthority', `arn:${string}:greengrass:${string}:${string}:/greengrass/groups/${string}/certificateauthorities/${string}`> {
  readonly [ArnResourceTypeBrand] = 'certificateAuthority' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  readonly certificateAuthorityId: string
  constructor(parameters: CertificateAuthorityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupId = parameters.groupId
    this.certificateAuthorityId = parameters.certificateAuthorityId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/groups/${this.groupId}/certificateauthorities/${this.certificateAuthorityId}` as const
  }
}
export type { CertificateAuthorityArn }
export function certificateAuthorityArn<Partition extends ArnPartition = 'aws'>(parameters: CertificateAuthorityArnParameters<Partition>) {
  return new CertificateAuthorityArn<Partition>(parameters)
}

export interface BulkDeploymentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly bulkDeploymentId: string
}
class BulkDeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'bulkDeployment', `arn:${string}:greengrass:${string}:${string}:/greengrass/bulk/deployments/${string}`> {
  readonly [ArnResourceTypeBrand] = 'bulkDeployment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly bulkDeploymentId: string
  constructor(parameters: BulkDeploymentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.bulkDeploymentId = parameters.bulkDeploymentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/bulk/deployments/${this.bulkDeploymentId}` as const
  }
}
export type { BulkDeploymentArn }
export function bulkDeploymentArn<Partition extends ArnPartition = 'aws'>(parameters: BulkDeploymentArnParameters<Partition>) {
  return new BulkDeploymentArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'group', `arn:${string}:greengrass:${string}:${string}:/greengrass/groups/${string}`> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupId = parameters.groupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/groups/${this.groupId}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(parameters: GroupArnParameters<Partition>) {
  return new GroupArn<Partition>(parameters)
}

export interface GroupVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  readonly versionId: string
}
class GroupVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'groupVersion', `arn:${string}:greengrass:${string}:${string}:/greengrass/groups/${string}/versions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'groupVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  readonly versionId: string
  constructor(parameters: GroupVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupId = parameters.groupId
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/groups/${this.groupId}/versions/${this.versionId}` as const
  }
}
export type { GroupVersionArn }
export function groupVersionArn<Partition extends ArnPartition = 'aws'>(parameters: GroupVersionArnParameters<Partition>) {
  return new GroupVersionArn<Partition>(parameters)
}

export interface CoreDefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly coreDefinitionId: string
}
class CoreDefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'coreDefinition', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/cores/${string}`> {
  readonly [ArnResourceTypeBrand] = 'coreDefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly coreDefinitionId: string
  constructor(parameters: CoreDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.coreDefinitionId = parameters.coreDefinitionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/cores/${this.coreDefinitionId}` as const
  }
}
export type { CoreDefinitionArn }
export function coreDefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: CoreDefinitionArnParameters<Partition>) {
  return new CoreDefinitionArn<Partition>(parameters)
}

export interface CoreDefinitionVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly coreDefinitionId: string
  readonly versionId: string
}
class CoreDefinitionVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'coreDefinitionVersion', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/cores/${string}/versions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'coreDefinitionVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly coreDefinitionId: string
  readonly versionId: string
  constructor(parameters: CoreDefinitionVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.coreDefinitionId = parameters.coreDefinitionId
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/cores/${this.coreDefinitionId}/versions/${this.versionId}` as const
  }
}
export type { CoreDefinitionVersionArn }
export function coreDefinitionVersionArn<Partition extends ArnPartition = 'aws'>(parameters: CoreDefinitionVersionArnParameters<Partition>) {
  return new CoreDefinitionVersionArn<Partition>(parameters)
}

export interface DeviceDefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceDefinitionId: string
}
class DeviceDefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'deviceDefinition', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/devices/${string}`> {
  readonly [ArnResourceTypeBrand] = 'deviceDefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceDefinitionId: string
  constructor(parameters: DeviceDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceDefinitionId = parameters.deviceDefinitionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/devices/${this.deviceDefinitionId}` as const
  }
}
export type { DeviceDefinitionArn }
export function deviceDefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: DeviceDefinitionArnParameters<Partition>) {
  return new DeviceDefinitionArn<Partition>(parameters)
}

export interface DeviceDefinitionVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceDefinitionId: string
  readonly versionId: string
}
class DeviceDefinitionVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'deviceDefinitionVersion', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/devices/${string}/versions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'deviceDefinitionVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deviceDefinitionId: string
  readonly versionId: string
  constructor(parameters: DeviceDefinitionVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deviceDefinitionId = parameters.deviceDefinitionId
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/devices/${this.deviceDefinitionId}/versions/${this.versionId}` as const
  }
}
export type { DeviceDefinitionVersionArn }
export function deviceDefinitionVersionArn<Partition extends ArnPartition = 'aws'>(parameters: DeviceDefinitionVersionArnParameters<Partition>) {
  return new DeviceDefinitionVersionArn<Partition>(parameters)
}

export interface FunctionDefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionDefinitionId: string
}
class FunctionDefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'functionDefinition', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/functions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'functionDefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionDefinitionId: string
  constructor(parameters: FunctionDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.functionDefinitionId = parameters.functionDefinitionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/functions/${this.functionDefinitionId}` as const
  }
}
export type { FunctionDefinitionArn }
export function functionDefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: FunctionDefinitionArnParameters<Partition>) {
  return new FunctionDefinitionArn<Partition>(parameters)
}

export interface FunctionDefinitionVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionDefinitionId: string
  readonly versionId: string
}
class FunctionDefinitionVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'functionDefinitionVersion', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/functions/${string}/versions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'functionDefinitionVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly functionDefinitionId: string
  readonly versionId: string
  constructor(parameters: FunctionDefinitionVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.functionDefinitionId = parameters.functionDefinitionId
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/functions/${this.functionDefinitionId}/versions/${this.versionId}` as const
  }
}
export type { FunctionDefinitionVersionArn }
export function functionDefinitionVersionArn<Partition extends ArnPartition = 'aws'>(parameters: FunctionDefinitionVersionArnParameters<Partition>) {
  return new FunctionDefinitionVersionArn<Partition>(parameters)
}

export interface SubscriptionDefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionDefinitionId: string
}
class SubscriptionDefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'subscriptionDefinition', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/subscriptions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'subscriptionDefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionDefinitionId: string
  constructor(parameters: SubscriptionDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subscriptionDefinitionId = parameters.subscriptionDefinitionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/subscriptions/${this.subscriptionDefinitionId}` as const
  }
}
export type { SubscriptionDefinitionArn }
export function subscriptionDefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: SubscriptionDefinitionArnParameters<Partition>) {
  return new SubscriptionDefinitionArn<Partition>(parameters)
}

export interface SubscriptionDefinitionVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionDefinitionId: string
  readonly versionId: string
}
class SubscriptionDefinitionVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'subscriptionDefinitionVersion', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/subscriptions/${string}/versions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'subscriptionDefinitionVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionDefinitionId: string
  readonly versionId: string
  constructor(parameters: SubscriptionDefinitionVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subscriptionDefinitionId = parameters.subscriptionDefinitionId
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/subscriptions/${this.subscriptionDefinitionId}/versions/${this.versionId}` as const
  }
}
export type { SubscriptionDefinitionVersionArn }
export function subscriptionDefinitionVersionArn<Partition extends ArnPartition = 'aws'>(parameters: SubscriptionDefinitionVersionArnParameters<Partition>) {
  return new SubscriptionDefinitionVersionArn<Partition>(parameters)
}

export interface LoggerDefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loggerDefinitionId: string
}
class LoggerDefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'loggerDefinition', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/loggers/${string}`> {
  readonly [ArnResourceTypeBrand] = 'loggerDefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loggerDefinitionId: string
  constructor(parameters: LoggerDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loggerDefinitionId = parameters.loggerDefinitionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/loggers/${this.loggerDefinitionId}` as const
  }
}
export type { LoggerDefinitionArn }
export function loggerDefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: LoggerDefinitionArnParameters<Partition>) {
  return new LoggerDefinitionArn<Partition>(parameters)
}

export interface LoggerDefinitionVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loggerDefinitionId: string
  readonly versionId: string
}
class LoggerDefinitionVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'loggerDefinitionVersion', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/loggers/${string}/versions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'loggerDefinitionVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loggerDefinitionId: string
  readonly versionId: string
  constructor(parameters: LoggerDefinitionVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loggerDefinitionId = parameters.loggerDefinitionId
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/loggers/${this.loggerDefinitionId}/versions/${this.versionId}` as const
  }
}
export type { LoggerDefinitionVersionArn }
export function loggerDefinitionVersionArn<Partition extends ArnPartition = 'aws'>(parameters: LoggerDefinitionVersionArnParameters<Partition>) {
  return new LoggerDefinitionVersionArn<Partition>(parameters)
}

export interface ResourceDefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceDefinitionId: string
}
class ResourceDefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'resourceDefinition', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/resources/${string}`> {
  readonly [ArnResourceTypeBrand] = 'resourceDefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceDefinitionId: string
  constructor(parameters: ResourceDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceDefinitionId = parameters.resourceDefinitionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/resources/${this.resourceDefinitionId}` as const
  }
}
export type { ResourceDefinitionArn }
export function resourceDefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: ResourceDefinitionArnParameters<Partition>) {
  return new ResourceDefinitionArn<Partition>(parameters)
}

export interface ResourceDefinitionVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceDefinitionId: string
  readonly versionId: string
}
class ResourceDefinitionVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'resourceDefinitionVersion', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/resources/${string}/versions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'resourceDefinitionVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceDefinitionId: string
  readonly versionId: string
  constructor(parameters: ResourceDefinitionVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceDefinitionId = parameters.resourceDefinitionId
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/resources/${this.resourceDefinitionId}/versions/${this.versionId}` as const
  }
}
export type { ResourceDefinitionVersionArn }
export function resourceDefinitionVersionArn<Partition extends ArnPartition = 'aws'>(parameters: ResourceDefinitionVersionArnParameters<Partition>) {
  return new ResourceDefinitionVersionArn<Partition>(parameters)
}

export interface ConnectorDefinitionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorDefinitionId: string
}
class ConnectorDefinitionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'connectorDefinition', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/connectors/${string}`> {
  readonly [ArnResourceTypeBrand] = 'connectorDefinition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorDefinitionId: string
  constructor(parameters: ConnectorDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorDefinitionId = parameters.connectorDefinitionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/connectors/${this.connectorDefinitionId}` as const
  }
}
export type { ConnectorDefinitionArn }
export function connectorDefinitionArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectorDefinitionArnParameters<Partition>) {
  return new ConnectorDefinitionArn<Partition>(parameters)
}

export interface ConnectorDefinitionVersionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorDefinitionId: string
  readonly versionId: string
}
class ConnectorDefinitionVersionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'connectorDefinitionVersion', `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/connectors/${string}/versions/${string}`> {
  readonly [ArnResourceTypeBrand] = 'connectorDefinitionVersion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorDefinitionId: string
  readonly versionId: string
  constructor(parameters: ConnectorDefinitionVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorDefinitionId = parameters.connectorDefinitionId
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/definition/connectors/${this.connectorDefinitionId}/versions/${this.versionId}` as const
  }
}
export type { ConnectorDefinitionVersionArn }
export function connectorDefinitionVersionArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectorDefinitionVersionArnParameters<Partition>) {
  return new ConnectorDefinitionVersionArn<Partition>(parameters)
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

export interface ThingRuntimeConfigArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
}
class ThingRuntimeConfigArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'thingRuntimeConfig', `arn:${string}:greengrass:${string}:${string}:/greengrass/things/${string}/runtimeconfig`> {
  readonly [ArnResourceTypeBrand] = 'thingRuntimeConfig' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
  constructor(parameters: ThingRuntimeConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.thingName = parameters.thingName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:greengrass:${this.region}:${this.account}:/greengrass/things/${this.thingName}/runtimeconfig` as const
  }
}
export type { ThingRuntimeConfigArn }
export function thingRuntimeConfigArn<Partition extends ArnPartition = 'aws'>(parameters: ThingRuntimeConfigArnParameters<Partition>) {
  return new ThingRuntimeConfigArn<Partition>(parameters)
}
export interface ConnectivityInfoArnParameters {
  partition?: string | undefined
  region: string
  account: string
  thingName: string
}
export type ConnectivityInfoArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/things/${string}/connectivityInfo`
export function connectivityInfoArn(parameters: ConnectivityInfoArnParameters): ConnectivityInfoArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/things/${parameters.thingName}/connectivityInfo`
}

export interface ComponentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  componentName: string
}
export type ComponentArn = `arn:${string}:greengrass:${string}:${string}:components:${string}`
export function componentArn(parameters: ComponentArnParameters): ComponentArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:components:${parameters.componentName}`
}

export interface ComponentVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  componentName: string
  componentVersion: string
}
export type ComponentVersionArn = `arn:${string}:greengrass:${string}:${string}:components:${string}:versions:${string}`
export function componentVersionArn(parameters: ComponentVersionArnParameters): ComponentVersionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:components:${parameters.componentName}:versions:${parameters.componentVersion}`
}

export interface CoreDeviceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  coreDeviceThingName: string
}
export type CoreDeviceArn = `arn:${string}:greengrass:${string}:${string}:coreDevices:${string}`
export function coreDeviceArn(parameters: CoreDeviceArnParameters): CoreDeviceArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:coreDevices:${parameters.coreDeviceThingName}`
}

export interface DeploymentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deploymentId: string
}
export type DeploymentArn = `arn:${string}:greengrass:${string}:${string}:deployments:${string}`
export function deploymentArn(parameters: DeploymentArnParameters): DeploymentArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:deployments:${parameters.deploymentId}`
}

export interface CertificateAuthorityArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupId: string
  certificateAuthorityId: string
}
export type CertificateAuthorityArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/groups/${string}/certificateauthorities/${string}`
export function certificateAuthorityArn(parameters: CertificateAuthorityArnParameters): CertificateAuthorityArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/groups/${parameters.groupId}/certificateauthorities/${parameters.certificateAuthorityId}`
}

export interface BulkDeploymentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  bulkDeploymentId: string
}
export type BulkDeploymentArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/bulk/deployments/${string}`
export function bulkDeploymentArn(parameters: BulkDeploymentArnParameters): BulkDeploymentArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/bulk/deployments/${parameters.bulkDeploymentId}`
}

export interface GroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupId: string
}
export type GroupArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/groups/${string}`
export function groupArn(parameters: GroupArnParameters): GroupArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/groups/${parameters.groupId}`
}

export interface GroupVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupId: string
  versionId: string
}
export type GroupVersionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/groups/${string}/versions/${string}`
export function groupVersionArn(parameters: GroupVersionArnParameters): GroupVersionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/groups/${parameters.groupId}/versions/${parameters.versionId}`
}

export interface CoreDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  coreDefinitionId: string
}
export type CoreDefinitionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/cores/${string}`
export function coreDefinitionArn(parameters: CoreDefinitionArnParameters): CoreDefinitionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/cores/${parameters.coreDefinitionId}`
}

export interface CoreDefinitionVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  coreDefinitionId: string
  versionId: string
}
export type CoreDefinitionVersionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/cores/${string}/versions/${string}`
export function coreDefinitionVersionArn(parameters: CoreDefinitionVersionArnParameters): CoreDefinitionVersionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/cores/${parameters.coreDefinitionId}/versions/${parameters.versionId}`
}

export interface DeviceDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceDefinitionId: string
}
export type DeviceDefinitionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/devices/${string}`
export function deviceDefinitionArn(parameters: DeviceDefinitionArnParameters): DeviceDefinitionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/devices/${parameters.deviceDefinitionId}`
}

export interface DeviceDefinitionVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deviceDefinitionId: string
  versionId: string
}
export type DeviceDefinitionVersionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/devices/${string}/versions/${string}`
export function deviceDefinitionVersionArn(parameters: DeviceDefinitionVersionArnParameters): DeviceDefinitionVersionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/devices/${parameters.deviceDefinitionId}/versions/${parameters.versionId}`
}

export interface FunctionDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  functionDefinitionId: string
}
export type FunctionDefinitionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/functions/${string}`
export function functionDefinitionArn(parameters: FunctionDefinitionArnParameters): FunctionDefinitionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/functions/${parameters.functionDefinitionId}`
}

export interface FunctionDefinitionVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  functionDefinitionId: string
  versionId: string
}
export type FunctionDefinitionVersionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/functions/${string}/versions/${string}`
export function functionDefinitionVersionArn(parameters: FunctionDefinitionVersionArnParameters): FunctionDefinitionVersionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/functions/${parameters.functionDefinitionId}/versions/${parameters.versionId}`
}

export interface SubscriptionDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subscriptionDefinitionId: string
}
export type SubscriptionDefinitionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/subscriptions/${string}`
export function subscriptionDefinitionArn(parameters: SubscriptionDefinitionArnParameters): SubscriptionDefinitionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/subscriptions/${parameters.subscriptionDefinitionId}`
}

export interface SubscriptionDefinitionVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subscriptionDefinitionId: string
  versionId: string
}
export type SubscriptionDefinitionVersionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/subscriptions/${string}/versions/${string}`
export function subscriptionDefinitionVersionArn(parameters: SubscriptionDefinitionVersionArnParameters): SubscriptionDefinitionVersionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/subscriptions/${parameters.subscriptionDefinitionId}/versions/${parameters.versionId}`
}

export interface LoggerDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loggerDefinitionId: string
}
export type LoggerDefinitionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/loggers/${string}`
export function loggerDefinitionArn(parameters: LoggerDefinitionArnParameters): LoggerDefinitionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/loggers/${parameters.loggerDefinitionId}`
}

export interface LoggerDefinitionVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loggerDefinitionId: string
  versionId: string
}
export type LoggerDefinitionVersionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/loggers/${string}/versions/${string}`
export function loggerDefinitionVersionArn(parameters: LoggerDefinitionVersionArnParameters): LoggerDefinitionVersionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/loggers/${parameters.loggerDefinitionId}/versions/${parameters.versionId}`
}

export interface ResourceDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceDefinitionId: string
}
export type ResourceDefinitionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/resources/${string}`
export function resourceDefinitionArn(parameters: ResourceDefinitionArnParameters): ResourceDefinitionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/resources/${parameters.resourceDefinitionId}`
}

export interface ResourceDefinitionVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceDefinitionId: string
  versionId: string
}
export type ResourceDefinitionVersionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/resources/${string}/versions/${string}`
export function resourceDefinitionVersionArn(parameters: ResourceDefinitionVersionArnParameters): ResourceDefinitionVersionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/resources/${parameters.resourceDefinitionId}/versions/${parameters.versionId}`
}

export interface ConnectorDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorDefinitionId: string
}
export type ConnectorDefinitionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/connectors/${string}`
export function connectorDefinitionArn(parameters: ConnectorDefinitionArnParameters): ConnectorDefinitionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/connectors/${parameters.connectorDefinitionId}`
}

export interface ConnectorDefinitionVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorDefinitionId: string
  versionId: string
}
export type ConnectorDefinitionVersionArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/definition/connectors/${string}/versions/${string}`
export function connectorDefinitionVersionArn(parameters: ConnectorDefinitionVersionArnParameters): ConnectorDefinitionVersionArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/definition/connectors/${parameters.connectorDefinitionId}/versions/${parameters.versionId}`
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

export interface ThingRuntimeConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  thingName: string
}
export type ThingRuntimeConfigArn = `arn:${string}:greengrass:${string}:${string}:/greengrass/things/${string}/runtimeconfig`
export function thingRuntimeConfigArn(parameters: ThingRuntimeConfigArnParameters): ThingRuntimeConfigArn {
  return `arn:${parameters.partition ?? ''}:greengrass:${parameters.region}:${parameters.account}:/greengrass/things/${parameters.thingName}/runtimeconfig`
}
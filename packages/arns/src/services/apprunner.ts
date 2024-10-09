export interface ServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceName: string
  serviceId: string
}
export type ServiceArn = `arn:${string}:apprunner:${string}:${string}:service/${string}/${string}`
export function serviceArn(parameters: ServiceArnParameters): ServiceArn {
  return `arn:${parameters.partition ?? ''}:apprunner:${parameters.region}:${parameters.account}:service/${parameters.serviceName}/${parameters.serviceId}`
}

export interface ConnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectionName: string
  connectionId: string
}
export type ConnectionArn = `arn:${string}:apprunner:${string}:${string}:connection/${string}/${string}`
export function connectionArn(parameters: ConnectionArnParameters): ConnectionArn {
  return `arn:${parameters.partition ?? ''}:apprunner:${parameters.region}:${parameters.account}:connection/${parameters.connectionName}/${parameters.connectionId}`
}

export interface AutoscalingconfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  autoscalingConfigurationName: string
  autoscalingConfigurationVersion: string
  autoscalingConfigurationId: string
}
export type AutoscalingconfigurationArn = `arn:${string}:apprunner:${string}:${string}:autoscalingconfiguration/${string}/${string}/${string}`
export function autoscalingconfigurationArn(parameters: AutoscalingconfigurationArnParameters): AutoscalingconfigurationArn {
  return `arn:${parameters.partition ?? ''}:apprunner:${parameters.region}:${parameters.account}:autoscalingconfiguration/${parameters.autoscalingConfigurationName}/${parameters.autoscalingConfigurationVersion}/${parameters.autoscalingConfigurationId}`
}

export interface ObservabilityconfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  observabilityConfigurationName: string
  observabilityConfigurationVersion: string
  observabilityConfigurationId: string
}
export type ObservabilityconfigurationArn = `arn:${string}:apprunner:${string}:${string}:observabilityconfiguration/${string}/${string}/${string}`
export function observabilityconfigurationArn(parameters: ObservabilityconfigurationArnParameters): ObservabilityconfigurationArn {
  return `arn:${parameters.partition ?? ''}:apprunner:${parameters.region}:${parameters.account}:observabilityconfiguration/${parameters.observabilityConfigurationName}/${parameters.observabilityConfigurationVersion}/${parameters.observabilityConfigurationId}`
}

export interface VpcconnectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcConnectorName: string
  vpcConnectorVersion: string
  vpcConnectorId: string
}
export type VpcconnectorArn = `arn:${string}:apprunner:${string}:${string}:vpcconnector/${string}/${string}/${string}`
export function vpcconnectorArn(parameters: VpcconnectorArnParameters): VpcconnectorArn {
  return `arn:${parameters.partition ?? ''}:apprunner:${parameters.region}:${parameters.account}:vpcconnector/${parameters.vpcConnectorName}/${parameters.vpcConnectorVersion}/${parameters.vpcConnectorId}`
}

export interface VpcingressconnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcIngressConnectionName: string
  vpcIngressConnectionId: string
}
export type VpcingressconnectionArn = `arn:${string}:apprunner:${string}:${string}:vpcingressconnection/${string}/${string}`
export function vpcingressconnectionArn(parameters: VpcingressconnectionArnParameters): VpcingressconnectionArn {
  return `arn:${parameters.partition ?? ''}:apprunner:${parameters.region}:${parameters.account}:vpcingressconnection/${parameters.vpcIngressConnectionName}/${parameters.vpcIngressConnectionId}`
}

export interface WebaclArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scope: string
  name: string
  id: string
}
export type WebaclArn = `arn:${string}:wafv2:${string}:${string}:${string}/webacl/${string}/${string}`
export function webaclArn(parameters: WebaclArnParameters): WebaclArn {
  return `arn:${parameters.partition ?? ''}:wafv2:${parameters.region}:${parameters.account}:${parameters.scope}/webacl/${parameters.name}/${parameters.id}`
}
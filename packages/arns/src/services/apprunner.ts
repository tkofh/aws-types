import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly serviceId: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'service',
  `arn:${string}:apprunner:${string}:${string}:service/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly serviceId: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceName = parameters.serviceName
    this.serviceId = parameters.serviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:service/${this.serviceName}/${this.serviceId}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

export interface ConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionName: string
  readonly connectionId: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connection',
  `arn:${string}:apprunner:${string}:${string}:connection/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionName: string
  readonly connectionId: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectionName = parameters.connectionName
    this.connectionId = parameters.connectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:connection/${this.connectionName}/${this.connectionId}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionArnParameters<Partition>,
) {
  return new ConnectionArn<Partition>(parameters)
}

export interface AutoscalingConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly autoscalingConfigurationName: string
  readonly autoscalingConfigurationVersion: string
  readonly autoscalingConfigurationId: string
}
class AutoscalingConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'autoscalingconfiguration',
  `arn:${string}:apprunner:${string}:${string}:autoscalingconfiguration/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'autoscalingconfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly autoscalingConfigurationName: string
  readonly autoscalingConfigurationVersion: string
  readonly autoscalingConfigurationId: string
  constructor(parameters: AutoscalingConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.autoscalingConfigurationName = parameters.autoscalingConfigurationName
    this.autoscalingConfigurationVersion =
      parameters.autoscalingConfigurationVersion
    this.autoscalingConfigurationId = parameters.autoscalingConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:autoscalingconfiguration/${this.autoscalingConfigurationName}/${this.autoscalingConfigurationVersion}/${this.autoscalingConfigurationId}` as const
  }
}
export type { AutoscalingConfigurationArn }
export function autoscalingConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AutoscalingConfigurationArnParameters<Partition>) {
  return new AutoscalingConfigurationArn<Partition>(parameters)
}

export interface ObservabilityConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly observabilityConfigurationName: string
  readonly observabilityConfigurationVersion: string
  readonly observabilityConfigurationId: string
}
class ObservabilityConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'observabilityconfiguration',
  `arn:${string}:apprunner:${string}:${string}:observabilityconfiguration/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'observabilityconfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly observabilityConfigurationName: string
  readonly observabilityConfigurationVersion: string
  readonly observabilityConfigurationId: string
  constructor(parameters: ObservabilityConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.observabilityConfigurationName =
      parameters.observabilityConfigurationName
    this.observabilityConfigurationVersion =
      parameters.observabilityConfigurationVersion
    this.observabilityConfigurationId = parameters.observabilityConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:observabilityconfiguration/${this.observabilityConfigurationName}/${this.observabilityConfigurationVersion}/${this.observabilityConfigurationId}` as const
  }
}
export type { ObservabilityConfigurationArn }
export function observabilityConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ObservabilityConfigurationArnParameters<Partition>) {
  return new ObservabilityConfigurationArn<Partition>(parameters)
}

export interface VpcConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcConnectorName: string
  readonly vpcConnectorVersion: string
  readonly vpcConnectorId: string
}
class VpcConnectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpcconnector',
  `arn:${string}:apprunner:${string}:${string}:vpcconnector/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpcconnector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcConnectorName: string
  readonly vpcConnectorVersion: string
  readonly vpcConnectorId: string
  constructor(parameters: VpcConnectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcConnectorName = parameters.vpcConnectorName
    this.vpcConnectorVersion = parameters.vpcConnectorVersion
    this.vpcConnectorId = parameters.vpcConnectorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:vpcconnector/${this.vpcConnectorName}/${this.vpcConnectorVersion}/${this.vpcConnectorId}` as const
  }
}
export type { VpcConnectorArn }
export function vpcConnectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcConnectorArnParameters<Partition>,
) {
  return new VpcConnectorArn<Partition>(parameters)
}

export interface VpcIngressConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcIngressConnectionName: string
  readonly vpcIngressConnectionId: string
}
class VpcIngressConnectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpcingressconnection',
  `arn:${string}:apprunner:${string}:${string}:vpcingressconnection/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpcingressconnection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vpcIngressConnectionName: string
  readonly vpcIngressConnectionId: string
  constructor(parameters: VpcIngressConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vpcIngressConnectionName = parameters.vpcIngressConnectionName
    this.vpcIngressConnectionId = parameters.vpcIngressConnectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:vpcingressconnection/${this.vpcIngressConnectionName}/${this.vpcIngressConnectionId}` as const
  }
}
export type { VpcIngressConnectionArn }
export function vpcIngressConnectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: VpcIngressConnectionArnParameters<Partition>,
) {
  return new VpcIngressConnectionArn<Partition>(parameters)
}

export interface WebaclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class WebaclArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'webacl',
  `arn:${string}:wafv2:${string}:${string}:${string}/webacl/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'webacl' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: WebaclArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.scope = parameters.scope
    this.name = parameters.name
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wafv2:${this.region}:${this.account}:${this.scope}/webacl/${this.name}/${this.id}` as const
  }
}
export type { WebaclArn }
export function webaclArn<Partition extends ArnPartition = 'aws'>(
  parameters: WebaclArnParameters<Partition>,
) {
  return new WebaclArn<Partition>(parameters)
}

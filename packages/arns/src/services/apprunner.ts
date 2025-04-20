import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameService: string
  readonly idService: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'service',
  `arn:${string}:apprunner:${string}:${string}:service/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameService: string
  readonly idService: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameService = parameters.nameService
    this.idService = parameters.idService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:service/${this.nameService}/${this.idService}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnection: string
  readonly idConnection: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connection',
  `arn:${string}:apprunner:${string}:${string}:connection/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnection: string
  readonly idConnection: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConnection = parameters.nameConnection
    this.idConnection = parameters.idConnection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:connection/${this.nameConnection}/${this.idConnection}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionArnParameters<Partition>,
) {
  return new ConnectionArn<Partition>(parameters)
}

export interface ConfigurationAutoscalingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationAutoscaling: string
  readonly versionConfigurationAutoscaling: string
  readonly idConfigurationAutoscaling: string
}
class ConfigurationAutoscalingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'autoscalingconfiguration',
  `arn:${string}:apprunner:${string}:${string}:autoscalingconfiguration/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'autoscalingconfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationAutoscaling: string
  readonly versionConfigurationAutoscaling: string
  readonly idConfigurationAutoscaling: string
  constructor(parameters: ConfigurationAutoscalingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigurationAutoscaling = parameters.nameConfigurationAutoscaling
    this.versionConfigurationAutoscaling =
      parameters.versionConfigurationAutoscaling
    this.idConfigurationAutoscaling = parameters.idConfigurationAutoscaling
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:autoscalingconfiguration/${this.nameConfigurationAutoscaling}/${this.versionConfigurationAutoscaling}/${this.idConfigurationAutoscaling}` as const
  }
}
export type { ConfigurationAutoscalingArn }
export function configurationAutoscalingArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationAutoscalingArnParameters<Partition>) {
  return new ConfigurationAutoscalingArn<Partition>(parameters)
}

export interface ConfigurationObservabilityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationObservability: string
  readonly versionConfigurationObservability: string
  readonly idConfigurationObservability: string
}
class ConfigurationObservabilityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'observabilityconfiguration',
  `arn:${string}:apprunner:${string}:${string}:observabilityconfiguration/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'observabilityconfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationObservability: string
  readonly versionConfigurationObservability: string
  readonly idConfigurationObservability: string
  constructor(parameters: ConfigurationObservabilityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigurationObservability =
      parameters.nameConfigurationObservability
    this.versionConfigurationObservability =
      parameters.versionConfigurationObservability
    this.idConfigurationObservability = parameters.idConfigurationObservability
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:observabilityconfiguration/${this.nameConfigurationObservability}/${this.versionConfigurationObservability}/${this.idConfigurationObservability}` as const
  }
}
export type { ConfigurationObservabilityArn }
export function configurationObservabilityArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationObservabilityArnParameters<Partition>) {
  return new ConfigurationObservabilityArn<Partition>(parameters)
}

export interface ConnectorVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnectorVpc: string
  readonly versionConnectorVpc: string
  readonly idConnectorVpc: string
}
class ConnectorVpcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpcconnector',
  `arn:${string}:apprunner:${string}:${string}:vpcconnector/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpcconnector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnectorVpc: string
  readonly versionConnectorVpc: string
  readonly idConnectorVpc: string
  constructor(parameters: ConnectorVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConnectorVpc = parameters.nameConnectorVpc
    this.versionConnectorVpc = parameters.versionConnectorVpc
    this.idConnectorVpc = parameters.idConnectorVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:vpcconnector/${this.nameConnectorVpc}/${this.versionConnectorVpc}/${this.idConnectorVpc}` as const
  }
}
export type { ConnectorVpcArn }
export function connectorVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorVpcArnParameters<Partition>,
) {
  return new ConnectorVpcArn<Partition>(parameters)
}

export interface ConnectionIngressVpcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnectionIngressVpc: string
  readonly idConnectionIngressVpc: string
}
class ConnectionIngressVpcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'vpcingressconnection',
  `arn:${string}:apprunner:${string}:${string}:vpcingressconnection/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vpcingressconnection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnectionIngressVpc: string
  readonly idConnectionIngressVpc: string
  constructor(parameters: ConnectionIngressVpcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConnectionIngressVpc = parameters.nameConnectionIngressVpc
    this.idConnectionIngressVpc = parameters.idConnectionIngressVpc
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:vpcingressconnection/${this.nameConnectionIngressVpc}/${this.idConnectionIngressVpc}` as const
  }
}
export type { ConnectionIngressVpcArn }
export function connectionIngressVpcArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionIngressVpcArnParameters<Partition>,
) {
  return new ConnectionIngressVpcArn<Partition>(parameters)
}

export interface WebaclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: WebaclArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
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

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnector: string
  readonly idUu: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connector',
  `arn:${string}:kafkaconnect:${string}:${string}:connector/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConnector: string
  readonly idUu: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConnector = parameters.nameConnector
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafkaconnect:${this.region}:${this.account}:connector/${this.nameConnector}/${this.idUu}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorArnParameters<Partition>,
) {
  return new ConnectorArn<Partition>(parameters)
}

export interface PluginCustomArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePluginCustom: string
  readonly idUu: string
}
class PluginCustomArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'custom plugin',
  `arn:${string}:kafkaconnect:${string}:${string}:custom-plugin/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'custom plugin' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePluginCustom: string
  readonly idUu: string
  constructor(parameters: PluginCustomArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePluginCustom = parameters.namePluginCustom
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafkaconnect:${this.region}:${this.account}:custom-plugin/${this.namePluginCustom}/${this.idUu}` as const
  }
}
export type { PluginCustomArn }
export function pluginCustomArn<Partition extends ArnPartition = 'aws'>(
  parameters: PluginCustomArnParameters<Partition>,
) {
  return new PluginCustomArn<Partition>(parameters)
}

export interface ConfigurationWorkerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationWorker: string
  readonly idUu: string
}
class ConfigurationWorkerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'worker configuration',
  `arn:${string}:kafkaconnect:${string}:${string}:worker-configuration/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'worker configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationWorker: string
  readonly idUu: string
  constructor(parameters: ConfigurationWorkerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigurationWorker = parameters.nameConfigurationWorker
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafkaconnect:${this.region}:${this.account}:worker-configuration/${this.nameConfigurationWorker}/${this.idUu}` as const
  }
}
export type { ConfigurationWorkerArn }
export function configurationWorkerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationWorkerArnParameters<Partition>,
) {
  return new ConfigurationWorkerArn<Partition>(parameters)
}

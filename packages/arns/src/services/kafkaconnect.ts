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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorName: string
  readonly uuid: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connector',
  `arn:${string}:kafkaconnect:${string}:${string}:connector/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorName: string
  readonly uuid: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorName = parameters.connectorName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafkaconnect:${this.region}:${this.account}:connector/${this.connectorName}/${this.uuid}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorArnParameters<Partition>,
) {
  return new ConnectorArn<Partition>(parameters)
}

export interface CustomPluginArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly customPluginName: string
  readonly uuid: string
}
class CustomPluginArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'custom plugin',
  `arn:${string}:kafkaconnect:${string}:${string}:custom-plugin/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'custom plugin' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly customPluginName: string
  readonly uuid: string
  constructor(parameters: CustomPluginArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.customPluginName = parameters.customPluginName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafkaconnect:${this.region}:${this.account}:custom-plugin/${this.customPluginName}/${this.uuid}` as const
  }
}
export type { CustomPluginArn }
export function customPluginArn<Partition extends ArnPartition = 'aws'>(
  parameters: CustomPluginArnParameters<Partition>,
) {
  return new CustomPluginArn<Partition>(parameters)
}

export interface WorkerConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workerConfigurationName: string
  readonly uuid: string
}
class WorkerConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'worker configuration',
  `arn:${string}:kafkaconnect:${string}:${string}:worker-configuration/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'worker configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workerConfigurationName: string
  readonly uuid: string
  constructor(parameters: WorkerConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workerConfigurationName = parameters.workerConfigurationName
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kafkaconnect:${this.region}:${this.account}:worker-configuration/${this.workerConfigurationName}/${this.uuid}` as const
  }
}
export type { WorkerConfigurationArn }
export function workerConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkerConfigurationArnParameters<Partition>,
) {
  return new WorkerConfigurationArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BrokersArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly brokerName: string
  readonly brokerId: string
}
class BrokersArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'brokers',
  `arn:${string}:mq:${string}:${string}:broker:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'brokers' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly brokerName: string
  readonly brokerId: string
  constructor(parameters: BrokersArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.brokerName = parameters.brokerName
    this.brokerId = parameters.brokerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mq:${this.region}:${this.account}:broker:${this.brokerName}:${this.brokerId}` as const
  }
}
export type { BrokersArn }
export function brokersArn<Partition extends ArnPartition = 'aws'>(
  parameters: BrokersArnParameters<Partition>,
) {
  return new BrokersArn<Partition>(parameters)
}

export interface ConfigurationsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationId: string
}
class ConfigurationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configurations',
  `arn:${string}:mq:${string}:${string}:configuration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configurations' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationId: string
  constructor(parameters: ConfigurationsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configurationId = parameters.configurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mq:${this.region}:${this.account}:configuration:${this.configurationId}` as const
  }
}
export type { ConfigurationsArn }
export function configurationsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationsArnParameters<Partition>,
) {
  return new ConfigurationsArn<Partition>(parameters)
}

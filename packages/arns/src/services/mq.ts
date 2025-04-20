import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BrokersArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBroker: string
  readonly idBroker: string
}
class BrokersArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'brokers',
  `arn:${string}:mq:${string}:${string}:broker:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'brokers' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBroker: string
  readonly idBroker: string
  constructor(parameters: BrokersArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBroker = parameters.nameBroker
    this.idBroker = parameters.idBroker
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mq:${this.region}:${this.account}:broker:${this.nameBroker}:${this.idBroker}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfiguration: string
}
class ConfigurationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configurations',
  `arn:${string}:mq:${string}:${string}:configuration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configurations' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfiguration: string
  constructor(parameters: ConfigurationsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfiguration = parameters.idConfiguration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mq:${this.region}:${this.account}:configuration:${this.idConfiguration}` as const
  }
}
export type { ConfigurationsArn }
export function configurationsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationsArnParameters<Partition>,
) {
  return new ConfigurationsArn<Partition>(parameters)
}

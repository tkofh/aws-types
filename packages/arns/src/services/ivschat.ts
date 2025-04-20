import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface RoomArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class RoomArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Room',
  `arn:${string}:ivschat:${string}:${string}:room/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Room' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: RoomArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivschat:${this.region}:${this.account}:room/${this.idResource}` as const
  }
}
export type { RoomArn }
export function roomArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoomArnParameters<Partition>,
) {
  return new RoomArn<Partition>(parameters)
}

export interface ConfigurationLoggingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigurationLoggingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Logging-Configuration',
  `arn:${string}:ivschat:${string}:${string}:logging-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Logging-Configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigurationLoggingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivschat:${this.region}:${this.account}:logging-configuration/${this.idResource}` as const
  }
}
export type { ConfigurationLoggingArn }
export function configurationLoggingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationLoggingArnParameters<Partition>,
) {
  return new ConfigurationLoggingArn<Partition>(parameters)
}

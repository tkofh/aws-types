import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface RoomArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class RoomArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Room',
  `arn:${string}:ivschat:${string}:${string}:room/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Room' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RoomArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivschat:${this.region}:${this.account}:room/${this.resourceId}` as const
  }
}
export type { RoomArn }
export function roomArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoomArnParameters<Partition>,
) {
  return new RoomArn<Partition>(parameters)
}

export interface LoggingConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class LoggingConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Logging-Configuration',
  `arn:${string}:ivschat:${string}:${string}:logging-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Logging-Configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: LoggingConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivschat:${this.region}:${this.account}:logging-configuration/${this.resourceId}` as const
  }
}
export type { LoggingConfigurationArn }
export function loggingConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: LoggingConfigurationArnParameters<Partition>,
) {
  return new LoggingConfigurationArn<Partition>(parameters)
}

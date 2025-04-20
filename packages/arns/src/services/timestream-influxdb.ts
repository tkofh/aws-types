import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface InstanceDbArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierInstanceDb: string
}
class InstanceDbArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'db-instance',
  `arn:${string}:timestream-influxdb:${string}:${string}:db-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'db-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierInstanceDb: string
  constructor(parameters: InstanceDbArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierInstanceDb = parameters.identifierInstanceDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream-influxdb:${this.region}:${this.account}:db-instance/${this.identifierInstanceDb}` as const
  }
}
export type { InstanceDbArn }
export function instanceDbArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceDbArnParameters<Partition>,
) {
  return new InstanceDbArn<Partition>(parameters)
}

export interface GroupParameterDbArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierGroupParameterDb: string
}
class GroupParameterDbArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'db-parameter-group',
  `arn:${string}:timestream-influxdb:${string}:${string}:db-parameter-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'db-parameter-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierGroupParameterDb: string
  constructor(parameters: GroupParameterDbArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierGroupParameterDb = parameters.identifierGroupParameterDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream-influxdb:${this.region}:${this.account}:db-parameter-group/${this.identifierGroupParameterDb}` as const
  }
}
export type { GroupParameterDbArn }
export function groupParameterDbArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupParameterDbArnParameters<Partition>,
) {
  return new GroupParameterDbArn<Partition>(parameters)
}

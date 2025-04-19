import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DbInstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbInstanceIdentifier: string
}
class DbInstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'db-instance', `arn:${string}:timestream-influxdb:${string}:${string}:db-instance/${string}`> {
  readonly [ArnResourceTypeBrand] = 'db-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbInstanceIdentifier: string
  constructor(parameters: DbInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbInstanceIdentifier = parameters.dbInstanceIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream-influxdb:${this.region}:${this.account}:db-instance/${this.dbInstanceIdentifier}` as const
  }
}
export type { DbInstanceArn }
export function dbInstanceArn<Partition extends ArnPartition = 'aws'>(parameters: DbInstanceArnParameters<Partition>) {
  return new DbInstanceArn<Partition>(parameters)
}

export interface DbParameterGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbParameterGroupIdentifier: string
}
class DbParameterGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'db-parameter-group', `arn:${string}:timestream-influxdb:${string}:${string}:db-parameter-group/${string}`> {
  readonly [ArnResourceTypeBrand] = 'db-parameter-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbParameterGroupIdentifier: string
  constructor(parameters: DbParameterGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbParameterGroupIdentifier = parameters.dbParameterGroupIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:timestream-influxdb:${this.region}:${this.account}:db-parameter-group/${this.dbParameterGroupIdentifier}` as const
  }
}
export type { DbParameterGroupArn }
export function dbParameterGroupArn<Partition extends ArnPartition = 'aws'>(parameters: DbParameterGroupArnParameters<Partition>) {
  return new DbParameterGroupArn<Partition>(parameters)
}
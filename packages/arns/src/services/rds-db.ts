import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DbUserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbiResourceId: string
  readonly dbUserName: string
}
class DbUserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'db-user', `arn:${string}:rds-db:${string}:${string}:dbuser:${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'db-user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbiResourceId: string
  readonly dbUserName: string
  constructor(parameters: DbUserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbiResourceId = parameters.dbiResourceId
    this.dbUserName = parameters.dbUserName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds-db:${this.region}:${this.account}:dbuser:${this.dbiResourceId}/${this.dbUserName}` as const
  }
}
export type { DbUserArn }
export function dbUserArn<Partition extends ArnPartition = 'aws'>(parameters: DbUserArnParameters<Partition>) {
  return new DbUserArn<Partition>(parameters)
}
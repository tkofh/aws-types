import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface UserDbArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceDbi: string
  readonly nameUserDb: string
}
class UserDbArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'db-user',
  `arn:${string}:rds-db:${string}:${string}:dbuser:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'db-user' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceDbi: string
  readonly nameUserDb: string
  constructor(parameters: UserDbArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResourceDbi = parameters.idResourceDbi
    this.nameUserDb = parameters.nameUserDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds-db:${this.region}:${this.account}:dbuser:${this.idResourceDbi}/${this.nameUserDb}` as const
  }
}
export type { UserDbArn }
export function userDbArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserDbArnParameters<Partition>,
) {
  return new UserDbArn<Partition>(parameters)
}

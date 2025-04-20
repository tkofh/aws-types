import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DatabaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceCluster: string
}
class DatabaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'database',
  `arn:${string}:neptune-db:${string}:${string}:${string}/*`
> {
  readonly [ArnResourceTypeBrand] = 'database' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceCluster: string
  constructor(parameters: DatabaseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResourceCluster = parameters.idResourceCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:neptune-db:${this.region}:${this.account}:${this.idResourceCluster}/*` as const
  }
}
export type { DatabaseArn }
export function databaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatabaseArnParameters<Partition>,
) {
  return new DatabaseArn<Partition>(parameters)
}

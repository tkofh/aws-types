import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DatabaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterResourceId: string
}
class DatabaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'database',
  `arn:${string}:neptune-db:${string}:${string}:${string}/*`
> {
  readonly [ArnResourceTypeBrand] = 'database' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterResourceId: string
  constructor(parameters: DatabaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterResourceId = parameters.clusterResourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:neptune-db:${this.region}:${this.account}:${this.clusterResourceId}/*` as const
  }
}
export type { DatabaseArn }
export function databaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatabaseArnParameters<Partition>,
) {
  return new DatabaseArn<Partition>(parameters)
}

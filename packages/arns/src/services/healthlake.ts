import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DataStoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreId: string
}
class DataStoreArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datastore',
  `arn:${string}:healthlake:${string}:${string}:datastore/fhir/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datastore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreId: string
  constructor(parameters: DataStoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.datastoreId = parameters.datastoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:healthlake:${this.region}:${this.account}:datastore/fhir/${this.datastoreId}` as const
  }
}
export type { DataStoreArn }
export function dataStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataStoreArnParameters<Partition>,
) {
  return new DataStoreArn<Partition>(parameters)
}

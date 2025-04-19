import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DatastoreArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreId: string
}
class DatastoreArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'datastore', `arn:${string}:healthlake:${string}:${string}:datastore/fhir/${string}`> {
  readonly [ArnResourceTypeBrand] = 'datastore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreId: string
  constructor(parameters: DatastoreArnParameters<Partition>) {
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
export type { DatastoreArn }
export function datastoreArn<Partition extends ArnPartition = 'aws'>(parameters: DatastoreArnParameters<Partition>) {
  return new DatastoreArn<Partition>(parameters)
}
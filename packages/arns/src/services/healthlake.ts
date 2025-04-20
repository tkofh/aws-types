import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StoreDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDatastore: string
}
class StoreDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datastore',
  `arn:${string}:healthlake:${string}:${string}:datastore/fhir/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datastore' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDatastore: string
  constructor(parameters: StoreDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDatastore = parameters.idDatastore
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:healthlake:${this.region}:${this.account}:datastore/fhir/${this.idDatastore}` as const
  }
}
export type { StoreDataArn }
export function storeDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreDataArnParameters<Partition>,
) {
  return new StoreDataArn<Partition>(parameters)
}

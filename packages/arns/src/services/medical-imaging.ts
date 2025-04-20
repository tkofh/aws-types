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
  `arn:${string}:medical-imaging:${string}:${string}:datastore/${string}`
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
    return `arn:${this.partition}:medical-imaging:${this.region}:${this.account}:datastore/${this.idDatastore}` as const
  }
}
export type { StoreDataArn }
export function storeDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreDataArnParameters<Partition>,
) {
  return new StoreDataArn<Partition>(parameters)
}

export interface SetImageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDatastore: string
  readonly idSetImage: string
}
class SetImageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'imageset',
  `arn:${string}:medical-imaging:${string}:${string}:datastore/${string}/imageset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'imageset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDatastore: string
  readonly idSetImage: string
  constructor(parameters: SetImageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDatastore = parameters.idDatastore
    this.idSetImage = parameters.idSetImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medical-imaging:${this.region}:${this.account}:datastore/${this.idDatastore}/imageset/${this.idSetImage}` as const
  }
}
export type { SetImageArn }
export function setImageArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetImageArnParameters<Partition>,
) {
  return new SetImageArn<Partition>(parameters)
}

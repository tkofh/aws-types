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
  `arn:${string}:medical-imaging:${string}:${string}:datastore/${string}`
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
    return `arn:${this.partition}:medical-imaging:${this.region}:${this.account}:datastore/${this.datastoreId}` as const
  }
}
export type { DataStoreArn }
export function dataStoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataStoreArnParameters<Partition>,
) {
  return new DataStoreArn<Partition>(parameters)
}

export interface ImageSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreId: string
  readonly imageSetId: string
}
class ImageSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'imageset',
  `arn:${string}:medical-imaging:${string}:${string}:datastore/${string}/imageset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'imageset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreId: string
  readonly imageSetId: string
  constructor(parameters: ImageSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.datastoreId = parameters.datastoreId
    this.imageSetId = parameters.imageSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:medical-imaging:${this.region}:${this.account}:datastore/${this.datastoreId}/imageset/${this.imageSetId}` as const
  }
}
export type { ImageSetArn }
export function imageSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageSetArnParameters<Partition>,
) {
  return new ImageSetArn<Partition>(parameters)
}

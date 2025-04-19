import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DatastoreArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreId: string
}
class DatastoreArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'datastore', `arn:${string}:medical-imaging:${string}:${string}:datastore/${string}`> {
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
    return `arn:${this.partition}:medical-imaging:${this.region}:${this.account}:datastore/${this.datastoreId}` as const
  }
}
export type { DatastoreArn }
export function datastoreArn<Partition extends ArnPartition = 'aws'>(parameters: DatastoreArnParameters<Partition>) {
  return new DatastoreArn<Partition>(parameters)
}

export interface ImagesetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreId: string
  readonly imageSetId: string
}
class ImagesetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'imageset', `arn:${string}:medical-imaging:${string}:${string}:datastore/${string}/imageset/${string}`> {
  readonly [ArnResourceTypeBrand] = 'imageset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly datastoreId: string
  readonly imageSetId: string
  constructor(parameters: ImagesetArnParameters<Partition>) {
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
export type { ImagesetArn }
export function imagesetArn<Partition extends ArnPartition = 'aws'>(parameters: ImagesetArnParameters<Partition>) {
  return new ImagesetArn<Partition>(parameters)
}
import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EarthObservationJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class EarthObservationJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'EarthObservationJob',
  `arn:${string}:sagemaker-geospatial:${string}:${string}:earth-observation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'EarthObservationJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: EarthObservationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker-geospatial:${this.region}:${this.account}:earth-observation-job/${this.jobId}` as const
  }
}
export type { EarthObservationJobArn }
export function earthObservationJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: EarthObservationJobArnParameters<Partition>,
) {
  return new EarthObservationJobArn<Partition>(parameters)
}

export interface RasterDataCollectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly collectionId: string
}
class RasterDataCollectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RasterDataCollection',
  `arn:${string}:sagemaker-geospatial:${string}:${string}:raster-data-collection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RasterDataCollection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly collectionId: string
  constructor(parameters: RasterDataCollectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.collectionId = parameters.collectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker-geospatial:${this.region}:${this.account}:raster-data-collection/${this.collectionId}` as const
  }
}
export type { RasterDataCollectionArn }
export function rasterDataCollectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: RasterDataCollectionArnParameters<Partition>,
) {
  return new RasterDataCollectionArn<Partition>(parameters)
}

export interface VectorEnrichmentJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class VectorEnrichmentJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'VectorEnrichmentJob',
  `arn:${string}:sagemaker-geospatial:${string}:${string}:vector-enrichment-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VectorEnrichmentJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: VectorEnrichmentJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker-geospatial:${this.region}:${this.account}:vector-enrichment-job/${this.jobId}` as const
  }
}
export type { VectorEnrichmentJobArn }
export function vectorEnrichmentJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: VectorEnrichmentJobArnParameters<Partition>,
) {
  return new VectorEnrichmentJobArn<Partition>(parameters)
}

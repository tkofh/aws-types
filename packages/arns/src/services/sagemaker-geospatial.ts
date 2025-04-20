import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface JobObservationEarthArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobObservationEarthArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'EarthObservationJob',
  `arn:${string}:sagemaker-geospatial:${string}:${string}:earth-observation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'EarthObservationJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobObservationEarthArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker-geospatial:${this.region}:${this.account}:earth-observation-job/${this.idJob}` as const
  }
}
export type { JobObservationEarthArn }
export function jobObservationEarthArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobObservationEarthArnParameters<Partition>,
) {
  return new JobObservationEarthArn<Partition>(parameters)
}

export interface CollectionDataRasterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCollection: string
}
class CollectionDataRasterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RasterDataCollection',
  `arn:${string}:sagemaker-geospatial:${string}:${string}:raster-data-collection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RasterDataCollection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCollection: string
  constructor(parameters: CollectionDataRasterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCollection = parameters.idCollection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker-geospatial:${this.region}:${this.account}:raster-data-collection/${this.idCollection}` as const
  }
}
export type { CollectionDataRasterArn }
export function collectionDataRasterArn<Partition extends ArnPartition = 'aws'>(
  parameters: CollectionDataRasterArnParameters<Partition>,
) {
  return new CollectionDataRasterArn<Partition>(parameters)
}

export interface JobEnrichmentVectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobEnrichmentVectorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'VectorEnrichmentJob',
  `arn:${string}:sagemaker-geospatial:${string}:${string}:vector-enrichment-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'VectorEnrichmentJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobEnrichmentVectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sagemaker-geospatial:${this.region}:${this.account}:vector-enrichment-job/${this.idJob}` as const
  }
}
export type { JobEnrichmentVectorArn }
export function jobEnrichmentVectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobEnrichmentVectorArnParameters<Partition>,
) {
  return new JobEnrichmentVectorArn<Partition>(parameters)
}

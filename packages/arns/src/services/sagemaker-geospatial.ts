export interface EarthObservationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type EarthObservationJobArn = `arn:${string}:sagemaker-geospatial:${string}:${string}:earth-observation-job/${string}`
export function earthObservationJobArn(parameters: EarthObservationJobArnParameters): EarthObservationJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker-geospatial:${parameters.region}:${parameters.account}:earth-observation-job/${parameters.jobId}`
}

export interface RasterDataCollectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  collectionId: string
}
export type RasterDataCollectionArn = `arn:${string}:sagemaker-geospatial:${string}:${string}:raster-data-collection/${string}`
export function rasterDataCollectionArn(parameters: RasterDataCollectionArnParameters): RasterDataCollectionArn {
  return `arn:${parameters.partition ?? ''}:sagemaker-geospatial:${parameters.region}:${parameters.account}:raster-data-collection/${parameters.collectionId}`
}

export interface VectorEnrichmentJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type VectorEnrichmentJobArn = `arn:${string}:sagemaker-geospatial:${string}:${string}:vector-enrichment-job/${string}`
export function vectorEnrichmentJobArn(parameters: VectorEnrichmentJobArnParameters): VectorEnrichmentJobArn {
  return `arn:${parameters.partition ?? ''}:sagemaker-geospatial:${parameters.region}:${parameters.account}:vector-enrichment-job/${parameters.jobId}`
}
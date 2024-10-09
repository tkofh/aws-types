export interface SchemaArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type SchemaArn = `arn:${string}:personalize:${string}:${string}:schema/${string}`
export function schemaArn(parameters: SchemaArnParameters): SchemaArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:schema/${parameters.resourceId}`
}

export interface FeatureTransformationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type FeatureTransformationArn = `arn:${string}:personalize:${string}:${string}:feature-transformation/${string}`
export function featureTransformationArn(parameters: FeatureTransformationArnParameters): FeatureTransformationArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:feature-transformation/${parameters.resourceId}`
}

export interface DatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasetArn = `arn:${string}:personalize:${string}:${string}:dataset/${string}`
export function datasetArn(parameters: DatasetArnParameters): DatasetArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:dataset/${parameters.resourceId}`
}

export interface DatasetGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasetGroupArn = `arn:${string}:personalize:${string}:${string}:dataset-group/${string}`
export function datasetGroupArn(parameters: DatasetGroupArnParameters): DatasetGroupArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:dataset-group/${parameters.resourceId}`
}

export interface DatasetImportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasetImportJobArn = `arn:${string}:personalize:${string}:${string}:dataset-import-job/${string}`
export function datasetImportJobArn(parameters: DatasetImportJobArnParameters): DatasetImportJobArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:dataset-import-job/${parameters.resourceId}`
}

export interface DataInsightsJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DataInsightsJobArn = `arn:${string}:personalize:${string}:${string}:data-insights-job/${string}`
export function dataInsightsJobArn(parameters: DataInsightsJobArnParameters): DataInsightsJobArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:data-insights-job/${parameters.resourceId}`
}

export interface DatasetExportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DatasetExportJobArn = `arn:${string}:personalize:${string}:${string}:dataset-export-job/${string}`
export function datasetExportJobArn(parameters: DatasetExportJobArnParameters): DatasetExportJobArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:dataset-export-job/${parameters.resourceId}`
}

export interface DataDeletionJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type DataDeletionJobArn = `arn:${string}:personalize:${string}:${string}:data-deletion-job/${string}`
export function dataDeletionJobArn(parameters: DataDeletionJobArnParameters): DataDeletionJobArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:data-deletion-job/${parameters.resourceId}`
}

export interface SolutionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type SolutionArn = `arn:${string}:personalize:${string}:${string}:solution/${string}`
export function solutionArn(parameters: SolutionArnParameters): SolutionArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:solution/${parameters.resourceId}`
}

export interface CampaignArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type CampaignArn = `arn:${string}:personalize:${string}:${string}:campaign/${string}`
export function campaignArn(parameters: CampaignArnParameters): CampaignArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:campaign/${parameters.resourceId}`
}

export interface EventTrackerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type EventTrackerArn = `arn:${string}:personalize:${string}:${string}:event-tracker/${string}`
export function eventTrackerArn(parameters: EventTrackerArnParameters): EventTrackerArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:event-tracker/${parameters.resourceId}`
}

export interface RecipeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type RecipeArn = `arn:${string}:personalize:${string}:${string}:recipe/${string}`
export function recipeArn(parameters: RecipeArnParameters): RecipeArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:recipe/${parameters.resourceId}`
}

export interface AlgorithmArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type AlgorithmArn = `arn:${string}:personalize:${string}:${string}:algorithm/${string}`
export function algorithmArn(parameters: AlgorithmArnParameters): AlgorithmArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:algorithm/${parameters.resourceId}`
}

export interface BatchInferenceJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type BatchInferenceJobArn = `arn:${string}:personalize:${string}:${string}:batch-inference-job/${string}`
export function batchInferenceJobArn(parameters: BatchInferenceJobArnParameters): BatchInferenceJobArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:batch-inference-job/${parameters.resourceId}`
}

export interface FilterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type FilterArn = `arn:${string}:personalize:${string}:${string}:filter/${string}`
export function filterArn(parameters: FilterArnParameters): FilterArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:filter/${parameters.resourceId}`
}

export interface RecommenderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type RecommenderArn = `arn:${string}:personalize:${string}:${string}:recommender/${string}`
export function recommenderArn(parameters: RecommenderArnParameters): RecommenderArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:recommender/${parameters.resourceId}`
}

export interface BatchSegmentJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type BatchSegmentJobArn = `arn:${string}:personalize:${string}:${string}:batch-segment-job/${string}`
export function batchSegmentJobArn(parameters: BatchSegmentJobArnParameters): BatchSegmentJobArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:batch-segment-job/${parameters.resourceId}`
}

export interface MetricAttributionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type MetricAttributionArn = `arn:${string}:personalize:${string}:${string}:metric-attribution/${string}`
export function metricAttributionArn(parameters: MetricAttributionArnParameters): MetricAttributionArn {
  return `arn:${parameters.partition ?? ''}:personalize:${parameters.region}:${parameters.account}:metric-attribution/${parameters.resourceId}`
}
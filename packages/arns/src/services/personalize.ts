import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface SchemaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class SchemaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'schema', `arn:${string}:personalize:${string}:${string}:schema/${string}`> {
  readonly [ArnResourceTypeBrand] = 'schema' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: SchemaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:schema/${this.resourceId}` as const
  }
}
export type { SchemaArn }
export function schemaArn<Partition extends ArnPartition = 'aws'>(parameters: SchemaArnParameters<Partition>) {
  return new SchemaArn<Partition>(parameters)
}

export interface FeatureTransformationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class FeatureTransformationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'featureTransformation', `arn:${string}:personalize:${string}:${string}:feature-transformation/${string}`> {
  readonly [ArnResourceTypeBrand] = 'featureTransformation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: FeatureTransformationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:feature-transformation/${this.resourceId}` as const
  }
}
export type { FeatureTransformationArn }
export function featureTransformationArn<Partition extends ArnPartition = 'aws'>(parameters: FeatureTransformationArnParameters<Partition>) {
  return new FeatureTransformationArn<Partition>(parameters)
}

export interface DatasetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DatasetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dataset', `arn:${string}:personalize:${string}:${string}:dataset/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DatasetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:dataset/${this.resourceId}` as const
  }
}
export type { DatasetArn }
export function datasetArn<Partition extends ArnPartition = 'aws'>(parameters: DatasetArnParameters<Partition>) {
  return new DatasetArn<Partition>(parameters)
}

export interface DatasetGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DatasetGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'datasetGroup', `arn:${string}:personalize:${string}:${string}:dataset-group/${string}`> {
  readonly [ArnResourceTypeBrand] = 'datasetGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DatasetGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:dataset-group/${this.resourceId}` as const
  }
}
export type { DatasetGroupArn }
export function datasetGroupArn<Partition extends ArnPartition = 'aws'>(parameters: DatasetGroupArnParameters<Partition>) {
  return new DatasetGroupArn<Partition>(parameters)
}

export interface DatasetImportJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DatasetImportJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'datasetImportJob', `arn:${string}:personalize:${string}:${string}:dataset-import-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'datasetImportJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DatasetImportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:dataset-import-job/${this.resourceId}` as const
  }
}
export type { DatasetImportJobArn }
export function datasetImportJobArn<Partition extends ArnPartition = 'aws'>(parameters: DatasetImportJobArnParameters<Partition>) {
  return new DatasetImportJobArn<Partition>(parameters)
}

export interface DataInsightsJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DataInsightsJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dataInsightsJob', `arn:${string}:personalize:${string}:${string}:data-insights-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dataInsightsJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DataInsightsJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:data-insights-job/${this.resourceId}` as const
  }
}
export type { DataInsightsJobArn }
export function dataInsightsJobArn<Partition extends ArnPartition = 'aws'>(parameters: DataInsightsJobArnParameters<Partition>) {
  return new DataInsightsJobArn<Partition>(parameters)
}

export interface DatasetExportJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DatasetExportJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'datasetExportJob', `arn:${string}:personalize:${string}:${string}:dataset-export-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'datasetExportJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DatasetExportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:dataset-export-job/${this.resourceId}` as const
  }
}
export type { DatasetExportJobArn }
export function datasetExportJobArn<Partition extends ArnPartition = 'aws'>(parameters: DatasetExportJobArnParameters<Partition>) {
  return new DatasetExportJobArn<Partition>(parameters)
}

export interface DataDeletionJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class DataDeletionJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dataDeletionJob', `arn:${string}:personalize:${string}:${string}:data-deletion-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dataDeletionJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: DataDeletionJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:data-deletion-job/${this.resourceId}` as const
  }
}
export type { DataDeletionJobArn }
export function dataDeletionJobArn<Partition extends ArnPartition = 'aws'>(parameters: DataDeletionJobArnParameters<Partition>) {
  return new DataDeletionJobArn<Partition>(parameters)
}

export interface SolutionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class SolutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'solution', `arn:${string}:personalize:${string}:${string}:solution/${string}`> {
  readonly [ArnResourceTypeBrand] = 'solution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: SolutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:solution/${this.resourceId}` as const
  }
}
export type { SolutionArn }
export function solutionArn<Partition extends ArnPartition = 'aws'>(parameters: SolutionArnParameters<Partition>) {
  return new SolutionArn<Partition>(parameters)
}

export interface CampaignArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class CampaignArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'campaign', `arn:${string}:personalize:${string}:${string}:campaign/${string}`> {
  readonly [ArnResourceTypeBrand] = 'campaign' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CampaignArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:campaign/${this.resourceId}` as const
  }
}
export type { CampaignArn }
export function campaignArn<Partition extends ArnPartition = 'aws'>(parameters: CampaignArnParameters<Partition>) {
  return new CampaignArn<Partition>(parameters)
}

export interface EventTrackerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class EventTrackerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'eventTracker', `arn:${string}:personalize:${string}:${string}:event-tracker/${string}`> {
  readonly [ArnResourceTypeBrand] = 'eventTracker' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: EventTrackerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:event-tracker/${this.resourceId}` as const
  }
}
export type { EventTrackerArn }
export function eventTrackerArn<Partition extends ArnPartition = 'aws'>(parameters: EventTrackerArnParameters<Partition>) {
  return new EventTrackerArn<Partition>(parameters)
}

export interface RecipeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class RecipeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'recipe', `arn:${string}:personalize:${string}:${string}:recipe/${string}`> {
  readonly [ArnResourceTypeBrand] = 'recipe' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RecipeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:recipe/${this.resourceId}` as const
  }
}
export type { RecipeArn }
export function recipeArn<Partition extends ArnPartition = 'aws'>(parameters: RecipeArnParameters<Partition>) {
  return new RecipeArn<Partition>(parameters)
}

export interface AlgorithmArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AlgorithmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'algorithm', `arn:${string}:personalize:${string}:${string}:algorithm/${string}`> {
  readonly [ArnResourceTypeBrand] = 'algorithm' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AlgorithmArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:algorithm/${this.resourceId}` as const
  }
}
export type { AlgorithmArn }
export function algorithmArn<Partition extends ArnPartition = 'aws'>(parameters: AlgorithmArnParameters<Partition>) {
  return new AlgorithmArn<Partition>(parameters)
}

export interface BatchInferenceJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class BatchInferenceJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'batchInferenceJob', `arn:${string}:personalize:${string}:${string}:batch-inference-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'batchInferenceJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: BatchInferenceJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:batch-inference-job/${this.resourceId}` as const
  }
}
export type { BatchInferenceJobArn }
export function batchInferenceJobArn<Partition extends ArnPartition = 'aws'>(parameters: BatchInferenceJobArnParameters<Partition>) {
  return new BatchInferenceJobArn<Partition>(parameters)
}

export interface FilterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class FilterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'filter', `arn:${string}:personalize:${string}:${string}:filter/${string}`> {
  readonly [ArnResourceTypeBrand] = 'filter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: FilterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:filter/${this.resourceId}` as const
  }
}
export type { FilterArn }
export function filterArn<Partition extends ArnPartition = 'aws'>(parameters: FilterArnParameters<Partition>) {
  return new FilterArn<Partition>(parameters)
}

export interface RecommenderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class RecommenderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'recommender', `arn:${string}:personalize:${string}:${string}:recommender/${string}`> {
  readonly [ArnResourceTypeBrand] = 'recommender' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RecommenderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:recommender/${this.resourceId}` as const
  }
}
export type { RecommenderArn }
export function recommenderArn<Partition extends ArnPartition = 'aws'>(parameters: RecommenderArnParameters<Partition>) {
  return new RecommenderArn<Partition>(parameters)
}

export interface BatchSegmentJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class BatchSegmentJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'batchSegmentJob', `arn:${string}:personalize:${string}:${string}:batch-segment-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'batchSegmentJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: BatchSegmentJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:batch-segment-job/${this.resourceId}` as const
  }
}
export type { BatchSegmentJobArn }
export function batchSegmentJobArn<Partition extends ArnPartition = 'aws'>(parameters: BatchSegmentJobArnParameters<Partition>) {
  return new BatchSegmentJobArn<Partition>(parameters)
}

export interface MetricAttributionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class MetricAttributionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'metricAttribution', `arn:${string}:personalize:${string}:${string}:metric-attribution/${string}`> {
  readonly [ArnResourceTypeBrand] = 'metricAttribution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: MetricAttributionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:metric-attribution/${this.resourceId}` as const
  }
}
export type { MetricAttributionArn }
export function metricAttributionArn<Partition extends ArnPartition = 'aws'>(parameters: MetricAttributionArnParameters<Partition>) {
  return new MetricAttributionArn<Partition>(parameters)
}
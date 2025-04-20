import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SchemaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SchemaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'schema',
  `arn:${string}:personalize:${string}:${string}:schema/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'schema' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SchemaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:schema/${this.idResource}` as const
  }
}
export type { SchemaArn }
export function schemaArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchemaArnParameters<Partition>,
) {
  return new SchemaArn<Partition>(parameters)
}

export interface TransformationFeatureArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TransformationFeatureArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'featureTransformation',
  `arn:${string}:personalize:${string}:${string}:feature-transformation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'featureTransformation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TransformationFeatureArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:feature-transformation/${this.idResource}` as const
  }
}
export type { TransformationFeatureArn }
export function transformationFeatureArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TransformationFeatureArnParameters<Partition>) {
  return new TransformationFeatureArn<Partition>(parameters)
}

export interface SetDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SetDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:personalize:${string}:${string}:dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:dataset/${this.idResource}` as const
  }
}
export type { SetDataArn }
export function setDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataArnParameters<Partition>,
) {
  return new SetDataArn<Partition>(parameters)
}

export interface GroupSetDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class GroupSetDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'datasetGroup',
  `arn:${string}:personalize:${string}:${string}:dataset-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasetGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GroupSetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:dataset-group/${this.idResource}` as const
  }
}
export type { GroupSetDataArn }
export function groupSetDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSetDataArnParameters<Partition>,
) {
  return new GroupSetDataArn<Partition>(parameters)
}

export interface JobImportSetDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobImportSetDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'datasetImportJob',
  `arn:${string}:personalize:${string}:${string}:dataset-import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasetImportJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobImportSetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:dataset-import-job/${this.idResource}` as const
  }
}
export type { JobImportSetDataArn }
export function jobImportSetDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobImportSetDataArnParameters<Partition>,
) {
  return new JobImportSetDataArn<Partition>(parameters)
}

export interface JobInsightsDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobInsightsDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dataInsightsJob',
  `arn:${string}:personalize:${string}:${string}:data-insights-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataInsightsJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobInsightsDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:data-insights-job/${this.idResource}` as const
  }
}
export type { JobInsightsDataArn }
export function jobInsightsDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobInsightsDataArnParameters<Partition>,
) {
  return new JobInsightsDataArn<Partition>(parameters)
}

export interface JobExportSetDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobExportSetDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'datasetExportJob',
  `arn:${string}:personalize:${string}:${string}:dataset-export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datasetExportJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobExportSetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:dataset-export-job/${this.idResource}` as const
  }
}
export type { JobExportSetDataArn }
export function jobExportSetDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobExportSetDataArnParameters<Partition>,
) {
  return new JobExportSetDataArn<Partition>(parameters)
}

export interface JobDeletionDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobDeletionDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dataDeletionJob',
  `arn:${string}:personalize:${string}:${string}:data-deletion-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataDeletionJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobDeletionDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:data-deletion-job/${this.idResource}` as const
  }
}
export type { JobDeletionDataArn }
export function jobDeletionDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobDeletionDataArnParameters<Partition>,
) {
  return new JobDeletionDataArn<Partition>(parameters)
}

export interface SolutionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SolutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'solution',
  `arn:${string}:personalize:${string}:${string}:solution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'solution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SolutionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:solution/${this.idResource}` as const
  }
}
export type { SolutionArn }
export function solutionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SolutionArnParameters<Partition>,
) {
  return new SolutionArn<Partition>(parameters)
}

export interface CampaignArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class CampaignArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'campaign',
  `arn:${string}:personalize:${string}:${string}:campaign/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'campaign' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: CampaignArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:campaign/${this.idResource}` as const
  }
}
export type { CampaignArn }
export function campaignArn<Partition extends ArnPartition = 'aws'>(
  parameters: CampaignArnParameters<Partition>,
) {
  return new CampaignArn<Partition>(parameters)
}

export interface TrackerEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TrackerEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventTracker',
  `arn:${string}:personalize:${string}:${string}:event-tracker/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventTracker' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TrackerEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:event-tracker/${this.idResource}` as const
  }
}
export type { TrackerEventArn }
export function trackerEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrackerEventArnParameters<Partition>,
) {
  return new TrackerEventArn<Partition>(parameters)
}

export interface RecipeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class RecipeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'recipe',
  `arn:${string}:personalize:${string}:${string}:recipe/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recipe' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: RecipeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:recipe/${this.idResource}` as const
  }
}
export type { RecipeArn }
export function recipeArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecipeArnParameters<Partition>,
) {
  return new RecipeArn<Partition>(parameters)
}

export interface AlgorithmArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class AlgorithmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'algorithm',
  `arn:${string}:personalize:${string}:${string}:algorithm/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'algorithm' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AlgorithmArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:algorithm/${this.idResource}` as const
  }
}
export type { AlgorithmArn }
export function algorithmArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlgorithmArnParameters<Partition>,
) {
  return new AlgorithmArn<Partition>(parameters)
}

export interface JobInferenceBatchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobInferenceBatchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'batchInferenceJob',
  `arn:${string}:personalize:${string}:${string}:batch-inference-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'batchInferenceJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobInferenceBatchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:batch-inference-job/${this.idResource}` as const
  }
}
export type { JobInferenceBatchArn }
export function jobInferenceBatchArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobInferenceBatchArnParameters<Partition>,
) {
  return new JobInferenceBatchArn<Partition>(parameters)
}

export interface FilterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class FilterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'filter',
  `arn:${string}:personalize:${string}:${string}:filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'filter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: FilterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:filter/${this.idResource}` as const
  }
}
export type { FilterArn }
export function filterArn<Partition extends ArnPartition = 'aws'>(
  parameters: FilterArnParameters<Partition>,
) {
  return new FilterArn<Partition>(parameters)
}

export interface RecommenderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class RecommenderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recommender',
  `arn:${string}:personalize:${string}:${string}:recommender/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recommender' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: RecommenderArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:recommender/${this.idResource}` as const
  }
}
export type { RecommenderArn }
export function recommenderArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecommenderArnParameters<Partition>,
) {
  return new RecommenderArn<Partition>(parameters)
}

export interface JobSegmentBatchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobSegmentBatchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'batchSegmentJob',
  `arn:${string}:personalize:${string}:${string}:batch-segment-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'batchSegmentJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobSegmentBatchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:batch-segment-job/${this.idResource}` as const
  }
}
export type { JobSegmentBatchArn }
export function jobSegmentBatchArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobSegmentBatchArnParameters<Partition>,
) {
  return new JobSegmentBatchArn<Partition>(parameters)
}

export interface AttributionMetricArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class AttributionMetricArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'metricAttribution',
  `arn:${string}:personalize:${string}:${string}:metric-attribution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'metricAttribution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AttributionMetricArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:personalize:${this.region}:${this.account}:metric-attribution/${this.idResource}` as const
  }
}
export type { AttributionMetricArn }
export function attributionMetricArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttributionMetricArnParameters<Partition>,
) {
  return new AttributionMetricArn<Partition>(parameters)
}

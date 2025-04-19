import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'index',
  `arn:${string}:kendra:${string}:${string}:index/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexId = parameters.indexId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.indexId}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(
  parameters: IndexArnParameters<Partition>,
) {
  return new IndexArn<Partition>(parameters)
}

export interface DataSourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly dataSourceId: string
}
class DataSourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'data-source',
  `arn:${string}:kendra:${string}:${string}:index/${string}/data-source/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-source' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly dataSourceId: string
  constructor(parameters: DataSourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexId = parameters.indexId
    this.dataSourceId = parameters.dataSourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.indexId}/data-source/${this.dataSourceId}` as const
  }
}
export type { DataSourceArn }
export function dataSourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataSourceArnParameters<Partition>,
) {
  return new DataSourceArn<Partition>(parameters)
}

export interface FaqArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly faqId: string
}
class FaqArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'faq',
  `arn:${string}:kendra:${string}:${string}:index/${string}/faq/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'faq' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly faqId: string
  constructor(parameters: FaqArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexId = parameters.indexId
    this.faqId = parameters.faqId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.indexId}/faq/${this.faqId}` as const
  }
}
export type { FaqArn }
export function faqArn<Partition extends ArnPartition = 'aws'>(
  parameters: FaqArnParameters<Partition>,
) {
  return new FaqArn<Partition>(parameters)
}

export interface ExperienceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly experienceId: string
}
class ExperienceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'experience',
  `arn:${string}:kendra:${string}:${string}:index/${string}/experience/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'experience' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly experienceId: string
  constructor(parameters: ExperienceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexId = parameters.indexId
    this.experienceId = parameters.experienceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.indexId}/experience/${this.experienceId}` as const
  }
}
export type { ExperienceArn }
export function experienceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExperienceArnParameters<Partition>,
) {
  return new ExperienceArn<Partition>(parameters)
}

export interface ThesaurusArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly thesaurusId: string
}
class ThesaurusArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thesaurus',
  `arn:${string}:kendra:${string}:${string}:index/${string}/thesaurus/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thesaurus' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly thesaurusId: string
  constructor(parameters: ThesaurusArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexId = parameters.indexId
    this.thesaurusId = parameters.thesaurusId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.indexId}/thesaurus/${this.thesaurusId}` as const
  }
}
export type { ThesaurusArn }
export function thesaurusArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThesaurusArnParameters<Partition>,
) {
  return new ThesaurusArn<Partition>(parameters)
}

export interface QuerySuggestionsBlockListArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly querySuggestionsBlockListId: string
}
class QuerySuggestionsBlockListArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'query-suggestions-block-list',
  `arn:${string}:kendra:${string}:${string}:index/${string}/query-suggestions-block-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'query-suggestions-block-list' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly querySuggestionsBlockListId: string
  constructor(parameters: QuerySuggestionsBlockListArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexId = parameters.indexId
    this.querySuggestionsBlockListId = parameters.querySuggestionsBlockListId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.indexId}/query-suggestions-block-list/${this.querySuggestionsBlockListId}` as const
  }
}
export type { QuerySuggestionsBlockListArn }
export function querySuggestionsBlockListArn<
  Partition extends ArnPartition = 'aws',
>(parameters: QuerySuggestionsBlockListArnParameters<Partition>) {
  return new QuerySuggestionsBlockListArn<Partition>(parameters)
}

export interface FeaturedResultsSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly featuredResultsSetId: string
}
class FeaturedResultsSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'featured-results-set',
  `arn:${string}:kendra:${string}:${string}:index/${string}/featured-results-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'featured-results-set' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly featuredResultsSetId: string
  constructor(parameters: FeaturedResultsSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexId = parameters.indexId
    this.featuredResultsSetId = parameters.featuredResultsSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.indexId}/featured-results-set/${this.featuredResultsSetId}` as const
  }
}
export type { FeaturedResultsSetArn }
export function featuredResultsSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: FeaturedResultsSetArnParameters<Partition>,
) {
  return new FeaturedResultsSetArn<Partition>(parameters)
}

export interface AccessControlConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly accessControlConfigurationId: string
}
class AccessControlConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-control-configuration',
  `arn:${string}:kendra:${string}:${string}:index/${string}/access-control-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-control-configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexId: string
  readonly accessControlConfigurationId: string
  constructor(parameters: AccessControlConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexId = parameters.indexId
    this.accessControlConfigurationId = parameters.accessControlConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.indexId}/access-control-configuration/${this.accessControlConfigurationId}` as const
  }
}
export type { AccessControlConfigurationArn }
export function accessControlConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AccessControlConfigurationArnParameters<Partition>) {
  return new AccessControlConfigurationArn<Partition>(parameters)
}

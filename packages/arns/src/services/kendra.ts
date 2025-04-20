import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'index',
  `arn:${string}:kendra:${string}:${string}:index/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIndex = parameters.idIndex
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.idIndex}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(
  parameters: IndexArnParameters<Partition>,
) {
  return new IndexArn<Partition>(parameters)
}

export interface DatasourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idSourceData: string
}
class DatasourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'data-source',
  `arn:${string}:kendra:${string}:${string}:index/${string}/data-source/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'data-source' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idSourceData: string
  constructor(parameters: DatasourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIndex = parameters.idIndex
    this.idSourceData = parameters.idSourceData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.idIndex}/data-source/${this.idSourceData}` as const
  }
}
export type { DatasourceArn }
export function datasourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasourceArnParameters<Partition>,
) {
  return new DatasourceArn<Partition>(parameters)
}

export interface FaqArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idFaq: string
}
class FaqArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'faq',
  `arn:${string}:kendra:${string}:${string}:index/${string}/faq/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'faq' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idFaq: string
  constructor(parameters: FaqArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIndex = parameters.idIndex
    this.idFaq = parameters.idFaq
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.idIndex}/faq/${this.idFaq}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idExperience: string
}
class ExperienceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'experience',
  `arn:${string}:kendra:${string}:${string}:index/${string}/experience/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'experience' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idExperience: string
  constructor(parameters: ExperienceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIndex = parameters.idIndex
    this.idExperience = parameters.idExperience
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.idIndex}/experience/${this.idExperience}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idThesaurus: string
}
class ThesaurusArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thesaurus',
  `arn:${string}:kendra:${string}:${string}:index/${string}/thesaurus/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thesaurus' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idThesaurus: string
  constructor(parameters: ThesaurusArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIndex = parameters.idIndex
    this.idThesaurus = parameters.idThesaurus
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.idIndex}/thesaurus/${this.idThesaurus}` as const
  }
}
export type { ThesaurusArn }
export function thesaurusArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThesaurusArnParameters<Partition>,
) {
  return new ThesaurusArn<Partition>(parameters)
}

export interface ListBlockSuggestionsQueryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idListBlockSuggestionsQuery: string
}
class ListBlockSuggestionsQueryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'query-suggestions-block-list',
  `arn:${string}:kendra:${string}:${string}:index/${string}/query-suggestions-block-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'query-suggestions-block-list' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idListBlockSuggestionsQuery: string
  constructor(parameters: ListBlockSuggestionsQueryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIndex = parameters.idIndex
    this.idListBlockSuggestionsQuery = parameters.idListBlockSuggestionsQuery
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.idIndex}/query-suggestions-block-list/${this.idListBlockSuggestionsQuery}` as const
  }
}
export type { ListBlockSuggestionsQueryArn }
export function listBlockSuggestionsQueryArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ListBlockSuggestionsQueryArnParameters<Partition>) {
  return new ListBlockSuggestionsQueryArn<Partition>(parameters)
}

export interface SetResultsFeaturedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idSetResultsFeatured: string
}
class SetResultsFeaturedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'featured-results-set',
  `arn:${string}:kendra:${string}:${string}:index/${string}/featured-results-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'featured-results-set' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idSetResultsFeatured: string
  constructor(parameters: SetResultsFeaturedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIndex = parameters.idIndex
    this.idSetResultsFeatured = parameters.idSetResultsFeatured
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.idIndex}/featured-results-set/${this.idSetResultsFeatured}` as const
  }
}
export type { SetResultsFeaturedArn }
export function setResultsFeaturedArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetResultsFeaturedArnParameters<Partition>,
) {
  return new SetResultsFeaturedArn<Partition>(parameters)
}

export interface ConfigurationControlAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idConfigurationControlAccess: string
}
class ConfigurationControlAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-control-configuration',
  `arn:${string}:kendra:${string}:${string}:index/${string}/access-control-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-control-configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idIndex: string
  readonly idConfigurationControlAccess: string
  constructor(parameters: ConfigurationControlAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idIndex = parameters.idIndex
    this.idConfigurationControlAccess = parameters.idConfigurationControlAccess
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra:${this.region}:${this.account}:index/${this.idIndex}/access-control-configuration/${this.idConfigurationControlAccess}` as const
  }
}
export type { ConfigurationControlAccessArn }
export function configurationControlAccessArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationControlAccessArnParameters<Partition>) {
  return new ConfigurationControlAccessArn<Partition>(parameters)
}

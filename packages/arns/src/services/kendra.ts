export interface IndexArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexId: string
}
export type IndexArn = `arn:${string}:kendra:${string}:${string}:index/${string}`
export function indexArn(parameters: IndexArnParameters): IndexArn {
  return `arn:${parameters.partition ?? ''}:kendra:${parameters.region}:${parameters.account}:index/${parameters.indexId}`
}

export interface DataSourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexId: string
  dataSourceId: string
}
export type DataSourceArn = `arn:${string}:kendra:${string}:${string}:index/${string}/data-source/${string}`
export function dataSourceArn(parameters: DataSourceArnParameters): DataSourceArn {
  return `arn:${parameters.partition ?? ''}:kendra:${parameters.region}:${parameters.account}:index/${parameters.indexId}/data-source/${parameters.dataSourceId}`
}

export interface FaqArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexId: string
  faqId: string
}
export type FaqArn = `arn:${string}:kendra:${string}:${string}:index/${string}/faq/${string}`
export function faqArn(parameters: FaqArnParameters): FaqArn {
  return `arn:${parameters.partition ?? ''}:kendra:${parameters.region}:${parameters.account}:index/${parameters.indexId}/faq/${parameters.faqId}`
}

export interface ExperienceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexId: string
  experienceId: string
}
export type ExperienceArn = `arn:${string}:kendra:${string}:${string}:index/${string}/experience/${string}`
export function experienceArn(parameters: ExperienceArnParameters): ExperienceArn {
  return `arn:${parameters.partition ?? ''}:kendra:${parameters.region}:${parameters.account}:index/${parameters.indexId}/experience/${parameters.experienceId}`
}

export interface ThesaurusArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexId: string
  thesaurusId: string
}
export type ThesaurusArn = `arn:${string}:kendra:${string}:${string}:index/${string}/thesaurus/${string}`
export function thesaurusArn(parameters: ThesaurusArnParameters): ThesaurusArn {
  return `arn:${parameters.partition ?? ''}:kendra:${parameters.region}:${parameters.account}:index/${parameters.indexId}/thesaurus/${parameters.thesaurusId}`
}

export interface QuerySuggestionsBlockListArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexId: string
  querySuggestionsBlockListId: string
}
export type QuerySuggestionsBlockListArn = `arn:${string}:kendra:${string}:${string}:index/${string}/query-suggestions-block-list/${string}`
export function querySuggestionsBlockListArn(parameters: QuerySuggestionsBlockListArnParameters): QuerySuggestionsBlockListArn {
  return `arn:${parameters.partition ?? ''}:kendra:${parameters.region}:${parameters.account}:index/${parameters.indexId}/query-suggestions-block-list/${parameters.querySuggestionsBlockListId}`
}

export interface FeaturedResultsSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexId: string
  featuredResultsSetId: string
}
export type FeaturedResultsSetArn = `arn:${string}:kendra:${string}:${string}:index/${string}/featured-results-set/${string}`
export function featuredResultsSetArn(parameters: FeaturedResultsSetArnParameters): FeaturedResultsSetArn {
  return `arn:${parameters.partition ?? ''}:kendra:${parameters.region}:${parameters.account}:index/${parameters.indexId}/featured-results-set/${parameters.featuredResultsSetId}`
}

export interface AccessControlConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexId: string
  accessControlConfigurationId: string
}
export type AccessControlConfigurationArn = `arn:${string}:kendra:${string}:${string}:index/${string}/access-control-configuration/${string}`
export function accessControlConfigurationArn(parameters: AccessControlConfigurationArnParameters): AccessControlConfigurationArn {
  return `arn:${parameters.partition ?? ''}:kendra:${parameters.region}:${parameters.account}:index/${parameters.indexId}/access-control-configuration/${parameters.accessControlConfigurationId}`
}
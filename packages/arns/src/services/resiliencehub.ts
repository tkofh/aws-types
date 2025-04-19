import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResiliencyPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resiliencyPolicyId: string
}
class ResiliencyPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resiliency-policy',
  `arn:${string}:resiliencehub:${string}:${string}:resiliency-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resiliency-policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resiliencyPolicyId: string
  constructor(parameters: ResiliencyPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resiliencyPolicyId = parameters.resiliencyPolicyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resiliencehub:${this.region}:${this.account}:resiliency-policy/${this.resiliencyPolicyId}` as const
  }
}
export type { ResiliencyPolicyArn }
export function resiliencyPolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResiliencyPolicyArnParameters<Partition>,
) {
  return new ResiliencyPolicyArn<Partition>(parameters)
}

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:resiliencehub:${string}:${string}:app/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resiliencehub:${this.region}:${this.account}:app/${this.appId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface AppAssessmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appAssessmentId: string
}
class AppAssessmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-assessment',
  `arn:${string}:resiliencehub:${string}:${string}:app-assessment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-assessment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appAssessmentId: string
  constructor(parameters: AppAssessmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appAssessmentId = parameters.appAssessmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resiliencehub:${this.region}:${this.account}:app-assessment/${this.appAssessmentId}` as const
  }
}
export type { AppAssessmentArn }
export function appAssessmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppAssessmentArnParameters<Partition>,
) {
  return new AppAssessmentArn<Partition>(parameters)
}

export interface RecommendationTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly recommendationTemplateId: string
}
class RecommendationTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recommendation-template',
  `arn:${string}:resiliencehub:${string}:${string}:recommendation-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recommendation-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly recommendationTemplateId: string
  constructor(parameters: RecommendationTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.recommendationTemplateId = parameters.recommendationTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resiliencehub:${this.region}:${this.account}:recommendation-template/${this.recommendationTemplateId}` as const
  }
}
export type { RecommendationTemplateArn }
export function recommendationTemplateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RecommendationTemplateArnParameters<Partition>) {
  return new RecommendationTemplateArn<Partition>(parameters)
}

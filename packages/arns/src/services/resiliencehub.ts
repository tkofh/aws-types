import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PolicyResiliencyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyResiliency: string
}
class PolicyResiliencyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resiliency-policy',
  `arn:${string}:resiliencehub:${string}:${string}:resiliency-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resiliency-policy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyResiliency: string
  constructor(parameters: PolicyResiliencyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPolicyResiliency = parameters.idPolicyResiliency
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resiliencehub:${this.region}:${this.account}:resiliency-policy/${this.idPolicyResiliency}` as const
  }
}
export type { PolicyResiliencyArn }
export function policyResiliencyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyResiliencyArnParameters<Partition>,
) {
  return new PolicyResiliencyArn<Partition>(parameters)
}

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:resiliencehub:${string}:${string}:app/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApp: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resiliencehub:${this.region}:${this.account}:app/${this.idApp}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface AssessmentAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssessmentApp: string
}
class AssessmentAppArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'app-assessment',
  `arn:${string}:resiliencehub:${string}:${string}:app-assessment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'app-assessment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssessmentApp: string
  constructor(parameters: AssessmentAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssessmentApp = parameters.idAssessmentApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resiliencehub:${this.region}:${this.account}:app-assessment/${this.idAssessmentApp}` as const
  }
}
export type { AssessmentAppArn }
export function assessmentAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssessmentAppArnParameters<Partition>,
) {
  return new AssessmentAppArn<Partition>(parameters)
}

export interface TemplateRecommendationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateRecommendation: string
}
class TemplateRecommendationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recommendation-template',
  `arn:${string}:resiliencehub:${string}:${string}:recommendation-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recommendation-template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateRecommendation: string
  constructor(parameters: TemplateRecommendationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTemplateRecommendation = parameters.idTemplateRecommendation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resiliencehub:${this.region}:${this.account}:recommendation-template/${this.idTemplateRecommendation}` as const
  }
}
export type { TemplateRecommendationArn }
export function templateRecommendationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TemplateRecommendationArnParameters<Partition>) {
  return new TemplateRecommendationArn<Partition>(parameters)
}

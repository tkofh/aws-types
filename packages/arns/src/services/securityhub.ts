import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface HubArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class HubArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'hub', `arn:${string}:securityhub:${string}:${string}:hub/default`> {
  readonly [ArnResourceTypeBrand] = 'hub' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: HubArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:hub/default` as const
  }
}
export type { HubArn }
export function hubArn<Partition extends ArnPartition = 'aws'>(parameters: HubArnParameters<Partition>) {
  return new HubArn<Partition>(parameters)
}

export interface ProductArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly company: string
  readonly productId: string
}
class ProductArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'product', `arn:${string}:securityhub:${string}:${string}:product/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'product' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly company: string
  readonly productId: string
  constructor(parameters: ProductArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.company = parameters.company
    this.productId = parameters.productId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:product/${this.company}/${this.productId}` as const
  }
}
export type { ProductArn }
export function productArn<Partition extends ArnPartition = 'aws'>(parameters: ProductArnParameters<Partition>) {
  return new ProductArn<Partition>(parameters)
}

export interface FindingAggregatorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly findingAggregatorId: string
}
class FindingAggregatorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'finding-aggregator', `arn:${string}:securityhub:${string}:${string}:finding-aggregator/${string}`> {
  readonly [ArnResourceTypeBrand] = 'finding-aggregator' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly findingAggregatorId: string
  constructor(parameters: FindingAggregatorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.findingAggregatorId = parameters.findingAggregatorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:finding-aggregator/${this.findingAggregatorId}` as const
  }
}
export type { FindingAggregatorArn }
export function findingAggregatorArn<Partition extends ArnPartition = 'aws'>(parameters: FindingAggregatorArnParameters<Partition>) {
  return new FindingAggregatorArn<Partition>(parameters)
}

export interface AutomationRuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly automationRuleId: string
}
class AutomationRuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'automation-rule', `arn:${string}:securityhub:${string}:${string}:automation-rule/${string}`> {
  readonly [ArnResourceTypeBrand] = 'automation-rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly automationRuleId: string
  constructor(parameters: AutomationRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.automationRuleId = parameters.automationRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:automation-rule/${this.automationRuleId}` as const
  }
}
export type { AutomationRuleArn }
export function automationRuleArn<Partition extends ArnPartition = 'aws'>(parameters: AutomationRuleArnParameters<Partition>) {
  return new AutomationRuleArn<Partition>(parameters)
}

export interface ConfigurationPolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationPolicyId: string
}
class ConfigurationPolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'configuration-policy', `arn:${string}:securityhub:${string}:${string}:configuration-policy/${string}`> {
  readonly [ArnResourceTypeBrand] = 'configuration-policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationPolicyId: string
  constructor(parameters: ConfigurationPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configurationPolicyId = parameters.configurationPolicyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:configuration-policy/${this.configurationPolicyId}` as const
  }
}
export type { ConfigurationPolicyArn }
export function configurationPolicyArn<Partition extends ArnPartition = 'aws'>(parameters: ConfigurationPolicyArnParameters<Partition>) {
  return new ConfigurationPolicyArn<Partition>(parameters)
}
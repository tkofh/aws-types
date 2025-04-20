import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface HubArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class HubArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'hub',
  `arn:${string}:securityhub:${string}:${string}:hub/default`
> {
  readonly [ArnResourceTypeBrand] = 'hub' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: HubArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:hub/default` as const
  }
}
export type { HubArn }
export function hubArn<Partition extends ArnPartition = 'aws'>(
  parameters: HubArnParameters<Partition>,
) {
  return new HubArn<Partition>(parameters)
}

export interface ProductArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly company: string
  readonly idProduct: string
}
class ProductArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'product',
  `arn:${string}:securityhub:${string}:${string}:product/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'product' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly company: string
  readonly idProduct: string
  constructor(parameters: ProductArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.company = parameters.company
    this.idProduct = parameters.idProduct
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:product/${this.company}/${this.idProduct}` as const
  }
}
export type { ProductArn }
export function productArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProductArnParameters<Partition>,
) {
  return new ProductArn<Partition>(parameters)
}

export interface AggregatorFindingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAggregatorFinding: string
}
class AggregatorFindingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'finding-aggregator',
  `arn:${string}:securityhub:${string}:${string}:finding-aggregator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'finding-aggregator' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAggregatorFinding: string
  constructor(parameters: AggregatorFindingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAggregatorFinding = parameters.idAggregatorFinding
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:finding-aggregator/${this.idAggregatorFinding}` as const
  }
}
export type { AggregatorFindingArn }
export function aggregatorFindingArn<Partition extends ArnPartition = 'aws'>(
  parameters: AggregatorFindingArnParameters<Partition>,
) {
  return new AggregatorFindingArn<Partition>(parameters)
}

export interface RuleAutomationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleAutomation: string
}
class RuleAutomationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'automation-rule',
  `arn:${string}:securityhub:${string}:${string}:automation-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'automation-rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleAutomation: string
  constructor(parameters: RuleAutomationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRuleAutomation = parameters.idRuleAutomation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:automation-rule/${this.idRuleAutomation}` as const
  }
}
export type { RuleAutomationArn }
export function ruleAutomationArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleAutomationArnParameters<Partition>,
) {
  return new RuleAutomationArn<Partition>(parameters)
}

export interface PolicyConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyConfiguration: string
}
class PolicyConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration-policy',
  `arn:${string}:securityhub:${string}:${string}:configuration-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration-policy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyConfiguration: string
  constructor(parameters: PolicyConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPolicyConfiguration = parameters.idPolicyConfiguration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:securityhub:${this.region}:${this.account}:configuration-policy/${this.idPolicyConfiguration}` as const
  }
}
export type { PolicyConfigurationArn }
export function policyConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyConfigurationArnParameters<Partition>,
) {
  return new PolicyConfigurationArn<Partition>(parameters)
}

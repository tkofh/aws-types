export interface HubArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type HubArn = `arn:${string}:securityhub:${string}:${string}:hub/default`
export function hubArn(parameters: HubArnParameters): HubArn {
  return `arn:${parameters.partition ?? ''}:securityhub:${parameters.region}:${parameters.account}:hub/default`
}

export interface ProductArnParameters {
  partition?: string | undefined
  region: string
  account: string
  company: string
  productId: string
}
export type ProductArn = `arn:${string}:securityhub:${string}:${string}:product/${string}/${string}`
export function productArn(parameters: ProductArnParameters): ProductArn {
  return `arn:${parameters.partition ?? ''}:securityhub:${parameters.region}:${parameters.account}:product/${parameters.company}/${parameters.productId}`
}

export interface FindingAggregatorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  findingAggregatorId: string
}
export type FindingAggregatorArn = `arn:${string}:securityhub:${string}:${string}:finding-aggregator/${string}`
export function findingAggregatorArn(parameters: FindingAggregatorArnParameters): FindingAggregatorArn {
  return `arn:${parameters.partition ?? ''}:securityhub:${parameters.region}:${parameters.account}:finding-aggregator/${parameters.findingAggregatorId}`
}

export interface AutomationRuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  automationRuleId: string
}
export type AutomationRuleArn = `arn:${string}:securityhub:${string}:${string}:automation-rule/${string}`
export function automationRuleArn(parameters: AutomationRuleArnParameters): AutomationRuleArn {
  return `arn:${parameters.partition ?? ''}:securityhub:${parameters.region}:${parameters.account}:automation-rule/${parameters.automationRuleId}`
}

export interface ConfigurationPolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configurationPolicyId: string
}
export type ConfigurationPolicyArn = `arn:${string}:securityhub:${string}:${string}:configuration-policy/${string}`
export function configurationPolicyArn(parameters: ConfigurationPolicyArnParameters): ConfigurationPolicyArn {
  return `arn:${parameters.partition ?? ''}:securityhub:${parameters.region}:${parameters.account}:configuration-policy/${parameters.configurationPolicyId}`
}
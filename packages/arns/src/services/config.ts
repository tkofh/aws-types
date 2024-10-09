export interface AggregationAuthorizationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  aggregatorAccount: string
  aggregatorRegion: string
}
export type AggregationAuthorizationArn = `arn:${string}:config:${string}:${string}:aggregation-authorization/${string}/${string}`
export function aggregationAuthorizationArn(parameters: AggregationAuthorizationArnParameters): AggregationAuthorizationArn {
  return `arn:${parameters.partition ?? ''}:config:${parameters.region}:${parameters.account}:aggregation-authorization/${parameters.aggregatorAccount}/${parameters.aggregatorRegion}`
}

export interface ConfigurationAggregatorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  aggregatorId: string
}
export type ConfigurationAggregatorArn = `arn:${string}:config:${string}:${string}:config-aggregator/${string}`
export function configurationAggregatorArn(parameters: ConfigurationAggregatorArnParameters): ConfigurationAggregatorArn {
  return `arn:${parameters.partition ?? ''}:config:${parameters.region}:${parameters.account}:config-aggregator/${parameters.aggregatorId}`
}

export interface ConfigRuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configRuleId: string
}
export type ConfigRuleArn = `arn:${string}:config:${string}:${string}:config-rule/${string}`
export function configRuleArn(parameters: ConfigRuleArnParameters): ConfigRuleArn {
  return `arn:${parameters.partition ?? ''}:config:${parameters.region}:${parameters.account}:config-rule/${parameters.configRuleId}`
}

export interface ConformancePackArnParameters {
  partition?: string | undefined
  region: string
  account: string
  conformancePackName: string
  conformancePackId: string
}
export type ConformancePackArn = `arn:${string}:config:${string}:${string}:conformance-pack/${string}/${string}`
export function conformancePackArn(parameters: ConformancePackArnParameters): ConformancePackArn {
  return `arn:${parameters.partition ?? ''}:config:${parameters.region}:${parameters.account}:conformance-pack/${parameters.conformancePackName}/${parameters.conformancePackId}`
}

export interface OrganizationConfigRuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  organizationConfigRuleId: string
}
export type OrganizationConfigRuleArn = `arn:${string}:config:${string}:${string}:organization-config-rule/${string}`
export function organizationConfigRuleArn(parameters: OrganizationConfigRuleArnParameters): OrganizationConfigRuleArn {
  return `arn:${parameters.partition ?? ''}:config:${parameters.region}:${parameters.account}:organization-config-rule/${parameters.organizationConfigRuleId}`
}

export interface OrganizationConformancePackArnParameters {
  partition?: string | undefined
  region: string
  account: string
  organizationConformancePackId: string
}
export type OrganizationConformancePackArn = `arn:${string}:config:${string}:${string}:organization-conformance-pack/${string}`
export function organizationConformancePackArn(parameters: OrganizationConformancePackArnParameters): OrganizationConformancePackArn {
  return `arn:${parameters.partition ?? ''}:config:${parameters.region}:${parameters.account}:organization-conformance-pack/${parameters.organizationConformancePackId}`
}

export interface RemediationConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  remediationConfigurationId: string
}
export type RemediationConfigurationArn = `arn:${string}:config:${string}:${string}:remediation-configuration/${string}`
export function remediationConfigurationArn(parameters: RemediationConfigurationArnParameters): RemediationConfigurationArn {
  return `arn:${parameters.partition ?? ''}:config:${parameters.region}:${parameters.account}:remediation-configuration/${parameters.remediationConfigurationId}`
}

export interface StoredQueryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  storedQueryName: string
  storedQueryId: string
}
export type StoredQueryArn = `arn:${string}:config:${string}:${string}:stored-query/${string}/${string}`
export function storedQueryArn(parameters: StoredQueryArnParameters): StoredQueryArn {
  return `arn:${parameters.partition ?? ''}:config:${parameters.region}:${parameters.account}:stored-query/${parameters.storedQueryName}/${parameters.storedQueryId}`
}
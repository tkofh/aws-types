import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AggregationAuthorizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly aggregatorAccount: string
  readonly aggregatorRegion: string
}
class AggregationAuthorizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AggregationAuthorization',
  `arn:${string}:config:${string}:${string}:aggregation-authorization/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AggregationAuthorization' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly aggregatorAccount: string
  readonly aggregatorRegion: string
  constructor(parameters: AggregationAuthorizationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.aggregatorAccount = parameters.aggregatorAccount
    this.aggregatorRegion = parameters.aggregatorRegion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:aggregation-authorization/${this.aggregatorAccount}/${this.aggregatorRegion}` as const
  }
}
export type { AggregationAuthorizationArn }
export function aggregationAuthorizationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AggregationAuthorizationArnParameters<Partition>) {
  return new AggregationAuthorizationArn<Partition>(parameters)
}

export interface ConfigurationAggregatorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly aggregatorId: string
}
class ConfigurationAggregatorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ConfigurationAggregator',
  `arn:${string}:config:${string}:${string}:config-aggregator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ConfigurationAggregator' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly aggregatorId: string
  constructor(parameters: ConfigurationAggregatorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.aggregatorId = parameters.aggregatorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:config-aggregator/${this.aggregatorId}` as const
  }
}
export type { ConfigurationAggregatorArn }
export function configurationAggregatorArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationAggregatorArnParameters<Partition>) {
  return new ConfigurationAggregatorArn<Partition>(parameters)
}

export interface ConfigRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configRuleId: string
}
class ConfigRuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ConfigRule',
  `arn:${string}:config:${string}:${string}:config-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ConfigRule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configRuleId: string
  constructor(parameters: ConfigRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configRuleId = parameters.configRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:config-rule/${this.configRuleId}` as const
  }
}
export type { ConfigRuleArn }
export function configRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigRuleArnParameters<Partition>,
) {
  return new ConfigRuleArn<Partition>(parameters)
}

export interface ConformancePackArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly conformancePackName: string
  readonly conformancePackId: string
}
class ConformancePackArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ConformancePack',
  `arn:${string}:config:${string}:${string}:conformance-pack/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ConformancePack' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly conformancePackName: string
  readonly conformancePackId: string
  constructor(parameters: ConformancePackArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.conformancePackName = parameters.conformancePackName
    this.conformancePackId = parameters.conformancePackId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:conformance-pack/${this.conformancePackName}/${this.conformancePackId}` as const
  }
}
export type { ConformancePackArn }
export function conformancePackArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConformancePackArnParameters<Partition>,
) {
  return new ConformancePackArn<Partition>(parameters)
}

export interface OrganizationConfigRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly organizationConfigRuleId: string
}
class OrganizationConfigRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'OrganizationConfigRule',
  `arn:${string}:config:${string}:${string}:organization-config-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'OrganizationConfigRule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly organizationConfigRuleId: string
  constructor(parameters: OrganizationConfigRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.organizationConfigRuleId = parameters.organizationConfigRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:organization-config-rule/${this.organizationConfigRuleId}` as const
  }
}
export type { OrganizationConfigRuleArn }
export function organizationConfigRuleArn<
  Partition extends ArnPartition = 'aws',
>(parameters: OrganizationConfigRuleArnParameters<Partition>) {
  return new OrganizationConfigRuleArn<Partition>(parameters)
}

export interface OrganizationConformancePackArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly organizationConformancePackId: string
}
class OrganizationConformancePackArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'OrganizationConformancePack',
  `arn:${string}:config:${string}:${string}:organization-conformance-pack/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'OrganizationConformancePack' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly organizationConformancePackId: string
  constructor(parameters: OrganizationConformancePackArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.organizationConformancePackId =
      parameters.organizationConformancePackId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:organization-conformance-pack/${this.organizationConformancePackId}` as const
  }
}
export type { OrganizationConformancePackArn }
export function organizationConformancePackArn<
  Partition extends ArnPartition = 'aws',
>(parameters: OrganizationConformancePackArnParameters<Partition>) {
  return new OrganizationConformancePackArn<Partition>(parameters)
}

export interface RemediationConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly remediationConfigurationId: string
}
class RemediationConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RemediationConfiguration',
  `arn:${string}:config:${string}:${string}:remediation-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RemediationConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly remediationConfigurationId: string
  constructor(parameters: RemediationConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.remediationConfigurationId = parameters.remediationConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:remediation-configuration/${this.remediationConfigurationId}` as const
  }
}
export type { RemediationConfigurationArn }
export function remediationConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RemediationConfigurationArnParameters<Partition>) {
  return new RemediationConfigurationArn<Partition>(parameters)
}

export interface StoredQueryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly storedQueryName: string
  readonly storedQueryId: string
}
class StoredQueryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'StoredQuery',
  `arn:${string}:config:${string}:${string}:stored-query/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'StoredQuery' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly storedQueryName: string
  readonly storedQueryId: string
  constructor(parameters: StoredQueryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.storedQueryName = parameters.storedQueryName
    this.storedQueryId = parameters.storedQueryId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:stored-query/${this.storedQueryName}/${this.storedQueryId}` as const
  }
}
export type { StoredQueryArn }
export function storedQueryArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoredQueryArnParameters<Partition>,
) {
  return new StoredQueryArn<Partition>(parameters)
}

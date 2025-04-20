import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AuthorizationAggregationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly accountAggregator: string
  readonly regionAggregator: string
}
class AuthorizationAggregationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AggregationAuthorization',
  `arn:${string}:config:${string}:${string}:aggregation-authorization/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AggregationAuthorization' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly accountAggregator: string
  readonly regionAggregator: string
  constructor(parameters: AuthorizationAggregationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.accountAggregator = parameters.accountAggregator
    this.regionAggregator = parameters.regionAggregator
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:aggregation-authorization/${this.accountAggregator}/${this.regionAggregator}` as const
  }
}
export type { AuthorizationAggregationArn }
export function authorizationAggregationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AuthorizationAggregationArnParameters<Partition>) {
  return new AuthorizationAggregationArn<Partition>(parameters)
}

export interface AggregatorConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAggregator: string
}
class AggregatorConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ConfigurationAggregator',
  `arn:${string}:config:${string}:${string}:config-aggregator/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ConfigurationAggregator' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAggregator: string
  constructor(parameters: AggregatorConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAggregator = parameters.idAggregator
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:config-aggregator/${this.idAggregator}` as const
  }
}
export type { AggregatorConfigurationArn }
export function aggregatorConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AggregatorConfigurationArnParameters<Partition>) {
  return new AggregatorConfigurationArn<Partition>(parameters)
}

export interface RuleConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleConfig: string
}
class RuleConfigArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ConfigRule',
  `arn:${string}:config:${string}:${string}:config-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ConfigRule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleConfig: string
  constructor(parameters: RuleConfigArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRuleConfig = parameters.idRuleConfig
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:config-rule/${this.idRuleConfig}` as const
  }
}
export type { RuleConfigArn }
export function ruleConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleConfigArnParameters<Partition>,
) {
  return new RuleConfigArn<Partition>(parameters)
}

export interface PackConformanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePackConformance: string
  readonly idPackConformance: string
}
class PackConformanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ConformancePack',
  `arn:${string}:config:${string}:${string}:conformance-pack/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ConformancePack' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePackConformance: string
  readonly idPackConformance: string
  constructor(parameters: PackConformanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePackConformance = parameters.namePackConformance
    this.idPackConformance = parameters.idPackConformance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:conformance-pack/${this.namePackConformance}/${this.idPackConformance}` as const
  }
}
export type { PackConformanceArn }
export function packConformanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackConformanceArnParameters<Partition>,
) {
  return new PackConformanceArn<Partition>(parameters)
}

export interface RuleConfigOrganizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleConfigOrganization: string
}
class RuleConfigOrganizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'OrganizationConfigRule',
  `arn:${string}:config:${string}:${string}:organization-config-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'OrganizationConfigRule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRuleConfigOrganization: string
  constructor(parameters: RuleConfigOrganizationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRuleConfigOrganization = parameters.idRuleConfigOrganization
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:organization-config-rule/${this.idRuleConfigOrganization}` as const
  }
}
export type { RuleConfigOrganizationArn }
export function ruleConfigOrganizationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RuleConfigOrganizationArnParameters<Partition>) {
  return new RuleConfigOrganizationArn<Partition>(parameters)
}

export interface PackConformanceOrganizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPackConformanceOrganization: string
}
class PackConformanceOrganizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'OrganizationConformancePack',
  `arn:${string}:config:${string}:${string}:organization-conformance-pack/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'OrganizationConformancePack' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPackConformanceOrganization: string
  constructor(parameters: PackConformanceOrganizationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPackConformanceOrganization =
      parameters.idPackConformanceOrganization
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:organization-conformance-pack/${this.idPackConformanceOrganization}` as const
  }
}
export type { PackConformanceOrganizationArn }
export function packConformanceOrganizationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PackConformanceOrganizationArnParameters<Partition>) {
  return new PackConformanceOrganizationArn<Partition>(parameters)
}

export interface ConfigurationRemediationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationRemediation: string
}
class ConfigurationRemediationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RemediationConfiguration',
  `arn:${string}:config:${string}:${string}:remediation-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RemediationConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationRemediation: string
  constructor(parameters: ConfigurationRemediationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfigurationRemediation = parameters.idConfigurationRemediation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:remediation-configuration/${this.idConfigurationRemediation}` as const
  }
}
export type { ConfigurationRemediationArn }
export function configurationRemediationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationRemediationArnParameters<Partition>) {
  return new ConfigurationRemediationArn<Partition>(parameters)
}

export interface QueryStoredArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueryStored: string
  readonly idQueryStored: string
}
class QueryStoredArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'StoredQuery',
  `arn:${string}:config:${string}:${string}:stored-query/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'StoredQuery' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueryStored: string
  readonly idQueryStored: string
  constructor(parameters: QueryStoredArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameQueryStored = parameters.nameQueryStored
    this.idQueryStored = parameters.idQueryStored
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:config:${this.region}:${this.account}:stored-query/${this.nameQueryStored}/${this.idQueryStored}` as const
  }
}
export type { QueryStoredArn }
export function queryStoredArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueryStoredArnParameters<Partition>,
) {
  return new QueryStoredArn<Partition>(parameters)
}

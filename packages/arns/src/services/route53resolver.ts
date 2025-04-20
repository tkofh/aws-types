import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConfigDnssecResolverArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigDnssecResolverArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-dnssec-config',
  `arn:${string}:route53resolver:${string}:${string}:resolver-dnssec-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-dnssec-config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigDnssecResolverArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-dnssec-config/${this.idResource}` as const
  }
}
export type { ConfigDnssecResolverArn }
export function configDnssecResolverArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigDnssecResolverArnParameters<Partition>,
) {
  return new ConfigDnssecResolverArn<Partition>(parameters)
}

export interface ConfigLogQueryResolverArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigLogQueryResolverArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-query-log-config',
  `arn:${string}:route53resolver:${string}:${string}:resolver-query-log-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-query-log-config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigLogQueryResolverArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-query-log-config/${this.idResource}` as const
  }
}
export type { ConfigLogQueryResolverArn }
export function configLogQueryResolverArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigLogQueryResolverArnParameters<Partition>) {
  return new ConfigLogQueryResolverArn<Partition>(parameters)
}

export interface RuleResolverArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class RuleResolverArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-rule',
  `arn:${string}:route53resolver:${string}:${string}:resolver-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: RuleResolverArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-rule/${this.idResource}` as const
  }
}
export type { RuleResolverArn }
export function ruleResolverArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleResolverArnParameters<Partition>,
) {
  return new RuleResolverArn<Partition>(parameters)
}

export interface EndpointResolverArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class EndpointResolverArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-endpoint',
  `arn:${string}:route53resolver:${string}:${string}:resolver-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: EndpointResolverArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-endpoint/${this.idResource}` as const
  }
}
export type { EndpointResolverArn }
export function endpointResolverArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointResolverArnParameters<Partition>,
) {
  return new EndpointResolverArn<Partition>(parameters)
}

export interface GroupRuleFirewallArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class GroupRuleFirewallArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'firewall-rule-group',
  `arn:${string}:route53resolver:${string}:${string}:firewall-rule-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'firewall-rule-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: GroupRuleFirewallArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:firewall-rule-group/${this.idResource}` as const
  }
}
export type { GroupRuleFirewallArn }
export function groupRuleFirewallArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupRuleFirewallArnParameters<Partition>,
) {
  return new GroupRuleFirewallArn<Partition>(parameters)
}

export interface AssociationGroupRuleFirewallArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class AssociationGroupRuleFirewallArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'firewall-rule-group-association',
  `arn:${string}:route53resolver:${string}:${string}:firewall-rule-group-association/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'firewall-rule-group-association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(
    parameters: AssociationGroupRuleFirewallArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:firewall-rule-group-association/${this.idResource}` as const
  }
}
export type { AssociationGroupRuleFirewallArn }
export function associationGroupRuleFirewallArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationGroupRuleFirewallArnParameters<Partition>) {
  return new AssociationGroupRuleFirewallArn<Partition>(parameters)
}

export interface ListDomainFirewallArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ListDomainFirewallArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'firewall-domain-list',
  `arn:${string}:route53resolver:${string}:${string}:firewall-domain-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'firewall-domain-list' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ListDomainFirewallArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:firewall-domain-list/${this.idResource}` as const
  }
}
export type { ListDomainFirewallArn }
export function listDomainFirewallArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListDomainFirewallArnParameters<Partition>,
) {
  return new ListDomainFirewallArn<Partition>(parameters)
}

export interface ConfigFirewallArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigFirewallArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'firewall-config',
  `arn:${string}:route53resolver:${string}:${string}:firewall-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'firewall-config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigFirewallArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:firewall-config/${this.idResource}` as const
  }
}
export type { ConfigFirewallArn }
export function configFirewallArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigFirewallArnParameters<Partition>,
) {
  return new ConfigFirewallArn<Partition>(parameters)
}

export interface ConfigResolverArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigResolverArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-config',
  `arn:${string}:route53resolver:${string}:${string}:resolver-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-config' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigResolverArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-config/${this.idResource}` as const
  }
}
export type { ConfigResolverArn }
export function configResolverArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigResolverArnParameters<Partition>,
) {
  return new ConfigResolverArn<Partition>(parameters)
}

export interface ResolverOutpostArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ResolverOutpostArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'outpost-resolver',
  `arn:${string}:route53resolver:${string}:${string}:outpost-resolver/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'outpost-resolver' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ResolverOutpostArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:outpost-resolver/${this.idResource}` as const
  }
}
export type { ResolverOutpostArn }
export function resolverOutpostArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResolverOutpostArnParameters<Partition>,
) {
  return new ResolverOutpostArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResolverDnssecConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ResolverDnssecConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-dnssec-config',
  `arn:${string}:route53resolver:${string}:${string}:resolver-dnssec-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-dnssec-config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ResolverDnssecConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-dnssec-config/${this.resourceId}` as const
  }
}
export type { ResolverDnssecConfigArn }
export function resolverDnssecConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResolverDnssecConfigArnParameters<Partition>,
) {
  return new ResolverDnssecConfigArn<Partition>(parameters)
}

export interface ResolverQueryLogConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ResolverQueryLogConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-query-log-config',
  `arn:${string}:route53resolver:${string}:${string}:resolver-query-log-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-query-log-config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ResolverQueryLogConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-query-log-config/${this.resourceId}` as const
  }
}
export type { ResolverQueryLogConfigArn }
export function resolverQueryLogConfigArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ResolverQueryLogConfigArnParameters<Partition>) {
  return new ResolverQueryLogConfigArn<Partition>(parameters)
}

export interface ResolverRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ResolverRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-rule',
  `arn:${string}:route53resolver:${string}:${string}:resolver-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ResolverRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-rule/${this.resourceId}` as const
  }
}
export type { ResolverRuleArn }
export function resolverRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResolverRuleArnParameters<Partition>,
) {
  return new ResolverRuleArn<Partition>(parameters)
}

export interface ResolverEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ResolverEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-endpoint',
  `arn:${string}:route53resolver:${string}:${string}:resolver-endpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ResolverEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-endpoint/${this.resourceId}` as const
  }
}
export type { ResolverEndpointArn }
export function resolverEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResolverEndpointArnParameters<Partition>,
) {
  return new ResolverEndpointArn<Partition>(parameters)
}

export interface FirewallRuleGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class FirewallRuleGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'firewall-rule-group',
  `arn:${string}:route53resolver:${string}:${string}:firewall-rule-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'firewall-rule-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: FirewallRuleGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:firewall-rule-group/${this.resourceId}` as const
  }
}
export type { FirewallRuleGroupArn }
export function firewallRuleGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: FirewallRuleGroupArnParameters<Partition>,
) {
  return new FirewallRuleGroupArn<Partition>(parameters)
}

export interface FirewallRuleGroupAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class FirewallRuleGroupAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'firewall-rule-group-association',
  `arn:${string}:route53resolver:${string}:${string}:firewall-rule-group-association/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'firewall-rule-group-association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(
    parameters: FirewallRuleGroupAssociationArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:firewall-rule-group-association/${this.resourceId}` as const
  }
}
export type { FirewallRuleGroupAssociationArn }
export function firewallRuleGroupAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: FirewallRuleGroupAssociationArnParameters<Partition>) {
  return new FirewallRuleGroupAssociationArn<Partition>(parameters)
}

export interface FirewallDomainListArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class FirewallDomainListArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'firewall-domain-list',
  `arn:${string}:route53resolver:${string}:${string}:firewall-domain-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'firewall-domain-list' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: FirewallDomainListArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:firewall-domain-list/${this.resourceId}` as const
  }
}
export type { FirewallDomainListArn }
export function firewallDomainListArn<Partition extends ArnPartition = 'aws'>(
  parameters: FirewallDomainListArnParameters<Partition>,
) {
  return new FirewallDomainListArn<Partition>(parameters)
}

export interface FirewallConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class FirewallConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'firewall-config',
  `arn:${string}:route53resolver:${string}:${string}:firewall-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'firewall-config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: FirewallConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:firewall-config/${this.resourceId}` as const
  }
}
export type { FirewallConfigArn }
export function firewallConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: FirewallConfigArnParameters<Partition>,
) {
  return new FirewallConfigArn<Partition>(parameters)
}

export interface ResolverConfigArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ResolverConfigArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resolver-config',
  `arn:${string}:route53resolver:${string}:${string}:resolver-config/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resolver-config' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ResolverConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:resolver-config/${this.resourceId}` as const
  }
}
export type { ResolverConfigArn }
export function resolverConfigArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResolverConfigArnParameters<Partition>,
) {
  return new ResolverConfigArn<Partition>(parameters)
}

export interface OutpostResolverArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class OutpostResolverArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'outpost-resolver',
  `arn:${string}:route53resolver:${string}:${string}:outpost-resolver/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'outpost-resolver' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: OutpostResolverArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53resolver:${this.region}:${this.account}:outpost-resolver/${this.resourceId}` as const
  }
}
export type { OutpostResolverArn }
export function outpostResolverArn<Partition extends ArnPartition = 'aws'>(
  parameters: OutpostResolverArnParameters<Partition>,
) {
  return new OutpostResolverArn<Partition>(parameters)
}

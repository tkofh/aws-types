export interface ResolverDnssecConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ResolverDnssecConfigArn = `arn:${string}:route53resolver:${string}:${string}:resolver-dnssec-config/${string}`
export function resolverDnssecConfigArn(parameters: ResolverDnssecConfigArnParameters): ResolverDnssecConfigArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:resolver-dnssec-config/${parameters.resourceId}`
}

export interface ResolverQueryLogConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ResolverQueryLogConfigArn = `arn:${string}:route53resolver:${string}:${string}:resolver-query-log-config/${string}`
export function resolverQueryLogConfigArn(parameters: ResolverQueryLogConfigArnParameters): ResolverQueryLogConfigArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:resolver-query-log-config/${parameters.resourceId}`
}

export interface ResolverRuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ResolverRuleArn = `arn:${string}:route53resolver:${string}:${string}:resolver-rule/${string}`
export function resolverRuleArn(parameters: ResolverRuleArnParameters): ResolverRuleArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:resolver-rule/${parameters.resourceId}`
}

export interface ResolverEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ResolverEndpointArn = `arn:${string}:route53resolver:${string}:${string}:resolver-endpoint/${string}`
export function resolverEndpointArn(parameters: ResolverEndpointArnParameters): ResolverEndpointArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:resolver-endpoint/${parameters.resourceId}`
}

export interface FirewallRuleGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type FirewallRuleGroupArn = `arn:${string}:route53resolver:${string}:${string}:firewall-rule-group/${string}`
export function firewallRuleGroupArn(parameters: FirewallRuleGroupArnParameters): FirewallRuleGroupArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:firewall-rule-group/${parameters.resourceId}`
}

export interface FirewallRuleGroupAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type FirewallRuleGroupAssociationArn = `arn:${string}:route53resolver:${string}:${string}:firewall-rule-group-association/${string}`
export function firewallRuleGroupAssociationArn(parameters: FirewallRuleGroupAssociationArnParameters): FirewallRuleGroupAssociationArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:firewall-rule-group-association/${parameters.resourceId}`
}

export interface FirewallDomainListArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type FirewallDomainListArn = `arn:${string}:route53resolver:${string}:${string}:firewall-domain-list/${string}`
export function firewallDomainListArn(parameters: FirewallDomainListArnParameters): FirewallDomainListArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:firewall-domain-list/${parameters.resourceId}`
}

export interface FirewallConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type FirewallConfigArn = `arn:${string}:route53resolver:${string}:${string}:firewall-config/${string}`
export function firewallConfigArn(parameters: FirewallConfigArnParameters): FirewallConfigArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:firewall-config/${parameters.resourceId}`
}

export interface ResolverConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ResolverConfigArn = `arn:${string}:route53resolver:${string}:${string}:resolver-config/${string}`
export function resolverConfigArn(parameters: ResolverConfigArnParameters): ResolverConfigArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:resolver-config/${parameters.resourceId}`
}

export interface OutpostResolverArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type OutpostResolverArn = `arn:${string}:route53resolver:${string}:${string}:outpost-resolver/${string}`
export function outpostResolverArn(parameters: OutpostResolverArnParameters): OutpostResolverArn {
  return `arn:${parameters.partition ?? ''}:route53resolver:${parameters.region}:${parameters.account}:outpost-resolver/${parameters.resourceId}`
}
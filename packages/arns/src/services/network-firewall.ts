export interface FirewallArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type FirewallArn = `arn:${string}:network-firewall:${string}:${string}:firewall/${string}`
export function firewallArn(parameters: FirewallArnParameters): FirewallArn {
  return `arn:${parameters.partition ?? ''}:network-firewall:${parameters.region}:${parameters.account}:firewall/${parameters.name}`
}

export interface FirewallPolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type FirewallPolicyArn = `arn:${string}:network-firewall:${string}:${string}:firewall-policy/${string}`
export function firewallPolicyArn(parameters: FirewallPolicyArnParameters): FirewallPolicyArn {
  return `arn:${parameters.partition ?? ''}:network-firewall:${parameters.region}:${parameters.account}:firewall-policy/${parameters.name}`
}

export interface StatefulRuleGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type StatefulRuleGroupArn = `arn:${string}:network-firewall:${string}:${string}:stateful-rulegroup/${string}`
export function statefulRuleGroupArn(parameters: StatefulRuleGroupArnParameters): StatefulRuleGroupArn {
  return `arn:${parameters.partition ?? ''}:network-firewall:${parameters.region}:${parameters.account}:stateful-rulegroup/${parameters.name}`
}

export interface StatelessRuleGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type StatelessRuleGroupArn = `arn:${string}:network-firewall:${string}:${string}:stateless-rulegroup/${string}`
export function statelessRuleGroupArn(parameters: StatelessRuleGroupArnParameters): StatelessRuleGroupArn {
  return `arn:${parameters.partition ?? ''}:network-firewall:${parameters.region}:${parameters.account}:stateless-rulegroup/${parameters.name}`
}

export interface TlsInspectionConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type TlsInspectionConfigurationArn = `arn:${string}:network-firewall:${string}:${string}:tls-configuration/${string}`
export function tlsInspectionConfigurationArn(parameters: TlsInspectionConfigurationArnParameters): TlsInspectionConfigurationArn {
  return `arn:${parameters.partition ?? ''}:network-firewall:${parameters.region}:${parameters.account}:tls-configuration/${parameters.name}`
}
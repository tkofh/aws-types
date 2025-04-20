import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface FirewallArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class FirewallArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Firewall',
  `arn:${string}:network-firewall:${string}:${string}:firewall/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Firewall' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: FirewallArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:network-firewall:${this.region}:${this.account}:firewall/${this.name}` as const
  }
}
export type { FirewallArn }
export function firewallArn<Partition extends ArnPartition = 'aws'>(
  parameters: FirewallArnParameters<Partition>,
) {
  return new FirewallArn<Partition>(parameters)
}

export interface PolicyFirewallArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class PolicyFirewallArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'FirewallPolicy',
  `arn:${string}:network-firewall:${string}:${string}:firewall-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'FirewallPolicy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: PolicyFirewallArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:network-firewall:${this.region}:${this.account}:firewall-policy/${this.name}` as const
  }
}
export type { PolicyFirewallArn }
export function policyFirewallArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyFirewallArnParameters<Partition>,
) {
  return new PolicyFirewallArn<Partition>(parameters)
}

export interface GroupRuleStatefulArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class GroupRuleStatefulArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'StatefulRuleGroup',
  `arn:${string}:network-firewall:${string}:${string}:stateful-rulegroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'StatefulRuleGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: GroupRuleStatefulArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:network-firewall:${this.region}:${this.account}:stateful-rulegroup/${this.name}` as const
  }
}
export type { GroupRuleStatefulArn }
export function groupRuleStatefulArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupRuleStatefulArnParameters<Partition>,
) {
  return new GroupRuleStatefulArn<Partition>(parameters)
}

export interface GroupRuleStatelessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class GroupRuleStatelessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'StatelessRuleGroup',
  `arn:${string}:network-firewall:${string}:${string}:stateless-rulegroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'StatelessRuleGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: GroupRuleStatelessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:network-firewall:${this.region}:${this.account}:stateless-rulegroup/${this.name}` as const
  }
}
export type { GroupRuleStatelessArn }
export function groupRuleStatelessArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupRuleStatelessArnParameters<Partition>,
) {
  return new GroupRuleStatelessArn<Partition>(parameters)
}

export interface ConfigurationInspectionTlsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class ConfigurationInspectionTlsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TLSInspectionConfiguration',
  `arn:${string}:network-firewall:${string}:${string}:tls-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TLSInspectionConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: ConfigurationInspectionTlsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:network-firewall:${this.region}:${this.account}:tls-configuration/${this.name}` as const
  }
}
export type { ConfigurationInspectionTlsArn }
export function configurationInspectionTlsArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationInspectionTlsArnParameters<Partition>) {
  return new ConfigurationInspectionTlsArn<Partition>(parameters)
}

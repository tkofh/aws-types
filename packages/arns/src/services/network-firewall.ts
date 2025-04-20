import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface FirewallArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class FirewallArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Firewall',
  `arn:${string}:network-firewall:${string}:${string}:firewall/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Firewall' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: FirewallArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

export interface FirewallPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class FirewallPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'FirewallPolicy',
  `arn:${string}:network-firewall:${string}:${string}:firewall-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'FirewallPolicy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: FirewallPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:network-firewall:${this.region}:${this.account}:firewall-policy/${this.name}` as const
  }
}
export type { FirewallPolicyArn }
export function firewallPolicyArn<Partition extends ArnPartition = 'aws'>(
  parameters: FirewallPolicyArnParameters<Partition>,
) {
  return new FirewallPolicyArn<Partition>(parameters)
}

export interface StatefulRuleGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class StatefulRuleGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'StatefulRuleGroup',
  `arn:${string}:network-firewall:${string}:${string}:stateful-rulegroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'StatefulRuleGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: StatefulRuleGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:network-firewall:${this.region}:${this.account}:stateful-rulegroup/${this.name}` as const
  }
}
export type { StatefulRuleGroupArn }
export function statefulRuleGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: StatefulRuleGroupArnParameters<Partition>,
) {
  return new StatefulRuleGroupArn<Partition>(parameters)
}

export interface StatelessRuleGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class StatelessRuleGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'StatelessRuleGroup',
  `arn:${string}:network-firewall:${string}:${string}:stateless-rulegroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'StatelessRuleGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: StatelessRuleGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:network-firewall:${this.region}:${this.account}:stateless-rulegroup/${this.name}` as const
  }
}
export type { StatelessRuleGroupArn }
export function statelessRuleGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: StatelessRuleGroupArnParameters<Partition>,
) {
  return new StatelessRuleGroupArn<Partition>(parameters)
}

export interface TlsInspectionConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class TlsInspectionConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'TLSInspectionConfiguration',
  `arn:${string}:network-firewall:${string}:${string}:tls-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'TLSInspectionConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: TlsInspectionConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:network-firewall:${this.region}:${this.account}:tls-configuration/${this.name}` as const
  }
}
export type { TlsInspectionConfigurationArn }
export function tlsInspectionConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TlsInspectionConfigurationArnParameters<Partition>) {
  return new TlsInspectionConfigurationArn<Partition>(parameters)
}

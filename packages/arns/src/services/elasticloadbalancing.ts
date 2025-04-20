import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BalancerLoadArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
}
class BalancerLoadArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'loadbalancer',
  `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'loadbalancer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  constructor(parameters: BalancerLoadArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBalancerLoad = parameters.nameBalancerLoad
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:loadbalancer/${this.nameBalancerLoad}` as const
  }
}
export type { BalancerLoadArn }
export function balancerLoadArn<Partition extends ArnPartition = 'aws'>(
  parameters: BalancerLoadArnParameters<Partition>,
) {
  return new BalancerLoadArn<Partition>(parameters)
}

export interface AppListenerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  readonly idListener: string
}
class AppListenerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'listener/app',
  `arn:${string}:elasticloadbalancing:${string}:${string}:listener/app/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'listener/app' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  readonly idListener: string
  constructor(parameters: AppListenerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBalancerLoad = parameters.nameBalancerLoad
    this.idBalancerLoad = parameters.idBalancerLoad
    this.idListener = parameters.idListener
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:listener/app/${this.nameBalancerLoad}/${this.idBalancerLoad}/${this.idListener}` as const
  }
}
export type { AppListenerArn }
export function appListenerArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppListenerArnParameters<Partition>,
) {
  return new AppListenerArn<Partition>(parameters)
}

export interface AppRuleListenerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  readonly idListener: string
  readonly idRuleListener: string
}
class AppRuleListenerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'listener-rule/app',
  `arn:${string}:elasticloadbalancing:${string}:${string}:listener-rule/app/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'listener-rule/app' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  readonly idListener: string
  readonly idRuleListener: string
  constructor(parameters: AppRuleListenerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBalancerLoad = parameters.nameBalancerLoad
    this.idBalancerLoad = parameters.idBalancerLoad
    this.idListener = parameters.idListener
    this.idRuleListener = parameters.idRuleListener
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:listener-rule/app/${this.nameBalancerLoad}/${this.idBalancerLoad}/${this.idListener}/${this.idRuleListener}` as const
  }
}
export type { AppRuleListenerArn }
export function appRuleListenerArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppRuleListenerArnParameters<Partition>,
) {
  return new AppRuleListenerArn<Partition>(parameters)
}

export interface NetListenerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  readonly idListener: string
}
class NetListenerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'listener/net',
  `arn:${string}:elasticloadbalancing:${string}:${string}:listener/net/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'listener/net' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  readonly idListener: string
  constructor(parameters: NetListenerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBalancerLoad = parameters.nameBalancerLoad
    this.idBalancerLoad = parameters.idBalancerLoad
    this.idListener = parameters.idListener
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:listener/net/${this.nameBalancerLoad}/${this.idBalancerLoad}/${this.idListener}` as const
  }
}
export type { NetListenerArn }
export function netListenerArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetListenerArnParameters<Partition>,
) {
  return new NetListenerArn<Partition>(parameters)
}

export interface NetRuleListenerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  readonly idListener: string
  readonly idRuleListener: string
}
class NetRuleListenerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'listener-rule/net',
  `arn:${string}:elasticloadbalancing:${string}:${string}:listener-rule/net/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'listener-rule/net' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  readonly idListener: string
  readonly idRuleListener: string
  constructor(parameters: NetRuleListenerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBalancerLoad = parameters.nameBalancerLoad
    this.idBalancerLoad = parameters.idBalancerLoad
    this.idListener = parameters.idListener
    this.idRuleListener = parameters.idRuleListener
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:listener-rule/net/${this.nameBalancerLoad}/${this.idBalancerLoad}/${this.idListener}/${this.idRuleListener}` as const
  }
}
export type { NetRuleListenerArn }
export function netRuleListenerArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetRuleListenerArnParameters<Partition>,
) {
  return new NetRuleListenerArn<Partition>(parameters)
}

export interface AppBalancerLoadArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
}
class AppBalancerLoadArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'loadbalancer/app/',
  `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/app/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'loadbalancer/app/' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  constructor(parameters: AppBalancerLoadArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBalancerLoad = parameters.nameBalancerLoad
    this.idBalancerLoad = parameters.idBalancerLoad
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:loadbalancer/app/${this.nameBalancerLoad}/${this.idBalancerLoad}` as const
  }
}
export type { AppBalancerLoadArn }
export function appBalancerLoadArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppBalancerLoadArnParameters<Partition>,
) {
  return new AppBalancerLoadArn<Partition>(parameters)
}

export interface NetBalancerLoadArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
}
class NetBalancerLoadArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'loadbalancer/net/',
  `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/net/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'loadbalancer/net/' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameBalancerLoad: string
  readonly idBalancerLoad: string
  constructor(parameters: NetBalancerLoadArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameBalancerLoad = parameters.nameBalancerLoad
    this.idBalancerLoad = parameters.idBalancerLoad
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:loadbalancer/net/${this.nameBalancerLoad}/${this.idBalancerLoad}` as const
  }
}
export type { NetBalancerLoadArn }
export function netBalancerLoadArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetBalancerLoadArnParameters<Partition>,
) {
  return new NetBalancerLoadArn<Partition>(parameters)
}

export interface GroupTargetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupTarget: string
  readonly idGroupTarget: string
}
class GroupTargetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'targetgroup',
  `arn:${string}:elasticloadbalancing:${string}:${string}:targetgroup/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'targetgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupTarget: string
  readonly idGroupTarget: string
  constructor(parameters: GroupTargetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupTarget = parameters.nameGroupTarget
    this.idGroupTarget = parameters.idGroupTarget
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:targetgroup/${this.nameGroupTarget}/${this.idGroupTarget}` as const
  }
}
export type { GroupTargetArn }
export function groupTargetArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupTargetArnParameters<Partition>,
) {
  return new GroupTargetArn<Partition>(parameters)
}

export interface StoreTrustArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStoreTrust: string
  readonly idStoreTrust: string
}
class StoreTrustArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'truststore',
  `arn:${string}:elasticloadbalancing:${string}:${string}:truststore/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'truststore' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStoreTrust: string
  readonly idStoreTrust: string
  constructor(parameters: StoreTrustArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameStoreTrust = parameters.nameStoreTrust
    this.idStoreTrust = parameters.idStoreTrust
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:truststore/${this.nameStoreTrust}/${this.idStoreTrust}` as const
  }
}
export type { StoreTrustArn }
export function storeTrustArn<Partition extends ArnPartition = 'aws'>(
  parameters: StoreTrustArnParameters<Partition>,
) {
  return new StoreTrustArn<Partition>(parameters)
}

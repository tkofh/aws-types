import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ByteMatchSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class ByteMatchSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'bytematchset',
  `arn:${string}:waf-regional:${string}:${string}:bytematchset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bytematchset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: ByteMatchSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:bytematchset/${this.id}` as const
  }
}
export type { ByteMatchSetArn }
export function byteMatchSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ByteMatchSetArnParameters<Partition>,
) {
  return new ByteMatchSetArn<Partition>(parameters)
}

export interface IpSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class IpSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipset',
  `arn:${string}:waf-regional:${string}:${string}:ipset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: IpSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:ipset/${this.id}` as const
  }
}
export type { IpSetArn }
export function ipSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpSetArnParameters<Partition>,
) {
  return new IpSetArn<Partition>(parameters)
}

export interface LoadBalancerAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
}
class LoadBalancerAppArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'loadbalancer/app/',
  `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/app/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'loadbalancer/app/' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  constructor(parameters: LoadBalancerAppArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loadBalancerName = parameters.loadBalancerName
    this.loadBalancerId = parameters.loadBalancerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:loadbalancer/app/${this.loadBalancerName}/${this.loadBalancerId}` as const
  }
}
export type { LoadBalancerAppArn }
export function loadBalancerAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: LoadBalancerAppArnParameters<Partition>,
) {
  return new LoadBalancerAppArn<Partition>(parameters)
}

export interface RateBasedRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RateBasedRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ratebasedrule',
  `arn:${string}:waf-regional:${string}:${string}:ratebasedrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ratebasedrule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RateBasedRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:ratebasedrule/${this.id}` as const
  }
}
export type { RateBasedRuleArn }
export function rateBasedRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RateBasedRuleArnParameters<Partition>,
) {
  return new RateBasedRuleArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rule',
  `arn:${string}:waf-regional:${string}:${string}:rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:rule/${this.id}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArnParameters<Partition>,
) {
  return new RuleArn<Partition>(parameters)
}

export interface SizeConstraintSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class SizeConstraintSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sizeconstraintset',
  `arn:${string}:waf-regional:${string}:${string}:sizeconstraintset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sizeconstraintset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: SizeConstraintSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:sizeconstraintset/${this.id}` as const
  }
}
export type { SizeConstraintSetArn }
export function sizeConstraintSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: SizeConstraintSetArnParameters<Partition>,
) {
  return new SizeConstraintSetArn<Partition>(parameters)
}

export interface SqlInjectionMatchSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class SqlInjectionMatchSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sqlinjectionmatchset',
  `arn:${string}:waf-regional:${string}:${string}:sqlinjectionset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sqlinjectionmatchset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: SqlInjectionMatchSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:sqlinjectionset/${this.id}` as const
  }
}
export type { SqlInjectionMatchSetArn }
export function sqlInjectionMatchSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: SqlInjectionMatchSetArnParameters<Partition>,
) {
  return new SqlInjectionMatchSetArn<Partition>(parameters)
}

export interface WebaclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class WebaclArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'webacl',
  `arn:${string}:waf-regional:${string}:${string}:webacl/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'webacl' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: WebaclArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:webacl/${this.id}` as const
  }
}
export type { WebaclArn }
export function webaclArn<Partition extends ArnPartition = 'aws'>(
  parameters: WebaclArnParameters<Partition>,
) {
  return new WebaclArn<Partition>(parameters)
}

export interface XssMatchSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class XssMatchSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'xssmatchset',
  `arn:${string}:waf-regional:${string}:${string}:xssmatchset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'xssmatchset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: XssMatchSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:xssmatchset/${this.id}` as const
  }
}
export type { XssMatchSetArn }
export function xssMatchSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: XssMatchSetArnParameters<Partition>,
) {
  return new XssMatchSetArn<Partition>(parameters)
}

export interface RegexMatchSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RegexMatchSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'regexmatchset',
  `arn:${string}:waf-regional:${string}:${string}:regexmatch/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'regexmatchset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RegexMatchSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:regexmatch/${this.id}` as const
  }
}
export type { RegexMatchSetArn }
export function regexMatchSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegexMatchSetArnParameters<Partition>,
) {
  return new RegexMatchSetArn<Partition>(parameters)
}

export interface RegexPatternSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RegexPatternSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'regexpatternset',
  `arn:${string}:waf-regional:${string}:${string}:regexpatternset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'regexpatternset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RegexPatternSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:regexpatternset/${this.id}` as const
  }
}
export type { RegexPatternSetArn }
export function regexPatternSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegexPatternSetArnParameters<Partition>,
) {
  return new RegexPatternSetArn<Partition>(parameters)
}

export interface GeoMatchSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class GeoMatchSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'geomatchset',
  `arn:${string}:waf-regional:${string}:${string}:geomatchset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'geomatchset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: GeoMatchSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:geomatchset/${this.id}` as const
  }
}
export type { GeoMatchSetArn }
export function geoMatchSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: GeoMatchSetArnParameters<Partition>,
) {
  return new GeoMatchSetArn<Partition>(parameters)
}

export interface RuleGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RuleGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rulegroup',
  `arn:${string}:waf-regional:${string}:${string}:rulegroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rulegroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RuleGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf-regional:${this.region}:${this.account}:rulegroup/${this.id}` as const
  }
}
export type { RuleGroupArn }
export function ruleGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleGroupArnParameters<Partition>,
) {
  return new RuleGroupArn<Partition>(parameters)
}

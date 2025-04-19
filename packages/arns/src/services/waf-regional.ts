import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BytematchsetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class BytematchsetArn<
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
  constructor(parameters: BytematchsetArnParameters<Partition>) {
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
export type { BytematchsetArn }
export function bytematchsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: BytematchsetArnParameters<Partition>,
) {
  return new BytematchsetArn<Partition>(parameters)
}

export interface IpsetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class IpsetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipset',
  `arn:${string}:waf-regional:${string}:${string}:ipset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: IpsetArnParameters<Partition>) {
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
export type { IpsetArn }
export function ipsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpsetArnParameters<Partition>,
) {
  return new IpsetArn<Partition>(parameters)
}

export interface LoadbalancerAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
}
class LoadbalancerAppArn<
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
  constructor(parameters: LoadbalancerAppArnParameters<Partition>) {
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
export type { LoadbalancerAppArn }
export function loadbalancerAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: LoadbalancerAppArnParameters<Partition>,
) {
  return new LoadbalancerAppArn<Partition>(parameters)
}

export interface RatebasedruleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RatebasedruleArn<
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
  constructor(parameters: RatebasedruleArnParameters<Partition>) {
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
export type { RatebasedruleArn }
export function ratebasedruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RatebasedruleArnParameters<Partition>,
) {
  return new RatebasedruleArn<Partition>(parameters)
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

export interface SizeconstraintsetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class SizeconstraintsetArn<
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
  constructor(parameters: SizeconstraintsetArnParameters<Partition>) {
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
export type { SizeconstraintsetArn }
export function sizeconstraintsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: SizeconstraintsetArnParameters<Partition>,
) {
  return new SizeconstraintsetArn<Partition>(parameters)
}

export interface SqlinjectionmatchsetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class SqlinjectionmatchsetArn<
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
  constructor(parameters: SqlinjectionmatchsetArnParameters<Partition>) {
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
export type { SqlinjectionmatchsetArn }
export function sqlinjectionmatchsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: SqlinjectionmatchsetArnParameters<Partition>,
) {
  return new SqlinjectionmatchsetArn<Partition>(parameters)
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

export interface XssmatchsetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class XssmatchsetArn<
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
  constructor(parameters: XssmatchsetArnParameters<Partition>) {
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
export type { XssmatchsetArn }
export function xssmatchsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: XssmatchsetArnParameters<Partition>,
) {
  return new XssmatchsetArn<Partition>(parameters)
}

export interface RegexmatchsetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RegexmatchsetArn<
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
  constructor(parameters: RegexmatchsetArnParameters<Partition>) {
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
export type { RegexmatchsetArn }
export function regexmatchsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegexmatchsetArnParameters<Partition>,
) {
  return new RegexmatchsetArn<Partition>(parameters)
}

export interface RegexpatternsetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RegexpatternsetArn<
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
  constructor(parameters: RegexpatternsetArnParameters<Partition>) {
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
export type { RegexpatternsetArn }
export function regexpatternsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegexpatternsetArnParameters<Partition>,
) {
  return new RegexpatternsetArn<Partition>(parameters)
}

export interface GeomatchsetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class GeomatchsetArn<
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
  constructor(parameters: GeomatchsetArnParameters<Partition>) {
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
export type { GeomatchsetArn }
export function geomatchsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: GeomatchsetArnParameters<Partition>,
) {
  return new GeomatchsetArn<Partition>(parameters)
}

export interface RulegroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
}
class RulegroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rulegroup',
  `arn:${string}:waf-regional:${string}:${string}:rulegroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rulegroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly id: string
  constructor(parameters: RulegroupArnParameters<Partition>) {
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
export type { RulegroupArn }
export function rulegroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: RulegroupArnParameters<Partition>,
) {
  return new RulegroupArn<Partition>(parameters)
}

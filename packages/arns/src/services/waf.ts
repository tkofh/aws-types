import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SetMatchByteArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class SetMatchByteArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'bytematchset',
  `arn:${string}:waf::${string}:bytematchset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bytematchset' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: SetMatchByteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:bytematchset/${this.id}` as const
  }
}
export type { SetMatchByteArn }
export function setMatchByteArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetMatchByteArnParameters<Partition>,
) {
  return new SetMatchByteArn<Partition>(parameters)
}

export interface SetIpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class SetIpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipset',
  `arn:${string}:waf::${string}:ipset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipset' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: SetIpArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:ipset/${this.id}` as const
  }
}
export type { SetIpArn }
export function setIpArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetIpArnParameters<Partition>,
) {
  return new SetIpArn<Partition>(parameters)
}

export interface RuleBasedRateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class RuleBasedRateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ratebasedrule',
  `arn:${string}:waf::${string}:ratebasedrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ratebasedrule' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: RuleBasedRateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:ratebasedrule/${this.id}` as const
  }
}
export type { RuleBasedRateArn }
export function ruleBasedRateArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleBasedRateArnParameters<Partition>,
) {
  return new RuleBasedRateArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rule',
  `arn:${string}:waf::${string}:rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:rule/${this.id}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArnParameters<Partition>,
) {
  return new RuleArn<Partition>(parameters)
}

export interface SetConstraintSizeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class SetConstraintSizeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sizeconstraintset',
  `arn:${string}:waf::${string}:sizeconstraintset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sizeconstraintset' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: SetConstraintSizeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:sizeconstraintset/${this.id}` as const
  }
}
export type { SetConstraintSizeArn }
export function setConstraintSizeArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetConstraintSizeArnParameters<Partition>,
) {
  return new SetConstraintSizeArn<Partition>(parameters)
}

export interface SetMatchInjectionSqlArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class SetMatchInjectionSqlArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sqlinjectionmatchset',
  `arn:${string}:waf::${string}:sqlinjectionset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sqlinjectionmatchset' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: SetMatchInjectionSqlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:sqlinjectionset/${this.id}` as const
  }
}
export type { SetMatchInjectionSqlArn }
export function setMatchInjectionSqlArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetMatchInjectionSqlArnParameters<Partition>,
) {
  return new SetMatchInjectionSqlArn<Partition>(parameters)
}

export interface WebaclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class WebaclArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'webacl',
  `arn:${string}:waf::${string}:webacl/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'webacl' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: WebaclArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:webacl/${this.id}` as const
  }
}
export type { WebaclArn }
export function webaclArn<Partition extends ArnPartition = 'aws'>(
  parameters: WebaclArnParameters<Partition>,
) {
  return new WebaclArn<Partition>(parameters)
}

export interface SetMatchXssArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class SetMatchXssArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'xssmatchset',
  `arn:${string}:waf::${string}:xssmatchset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'xssmatchset' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: SetMatchXssArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:xssmatchset/${this.id}` as const
  }
}
export type { SetMatchXssArn }
export function setMatchXssArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetMatchXssArnParameters<Partition>,
) {
  return new SetMatchXssArn<Partition>(parameters)
}

export interface SetMatchRegexArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class SetMatchRegexArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'regexmatchset',
  `arn:${string}:waf::${string}:regexmatch/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'regexmatchset' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: SetMatchRegexArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:regexmatch/${this.id}` as const
  }
}
export type { SetMatchRegexArn }
export function setMatchRegexArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetMatchRegexArnParameters<Partition>,
) {
  return new SetMatchRegexArn<Partition>(parameters)
}

export interface SetPatternRegexArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class SetPatternRegexArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'regexpatternset',
  `arn:${string}:waf::${string}:regexpatternset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'regexpatternset' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: SetPatternRegexArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:regexpatternset/${this.id}` as const
  }
}
export type { SetPatternRegexArn }
export function setPatternRegexArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetPatternRegexArnParameters<Partition>,
) {
  return new SetPatternRegexArn<Partition>(parameters)
}

export interface SetMatchGeoArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class SetMatchGeoArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'geomatchset',
  `arn:${string}:waf::${string}:geomatchset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'geomatchset' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: SetMatchGeoArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:geomatchset/${this.id}` as const
  }
}
export type { SetMatchGeoArn }
export function setMatchGeoArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetMatchGeoArnParameters<Partition>,
) {
  return new SetMatchGeoArn<Partition>(parameters)
}

export interface GroupRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly id: string
}
class GroupRuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rulegroup',
  `arn:${string}:waf::${string}:rulegroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rulegroup' as const
  readonly partition: string
  readonly account: string
  readonly id: string
  constructor(parameters: GroupRuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:waf::${this.account}:rulegroup/${this.id}` as const
  }
}
export type { GroupRuleArn }
export function groupRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupRuleArnParameters<Partition>,
) {
  return new GroupRuleArn<Partition>(parameters)
}

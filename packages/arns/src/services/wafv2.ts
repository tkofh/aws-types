import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface WebaclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class WebaclArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'webacl',
  `arn:${string}:wafv2:${string}:${string}:${string}/webacl/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'webacl' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: WebaclArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.scope = parameters.scope
    this.name = parameters.name
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wafv2:${this.region}:${this.account}:${this.scope}/webacl/${this.name}/${this.id}` as const
  }
}
export type { WebaclArn }
export function webaclArn<Partition extends ArnPartition = 'aws'>(
  parameters: WebaclArnParameters<Partition>,
) {
  return new WebaclArn<Partition>(parameters)
}

export interface SetIpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class SetIpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipset',
  `arn:${string}:wafv2:${string}:${string}:${string}/ipset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: SetIpArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.scope = parameters.scope
    this.name = parameters.name
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wafv2:${this.region}:${this.account}:${this.scope}/ipset/${this.name}/${this.id}` as const
  }
}
export type { SetIpArn }
export function setIpArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetIpArnParameters<Partition>,
) {
  return new SetIpArn<Partition>(parameters)
}

export interface SetRuleManagedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class SetRuleManagedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'managedruleset',
  `arn:${string}:wafv2:${string}:${string}:${string}/managedruleset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'managedruleset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: SetRuleManagedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.scope = parameters.scope
    this.name = parameters.name
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wafv2:${this.region}:${this.account}:${this.scope}/managedruleset/${this.name}/${this.id}` as const
  }
}
export type { SetRuleManagedArn }
export function setRuleManagedArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetRuleManagedArnParameters<Partition>,
) {
  return new SetRuleManagedArn<Partition>(parameters)
}

export interface GroupRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class GroupRuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rulegroup',
  `arn:${string}:wafv2:${string}:${string}:${string}/rulegroup/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rulegroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: GroupRuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.scope = parameters.scope
    this.name = parameters.name
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wafv2:${this.region}:${this.account}:${this.scope}/rulegroup/${this.name}/${this.id}` as const
  }
}
export type { GroupRuleArn }
export function groupRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupRuleArnParameters<Partition>,
) {
  return new GroupRuleArn<Partition>(parameters)
}

export interface SetPatternRegexArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class SetPatternRegexArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'regexpatternset',
  `arn:${string}:wafv2:${string}:${string}:${string}/regexpatternset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'regexpatternset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: SetPatternRegexArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.scope = parameters.scope
    this.name = parameters.name
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wafv2:${this.region}:${this.account}:${this.scope}/regexpatternset/${this.name}/${this.id}` as const
  }
}
export type { SetPatternRegexArn }
export function setPatternRegexArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetPatternRegexArnParameters<Partition>,
) {
  return new SetPatternRegexArn<Partition>(parameters)
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

export interface GatewayApiArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
}
class GatewayApiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'apigateway',
  `arn:${string}:apigateway:${string}::/restapis/${string}/stages/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'apigateway' as const
  readonly partition: string
  readonly region: string
  readonly idApi: string
  readonly nameStage: string
  constructor(parameters: GatewayApiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idApi = parameters.idApi
    this.nameStage = parameters.nameStage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.idApi}/stages/${this.nameStage}` as const
  }
}
export type { GatewayApiArn }
export function gatewayApiArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayApiArnParameters<Partition>,
) {
  return new GatewayApiArn<Partition>(parameters)
}

export interface AppsyncArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
}
class AppsyncArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'appsync',
  `arn:${string}:appsync:${string}:${string}:apis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appsync' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApiGraphql: string
  constructor(parameters: AppsyncArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApiGraphql = parameters.idApiGraphql
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.idApiGraphql}` as const
  }
}
export type { AppsyncArn }
export function appsyncArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppsyncArnParameters<Partition>,
) {
  return new AppsyncArn<Partition>(parameters)
}

export interface PoolUserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolUser: string
}
class PoolUserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'userpool',
  `arn:${string}:cognito-idp:${string}:${string}:userpool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'userpool' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolUser: string
  constructor(parameters: PoolUserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPoolUser = parameters.idPoolUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-idp:${this.region}:${this.account}:userpool/${this.idPoolUser}` as const
  }
}
export type { PoolUserArn }
export function poolUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolUserArnParameters<Partition>,
) {
  return new PoolUserArn<Partition>(parameters)
}

export interface RunnerAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameService: string
  readonly idService: string
}
class RunnerAppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'apprunner',
  `arn:${string}:apprunner:${string}:${string}:service/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'apprunner' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameService: string
  readonly idService: string
  constructor(parameters: RunnerAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameService = parameters.nameService
    this.idService = parameters.idService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:service/${this.nameService}/${this.idService}` as const
  }
}
export type { RunnerAppArn }
export function runnerAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: RunnerAppArnParameters<Partition>,
) {
  return new RunnerAppArn<Partition>(parameters)
}

export interface InstanceAccessVerifiedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceAccessVerified: string
}
class InstanceAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-instance',
  `arn:${string}:ec2:${string}:${string}:verified-access-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceAccessVerified: string
  constructor(parameters: InstanceAccessVerifiedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstanceAccessVerified = parameters.idInstanceAccessVerified
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-instance/${this.idInstanceAccessVerified}` as const
  }
}
export type { InstanceAccessVerifiedArn }
export function instanceAccessVerifiedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: InstanceAccessVerifiedArnParameters<Partition>) {
  return new InstanceAccessVerifiedArn<Partition>(parameters)
}

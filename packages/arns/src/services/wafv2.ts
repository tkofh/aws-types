import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface WebaclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
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
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: WebaclArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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

export interface IpSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class IpSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipset',
  `arn:${string}:wafv2:${string}:${string}:${string}/ipset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: IpSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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
export type { IpSetArn }
export function ipSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpSetArnParameters<Partition>,
) {
  return new IpSetArn<Partition>(parameters)
}

export interface ManagedRuleSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class ManagedRuleSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'managedruleset',
  `arn:${string}:wafv2:${string}:${string}:${string}/managedruleset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'managedruleset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: ManagedRuleSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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
export type { ManagedRuleSetArn }
export function managedRuleSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ManagedRuleSetArnParameters<Partition>,
) {
  return new ManagedRuleSetArn<Partition>(parameters)
}

export interface RuleGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class RuleGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rulegroup',
  `arn:${string}:wafv2:${string}:${string}:${string}/rulegroup/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rulegroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: RuleGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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
export type { RuleGroupArn }
export function ruleGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleGroupArnParameters<Partition>,
) {
  return new RuleGroupArn<Partition>(parameters)
}

export interface RegexPatternSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class RegexPatternSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'regexpatternset',
  `arn:${string}:wafv2:${string}:${string}:${string}/regexpatternset/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'regexpatternset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: RegexPatternSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
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
export type { RegexPatternSetArn }
export function regexPatternSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegexPatternSetArnParameters<Partition>,
) {
  return new RegexPatternSetArn<Partition>(parameters)
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

export interface ApiGatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
}
class ApiGatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'apigateway',
  `arn:${string}:apigateway:${string}::/restapis/${string}/stages/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'apigateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
  constructor(parameters: ApiGatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.apiId = parameters.apiId
    this.stageName = parameters.stageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apigateway:${this.region}::/restapis/${this.apiId}/stages/${this.stageName}` as const
  }
}
export type { ApiGatewayArn }
export function apiGatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApiGatewayArnParameters<Partition>,
) {
  return new ApiGatewayArn<Partition>(parameters)
}

export interface AppsyncArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
}
class AppsyncArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'appsync',
  `arn:${string}:appsync:${string}:${string}:apis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appsync' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphqlApiId: string
  constructor(parameters: AppsyncArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphqlApiId = parameters.graphqlApiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphqlApiId}` as const
  }
}
export type { AppsyncArn }
export function appsyncArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppsyncArnParameters<Partition>,
) {
  return new AppsyncArn<Partition>(parameters)
}

export interface UserPoolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userPoolId: string
}
class UserPoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'userpool',
  `arn:${string}:cognito-idp:${string}:${string}:userpool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'userpool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userPoolId: string
  constructor(parameters: UserPoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.userPoolId = parameters.userPoolId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-idp:${this.region}:${this.account}:userpool/${this.userPoolId}` as const
  }
}
export type { UserPoolArn }
export function userPoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserPoolArnParameters<Partition>,
) {
  return new UserPoolArn<Partition>(parameters)
}

export interface AppRunnerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly serviceId: string
}
class AppRunnerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'apprunner',
  `arn:${string}:apprunner:${string}:${string}:service/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'apprunner' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly serviceId: string
  constructor(parameters: AppRunnerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceName = parameters.serviceName
    this.serviceId = parameters.serviceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:apprunner:${this.region}:${this.account}:service/${this.serviceName}/${this.serviceId}` as const
  }
}
export type { AppRunnerArn }
export function appRunnerArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppRunnerArnParameters<Partition>,
) {
  return new AppRunnerArn<Partition>(parameters)
}

export interface VerifiedAccessInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessInstanceId: string
}
class VerifiedAccessInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'verified-access-instance',
  `arn:${string}:ec2:${string}:${string}:verified-access-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'verified-access-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly verifiedAccessInstanceId: string
  constructor(parameters: VerifiedAccessInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.verifiedAccessInstanceId = parameters.verifiedAccessInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:verified-access-instance/${this.verifiedAccessInstanceId}` as const
  }
}
export type { VerifiedAccessInstanceArn }
export function verifiedAccessInstanceArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VerifiedAccessInstanceArnParameters<Partition>) {
  return new VerifiedAccessInstanceArn<Partition>(parameters)
}

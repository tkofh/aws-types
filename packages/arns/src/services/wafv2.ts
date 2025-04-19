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

export interface IpsetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class IpsetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
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
  constructor(parameters: IpsetArnParameters<Partition>) {
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
export type { IpsetArn }
export function ipsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpsetArnParameters<Partition>,
) {
  return new IpsetArn<Partition>(parameters)
}

export interface ManagedrulesetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class ManagedrulesetArn<
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
  constructor(parameters: ManagedrulesetArnParameters<Partition>) {
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
export type { ManagedrulesetArn }
export function managedrulesetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ManagedrulesetArnParameters<Partition>,
) {
  return new ManagedrulesetArn<Partition>(parameters)
}

export interface RulegroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class RulegroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
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
  constructor(parameters: RulegroupArnParameters<Partition>) {
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
export type { RulegroupArn }
export function rulegroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: RulegroupArnParameters<Partition>,
) {
  return new RulegroupArn<Partition>(parameters)
}

export interface RegexpatternsetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class RegexpatternsetArn<
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
  constructor(parameters: RegexpatternsetArnParameters<Partition>) {
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
export type { RegexpatternsetArn }
export function regexpatternsetArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegexpatternsetArnParameters<Partition>,
) {
  return new RegexpatternsetArn<Partition>(parameters)
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

export interface ApigatewayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
}
class ApigatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'apigateway',
  `arn:${string}:apigateway:${string}::/restapis/${string}/stages/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'apigateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly apiId: string
  readonly stageName: string
  constructor(parameters: ApigatewayArnParameters<Partition>) {
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
export type { ApigatewayArn }
export function apigatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApigatewayArnParameters<Partition>,
) {
  return new ApigatewayArn<Partition>(parameters)
}

export interface AppsyncArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
}
class AppsyncArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'appsync',
  `arn:${string}:appsync:${string}:${string}:apis/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appsync' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly graphQlapiId: string
  constructor(parameters: AppsyncArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.graphQlapiId = parameters.graphQlapiId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appsync:${this.region}:${this.account}:apis/${this.graphQlapiId}` as const
  }
}
export type { AppsyncArn }
export function appsyncArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppsyncArnParameters<Partition>,
) {
  return new AppsyncArn<Partition>(parameters)
}

export interface UserpoolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userPoolId: string
}
class UserpoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'userpool',
  `arn:${string}:cognito-idp:${string}:${string}:userpool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'userpool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userPoolId: string
  constructor(parameters: UserpoolArnParameters<Partition>) {
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
export type { UserpoolArn }
export function userpoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserpoolArnParameters<Partition>,
) {
  return new UserpoolArn<Partition>(parameters)
}

export interface ApprunnerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly serviceId: string
}
class ApprunnerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'apprunner',
  `arn:${string}:apprunner:${string}:${string}:service/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'apprunner' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly serviceId: string
  constructor(parameters: ApprunnerArnParameters<Partition>) {
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
export type { ApprunnerArn }
export function apprunnerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApprunnerArnParameters<Partition>,
) {
  return new ApprunnerArn<Partition>(parameters)
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

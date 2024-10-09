export interface WebaclArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scope: string
  name: string
  id: string
}
export type WebaclArn = `arn:${string}:wafv2:${string}:${string}:${string}/webacl/${string}/${string}`
export function webaclArn(parameters: WebaclArnParameters): WebaclArn {
  return `arn:${parameters.partition ?? ''}:wafv2:${parameters.region}:${parameters.account}:${parameters.scope}/webacl/${parameters.name}/${parameters.id}`
}

export interface IpsetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scope: string
  name: string
  id: string
}
export type IpsetArn = `arn:${string}:wafv2:${string}:${string}:${string}/ipset/${string}/${string}`
export function ipsetArn(parameters: IpsetArnParameters): IpsetArn {
  return `arn:${parameters.partition ?? ''}:wafv2:${parameters.region}:${parameters.account}:${parameters.scope}/ipset/${parameters.name}/${parameters.id}`
}

export interface ManagedrulesetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scope: string
  name: string
  id: string
}
export type ManagedrulesetArn = `arn:${string}:wafv2:${string}:${string}:${string}/managedruleset/${string}/${string}`
export function managedrulesetArn(parameters: ManagedrulesetArnParameters): ManagedrulesetArn {
  return `arn:${parameters.partition ?? ''}:wafv2:${parameters.region}:${parameters.account}:${parameters.scope}/managedruleset/${parameters.name}/${parameters.id}`
}

export interface RulegroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scope: string
  name: string
  id: string
}
export type RulegroupArn = `arn:${string}:wafv2:${string}:${string}:${string}/rulegroup/${string}/${string}`
export function rulegroupArn(parameters: RulegroupArnParameters): RulegroupArn {
  return `arn:${parameters.partition ?? ''}:wafv2:${parameters.region}:${parameters.account}:${parameters.scope}/rulegroup/${parameters.name}/${parameters.id}`
}

export interface RegexpatternsetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scope: string
  name: string
  id: string
}
export type RegexpatternsetArn = `arn:${string}:wafv2:${string}:${string}:${string}/regexpatternset/${string}/${string}`
export function regexpatternsetArn(parameters: RegexpatternsetArnParameters): RegexpatternsetArn {
  return `arn:${parameters.partition ?? ''}:wafv2:${parameters.region}:${parameters.account}:${parameters.scope}/regexpatternset/${parameters.name}/${parameters.id}`
}

export interface LoadbalancerAppArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loadBalancerName: string
  loadBalancerId: string
}
export type LoadbalancerAppArn = `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/app/${string}/${string}`
export function loadbalancerAppArn(parameters: LoadbalancerAppArnParameters): LoadbalancerAppArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:loadbalancer/app/${parameters.loadBalancerName}/${parameters.loadBalancerId}`
}

export interface ApigatewayArnParameters {
  partition?: string | undefined
  region: string
  apiId: string
  stageName: string
}
export type ApigatewayArn = `arn:${string}:apigateway:${string}::/restapis/${string}/stages/${string}`
export function apigatewayArn(parameters: ApigatewayArnParameters): ApigatewayArn {
  return `arn:${parameters.partition ?? ''}:apigateway:${parameters.region}::/restapis/${parameters.apiId}/stages/${parameters.stageName}`
}

export interface AppsyncArnParameters {
  partition?: string | undefined
  region: string
  account: string
  graphQlapiId: string
}
export type AppsyncArn = `arn:${string}:appsync:${string}:${string}:apis/${string}`
export function appsyncArn(parameters: AppsyncArnParameters): AppsyncArn {
  return `arn:${parameters.partition ?? ''}:appsync:${parameters.region}:${parameters.account}:apis/${parameters.graphQlapiId}`
}

export interface UserpoolArnParameters {
  partition?: string | undefined
  region: string
  account: string
  userPoolId: string
}
export type UserpoolArn = `arn:${string}:cognito-idp:${string}:${string}:userpool/${string}`
export function userpoolArn(parameters: UserpoolArnParameters): UserpoolArn {
  return `arn:${parameters.partition ?? ''}:cognito-idp:${parameters.region}:${parameters.account}:userpool/${parameters.userPoolId}`
}

export interface ApprunnerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceName: string
  serviceId: string
}
export type ApprunnerArn = `arn:${string}:apprunner:${string}:${string}:service/${string}/${string}`
export function apprunnerArn(parameters: ApprunnerArnParameters): ApprunnerArn {
  return `arn:${parameters.partition ?? ''}:apprunner:${parameters.region}:${parameters.account}:service/${parameters.serviceName}/${parameters.serviceId}`
}

export interface VerifiedAccessInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  verifiedAccessInstanceId: string
}
export type VerifiedAccessInstanceArn = `arn:${string}:ec2:${string}:${string}:verified-access-instance/${string}`
export function verifiedAccessInstanceArn(parameters: VerifiedAccessInstanceArnParameters): VerifiedAccessInstanceArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:verified-access-instance/${parameters.verifiedAccessInstanceId}`
}
export interface LoadbalancerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loadBalancerName: string
}
export type LoadbalancerArn = `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/${string}`
export function loadbalancerArn(parameters: LoadbalancerArnParameters): LoadbalancerArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:loadbalancer/${parameters.loadBalancerName}`
}

export interface ListenerAppArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loadBalancerName: string
  loadBalancerId: string
  listenerId: string
}
export type ListenerAppArn = `arn:${string}:elasticloadbalancing:${string}:${string}:listener/app/${string}/${string}/${string}`
export function listenerAppArn(parameters: ListenerAppArnParameters): ListenerAppArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:listener/app/${parameters.loadBalancerName}/${parameters.loadBalancerId}/${parameters.listenerId}`
}

export interface ListenerRuleAppArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loadBalancerName: string
  loadBalancerId: string
  listenerId: string
  listenerRuleId: string
}
export type ListenerRuleAppArn = `arn:${string}:elasticloadbalancing:${string}:${string}:listener-rule/app/${string}/${string}/${string}/${string}`
export function listenerRuleAppArn(parameters: ListenerRuleAppArnParameters): ListenerRuleAppArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:listener-rule/app/${parameters.loadBalancerName}/${parameters.loadBalancerId}/${parameters.listenerId}/${parameters.listenerRuleId}`
}

export interface ListenerNetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loadBalancerName: string
  loadBalancerId: string
  listenerId: string
}
export type ListenerNetArn = `arn:${string}:elasticloadbalancing:${string}:${string}:listener/net/${string}/${string}/${string}`
export function listenerNetArn(parameters: ListenerNetArnParameters): ListenerNetArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:listener/net/${parameters.loadBalancerName}/${parameters.loadBalancerId}/${parameters.listenerId}`
}

export interface ListenerRuleNetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loadBalancerName: string
  loadBalancerId: string
  listenerId: string
  listenerRuleId: string
}
export type ListenerRuleNetArn = `arn:${string}:elasticloadbalancing:${string}:${string}:listener-rule/net/${string}/${string}/${string}/${string}`
export function listenerRuleNetArn(parameters: ListenerRuleNetArnParameters): ListenerRuleNetArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:listener-rule/net/${parameters.loadBalancerName}/${parameters.loadBalancerId}/${parameters.listenerId}/${parameters.listenerRuleId}`
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

export interface LoadbalancerNetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loadBalancerName: string
  loadBalancerId: string
}
export type LoadbalancerNetArn = `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/net/${string}/${string}`
export function loadbalancerNetArn(parameters: LoadbalancerNetArnParameters): LoadbalancerNetArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:loadbalancer/net/${parameters.loadBalancerName}/${parameters.loadBalancerId}`
}

export interface TargetgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  targetGroupName: string
  targetGroupId: string
}
export type TargetgroupArn = `arn:${string}:elasticloadbalancing:${string}:${string}:targetgroup/${string}/${string}`
export function targetgroupArn(parameters: TargetgroupArnParameters): TargetgroupArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:targetgroup/${parameters.targetGroupName}/${parameters.targetGroupId}`
}

export interface TruststoreArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trustStoreName: string
  trustStoreId: string
}
export type TruststoreArn = `arn:${string}:elasticloadbalancing:${string}:${string}:truststore/${string}/${string}`
export function truststoreArn(parameters: TruststoreArnParameters): TruststoreArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:truststore/${parameters.trustStoreName}/${parameters.trustStoreId}`
}
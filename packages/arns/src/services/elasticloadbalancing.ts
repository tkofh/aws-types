import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface LoadbalancerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
}
class LoadbalancerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'loadbalancer', `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/${string}`> {
  readonly [ArnResourceTypeBrand] = 'loadbalancer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  constructor(parameters: LoadbalancerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loadBalancerName = parameters.loadBalancerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:loadbalancer/${this.loadBalancerName}` as const
  }
}
export type { LoadbalancerArn }
export function loadbalancerArn<Partition extends ArnPartition = 'aws'>(parameters: LoadbalancerArnParameters<Partition>) {
  return new LoadbalancerArn<Partition>(parameters)
}

export interface ListenerAppArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  readonly listenerId: string
}
class ListenerAppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'listener/app', `arn:${string}:elasticloadbalancing:${string}:${string}:listener/app/${string}/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'listener/app' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  readonly listenerId: string
  constructor(parameters: ListenerAppArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loadBalancerName = parameters.loadBalancerName
    this.loadBalancerId = parameters.loadBalancerId
    this.listenerId = parameters.listenerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:listener/app/${this.loadBalancerName}/${this.loadBalancerId}/${this.listenerId}` as const
  }
}
export type { ListenerAppArn }
export function listenerAppArn<Partition extends ArnPartition = 'aws'>(parameters: ListenerAppArnParameters<Partition>) {
  return new ListenerAppArn<Partition>(parameters)
}

export interface ListenerRuleAppArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  readonly listenerId: string
  readonly listenerRuleId: string
}
class ListenerRuleAppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'listener-rule/app', `arn:${string}:elasticloadbalancing:${string}:${string}:listener-rule/app/${string}/${string}/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'listener-rule/app' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  readonly listenerId: string
  readonly listenerRuleId: string
  constructor(parameters: ListenerRuleAppArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loadBalancerName = parameters.loadBalancerName
    this.loadBalancerId = parameters.loadBalancerId
    this.listenerId = parameters.listenerId
    this.listenerRuleId = parameters.listenerRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:listener-rule/app/${this.loadBalancerName}/${this.loadBalancerId}/${this.listenerId}/${this.listenerRuleId}` as const
  }
}
export type { ListenerRuleAppArn }
export function listenerRuleAppArn<Partition extends ArnPartition = 'aws'>(parameters: ListenerRuleAppArnParameters<Partition>) {
  return new ListenerRuleAppArn<Partition>(parameters)
}

export interface ListenerNetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  readonly listenerId: string
}
class ListenerNetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'listener/net', `arn:${string}:elasticloadbalancing:${string}:${string}:listener/net/${string}/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'listener/net' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  readonly listenerId: string
  constructor(parameters: ListenerNetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loadBalancerName = parameters.loadBalancerName
    this.loadBalancerId = parameters.loadBalancerId
    this.listenerId = parameters.listenerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:listener/net/${this.loadBalancerName}/${this.loadBalancerId}/${this.listenerId}` as const
  }
}
export type { ListenerNetArn }
export function listenerNetArn<Partition extends ArnPartition = 'aws'>(parameters: ListenerNetArnParameters<Partition>) {
  return new ListenerNetArn<Partition>(parameters)
}

export interface ListenerRuleNetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  readonly listenerId: string
  readonly listenerRuleId: string
}
class ListenerRuleNetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'listener-rule/net', `arn:${string}:elasticloadbalancing:${string}:${string}:listener-rule/net/${string}/${string}/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'listener-rule/net' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  readonly listenerId: string
  readonly listenerRuleId: string
  constructor(parameters: ListenerRuleNetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loadBalancerName = parameters.loadBalancerName
    this.loadBalancerId = parameters.loadBalancerId
    this.listenerId = parameters.listenerId
    this.listenerRuleId = parameters.listenerRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:listener-rule/net/${this.loadBalancerName}/${this.loadBalancerId}/${this.listenerId}/${this.listenerRuleId}` as const
  }
}
export type { ListenerRuleNetArn }
export function listenerRuleNetArn<Partition extends ArnPartition = 'aws'>(parameters: ListenerRuleNetArnParameters<Partition>) {
  return new ListenerRuleNetArn<Partition>(parameters)
}

export interface LoadbalancerAppArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
}
class LoadbalancerAppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'loadbalancer/app/', `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/app/${string}/${string}`> {
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
export function loadbalancerAppArn<Partition extends ArnPartition = 'aws'>(parameters: LoadbalancerAppArnParameters<Partition>) {
  return new LoadbalancerAppArn<Partition>(parameters)
}

export interface LoadbalancerNetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
}
class LoadbalancerNetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'loadbalancer/net/', `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/net/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'loadbalancer/net/' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly loadBalancerName: string
  readonly loadBalancerId: string
  constructor(parameters: LoadbalancerNetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.loadBalancerName = parameters.loadBalancerName
    this.loadBalancerId = parameters.loadBalancerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:loadbalancer/net/${this.loadBalancerName}/${this.loadBalancerId}` as const
  }
}
export type { LoadbalancerNetArn }
export function loadbalancerNetArn<Partition extends ArnPartition = 'aws'>(parameters: LoadbalancerNetArnParameters<Partition>) {
  return new LoadbalancerNetArn<Partition>(parameters)
}

export interface TargetgroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly targetGroupName: string
  readonly targetGroupId: string
}
class TargetgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'targetgroup', `arn:${string}:elasticloadbalancing:${string}:${string}:targetgroup/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'targetgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly targetGroupName: string
  readonly targetGroupId: string
  constructor(parameters: TargetgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.targetGroupName = parameters.targetGroupName
    this.targetGroupId = parameters.targetGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:targetgroup/${this.targetGroupName}/${this.targetGroupId}` as const
  }
}
export type { TargetgroupArn }
export function targetgroupArn<Partition extends ArnPartition = 'aws'>(parameters: TargetgroupArnParameters<Partition>) {
  return new TargetgroupArn<Partition>(parameters)
}

export interface TruststoreArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trustStoreName: string
  readonly trustStoreId: string
}
class TruststoreArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'truststore', `arn:${string}:elasticloadbalancing:${string}:${string}:truststore/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'truststore' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trustStoreName: string
  readonly trustStoreId: string
  constructor(parameters: TruststoreArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trustStoreName = parameters.trustStoreName
    this.trustStoreId = parameters.trustStoreId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticloadbalancing:${this.region}:${this.account}:truststore/${this.trustStoreName}/${this.trustStoreId}` as const
  }
}
export type { TruststoreArn }
export function truststoreArn<Partition extends ArnPartition = 'aws'>(parameters: TruststoreArnParameters<Partition>) {
  return new TruststoreArn<Partition>(parameters)
}
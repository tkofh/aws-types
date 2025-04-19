import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AlarmArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly alarmName: string
}
class AlarmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'alarm', `arn:${string}:cloudwatch:${string}:${string}:alarm:${string}`> {
  readonly [ArnResourceTypeBrand] = 'alarm' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly alarmName: string
  constructor(parameters: AlarmArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.alarmName = parameters.alarmName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:alarm:${this.alarmName}` as const
  }
}
export type { AlarmArn }
export function alarmArn<Partition extends ArnPartition = 'aws'>(parameters: AlarmArnParameters<Partition>) {
  return new AlarmArn<Partition>(parameters)
}

export interface DashboardArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly dashboardName: string
}
class DashboardArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dashboard', `arn:${string}:cloudwatch::${string}:dashboard/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dashboard' as const
  readonly partition: Partition
  readonly account: string
  readonly dashboardName: string
  constructor(parameters: DashboardArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.dashboardName = parameters.dashboardName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch::${this.account}:dashboard/${this.dashboardName}` as const
  }
}
export type { DashboardArn }
export function dashboardArn<Partition extends ArnPartition = 'aws'>(parameters: DashboardArnParameters<Partition>) {
  return new DashboardArn<Partition>(parameters)
}

export interface InsightRuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly insightRuleName: string
}
class InsightRuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'insight-rule', `arn:${string}:cloudwatch:${string}:${string}:insight-rule/${string}`> {
  readonly [ArnResourceTypeBrand] = 'insight-rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly insightRuleName: string
  constructor(parameters: InsightRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.insightRuleName = parameters.insightRuleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:insight-rule/${this.insightRuleName}` as const
  }
}
export type { InsightRuleArn }
export function insightRuleArn<Partition extends ArnPartition = 'aws'>(parameters: InsightRuleArnParameters<Partition>) {
  return new InsightRuleArn<Partition>(parameters)
}

export interface MetricStreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly metricStreamName: string
}
class MetricStreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'metric-stream', `arn:${string}:cloudwatch:${string}:${string}:metric-stream/${string}`> {
  readonly [ArnResourceTypeBrand] = 'metric-stream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly metricStreamName: string
  constructor(parameters: MetricStreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.metricStreamName = parameters.metricStreamName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:metric-stream/${this.metricStreamName}` as const
  }
}
export type { MetricStreamArn }
export function metricStreamArn<Partition extends ArnPartition = 'aws'>(parameters: MetricStreamArnParameters<Partition>) {
  return new MetricStreamArn<Partition>(parameters)
}

export interface SloArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sloName: string
}
class SloArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'slo', `arn:${string}:cloudwatch:${string}:${string}:slo/${string}`> {
  readonly [ArnResourceTypeBrand] = 'slo' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sloName: string
  constructor(parameters: SloArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sloName = parameters.sloName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:slo/${this.sloName}` as const
  }
}
export type { SloArn }
export function sloArn<Partition extends ArnPartition = 'aws'>(parameters: SloArnParameters<Partition>) {
  return new SloArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly uniqueAttributesHex: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'service', `arn:${string}:cloudwatch:${string}:${string}:service/${string}-${string}`> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceName: string
  readonly uniqueAttributesHex: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceName = parameters.serviceName
    this.uniqueAttributesHex = parameters.uniqueAttributesHex
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:service/${this.serviceName}-${this.uniqueAttributesHex}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(parameters: ServiceArnParameters<Partition>) {
  return new ServiceArn<Partition>(parameters)
}
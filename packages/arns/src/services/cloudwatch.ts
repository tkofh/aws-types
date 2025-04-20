import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AlarmArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAlarm: string
}
class AlarmArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'alarm',
  `arn:${string}:cloudwatch:${string}:${string}:alarm:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'alarm' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAlarm: string
  constructor(parameters: AlarmArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameAlarm = parameters.nameAlarm
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:alarm:${this.nameAlarm}` as const
  }
}
export type { AlarmArn }
export function alarmArn<Partition extends ArnPartition = 'aws'>(
  parameters: AlarmArnParameters<Partition>,
) {
  return new AlarmArn<Partition>(parameters)
}

export interface DashboardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly nameDashboard: string
}
class DashboardArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dashboard',
  `arn:${string}:cloudwatch::${string}:dashboard/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dashboard' as const
  readonly partition: string
  readonly account: string
  readonly nameDashboard: string
  constructor(parameters: DashboardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameDashboard = parameters.nameDashboard
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch::${this.account}:dashboard/${this.nameDashboard}` as const
  }
}
export type { DashboardArn }
export function dashboardArn<Partition extends ArnPartition = 'aws'>(
  parameters: DashboardArnParameters<Partition>,
) {
  return new DashboardArn<Partition>(parameters)
}

export interface RuleInsightArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRuleInsight: string
}
class RuleInsightArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'insight-rule',
  `arn:${string}:cloudwatch:${string}:${string}:insight-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'insight-rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRuleInsight: string
  constructor(parameters: RuleInsightArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRuleInsight = parameters.nameRuleInsight
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:insight-rule/${this.nameRuleInsight}` as const
  }
}
export type { RuleInsightArn }
export function ruleInsightArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleInsightArnParameters<Partition>,
) {
  return new RuleInsightArn<Partition>(parameters)
}

export interface StreamMetricArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStreamMetric: string
}
class StreamMetricArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'metric-stream',
  `arn:${string}:cloudwatch:${string}:${string}:metric-stream/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'metric-stream' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStreamMetric: string
  constructor(parameters: StreamMetricArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameStreamMetric = parameters.nameStreamMetric
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:metric-stream/${this.nameStreamMetric}` as const
  }
}
export type { StreamMetricArn }
export function streamMetricArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamMetricArnParameters<Partition>,
) {
  return new StreamMetricArn<Partition>(parameters)
}

export interface SloArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSlo: string
}
class SloArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'slo',
  `arn:${string}:cloudwatch:${string}:${string}:slo/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'slo' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSlo: string
  constructor(parameters: SloArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSlo = parameters.nameSlo
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:slo/${this.nameSlo}` as const
  }
}
export type { SloArn }
export function sloArn<Partition extends ArnPartition = 'aws'>(
  parameters: SloArnParameters<Partition>,
) {
  return new SloArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameService: string
  readonly hexAttributesUnique: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'service',
  `arn:${string}:cloudwatch:${string}:${string}:service/${string}-${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameService: string
  readonly hexAttributesUnique: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameService = parameters.nameService
    this.hexAttributesUnique = parameters.hexAttributesUnique
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudwatch:${this.region}:${this.account}:service/${this.nameService}-${this.hexAttributesUnique}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

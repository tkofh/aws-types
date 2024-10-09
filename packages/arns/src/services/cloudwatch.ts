export interface AlarmArnParameters {
  partition?: string | undefined
  region: string
  account: string
  alarmName: string
}
export type AlarmArn = `arn:${string}:cloudwatch:${string}:${string}:alarm:${string}`
export function alarmArn(parameters: AlarmArnParameters): AlarmArn {
  return `arn:${parameters.partition ?? ''}:cloudwatch:${parameters.region}:${parameters.account}:alarm:${parameters.alarmName}`
}

export interface DashboardArnParameters {
  partition?: string | undefined
  account: string
  dashboardName: string
}
export type DashboardArn = `arn:${string}:cloudwatch::${string}:dashboard/${string}`
export function dashboardArn(parameters: DashboardArnParameters): DashboardArn {
  return `arn:${parameters.partition ?? ''}:cloudwatch::${parameters.account}:dashboard/${parameters.dashboardName}`
}

export interface InsightRuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  insightRuleName: string
}
export type InsightRuleArn = `arn:${string}:cloudwatch:${string}:${string}:insight-rule/${string}`
export function insightRuleArn(parameters: InsightRuleArnParameters): InsightRuleArn {
  return `arn:${parameters.partition ?? ''}:cloudwatch:${parameters.region}:${parameters.account}:insight-rule/${parameters.insightRuleName}`
}

export interface MetricStreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  metricStreamName: string
}
export type MetricStreamArn = `arn:${string}:cloudwatch:${string}:${string}:metric-stream/${string}`
export function metricStreamArn(parameters: MetricStreamArnParameters): MetricStreamArn {
  return `arn:${parameters.partition ?? ''}:cloudwatch:${parameters.region}:${parameters.account}:metric-stream/${parameters.metricStreamName}`
}

export interface SloArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sloName: string
}
export type SloArn = `arn:${string}:cloudwatch:${string}:${string}:slo/${string}`
export function sloArn(parameters: SloArnParameters): SloArn {
  return `arn:${parameters.partition ?? ''}:cloudwatch:${parameters.region}:${parameters.account}:slo/${parameters.sloName}`
}

export interface ServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceName: string
  uniqueAttributesHex: string
}
export type ServiceArn = `arn:${string}:cloudwatch:${string}:${string}:service/${string}-${string}`
export function serviceArn(parameters: ServiceArnParameters): ServiceArn {
  return `arn:${parameters.partition ?? ''}:cloudwatch:${parameters.region}:${parameters.account}:service/${parameters.serviceName}-${parameters.uniqueAttributesHex}`
}
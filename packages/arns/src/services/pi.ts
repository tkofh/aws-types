export interface MetricResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceType: string
  identifier: string
}
export type MetricResourceArn = `arn:${string}:pi:${string}:${string}:metrics/${string}/${string}`
export function metricResourceArn(parameters: MetricResourceArnParameters): MetricResourceArn {
  return `arn:${parameters.partition ?? ''}:pi:${parameters.region}:${parameters.account}:metrics/${parameters.serviceType}/${parameters.identifier}`
}

export interface PerfReportsResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceType: string
  identifier: string
  reportId: string
}
export type PerfReportsResourceArn = `arn:${string}:pi:${string}:${string}:perf-reports/${string}/${string}/${string}`
export function perfReportsResourceArn(parameters: PerfReportsResourceArnParameters): PerfReportsResourceArn {
  return `arn:${parameters.partition ?? ''}:pi:${parameters.region}:${parameters.account}:perf-reports/${parameters.serviceType}/${parameters.identifier}/${parameters.reportId}`
}
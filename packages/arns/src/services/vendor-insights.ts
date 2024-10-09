export interface DataSourceArnParameters {
  partition?: string | undefined
  resourceId: string
}
export type DataSourceArn = `arn:${string}:vendor-insights:::data-source:${string}`
export function dataSourceArn(parameters: DataSourceArnParameters): DataSourceArn {
  return `arn:${parameters.partition ?? ''}:vendor-insights:::data-source:${parameters.resourceId}`
}

export interface SecurityProfileArnParameters {
  partition?: string | undefined
  resourceId: string
}
export type SecurityProfileArn = `arn:${string}:vendor-insights:::security-profile:${string}`
export function securityProfileArn(parameters: SecurityProfileArnParameters): SecurityProfileArn {
  return `arn:${parameters.partition ?? ''}:vendor-insights:::security-profile:${parameters.resourceId}`
}
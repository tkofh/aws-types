export interface AssetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  assetId: string
}
export type AssetArn = `arn:${string}:iotsitewise:${string}:${string}:asset/${string}`
export function assetArn(parameters: AssetArnParameters): AssetArn {
  return `arn:${parameters.partition ?? ''}:iotsitewise:${parameters.region}:${parameters.account}:asset/${parameters.assetId}`
}

export interface AssetModelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  assetModelId: string
}
export type AssetModelArn = `arn:${string}:iotsitewise:${string}:${string}:asset-model/${string}`
export function assetModelArn(parameters: AssetModelArnParameters): AssetModelArn {
  return `arn:${parameters.partition ?? ''}:iotsitewise:${parameters.region}:${parameters.account}:asset-model/${parameters.assetModelId}`
}

export interface TimeSeriesArnParameters {
  partition?: string | undefined
  region: string
  account: string
  timeSeriesId: string
}
export type TimeSeriesArn = `arn:${string}:iotsitewise:${string}:${string}:time-series/${string}`
export function timeSeriesArn(parameters: TimeSeriesArnParameters): TimeSeriesArn {
  return `arn:${parameters.partition ?? ''}:iotsitewise:${parameters.region}:${parameters.account}:time-series/${parameters.timeSeriesId}`
}

export interface GatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  gatewayId: string
}
export type GatewayArn = `arn:${string}:iotsitewise:${string}:${string}:gateway/${string}`
export function gatewayArn(parameters: GatewayArnParameters): GatewayArn {
  return `arn:${parameters.partition ?? ''}:iotsitewise:${parameters.region}:${parameters.account}:gateway/${parameters.gatewayId}`
}

export interface PortalArnParameters {
  partition?: string | undefined
  region: string
  account: string
  portalId: string
}
export type PortalArn = `arn:${string}:iotsitewise:${string}:${string}:portal/${string}`
export function portalArn(parameters: PortalArnParameters): PortalArn {
  return `arn:${parameters.partition ?? ''}:iotsitewise:${parameters.region}:${parameters.account}:portal/${parameters.portalId}`
}

export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectId: string
}
export type ProjectArn = `arn:${string}:iotsitewise:${string}:${string}:project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:iotsitewise:${parameters.region}:${parameters.account}:project/${parameters.projectId}`
}

export interface DashboardArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dashboardId: string
}
export type DashboardArn = `arn:${string}:iotsitewise:${string}:${string}:dashboard/${string}`
export function dashboardArn(parameters: DashboardArnParameters): DashboardArn {
  return `arn:${parameters.partition ?? ''}:iotsitewise:${parameters.region}:${parameters.account}:dashboard/${parameters.dashboardId}`
}

export interface AccessPolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  accessPolicyId: string
}
export type AccessPolicyArn = `arn:${string}:iotsitewise:${string}:${string}:access-policy/${string}`
export function accessPolicyArn(parameters: AccessPolicyArnParameters): AccessPolicyArn {
  return `arn:${parameters.partition ?? ''}:iotsitewise:${parameters.region}:${parameters.account}:access-policy/${parameters.accessPolicyId}`
}
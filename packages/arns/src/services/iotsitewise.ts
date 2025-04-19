import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AssetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assetId: string
}
class AssetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'asset', `arn:${string}:iotsitewise:${string}:${string}:asset/${string}`> {
  readonly [ArnResourceTypeBrand] = 'asset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assetId: string
  constructor(parameters: AssetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.assetId = parameters.assetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:asset/${this.assetId}` as const
  }
}
export type { AssetArn }
export function assetArn<Partition extends ArnPartition = 'aws'>(parameters: AssetArnParameters<Partition>) {
  return new AssetArn<Partition>(parameters)
}

export interface AssetModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assetModelId: string
}
class AssetModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'asset-model', `arn:${string}:iotsitewise:${string}:${string}:asset-model/${string}`> {
  readonly [ArnResourceTypeBrand] = 'asset-model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly assetModelId: string
  constructor(parameters: AssetModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.assetModelId = parameters.assetModelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:asset-model/${this.assetModelId}` as const
  }
}
export type { AssetModelArn }
export function assetModelArn<Partition extends ArnPartition = 'aws'>(parameters: AssetModelArnParameters<Partition>) {
  return new AssetModelArn<Partition>(parameters)
}

export interface TimeSeriesArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly timeSeriesId: string
}
class TimeSeriesArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'time-series', `arn:${string}:iotsitewise:${string}:${string}:time-series/${string}`> {
  readonly [ArnResourceTypeBrand] = 'time-series' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly timeSeriesId: string
  constructor(parameters: TimeSeriesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.timeSeriesId = parameters.timeSeriesId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:time-series/${this.timeSeriesId}` as const
  }
}
export type { TimeSeriesArn }
export function timeSeriesArn<Partition extends ArnPartition = 'aws'>(parameters: TimeSeriesArnParameters<Partition>) {
  return new TimeSeriesArn<Partition>(parameters)
}

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'gateway', `arn:${string}:iotsitewise:${string}:${string}:gateway/${string}`> {
  readonly [ArnResourceTypeBrand] = 'gateway' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly gatewayId: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.gatewayId = parameters.gatewayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:gateway/${this.gatewayId}` as const
  }
}
export type { GatewayArn }
export function gatewayArn<Partition extends ArnPartition = 'aws'>(parameters: GatewayArnParameters<Partition>) {
  return new GatewayArn<Partition>(parameters)
}

export interface PortalArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly portalId: string
}
class PortalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'portal', `arn:${string}:iotsitewise:${string}:${string}:portal/${string}`> {
  readonly [ArnResourceTypeBrand] = 'portal' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly portalId: string
  constructor(parameters: PortalArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.portalId = parameters.portalId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:portal/${this.portalId}` as const
  }
}
export type { PortalArn }
export function portalArn<Partition extends ArnPartition = 'aws'>(parameters: PortalArnParameters<Partition>) {
  return new PortalArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectId: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'project', `arn:${string}:iotsitewise:${string}:${string}:project/${string}`> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly projectId: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.projectId = parameters.projectId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:project/${this.projectId}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(parameters: ProjectArnParameters<Partition>) {
  return new ProjectArn<Partition>(parameters)
}

export interface DashboardArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dashboardId: string
}
class DashboardArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dashboard', `arn:${string}:iotsitewise:${string}:${string}:dashboard/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dashboard' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dashboardId: string
  constructor(parameters: DashboardArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dashboardId = parameters.dashboardId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:dashboard/${this.dashboardId}` as const
  }
}
export type { DashboardArn }
export function dashboardArn<Partition extends ArnPartition = 'aws'>(parameters: DashboardArnParameters<Partition>) {
  return new DashboardArn<Partition>(parameters)
}

export interface AccessPolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPolicyId: string
}
class AccessPolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'access-policy', `arn:${string}:iotsitewise:${string}:${string}:access-policy/${string}`> {
  readonly [ArnResourceTypeBrand] = 'access-policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPolicyId: string
  constructor(parameters: AccessPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.accessPolicyId = parameters.accessPolicyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:access-policy/${this.accessPolicyId}` as const
  }
}
export type { AccessPolicyArn }
export function accessPolicyArn<Partition extends ArnPartition = 'aws'>(parameters: AccessPolicyArnParameters<Partition>) {
  return new AccessPolicyArn<Partition>(parameters)
}
import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AssetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAsset: string
}
class AssetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'asset',
  `arn:${string}:iotsitewise:${string}:${string}:asset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'asset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAsset: string
  constructor(parameters: AssetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAsset = parameters.idAsset
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:asset/${this.idAsset}` as const
  }
}
export type { AssetArn }
export function assetArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssetArnParameters<Partition>,
) {
  return new AssetArn<Partition>(parameters)
}

export interface ModelAssetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idModelAsset: string
}
class ModelAssetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'asset-model',
  `arn:${string}:iotsitewise:${string}:${string}:asset-model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'asset-model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idModelAsset: string
  constructor(parameters: ModelAssetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idModelAsset = parameters.idModelAsset
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:asset-model/${this.idModelAsset}` as const
  }
}
export type { ModelAssetArn }
export function modelAssetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelAssetArnParameters<Partition>,
) {
  return new ModelAssetArn<Partition>(parameters)
}

export interface SeriesTimeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSeriesTime: string
}
class SeriesTimeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'time-series',
  `arn:${string}:iotsitewise:${string}:${string}:time-series/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'time-series' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSeriesTime: string
  constructor(parameters: SeriesTimeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSeriesTime = parameters.idSeriesTime
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:time-series/${this.idSeriesTime}` as const
  }
}
export type { SeriesTimeArn }
export function seriesTimeArn<Partition extends ArnPartition = 'aws'>(
  parameters: SeriesTimeArnParameters<Partition>,
) {
  return new SeriesTimeArn<Partition>(parameters)
}

export interface GatewayArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
}
class GatewayArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'gateway',
  `arn:${string}:iotsitewise:${string}:${string}:gateway/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'gateway' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGateway: string
  constructor(parameters: GatewayArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGateway = parameters.idGateway
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:gateway/${this.idGateway}` as const
  }
}
export type { GatewayArn }
export function gatewayArn<Partition extends ArnPartition = 'aws'>(
  parameters: GatewayArnParameters<Partition>,
) {
  return new GatewayArn<Partition>(parameters)
}

export interface PortalArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPortal: string
}
class PortalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'portal',
  `arn:${string}:iotsitewise:${string}:${string}:portal/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'portal' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPortal: string
  constructor(parameters: PortalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPortal = parameters.idPortal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:portal/${this.idPortal}` as const
  }
}
export type { PortalArn }
export function portalArn<Partition extends ArnPartition = 'aws'>(
  parameters: PortalArnParameters<Partition>,
) {
  return new PortalArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProject: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:iotsitewise:${string}:${string}:project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProject: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProject = parameters.idProject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:project/${this.idProject}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}

export interface DashboardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDashboard: string
}
class DashboardArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dashboard',
  `arn:${string}:iotsitewise:${string}:${string}:dashboard/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dashboard' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDashboard: string
  constructor(parameters: DashboardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDashboard = parameters.idDashboard
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:dashboard/${this.idDashboard}` as const
  }
}
export type { DashboardArn }
export function dashboardArn<Partition extends ArnPartition = 'aws'>(
  parameters: DashboardArnParameters<Partition>,
) {
  return new DashboardArn<Partition>(parameters)
}

export interface PolicyAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyAccess: string
}
class PolicyAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-policy',
  `arn:${string}:iotsitewise:${string}:${string}:access-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-policy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyAccess: string
  constructor(parameters: PolicyAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPolicyAccess = parameters.idPolicyAccess
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iotsitewise:${this.region}:${this.account}:access-policy/${this.idPolicyAccess}` as const
  }
}
export type { PolicyAccessArn }
export function policyAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyAccessArnParameters<Partition>,
) {
  return new PolicyAccessArn<Partition>(parameters)
}

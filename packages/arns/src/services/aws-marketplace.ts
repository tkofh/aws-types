import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SellerDashboardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly catalog: string
  readonly factTable: string
  readonly dashboardName: string
}
class SellerDashboardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SellerDashboard',
  `arn:${string}:aws-marketplace::${string}:${string}/ReportingData/${string}/Dashboard/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SellerDashboard' as const
  readonly partition: Partition
  readonly account: string
  readonly catalog: string
  readonly factTable: string
  readonly dashboardName: string
  constructor(parameters: SellerDashboardArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.catalog = parameters.catalog
    this.factTable = parameters.factTable
    this.dashboardName = parameters.dashboardName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aws-marketplace::${this.account}:${this.catalog}/ReportingData/${this.factTable}/Dashboard/${this.dashboardName}` as const
  }
}
export type { SellerDashboardArn }
export function sellerDashboardArn<Partition extends ArnPartition = 'aws'>(
  parameters: SellerDashboardArnParameters<Partition>,
) {
  return new SellerDashboardArn<Partition>(parameters)
}

export interface DeploymentParameterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly catalogName: string
  readonly productId: string
  readonly resourceId: string
}
class DeploymentParameterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DeploymentParameter',
  `arn:${string}:aws-marketplace:${string}:${string}:DeploymentParameter:catalogs/${string}/products/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DeploymentParameter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly catalogName: string
  readonly productId: string
  readonly resourceId: string
  constructor(parameters: DeploymentParameterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.catalogName = parameters.catalogName
    this.productId = parameters.productId
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aws-marketplace:${this.region}:${this.account}:DeploymentParameter:catalogs/${this.catalogName}/products/${this.productId}/${this.resourceId}` as const
  }
}
export type { DeploymentParameterArn }
export function deploymentParameterArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentParameterArnParameters<Partition>,
) {
  return new DeploymentParameterArn<Partition>(parameters)
}

export interface EntityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly catalog: string
  readonly entityType: string
  readonly resourceId: string
}
class EntityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Entity',
  `arn:${string}:aws-marketplace:${string}:${string}:${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Entity' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly catalog: string
  readonly entityType: string
  readonly resourceId: string
  constructor(parameters: EntityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.catalog = parameters.catalog
    this.entityType = parameters.entityType
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aws-marketplace:${this.region}:${this.account}:${this.catalog}/${this.entityType}/${this.resourceId}` as const
  }
}
export type { EntityArn }
export function entityArn<Partition extends ArnPartition = 'aws'>(
  parameters: EntityArnParameters<Partition>,
) {
  return new EntityArn<Partition>(parameters)
}

export interface ChangeSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly catalog: string
  readonly resourceId: string
}
class ChangeSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ChangeSet',
  `arn:${string}:aws-marketplace:${string}:${string}:${string}/ChangeSet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ChangeSet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly catalog: string
  readonly resourceId: string
  constructor(parameters: ChangeSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.catalog = parameters.catalog
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aws-marketplace:${this.region}:${this.account}:${this.catalog}/ChangeSet/${this.resourceId}` as const
  }
}
export type { ChangeSetArn }
export function changeSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChangeSetArnParameters<Partition>,
) {
  return new ChangeSetArn<Partition>(parameters)
}

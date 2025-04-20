import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DashboardSellerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly catalog: string
  readonly tableFact: string
  readonly nameDashboard: string
}
class DashboardSellerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'SellerDashboard',
  `arn:${string}:aws-marketplace::${string}:${string}/ReportingData/${string}/Dashboard/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'SellerDashboard' as const
  readonly partition: string
  readonly account: string
  readonly catalog: string
  readonly tableFact: string
  readonly nameDashboard: string
  constructor(parameters: DashboardSellerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.catalog = parameters.catalog
    this.tableFact = parameters.tableFact
    this.nameDashboard = parameters.nameDashboard
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aws-marketplace::${this.account}:${this.catalog}/ReportingData/${this.tableFact}/Dashboard/${this.nameDashboard}` as const
  }
}
export type { DashboardSellerArn }
export function dashboardSellerArn<Partition extends ArnPartition = 'aws'>(
  parameters: DashboardSellerArnParameters<Partition>,
) {
  return new DashboardSellerArn<Partition>(parameters)
}

export interface ParameterDeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCatalog: string
  readonly idProduct: string
  readonly idResource: string
}
class ParameterDeploymentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DeploymentParameter',
  `arn:${string}:aws-marketplace:${string}:${string}:DeploymentParameter:catalogs/${string}/products/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'DeploymentParameter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCatalog: string
  readonly idProduct: string
  readonly idResource: string
  constructor(parameters: ParameterDeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCatalog = parameters.nameCatalog
    this.idProduct = parameters.idProduct
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aws-marketplace:${this.region}:${this.account}:DeploymentParameter:catalogs/${this.nameCatalog}/products/${this.idProduct}/${this.idResource}` as const
  }
}
export type { ParameterDeploymentArn }
export function parameterDeploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ParameterDeploymentArnParameters<Partition>,
) {
  return new ParameterDeploymentArn<Partition>(parameters)
}

export interface EntityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly catalog: string
  readonly typeEntity: string
  readonly idResource: string
}
class EntityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Entity',
  `arn:${string}:aws-marketplace:${string}:${string}:${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Entity' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly catalog: string
  readonly typeEntity: string
  readonly idResource: string
  constructor(parameters: EntityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.catalog = parameters.catalog
    this.typeEntity = parameters.typeEntity
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aws-marketplace:${this.region}:${this.account}:${this.catalog}/${this.typeEntity}/${this.idResource}` as const
  }
}
export type { EntityArn }
export function entityArn<Partition extends ArnPartition = 'aws'>(
  parameters: EntityArnParameters<Partition>,
) {
  return new EntityArn<Partition>(parameters)
}

export interface SetChangeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly catalog: string
  readonly idResource: string
}
class SetChangeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ChangeSet',
  `arn:${string}:aws-marketplace:${string}:${string}:${string}/ChangeSet/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ChangeSet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly catalog: string
  readonly idResource: string
  constructor(parameters: SetChangeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.catalog = parameters.catalog
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aws-marketplace:${this.region}:${this.account}:${this.catalog}/ChangeSet/${this.idResource}` as const
  }
}
export type { SetChangeArn }
export function setChangeArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetChangeArnParameters<Partition>,
) {
  return new SetChangeArn<Partition>(parameters)
}

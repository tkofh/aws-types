export interface SellerDashboardArnParameters {
  partition?: string | undefined
  account: string
  catalog: string
  factTable: string
  dashboardName: string
}
export type SellerDashboardArn = `arn:${string}:aws-marketplace::${string}:${string}/ReportingData/${string}/Dashboard/${string}`
export function sellerDashboardArn(parameters: SellerDashboardArnParameters): SellerDashboardArn {
  return `arn:${parameters.partition ?? ''}:aws-marketplace::${parameters.account}:${parameters.catalog}/ReportingData/${parameters.factTable}/Dashboard/${parameters.dashboardName}`
}

export interface DeploymentParameterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  catalogName: string
  productId: string
  resourceId: string
}
export type DeploymentParameterArn = `arn:${string}:aws-marketplace:${string}:${string}:DeploymentParameter:catalogs/${string}/products/${string}/${string}`
export function deploymentParameterArn(parameters: DeploymentParameterArnParameters): DeploymentParameterArn {
  return `arn:${parameters.partition ?? ''}:aws-marketplace:${parameters.region}:${parameters.account}:DeploymentParameter:catalogs/${parameters.catalogName}/products/${parameters.productId}/${parameters.resourceId}`
}

export interface EntityArnParameters {
  partition?: string | undefined
  region: string
  account: string
  catalog: string
  entityType: string
  resourceId: string
}
export type EntityArn = `arn:${string}:aws-marketplace:${string}:${string}:${string}/${string}/${string}`
export function entityArn(parameters: EntityArnParameters): EntityArn {
  return `arn:${parameters.partition ?? ''}:aws-marketplace:${parameters.region}:${parameters.account}:${parameters.catalog}/${parameters.entityType}/${parameters.resourceId}`
}

export interface ChangeSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  catalog: string
  resourceId: string
}
export type ChangeSetArn = `arn:${string}:aws-marketplace:${string}:${string}:${string}/ChangeSet/${string}`
export function changeSetArn(parameters: ChangeSetArnParameters): ChangeSetArn {
  return `arn:${parameters.partition ?? ''}:aws-marketplace:${parameters.region}:${parameters.account}:${parameters.catalog}/ChangeSet/${parameters.resourceId}`
}
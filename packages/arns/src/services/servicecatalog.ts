export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:servicecatalog:${string}:${string}:/applications/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:servicecatalog:${parameters.region}:${parameters.account}:/applications/${parameters.applicationId}`
}

export interface AttributeGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  attributeGroupId: string
}
export type AttributeGroupArn = `arn:${string}:servicecatalog:${string}:${string}:/attribute-groups/${string}`
export function attributeGroupArn(parameters: AttributeGroupArnParameters): AttributeGroupArn {
  return `arn:${parameters.partition ?? ''}:servicecatalog:${parameters.region}:${parameters.account}:/attribute-groups/${parameters.attributeGroupId}`
}

export interface PortfolioArnParameters {
  partition?: string | undefined
  region: string
  account: string
  portfolioId: string
}
export type PortfolioArn = `arn:${string}:catalog:${string}:${string}:portfolio/${string}`
export function portfolioArn(parameters: PortfolioArnParameters): PortfolioArn {
  return `arn:${parameters.partition ?? ''}:catalog:${parameters.region}:${parameters.account}:portfolio/${parameters.portfolioId}`
}

export interface ProductArnParameters {
  partition?: string | undefined
  region: string
  account: string
  productId: string
}
export type ProductArn = `arn:${string}:catalog:${string}:${string}:product/${string}`
export function productArn(parameters: ProductArnParameters): ProductArn {
  return `arn:${parameters.partition ?? ''}:catalog:${parameters.region}:${parameters.account}:product/${parameters.productId}`
}
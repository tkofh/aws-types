import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Application',
  `arn:${string}:servicecatalog:${string}:${string}:/applications/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicecatalog:${this.region}:${this.account}:/applications/${this.applicationId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface AttributeGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly attributeGroupId: string
}
class AttributeGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AttributeGroup',
  `arn:${string}:servicecatalog:${string}:${string}:/attribute-groups/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AttributeGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly attributeGroupId: string
  constructor(parameters: AttributeGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.attributeGroupId = parameters.attributeGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicecatalog:${this.region}:${this.account}:/attribute-groups/${this.attributeGroupId}` as const
  }
}
export type { AttributeGroupArn }
export function attributeGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttributeGroupArnParameters<Partition>,
) {
  return new AttributeGroupArn<Partition>(parameters)
}

export interface PortfolioArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly portfolioId: string
}
class PortfolioArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Portfolio',
  `arn:${string}:catalog:${string}:${string}:portfolio/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Portfolio' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly portfolioId: string
  constructor(parameters: PortfolioArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.portfolioId = parameters.portfolioId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:catalog:${this.region}:${this.account}:portfolio/${this.portfolioId}` as const
  }
}
export type { PortfolioArn }
export function portfolioArn<Partition extends ArnPartition = 'aws'>(
  parameters: PortfolioArnParameters<Partition>,
) {
  return new PortfolioArn<Partition>(parameters)
}

export interface ProductArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly productId: string
}
class ProductArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Product',
  `arn:${string}:catalog:${string}:${string}:product/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Product' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly productId: string
  constructor(parameters: ProductArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.productId = parameters.productId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:catalog:${this.region}:${this.account}:product/${this.productId}` as const
  }
}
export type { ProductArn }
export function productArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProductArnParameters<Partition>,
) {
  return new ProductArn<Partition>(parameters)
}

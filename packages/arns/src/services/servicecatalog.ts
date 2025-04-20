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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Application',
  `arn:${string}:servicecatalog:${string}:${string}:/applications/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicecatalog:${this.region}:${this.account}:/applications/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface GroupAttributeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupAttribute: string
}
class GroupAttributeArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AttributeGroup',
  `arn:${string}:servicecatalog:${string}:${string}:/attribute-groups/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AttributeGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupAttribute: string
  constructor(parameters: GroupAttributeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupAttribute = parameters.idGroupAttribute
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicecatalog:${this.region}:${this.account}:/attribute-groups/${this.idGroupAttribute}` as const
  }
}
export type { GroupAttributeArn }
export function groupAttributeArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupAttributeArnParameters<Partition>,
) {
  return new GroupAttributeArn<Partition>(parameters)
}

export interface PortfolioArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPortfolio: string
}
class PortfolioArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Portfolio',
  `arn:${string}:catalog:${string}:${string}:portfolio/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Portfolio' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPortfolio: string
  constructor(parameters: PortfolioArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPortfolio = parameters.idPortfolio
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:catalog:${this.region}:${this.account}:portfolio/${this.idPortfolio}` as const
  }
}
export type { PortfolioArn }
export function portfolioArn<Partition extends ArnPartition = 'aws'>(
  parameters: PortfolioArnParameters<Partition>,
) {
  return new PortfolioArn<Partition>(parameters)
}

export interface ProductArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProduct: string
}
class ProductArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Product',
  `arn:${string}:catalog:${string}:${string}:product/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Product' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProduct: string
  constructor(parameters: ProductArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProduct = parameters.idProduct
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:catalog:${this.region}:${this.account}:product/${this.idProduct}` as const
  }
}
export type { ProductArn }
export function productArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProductArnParameters<Partition>,
) {
  return new ProductArn<Partition>(parameters)
}

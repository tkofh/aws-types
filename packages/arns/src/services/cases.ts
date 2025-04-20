import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idCase: string
}
class CaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Case',
  `arn:${string}:cases:${string}:${string}:domain/${string}/case/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Case' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idCase: string
  constructor(parameters: CaseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
    this.idCase = parameters.idCase
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.idDomain}/case/${this.idCase}` as const
  }
}
export type { CaseArn }
export function caseArn<Partition extends ArnPartition = 'aws'>(
  parameters: CaseArnParameters<Partition>,
) {
  return new CaseArn<Partition>(parameters)
}

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Domain',
  `arn:${string}:cases:${string}:${string}:domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Domain' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.idDomain}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface FieldArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idField: string
}
class FieldArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Field',
  `arn:${string}:cases:${string}:${string}:domain/${string}/field/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Field' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idField: string
  constructor(parameters: FieldArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
    this.idField = parameters.idField
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.idDomain}/field/${this.idField}` as const
  }
}
export type { FieldArn }
export function fieldArn<Partition extends ArnPartition = 'aws'>(
  parameters: FieldArnParameters<Partition>,
) {
  return new FieldArn<Partition>(parameters)
}

export interface LayoutArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idLayout: string
}
class LayoutArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Layout',
  `arn:${string}:cases:${string}:${string}:domain/${string}/layout/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Layout' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idLayout: string
  constructor(parameters: LayoutArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
    this.idLayout = parameters.idLayout
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.idDomain}/layout/${this.idLayout}` as const
  }
}
export type { LayoutArn }
export function layoutArn<Partition extends ArnPartition = 'aws'>(
  parameters: LayoutArnParameters<Partition>,
) {
  return new LayoutArn<Partition>(parameters)
}

export interface ItemRelatedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idCase: string
  readonly idItemRelated: string
}
class ItemRelatedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RelatedItem',
  `arn:${string}:cases:${string}:${string}:domain/${string}/case/${string}/related-item/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RelatedItem' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idCase: string
  readonly idItemRelated: string
  constructor(parameters: ItemRelatedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
    this.idCase = parameters.idCase
    this.idItemRelated = parameters.idItemRelated
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.idDomain}/case/${this.idCase}/related-item/${this.idItemRelated}` as const
  }
}
export type { ItemRelatedArn }
export function itemRelatedArn<Partition extends ArnPartition = 'aws'>(
  parameters: ItemRelatedArnParameters<Partition>,
) {
  return new ItemRelatedArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idTemplate: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Template',
  `arn:${string}:cases:${string}:${string}:domain/${string}/template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDomain: string
  readonly idTemplate: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDomain = parameters.idDomain
    this.idTemplate = parameters.idTemplate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.idDomain}/template/${this.idTemplate}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateArnParameters<Partition>,
) {
  return new TemplateArn<Partition>(parameters)
}

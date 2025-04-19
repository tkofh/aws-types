import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface CaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly caseId: string
}
class CaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Case', `arn:${string}:cases:${string}:${string}:domain/${string}/case/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Case' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly caseId: string
  constructor(parameters: CaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
    this.caseId = parameters.caseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.domainId}/case/${this.caseId}` as const
  }
}
export type { CaseArn }
export function caseArn<Partition extends ArnPartition = 'aws'>(parameters: CaseArnParameters<Partition>) {
  return new CaseArn<Partition>(parameters)
}

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Domain', `arn:${string}:cases:${string}:${string}:domain/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Domain' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.domainId}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(parameters: DomainArnParameters<Partition>) {
  return new DomainArn<Partition>(parameters)
}

export interface FieldArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly fieldId: string
}
class FieldArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Field', `arn:${string}:cases:${string}:${string}:domain/${string}/field/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Field' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly fieldId: string
  constructor(parameters: FieldArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
    this.fieldId = parameters.fieldId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.domainId}/field/${this.fieldId}` as const
  }
}
export type { FieldArn }
export function fieldArn<Partition extends ArnPartition = 'aws'>(parameters: FieldArnParameters<Partition>) {
  return new FieldArn<Partition>(parameters)
}

export interface LayoutArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly layoutId: string
}
class LayoutArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Layout', `arn:${string}:cases:${string}:${string}:domain/${string}/layout/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Layout' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly layoutId: string
  constructor(parameters: LayoutArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
    this.layoutId = parameters.layoutId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.domainId}/layout/${this.layoutId}` as const
  }
}
export type { LayoutArn }
export function layoutArn<Partition extends ArnPartition = 'aws'>(parameters: LayoutArnParameters<Partition>) {
  return new LayoutArn<Partition>(parameters)
}

export interface RelatedItemArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly caseId: string
  readonly relatedItemId: string
}
class RelatedItemArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'RelatedItem', `arn:${string}:cases:${string}:${string}:domain/${string}/case/${string}/related-item/${string}`> {
  readonly [ArnResourceTypeBrand] = 'RelatedItem' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly caseId: string
  readonly relatedItemId: string
  constructor(parameters: RelatedItemArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
    this.caseId = parameters.caseId
    this.relatedItemId = parameters.relatedItemId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.domainId}/case/${this.caseId}/related-item/${this.relatedItemId}` as const
  }
}
export type { RelatedItemArn }
export function relatedItemArn<Partition extends ArnPartition = 'aws'>(parameters: RelatedItemArnParameters<Partition>) {
  return new RelatedItemArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly templateId: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Template', `arn:${string}:cases:${string}:${string}:domain/${string}/template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  readonly templateId: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
    this.templateId = parameters.templateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cases:${this.region}:${this.account}:domain/${this.domainId}/template/${this.templateId}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(parameters: TemplateArnParameters<Partition>) {
  return new TemplateArn<Partition>(parameters)
}
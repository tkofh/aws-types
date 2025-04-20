import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AllowListArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class AllowListArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'AllowList',
  `arn:${string}:macie2:${string}:${string}:allow-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AllowList' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: AllowListArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:allow-list/${this.resourceId}` as const
  }
}
export type { AllowListArn }
export function allowListArn<Partition extends ArnPartition = 'aws'>(
  parameters: AllowListArnParameters<Partition>,
) {
  return new AllowListArn<Partition>(parameters)
}

export interface ClassificationJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ClassificationJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ClassificationJob',
  `arn:${string}:macie2:${string}:${string}:classification-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ClassificationJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ClassificationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:classification-job/${this.resourceId}` as const
  }
}
export type { ClassificationJobArn }
export function classificationJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClassificationJobArnParameters<Partition>,
) {
  return new ClassificationJobArn<Partition>(parameters)
}

export interface CustomDataIdentifierArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class CustomDataIdentifierArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'CustomDataIdentifier',
  `arn:${string}:macie2:${string}:${string}:custom-data-identifier/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'CustomDataIdentifier' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CustomDataIdentifierArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:custom-data-identifier/${this.resourceId}` as const
  }
}
export type { CustomDataIdentifierArn }
export function customDataIdentifierArn<Partition extends ArnPartition = 'aws'>(
  parameters: CustomDataIdentifierArnParameters<Partition>,
) {
  return new CustomDataIdentifierArn<Partition>(parameters)
}

export interface FindingsFilterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class FindingsFilterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'FindingsFilter',
  `arn:${string}:macie2:${string}:${string}:findings-filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'FindingsFilter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: FindingsFilterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:findings-filter/${this.resourceId}` as const
  }
}
export type { FindingsFilterArn }
export function findingsFilterArn<Partition extends ArnPartition = 'aws'>(
  parameters: FindingsFilterArnParameters<Partition>,
) {
  return new FindingsFilterArn<Partition>(parameters)
}

export interface MemberArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class MemberArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Member',
  `arn:${string}:macie2:${string}:${string}:member/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Member' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: MemberArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:member/${this.resourceId}` as const
  }
}
export type { MemberArn }
export function memberArn<Partition extends ArnPartition = 'aws'>(
  parameters: MemberArnParameters<Partition>,
) {
  return new MemberArn<Partition>(parameters)
}

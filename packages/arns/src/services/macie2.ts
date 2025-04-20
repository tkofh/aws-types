import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ListAllowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ListAllowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'AllowList',
  `arn:${string}:macie2:${string}:${string}:allow-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AllowList' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ListAllowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:allow-list/${this.idResource}` as const
  }
}
export type { ListAllowArn }
export function listAllowArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListAllowArnParameters<Partition>,
) {
  return new ListAllowArn<Partition>(parameters)
}

export interface JobClassificationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class JobClassificationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ClassificationJob',
  `arn:${string}:macie2:${string}:${string}:classification-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ClassificationJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: JobClassificationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:classification-job/${this.idResource}` as const
  }
}
export type { JobClassificationArn }
export function jobClassificationArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobClassificationArnParameters<Partition>,
) {
  return new JobClassificationArn<Partition>(parameters)
}

export interface IdentifierDataCustomArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class IdentifierDataCustomArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'CustomDataIdentifier',
  `arn:${string}:macie2:${string}:${string}:custom-data-identifier/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'CustomDataIdentifier' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: IdentifierDataCustomArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:custom-data-identifier/${this.idResource}` as const
  }
}
export type { IdentifierDataCustomArn }
export function identifierDataCustomArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentifierDataCustomArnParameters<Partition>,
) {
  return new IdentifierDataCustomArn<Partition>(parameters)
}

export interface FilterFindingsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class FilterFindingsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'FindingsFilter',
  `arn:${string}:macie2:${string}:${string}:findings-filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'FindingsFilter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: FilterFindingsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:findings-filter/${this.idResource}` as const
  }
}
export type { FilterFindingsArn }
export function filterFindingsArn<Partition extends ArnPartition = 'aws'>(
  parameters: FilterFindingsArnParameters<Partition>,
) {
  return new FilterFindingsArn<Partition>(parameters)
}

export interface MemberArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class MemberArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Member',
  `arn:${string}:macie2:${string}:${string}:member/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Member' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: MemberArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:macie2:${this.region}:${this.account}:member/${this.idResource}` as const
  }
}
export type { MemberArn }
export function memberArn<Partition extends ArnPartition = 'aws'>(
  parameters: MemberArnParameters<Partition>,
) {
  return new MemberArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface FilterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ownerId: string
  readonly filterId: string
}
class FilterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Filter', `arn:${string}:inspector2:${string}:${string}:owner/${string}/filter/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Filter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ownerId: string
  readonly filterId: string
  constructor(parameters: FilterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ownerId = parameters.ownerId
    this.filterId = parameters.filterId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:inspector2:${this.region}:${this.account}:owner/${this.ownerId}/filter/${this.filterId}` as const
  }
}
export type { FilterArn }
export function filterArn<Partition extends ArnPartition = 'aws'>(parameters: FilterArnParameters<Partition>) {
  return new FilterArn<Partition>(parameters)
}

export interface FindingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly findingId: string
}
class FindingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Finding', `arn:${string}:inspector2:${string}:${string}:finding/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Finding' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly findingId: string
  constructor(parameters: FindingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.findingId = parameters.findingId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:inspector2:${this.region}:${this.account}:finding/${this.findingId}` as const
  }
}
export type { FindingArn }
export function findingArn<Partition extends ArnPartition = 'aws'>(parameters: FindingArnParameters<Partition>) {
  return new FindingArn<Partition>(parameters)
}

export interface CisScanConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ownerId: string
  readonly cisScanConfigurationId: string
}
class CisScanConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'CIS Scan Configuration', `arn:${string}:inspector2:${string}:${string}:owner/${string}/cis-configuration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'CIS Scan Configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ownerId: string
  readonly cisScanConfigurationId: string
  constructor(parameters: CisScanConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ownerId = parameters.ownerId
    this.cisScanConfigurationId = parameters.cisScanConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:inspector2:${this.region}:${this.account}:owner/${this.ownerId}/cis-configuration/${this.cisScanConfigurationId}` as const
  }
}
export type { CisScanConfigurationArn }
export function cisScanConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: CisScanConfigurationArnParameters<Partition>) {
  return new CisScanConfigurationArn<Partition>(parameters)
}
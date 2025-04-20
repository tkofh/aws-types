import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface FilterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOwner: string
  readonly idFilter: string
}
class FilterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Filter',
  `arn:${string}:inspector2:${string}:${string}:owner/${string}/filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Filter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOwner: string
  readonly idFilter: string
  constructor(parameters: FilterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOwner = parameters.idOwner
    this.idFilter = parameters.idFilter
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:inspector2:${this.region}:${this.account}:owner/${this.idOwner}/filter/${this.idFilter}` as const
  }
}
export type { FilterArn }
export function filterArn<Partition extends ArnPartition = 'aws'>(
  parameters: FilterArnParameters<Partition>,
) {
  return new FilterArn<Partition>(parameters)
}

export interface FindingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFinding: string
}
class FindingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Finding',
  `arn:${string}:inspector2:${string}:${string}:finding/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Finding' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idFinding: string
  constructor(parameters: FindingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idFinding = parameters.idFinding
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:inspector2:${this.region}:${this.account}:finding/${this.idFinding}` as const
  }
}
export type { FindingArn }
export function findingArn<Partition extends ArnPartition = 'aws'>(
  parameters: FindingArnParameters<Partition>,
) {
  return new FindingArn<Partition>(parameters)
}

export interface ConfigurationScanCisArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOwner: string
  readonly idConfigurationScanCis: string
}
class ConfigurationScanCisArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'CIS Scan Configuration',
  `arn:${string}:inspector2:${string}:${string}:owner/${string}/cis-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'CIS Scan Configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOwner: string
  readonly idConfigurationScanCis: string
  constructor(parameters: ConfigurationScanCisArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOwner = parameters.idOwner
    this.idConfigurationScanCis = parameters.idConfigurationScanCis
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:inspector2:${this.region}:${this.account}:owner/${this.idOwner}/cis-configuration/${this.idConfigurationScanCis}` as const
  }
}
export type { ConfigurationScanCisArn }
export function configurationScanCisArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationScanCisArnParameters<Partition>,
) {
  return new ConfigurationScanCisArn<Partition>(parameters)
}

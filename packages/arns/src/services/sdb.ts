import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domain',
  `arn:${string}:sdb:${string}:${string}:domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sdb:${this.region}:${this.account}:domain/${this.nameDomain}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

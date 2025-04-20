import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface OutpostArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
}
class OutpostArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'outpost',
  `arn:${string}:outposts:${string}:${string}:outpost/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'outpost' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idOutpost: string
  constructor(parameters: OutpostArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idOutpost = parameters.idOutpost
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:outposts:${this.region}:${this.account}:outpost/${this.idOutpost}` as const
  }
}
export type { OutpostArn }
export function outpostArn<Partition extends ArnPartition = 'aws'>(
  parameters: OutpostArnParameters<Partition>,
) {
  return new OutpostArn<Partition>(parameters)
}

export interface SiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSite: string
}
class SiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'site',
  `arn:${string}:outposts:${string}:${string}:site/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'site' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSite: string
  constructor(parameters: SiteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSite = parameters.idSite
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:outposts:${this.region}:${this.account}:site/${this.idSite}` as const
  }
}
export type { SiteArn }
export function siteArn<Partition extends ArnPartition = 'aws'>(
  parameters: SiteArnParameters<Partition>,
) {
  return new SiteArn<Partition>(parameters)
}

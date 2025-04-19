import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface OutpostArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
}
class OutpostArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'outpost', `arn:${string}:outposts:${string}:${string}:outpost/${string}`> {
  readonly [ArnResourceTypeBrand] = 'outpost' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly outpostId: string
  constructor(parameters: OutpostArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.outpostId = parameters.outpostId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:outposts:${this.region}:${this.account}:outpost/${this.outpostId}` as const
  }
}
export type { OutpostArn }
export function outpostArn<Partition extends ArnPartition = 'aws'>(parameters: OutpostArnParameters<Partition>) {
  return new OutpostArn<Partition>(parameters)
}

export interface SiteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly siteId: string
}
class SiteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'site', `arn:${string}:outposts:${string}:${string}:site/${string}`> {
  readonly [ArnResourceTypeBrand] = 'site' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly siteId: string
  constructor(parameters: SiteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.siteId = parameters.siteId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:outposts:${this.region}:${this.account}:site/${this.siteId}` as const
  }
}
export type { SiteArn }
export function siteArn<Partition extends ArnPartition = 'aws'>(parameters: SiteArnParameters<Partition>) {
  return new SiteArn<Partition>(parameters)
}
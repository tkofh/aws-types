import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CollectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCollection: string
}
class CollectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Collection',
  `arn:${string}:aoss:${string}:${string}:collection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Collection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCollection: string
  constructor(parameters: CollectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCollection = parameters.idCollection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aoss:${this.region}:${this.account}:collection/${this.idCollection}` as const
  }
}
export type { CollectionArn }
export function collectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: CollectionArnParameters<Partition>,
) {
  return new CollectionArn<Partition>(parameters)
}

export interface DashboardsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class DashboardsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Dashboards',
  `arn:${string}:aoss:${string}:${string}:dashboards/default`
> {
  readonly [ArnResourceTypeBrand] = 'Dashboards' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: DashboardsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:aoss:${this.region}:${this.account}:dashboards/default` as const
  }
}
export type { DashboardsArn }
export function dashboardsArn<Partition extends ArnPartition = 'aws'>(
  parameters: DashboardsArnParameters<Partition>,
) {
  return new DashboardsArn<Partition>(parameters)
}

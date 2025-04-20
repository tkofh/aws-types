import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ViewArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly viewName: string
  readonly viewUuId: string
}
class ViewArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'view',
  `arn:${string}:resource-explorer-2:${string}:${string}:view/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'view' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly viewName: string
  readonly viewUuId: string
  constructor(parameters: ViewArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.viewName = parameters.viewName
    this.viewUuId = parameters.viewUuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-explorer-2:${this.region}:${this.account}:view/${this.viewName}/${this.viewUuId}` as const
  }
}
export type { ViewArn }
export function viewArn<Partition extends ArnPartition = 'aws'>(
  parameters: ViewArnParameters<Partition>,
) {
  return new ViewArn<Partition>(parameters)
}

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexUuId: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'index',
  `arn:${string}:resource-explorer-2:${string}:${string}:index/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexUuId: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexUuId = parameters.indexUuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-explorer-2:${this.region}:${this.account}:index/${this.indexUuId}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(
  parameters: IndexArnParameters<Partition>,
) {
  return new IndexArn<Partition>(parameters)
}

import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ViewArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly viewName: string
  readonly viewUuid: string
}
class ViewArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'view', `arn:${string}:resource-explorer-2:${string}:${string}:view/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'view' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly viewName: string
  readonly viewUuid: string
  constructor(parameters: ViewArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.viewName = parameters.viewName
    this.viewUuid = parameters.viewUuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-explorer-2:${this.region}:${this.account}:view/${this.viewName}/${this.viewUuid}` as const
  }
}
export type { ViewArn }
export function viewArn<Partition extends ArnPartition = 'aws'>(parameters: ViewArnParameters<Partition>) {
  return new ViewArn<Partition>(parameters)
}

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexUuid: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'index', `arn:${string}:resource-explorer-2:${string}:${string}:index/${string}`> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexUuid: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexUuid = parameters.indexUuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-explorer-2:${this.region}:${this.account}:index/${this.indexUuid}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(parameters: IndexArnParameters<Partition>) {
  return new IndexArn<Partition>(parameters)
}
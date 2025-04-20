import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ViewArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameView: string
  readonly idUuView: string
}
class ViewArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'view',
  `arn:${string}:resource-explorer-2:${string}:${string}:view/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'view' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameView: string
  readonly idUuView: string
  constructor(parameters: ViewArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameView = parameters.nameView
    this.idUuView = parameters.idUuView
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-explorer-2:${this.region}:${this.account}:view/${this.nameView}/${this.idUuView}` as const
  }
}
export type { ViewArn }
export function viewArn<Partition extends ArnPartition = 'aws'>(
  parameters: ViewArnParameters<Partition>,
) {
  return new ViewArn<Partition>(parameters)
}

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUuIndex: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'index',
  `arn:${string}:resource-explorer-2:${string}:${string}:index/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUuIndex: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idUuIndex = parameters.idUuIndex
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:resource-explorer-2:${this.region}:${this.account}:index/${this.idUuIndex}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(
  parameters: IndexArnParameters<Partition>,
) {
  return new IndexArn<Partition>(parameters)
}

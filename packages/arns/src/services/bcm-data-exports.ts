import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ExportArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identifier: string
}
class ExportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'export',
  `arn:${string}:bcm-data-exports:${string}:${string}:export/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'export' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identifier: string
  constructor(parameters: ExportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bcm-data-exports:${this.region}:${this.account}:export/${this.identifier}` as const
  }
}
export type { ExportArn }
export function exportArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportArnParameters<Partition>,
) {
  return new ExportArn<Partition>(parameters)
}

export interface TableArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identifier: string
}
class TableArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'table',
  `arn:${string}:bcm-data-exports:${string}:${string}:table/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'table' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identifier: string
  constructor(parameters: TableArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifier = parameters.identifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:bcm-data-exports:${this.region}:${this.account}:table/${this.identifier}` as const
  }
}
export type { TableArn }
export function tableArn<Partition extends ArnPartition = 'aws'>(
  parameters: TableArnParameters<Partition>,
) {
  return new TableArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DataCatalogArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataCatalogName: string
}
class DataCatalogArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'datacatalog',
  `arn:${string}:athena:${string}:${string}:datacatalog/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datacatalog' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataCatalogName: string
  constructor(parameters: DataCatalogArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dataCatalogName = parameters.dataCatalogName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:athena:${this.region}:${this.account}:datacatalog/${this.dataCatalogName}` as const
  }
}
export type { DataCatalogArn }
export function dataCatalogArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataCatalogArnParameters<Partition>,
) {
  return new DataCatalogArn<Partition>(parameters)
}

export interface WorkgroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workgroupName: string
}
class WorkgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workgroup',
  `arn:${string}:athena:${string}:${string}:workgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workgroupName: string
  constructor(parameters: WorkgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workgroupName = parameters.workgroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:athena:${this.region}:${this.account}:workgroup/${this.workgroupName}` as const
  }
}
export type { WorkgroupArn }
export function workgroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkgroupArnParameters<Partition>,
) {
  return new WorkgroupArn<Partition>(parameters)
}

export interface CapacityReservationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly capacityReservationName: string
}
class CapacityReservationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'capacity-reservation',
  `arn:${string}:athena:${string}:${string}:capacity-reservation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capacity-reservation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly capacityReservationName: string
  constructor(parameters: CapacityReservationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.capacityReservationName = parameters.capacityReservationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:athena:${this.region}:${this.account}:capacity-reservation/${this.capacityReservationName}` as const
  }
}
export type { CapacityReservationArn }
export function capacityReservationArn<Partition extends ArnPartition = 'aws'>(
  parameters: CapacityReservationArnParameters<Partition>,
) {
  return new CapacityReservationArn<Partition>(parameters)
}

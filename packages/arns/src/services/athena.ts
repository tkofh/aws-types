import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CatalogDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCatalogData: string
}
class CatalogDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'datacatalog',
  `arn:${string}:athena:${string}:${string}:datacatalog/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datacatalog' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCatalogData: string
  constructor(parameters: CatalogDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCatalogData = parameters.nameCatalogData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:athena:${this.region}:${this.account}:datacatalog/${this.nameCatalogData}` as const
  }
}
export type { CatalogDataArn }
export function catalogDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: CatalogDataArnParameters<Partition>,
) {
  return new CatalogDataArn<Partition>(parameters)
}

export interface WorkgroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkgroup: string
}
class WorkgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workgroup',
  `arn:${string}:athena:${string}:${string}:workgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameWorkgroup: string
  constructor(parameters: WorkgroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameWorkgroup = parameters.nameWorkgroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:athena:${this.region}:${this.account}:workgroup/${this.nameWorkgroup}` as const
  }
}
export type { WorkgroupArn }
export function workgroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkgroupArnParameters<Partition>,
) {
  return new WorkgroupArn<Partition>(parameters)
}

export interface ReservationCapacityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameReservationCapacity: string
}
class ReservationCapacityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'capacity-reservation',
  `arn:${string}:athena:${string}:${string}:capacity-reservation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capacity-reservation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameReservationCapacity: string
  constructor(parameters: ReservationCapacityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameReservationCapacity = parameters.nameReservationCapacity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:athena:${this.region}:${this.account}:capacity-reservation/${this.nameReservationCapacity}` as const
  }
}
export type { ReservationCapacityArn }
export function reservationCapacityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReservationCapacityArnParameters<Partition>,
) {
  return new ReservationCapacityArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DatacatalogArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dataCatalogName: string
}
class DatacatalogArn<
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
  constructor(parameters: DatacatalogArnParameters<Partition>) {
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
export type { DatacatalogArn }
export function datacatalogArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatacatalogArnParameters<Partition>,
) {
  return new DatacatalogArn<Partition>(parameters)
}

export interface WorkgroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workGroupName: string
}
class WorkgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workgroup',
  `arn:${string}:athena:${string}:${string}:workgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workGroupName: string
  constructor(parameters: WorkgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workGroupName = parameters.workGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:athena:${this.region}:${this.account}:workgroup/${this.workGroupName}` as const
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

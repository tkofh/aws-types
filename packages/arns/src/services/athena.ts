export interface DatacatalogArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dataCatalogName: string
}
export type DatacatalogArn = `arn:${string}:athena:${string}:${string}:datacatalog/${string}`
export function datacatalogArn(parameters: DatacatalogArnParameters): DatacatalogArn {
  return `arn:${parameters.partition ?? ''}:athena:${parameters.region}:${parameters.account}:datacatalog/${parameters.dataCatalogName}`
}

export interface WorkgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workGroupName: string
}
export type WorkgroupArn = `arn:${string}:athena:${string}:${string}:workgroup/${string}`
export function workgroupArn(parameters: WorkgroupArnParameters): WorkgroupArn {
  return `arn:${parameters.partition ?? ''}:athena:${parameters.region}:${parameters.account}:workgroup/${parameters.workGroupName}`
}

export interface CapacityReservationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  capacityReservationName: string
}
export type CapacityReservationArn = `arn:${string}:athena:${string}:${string}:capacity-reservation/${string}`
export function capacityReservationArn(parameters: CapacityReservationArnParameters): CapacityReservationArn {
  return `arn:${parameters.partition ?? ''}:athena:${parameters.region}:${parameters.account}:capacity-reservation/${parameters.capacityReservationName}`
}
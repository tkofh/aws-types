export interface NamespaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  namespaceId: string
}
export type NamespaceArn = `arn:${string}:redshift-serverless:${string}:${string}:namespace/${string}`
export function namespaceArn(parameters: NamespaceArnParameters): NamespaceArn {
  return `arn:${parameters.partition ?? ''}:redshift-serverless:${parameters.region}:${parameters.account}:namespace/${parameters.namespaceId}`
}

export interface SnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  snapshotId: string
}
export type SnapshotArn = `arn:${string}:redshift-serverless:${string}:${string}:snapshot/${string}`
export function snapshotArn(parameters: SnapshotArnParameters): SnapshotArn {
  return `arn:${parameters.partition ?? ''}:redshift-serverless:${parameters.region}:${parameters.account}:snapshot/${parameters.snapshotId}`
}

export interface WorkgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workgroupId: string
}
export type WorkgroupArn = `arn:${string}:redshift-serverless:${string}:${string}:workgroup/${string}`
export function workgroupArn(parameters: WorkgroupArnParameters): WorkgroupArn {
  return `arn:${parameters.partition ?? ''}:redshift-serverless:${parameters.region}:${parameters.account}:workgroup/${parameters.workgroupId}`
}

export interface RecoveryPointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  recoveryPointId: string
}
export type RecoveryPointArn = `arn:${string}:redshift-serverless:${string}:${string}:recoverypoint/${string}`
export function recoveryPointArn(parameters: RecoveryPointArnParameters): RecoveryPointArn {
  return `arn:${parameters.partition ?? ''}:redshift-serverless:${parameters.region}:${parameters.account}:recoverypoint/${parameters.recoveryPointId}`
}

export interface EndpointAccessArnParameters {
  partition?: string | undefined
  region: string
  account: string
  endpointAccessId: string
}
export type EndpointAccessArn = `arn:${string}:redshift-serverless:${string}:${string}:managedvpcendpoint/${string}`
export function endpointAccessArn(parameters: EndpointAccessArnParameters): EndpointAccessArn {
  return `arn:${parameters.partition ?? ''}:redshift-serverless:${parameters.region}:${parameters.account}:managedvpcendpoint/${parameters.endpointAccessId}`
}
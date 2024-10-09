export interface WorkspaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workspaceId: string
}
export type WorkspaceArn = `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}`
export function workspaceArn(parameters: WorkspaceArnParameters): WorkspaceArn {
  return `arn:${parameters.partition ?? ''}:iottwinmaker:${parameters.region}:${parameters.account}:workspace/${parameters.workspaceId}`
}

export interface EntityArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workspaceId: string
  entityId: string
}
export type EntityArn = `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/entity/${string}`
export function entityArn(parameters: EntityArnParameters): EntityArn {
  return `arn:${parameters.partition ?? ''}:iottwinmaker:${parameters.region}:${parameters.account}:workspace/${parameters.workspaceId}/entity/${parameters.entityId}`
}

export interface ComponentTypeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workspaceId: string
  componentTypeId: string
}
export type ComponentTypeArn = `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/component-type/${string}`
export function componentTypeArn(parameters: ComponentTypeArnParameters): ComponentTypeArn {
  return `arn:${parameters.partition ?? ''}:iottwinmaker:${parameters.region}:${parameters.account}:workspace/${parameters.workspaceId}/component-type/${parameters.componentTypeId}`
}

export interface SceneArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workspaceId: string
  sceneId: string
}
export type SceneArn = `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/scene/${string}`
export function sceneArn(parameters: SceneArnParameters): SceneArn {
  return `arn:${parameters.partition ?? ''}:iottwinmaker:${parameters.region}:${parameters.account}:workspace/${parameters.workspaceId}/scene/${parameters.sceneId}`
}

export interface SyncJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workspaceId: string
  syncJobId: string
}
export type SyncJobArn = `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/sync-job/${string}`
export function syncJobArn(parameters: SyncJobArnParameters): SyncJobArn {
  return `arn:${parameters.partition ?? ''}:iottwinmaker:${parameters.region}:${parameters.account}:workspace/${parameters.workspaceId}/sync-job/${parameters.syncJobId}`
}

export interface MetadataTransferJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  metadataTransferJobId: string
}
export type MetadataTransferJobArn = `arn:${string}:iottwinmaker:${string}:${string}:metadata-transfer-job/${string}`
export function metadataTransferJobArn(parameters: MetadataTransferJobArnParameters): MetadataTransferJobArn {
  return `arn:${parameters.partition ?? ''}:iottwinmaker:${parameters.region}:${parameters.account}:metadata-transfer-job/${parameters.metadataTransferJobId}`
}
import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface WorkspaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
}
class WorkspaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workspace', `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workspace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  constructor(parameters: WorkspaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workspaceId = parameters.workspaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.workspaceId}` as const
  }
}
export type { WorkspaceArn }
export function workspaceArn<Partition extends ArnPartition = 'aws'>(parameters: WorkspaceArnParameters<Partition>) {
  return new WorkspaceArn<Partition>(parameters)
}

export interface EntityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly entityId: string
}
class EntityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'entity', `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/entity/${string}`> {
  readonly [ArnResourceTypeBrand] = 'entity' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly entityId: string
  constructor(parameters: EntityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workspaceId = parameters.workspaceId
    this.entityId = parameters.entityId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.workspaceId}/entity/${this.entityId}` as const
  }
}
export type { EntityArn }
export function entityArn<Partition extends ArnPartition = 'aws'>(parameters: EntityArnParameters<Partition>) {
  return new EntityArn<Partition>(parameters)
}

export interface ComponentTypeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly componentTypeId: string
}
class ComponentTypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'componentType', `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/component-type/${string}`> {
  readonly [ArnResourceTypeBrand] = 'componentType' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly componentTypeId: string
  constructor(parameters: ComponentTypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workspaceId = parameters.workspaceId
    this.componentTypeId = parameters.componentTypeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.workspaceId}/component-type/${this.componentTypeId}` as const
  }
}
export type { ComponentTypeArn }
export function componentTypeArn<Partition extends ArnPartition = 'aws'>(parameters: ComponentTypeArnParameters<Partition>) {
  return new ComponentTypeArn<Partition>(parameters)
}

export interface SceneArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly sceneId: string
}
class SceneArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'scene', `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/scene/${string}`> {
  readonly [ArnResourceTypeBrand] = 'scene' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly sceneId: string
  constructor(parameters: SceneArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workspaceId = parameters.workspaceId
    this.sceneId = parameters.sceneId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.workspaceId}/scene/${this.sceneId}` as const
  }
}
export type { SceneArn }
export function sceneArn<Partition extends ArnPartition = 'aws'>(parameters: SceneArnParameters<Partition>) {
  return new SceneArn<Partition>(parameters)
}

export interface SyncJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly syncJobId: string
}
class SyncJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'syncJob', `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/sync-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'syncJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  readonly syncJobId: string
  constructor(parameters: SyncJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workspaceId = parameters.workspaceId
    this.syncJobId = parameters.syncJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.workspaceId}/sync-job/${this.syncJobId}` as const
  }
}
export type { SyncJobArn }
export function syncJobArn<Partition extends ArnPartition = 'aws'>(parameters: SyncJobArnParameters<Partition>) {
  return new SyncJobArn<Partition>(parameters)
}

export interface MetadataTransferJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly metadataTransferJobId: string
}
class MetadataTransferJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'metadataTransferJob', `arn:${string}:iottwinmaker:${string}:${string}:metadata-transfer-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'metadataTransferJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly metadataTransferJobId: string
  constructor(parameters: MetadataTransferJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.metadataTransferJobId = parameters.metadataTransferJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:metadata-transfer-job/${this.metadataTransferJobId}` as const
  }
}
export type { MetadataTransferJobArn }
export function metadataTransferJobArn<Partition extends ArnPartition = 'aws'>(parameters: MetadataTransferJobArnParameters<Partition>) {
  return new MetadataTransferJobArn<Partition>(parameters)
}
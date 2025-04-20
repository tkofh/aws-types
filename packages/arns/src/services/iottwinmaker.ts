import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface WorkspaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
}
class WorkspaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workspace',
  `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  constructor(parameters: WorkspaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkspace = parameters.idWorkspace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.idWorkspace}` as const
  }
}
export type { WorkspaceArn }
export function workspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspaceArnParameters<Partition>,
) {
  return new WorkspaceArn<Partition>(parameters)
}

export interface EntityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly idEntity: string
}
class EntityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'entity',
  `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/entity/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'entity' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly idEntity: string
  constructor(parameters: EntityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkspace = parameters.idWorkspace
    this.idEntity = parameters.idEntity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.idWorkspace}/entity/${this.idEntity}` as const
  }
}
export type { EntityArn }
export function entityArn<Partition extends ArnPartition = 'aws'>(
  parameters: EntityArnParameters<Partition>,
) {
  return new EntityArn<Partition>(parameters)
}

export interface TypeComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly idTypeComponent: string
}
class TypeComponentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'componentType',
  `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/component-type/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'componentType' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly idTypeComponent: string
  constructor(parameters: TypeComponentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkspace = parameters.idWorkspace
    this.idTypeComponent = parameters.idTypeComponent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.idWorkspace}/component-type/${this.idTypeComponent}` as const
  }
}
export type { TypeComponentArn }
export function typeComponentArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypeComponentArnParameters<Partition>,
) {
  return new TypeComponentArn<Partition>(parameters)
}

export interface SceneArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly idScene: string
}
class SceneArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'scene',
  `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/scene/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'scene' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly idScene: string
  constructor(parameters: SceneArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkspace = parameters.idWorkspace
    this.idScene = parameters.idScene
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.idWorkspace}/scene/${this.idScene}` as const
  }
}
export type { SceneArn }
export function sceneArn<Partition extends ArnPartition = 'aws'>(
  parameters: SceneArnParameters<Partition>,
) {
  return new SceneArn<Partition>(parameters)
}

export interface JobSyncArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly idJobSync: string
}
class JobSyncArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'syncJob',
  `arn:${string}:iottwinmaker:${string}:${string}:workspace/${string}/sync-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'syncJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  readonly idJobSync: string
  constructor(parameters: JobSyncArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkspace = parameters.idWorkspace
    this.idJobSync = parameters.idJobSync
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:workspace/${this.idWorkspace}/sync-job/${this.idJobSync}` as const
  }
}
export type { JobSyncArn }
export function jobSyncArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobSyncArnParameters<Partition>,
) {
  return new JobSyncArn<Partition>(parameters)
}

export interface JobTransferMetadataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobTransferMetadata: string
}
class JobTransferMetadataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'metadataTransferJob',
  `arn:${string}:iottwinmaker:${string}:${string}:metadata-transfer-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'metadataTransferJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobTransferMetadata: string
  constructor(parameters: JobTransferMetadataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobTransferMetadata = parameters.idJobTransferMetadata
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iottwinmaker:${this.region}:${this.account}:metadata-transfer-job/${this.idJobTransferMetadata}` as const
  }
}
export type { JobTransferMetadataArn }
export function jobTransferMetadataArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobTransferMetadataArnParameters<Partition>,
) {
  return new JobTransferMetadataArn<Partition>(parameters)
}

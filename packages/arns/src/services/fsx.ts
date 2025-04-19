import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface FileSystemArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileSystemId: string
}
class FileSystemArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'file-system', `arn:${string}:fsx:${string}:${string}:file-system/${string}`> {
  readonly [ArnResourceTypeBrand] = 'file-system' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileSystemId: string
  constructor(parameters: FileSystemArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fileSystemId = parameters.fileSystemId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:file-system/${this.fileSystemId}` as const
  }
}
export type { FileSystemArn }
export function fileSystemArn<Partition extends ArnPartition = 'aws'>(parameters: FileSystemArnParameters<Partition>) {
  return new FileSystemArn<Partition>(parameters)
}

export interface FileCacheArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileCacheId: string
}
class FileCacheArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'file-cache', `arn:${string}:fsx:${string}:${string}:file-cache/${string}`> {
  readonly [ArnResourceTypeBrand] = 'file-cache' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileCacheId: string
  constructor(parameters: FileCacheArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fileCacheId = parameters.fileCacheId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:file-cache/${this.fileCacheId}` as const
  }
}
export type { FileCacheArn }
export function fileCacheArn<Partition extends ArnPartition = 'aws'>(parameters: FileCacheArnParameters<Partition>) {
  return new FileCacheArn<Partition>(parameters)
}

export interface BackupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly backupId: string
}
class BackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'backup', `arn:${string}:fsx:${string}:${string}:backup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'backup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly backupId: string
  constructor(parameters: BackupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.backupId = parameters.backupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:backup/${this.backupId}` as const
  }
}
export type { BackupArn }
export function backupArn<Partition extends ArnPartition = 'aws'>(parameters: BackupArnParameters<Partition>) {
  return new BackupArn<Partition>(parameters)
}

export interface StorageVirtualMachineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileSystemId: string
  readonly storageVirtualMachineId: string
}
class StorageVirtualMachineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'storage-virtual-machine', `arn:${string}:fsx:${string}:${string}:storage-virtual-machine/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'storage-virtual-machine' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileSystemId: string
  readonly storageVirtualMachineId: string
  constructor(parameters: StorageVirtualMachineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fileSystemId = parameters.fileSystemId
    this.storageVirtualMachineId = parameters.storageVirtualMachineId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:storage-virtual-machine/${this.fileSystemId}/${this.storageVirtualMachineId}` as const
  }
}
export type { StorageVirtualMachineArn }
export function storageVirtualMachineArn<Partition extends ArnPartition = 'aws'>(parameters: StorageVirtualMachineArnParameters<Partition>) {
  return new StorageVirtualMachineArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly taskId: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'task', `arn:${string}:fsx:${string}:${string}:task/${string}`> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly taskId: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.taskId = parameters.taskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:task/${this.taskId}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(parameters: TaskArnParameters<Partition>) {
  return new TaskArn<Partition>(parameters)
}

export interface AssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileSystemIdOrFileCacheId: string
  readonly dataRepositoryAssociationId: string
}
class AssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'association', `arn:${string}:fsx:${string}:${string}:association/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileSystemIdOrFileCacheId: string
  readonly dataRepositoryAssociationId: string
  constructor(parameters: AssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fileSystemIdOrFileCacheId = parameters.fileSystemIdOrFileCacheId
    this.dataRepositoryAssociationId = parameters.dataRepositoryAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:association/${this.fileSystemIdOrFileCacheId}/${this.dataRepositoryAssociationId}` as const
  }
}
export type { AssociationArn }
export function associationArn<Partition extends ArnPartition = 'aws'>(parameters: AssociationArnParameters<Partition>) {
  return new AssociationArn<Partition>(parameters)
}

export interface VolumeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileSystemId: string
  readonly volumeId: string
}
class VolumeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'volume', `arn:${string}:fsx:${string}:${string}:volume/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'volume' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileSystemId: string
  readonly volumeId: string
  constructor(parameters: VolumeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fileSystemId = parameters.fileSystemId
    this.volumeId = parameters.volumeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:volume/${this.fileSystemId}/${this.volumeId}` as const
  }
}
export type { VolumeArn }
export function volumeArn<Partition extends ArnPartition = 'aws'>(parameters: VolumeArnParameters<Partition>) {
  return new VolumeArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly volumeId: string
  readonly snapshotId: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'snapshot', `arn:${string}:fsx:${string}:${string}:snapshot/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly volumeId: string
  readonly snapshotId: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.volumeId = parameters.volumeId
    this.snapshotId = parameters.snapshotId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:snapshot/${this.volumeId}/${this.snapshotId}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(parameters: SnapshotArnParameters<Partition>) {
  return new SnapshotArn<Partition>(parameters)
}
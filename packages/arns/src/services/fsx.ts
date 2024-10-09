export interface FileSystemArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fileSystemId: string
}
export type FileSystemArn = `arn:${string}:fsx:${string}:${string}:file-system/${string}`
export function fileSystemArn(parameters: FileSystemArnParameters): FileSystemArn {
  return `arn:${parameters.partition ?? ''}:fsx:${parameters.region}:${parameters.account}:file-system/${parameters.fileSystemId}`
}

export interface FileCacheArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fileCacheId: string
}
export type FileCacheArn = `arn:${string}:fsx:${string}:${string}:file-cache/${string}`
export function fileCacheArn(parameters: FileCacheArnParameters): FileCacheArn {
  return `arn:${parameters.partition ?? ''}:fsx:${parameters.region}:${parameters.account}:file-cache/${parameters.fileCacheId}`
}

export interface BackupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  backupId: string
}
export type BackupArn = `arn:${string}:fsx:${string}:${string}:backup/${string}`
export function backupArn(parameters: BackupArnParameters): BackupArn {
  return `arn:${parameters.partition ?? ''}:fsx:${parameters.region}:${parameters.account}:backup/${parameters.backupId}`
}

export interface StorageVirtualMachineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fileSystemId: string
  storageVirtualMachineId: string
}
export type StorageVirtualMachineArn = `arn:${string}:fsx:${string}:${string}:storage-virtual-machine/${string}/${string}`
export function storageVirtualMachineArn(parameters: StorageVirtualMachineArnParameters): StorageVirtualMachineArn {
  return `arn:${parameters.partition ?? ''}:fsx:${parameters.region}:${parameters.account}:storage-virtual-machine/${parameters.fileSystemId}/${parameters.storageVirtualMachineId}`
}

export interface TaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  taskId: string
}
export type TaskArn = `arn:${string}:fsx:${string}:${string}:task/${string}`
export function taskArn(parameters: TaskArnParameters): TaskArn {
  return `arn:${parameters.partition ?? ''}:fsx:${parameters.region}:${parameters.account}:task/${parameters.taskId}`
}

export interface AssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fileSystemIdOrFileCacheId: string
  dataRepositoryAssociationId: string
}
export type AssociationArn = `arn:${string}:fsx:${string}:${string}:association/${string}/${string}`
export function associationArn(parameters: AssociationArnParameters): AssociationArn {
  return `arn:${parameters.partition ?? ''}:fsx:${parameters.region}:${parameters.account}:association/${parameters.fileSystemIdOrFileCacheId}/${parameters.dataRepositoryAssociationId}`
}

export interface VolumeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fileSystemId: string
  volumeId: string
}
export type VolumeArn = `arn:${string}:fsx:${string}:${string}:volume/${string}/${string}`
export function volumeArn(parameters: VolumeArnParameters): VolumeArn {
  return `arn:${parameters.partition ?? ''}:fsx:${parameters.region}:${parameters.account}:volume/${parameters.fileSystemId}/${parameters.volumeId}`
}

export interface SnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  volumeId: string
  snapshotId: string
}
export type SnapshotArn = `arn:${string}:fsx:${string}:${string}:snapshot/${string}/${string}`
export function snapshotArn(parameters: SnapshotArnParameters): SnapshotArn {
  return `arn:${parameters.partition ?? ''}:fsx:${parameters.region}:${parameters.account}:snapshot/${parameters.volumeId}/${parameters.snapshotId}`
}
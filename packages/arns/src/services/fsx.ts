import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SystemFileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSystemFile: string
}
class SystemFileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'file-system',
  `arn:${string}:fsx:${string}:${string}:file-system/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'file-system' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSystemFile: string
  constructor(parameters: SystemFileArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSystemFile = parameters.idSystemFile
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:file-system/${this.idSystemFile}` as const
  }
}
export type { SystemFileArn }
export function systemFileArn<Partition extends ArnPartition = 'aws'>(
  parameters: SystemFileArnParameters<Partition>,
) {
  return new SystemFileArn<Partition>(parameters)
}

export interface CacheFileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCacheFile: string
}
class CacheFileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'file-cache',
  `arn:${string}:fsx:${string}:${string}:file-cache/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'file-cache' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCacheFile: string
  constructor(parameters: CacheFileArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCacheFile = parameters.idCacheFile
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:file-cache/${this.idCacheFile}` as const
  }
}
export type { CacheFileArn }
export function cacheFileArn<Partition extends ArnPartition = 'aws'>(
  parameters: CacheFileArnParameters<Partition>,
) {
  return new CacheFileArn<Partition>(parameters)
}

export interface BackupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBackup: string
}
class BackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'backup',
  `arn:${string}:fsx:${string}:${string}:backup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'backup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBackup: string
  constructor(parameters: BackupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBackup = parameters.idBackup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:backup/${this.idBackup}` as const
  }
}
export type { BackupArn }
export function backupArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupArnParameters<Partition>,
) {
  return new BackupArn<Partition>(parameters)
}

export interface MachineVirtualStorageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSystemFile: string
  readonly idMachineVirtualStorage: string
}
class MachineVirtualStorageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'storage-virtual-machine',
  `arn:${string}:fsx:${string}:${string}:storage-virtual-machine/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'storage-virtual-machine' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSystemFile: string
  readonly idMachineVirtualStorage: string
  constructor(parameters: MachineVirtualStorageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSystemFile = parameters.idSystemFile
    this.idMachineVirtualStorage = parameters.idMachineVirtualStorage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:storage-virtual-machine/${this.idSystemFile}/${this.idMachineVirtualStorage}` as const
  }
}
export type { MachineVirtualStorageArn }
export function machineVirtualStorageArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MachineVirtualStorageArnParameters<Partition>) {
  return new MachineVirtualStorageArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTask: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'task',
  `arn:${string}:fsx:${string}:${string}:task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTask: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTask = parameters.idTask
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:task/${this.idTask}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskArnParameters<Partition>,
) {
  return new TaskArn<Partition>(parameters)
}

export interface AssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCacheFileOrIdSystemFile: string
  readonly idAssociationRepositoryData: string
}
class AssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'association',
  `arn:${string}:fsx:${string}:${string}:association/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCacheFileOrIdSystemFile: string
  readonly idAssociationRepositoryData: string
  constructor(parameters: AssociationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCacheFileOrIdSystemFile = parameters.idCacheFileOrIdSystemFile
    this.idAssociationRepositoryData = parameters.idAssociationRepositoryData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:association/${this.idCacheFileOrIdSystemFile}/${this.idAssociationRepositoryData}` as const
  }
}
export type { AssociationArn }
export function associationArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationArnParameters<Partition>,
) {
  return new AssociationArn<Partition>(parameters)
}

export interface VolumeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSystemFile: string
  readonly idVolume: string
}
class VolumeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'volume',
  `arn:${string}:fsx:${string}:${string}:volume/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'volume' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSystemFile: string
  readonly idVolume: string
  constructor(parameters: VolumeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSystemFile = parameters.idSystemFile
    this.idVolume = parameters.idVolume
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:volume/${this.idSystemFile}/${this.idVolume}` as const
  }
}
export type { VolumeArn }
export function volumeArn<Partition extends ArnPartition = 'aws'>(
  parameters: VolumeArnParameters<Partition>,
) {
  return new VolumeArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVolume: string
  readonly idSnapshot: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:fsx:${string}:${string}:snapshot/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idVolume: string
  readonly idSnapshot: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idVolume = parameters.idVolume
    this.idSnapshot = parameters.idSnapshot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:fsx:${this.region}:${this.account}:snapshot/${this.idVolume}/${this.idSnapshot}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

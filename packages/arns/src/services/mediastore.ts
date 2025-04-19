import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ContainerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly containerName: string
}
class ContainerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'container', `arn:${string}:mediastore:${string}:${string}:container/${string}`> {
  readonly [ArnResourceTypeBrand] = 'container' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly containerName: string
  constructor(parameters: ContainerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.containerName = parameters.containerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediastore:${this.region}:${this.account}:container/${this.containerName}` as const
  }
}
export type { ContainerArn }
export function containerArn<Partition extends ArnPartition = 'aws'>(parameters: ContainerArnParameters<Partition>) {
  return new ContainerArn<Partition>(parameters)
}

export interface ObjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly containerName: string
  readonly objectPath: string
}
class ObjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'object', `arn:${string}:mediastore:${string}:${string}:container/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'object' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly containerName: string
  readonly objectPath: string
  constructor(parameters: ObjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.containerName = parameters.containerName
    this.objectPath = parameters.objectPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediastore:${this.region}:${this.account}:container/${this.containerName}/${this.objectPath}` as const
  }
}
export type { ObjectArn }
export function objectArn<Partition extends ArnPartition = 'aws'>(parameters: ObjectArnParameters<Partition>) {
  return new ObjectArn<Partition>(parameters)
}

export interface FolderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly containerName: string
  readonly folderPath: string
}
class FolderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'folder', `arn:${string}:mediastore:${string}:${string}:container/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'folder' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly containerName: string
  readonly folderPath: string
  constructor(parameters: FolderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.containerName = parameters.containerName
    this.folderPath = parameters.folderPath
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediastore:${this.region}:${this.account}:container/${this.containerName}/${this.folderPath}` as const
  }
}
export type { FolderArn }
export function folderArn<Partition extends ArnPartition = 'aws'>(parameters: FolderArnParameters<Partition>) {
  return new FolderArn<Partition>(parameters)
}
import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ContainerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameContainer: string
}
class ContainerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'container',
  `arn:${string}:mediastore:${string}:${string}:container/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'container' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameContainer: string
  constructor(parameters: ContainerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameContainer = parameters.nameContainer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediastore:${this.region}:${this.account}:container/${this.nameContainer}` as const
  }
}
export type { ContainerArn }
export function containerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContainerArnParameters<Partition>,
) {
  return new ContainerArn<Partition>(parameters)
}

export interface ObjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameContainer: string
  readonly pathObject: string
}
class ObjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'object',
  `arn:${string}:mediastore:${string}:${string}:container/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'object' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameContainer: string
  readonly pathObject: string
  constructor(parameters: ObjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameContainer = parameters.nameContainer
    this.pathObject = parameters.pathObject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediastore:${this.region}:${this.account}:container/${this.nameContainer}/${this.pathObject}` as const
  }
}
export type { ObjectArn }
export function objectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ObjectArnParameters<Partition>,
) {
  return new ObjectArn<Partition>(parameters)
}

export interface FolderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameContainer: string
  readonly pathFolder: string
}
class FolderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'folder',
  `arn:${string}:mediastore:${string}:${string}:container/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'folder' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameContainer: string
  readonly pathFolder: string
  constructor(parameters: FolderArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameContainer = parameters.nameContainer
    this.pathFolder = parameters.pathFolder
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediastore:${this.region}:${this.account}:container/${this.nameContainer}/${this.pathFolder}` as const
  }
}
export type { FolderArn }
export function folderArn<Partition extends ArnPartition = 'aws'>(
  parameters: FolderArnParameters<Partition>,
) {
  return new FolderArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface FileSystemArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fileSystemId: string
}
class FileSystemArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'file-system',
  `arn:${string}:elasticfilesystem:${string}:${string}:file-system/${string}`
> {
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
    return `arn:${this.partition}:elasticfilesystem:${this.region}:${this.account}:file-system/${this.fileSystemId}` as const
  }
}
export type { FileSystemArn }
export function fileSystemArn<Partition extends ArnPartition = 'aws'>(
  parameters: FileSystemArnParameters<Partition>,
) {
  return new FileSystemArn<Partition>(parameters)
}

export interface AccessPointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointId: string
}
class AccessPointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-point',
  `arn:${string}:elasticfilesystem:${string}:${string}:access-point/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-point' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessPointId: string
  constructor(parameters: AccessPointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.accessPointId = parameters.accessPointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticfilesystem:${this.region}:${this.account}:access-point/${this.accessPointId}` as const
  }
}
export type { AccessPointArn }
export function accessPointArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessPointArnParameters<Partition>,
) {
  return new AccessPointArn<Partition>(parameters)
}

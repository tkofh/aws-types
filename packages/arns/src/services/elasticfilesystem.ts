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
  `arn:${string}:elasticfilesystem:${string}:${string}:file-system/${string}`
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
    return `arn:${this.partition}:elasticfilesystem:${this.region}:${this.account}:file-system/${this.idSystemFile}` as const
  }
}
export type { SystemFileArn }
export function systemFileArn<Partition extends ArnPartition = 'aws'>(
  parameters: SystemFileArnParameters<Partition>,
) {
  return new SystemFileArn<Partition>(parameters)
}

export interface PointAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPointAccess: string
}
class PointAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'access-point',
  `arn:${string}:elasticfilesystem:${string}:${string}:access-point/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'access-point' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPointAccess: string
  constructor(parameters: PointAccessArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPointAccess = parameters.idPointAccess
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elasticfilesystem:${this.region}:${this.account}:access-point/${this.idPointAccess}` as const
  }
}
export type { PointAccessArn }
export function pointAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: PointAccessArnParameters<Partition>,
) {
  return new PointAccessArn<Partition>(parameters)
}

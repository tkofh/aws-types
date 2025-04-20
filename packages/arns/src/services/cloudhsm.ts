import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BackupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceBackupHsmCloud: string
}
class BackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'backup',
  `arn:${string}:cloudhsm:${string}:${string}:backup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'backup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceBackupHsmCloud: string
  constructor(parameters: BackupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameInstanceBackupHsmCloud = parameters.nameInstanceBackupHsmCloud
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudhsm:${this.region}:${this.account}:backup/${this.nameInstanceBackupHsmCloud}` as const
  }
}
export type { BackupArn }
export function backupArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupArnParameters<Partition>,
) {
  return new BackupArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceClusterHsmCloud: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:cloudhsm:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceClusterHsmCloud: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameInstanceClusterHsmCloud = parameters.nameInstanceClusterHsmCloud
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudhsm:${this.region}:${this.account}:cluster/${this.nameInstanceClusterHsmCloud}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

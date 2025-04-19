import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BackupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cloudHsmBackupInstanceName: string
}
class BackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'backup',
  `arn:${string}:cloudhsm:${string}:${string}:backup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'backup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cloudHsmBackupInstanceName: string
  constructor(parameters: BackupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.cloudHsmBackupInstanceName = parameters.cloudHsmBackupInstanceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudhsm:${this.region}:${this.account}:backup/${this.cloudHsmBackupInstanceName}` as const
  }
}
export type { BackupArn }
export function backupArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupArnParameters<Partition>,
) {
  return new BackupArn<Partition>(parameters)
}

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cloudHsmClusterInstanceName: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:cloudhsm:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly cloudHsmClusterInstanceName: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.cloudHsmClusterInstanceName = parameters.cloudHsmClusterInstanceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudhsm:${this.region}:${this.account}:cluster/${this.cloudHsmClusterInstanceName}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

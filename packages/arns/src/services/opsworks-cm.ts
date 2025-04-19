import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ServerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly serverName: string
  readonly uniqueId: string
}
class ServerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'server',
  `arn:${string}:opsworks-cm::${string}:server/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'server' as const
  readonly partition: Partition
  readonly account: string
  readonly serverName: string
  readonly uniqueId: string
  constructor(parameters: ServerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.serverName = parameters.serverName
    this.uniqueId = parameters.uniqueId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:opsworks-cm::${this.account}:server/${this.serverName}/${this.uniqueId}` as const
  }
}
export type { ServerArn }
export function serverArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServerArnParameters<Partition>,
) {
  return new ServerArn<Partition>(parameters)
}

export interface BackupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly serverName: string
}
class BackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'backup',
  `arn:${string}:opsworks-cm::${string}:backup/${string}-{Date-and-Time-Stamp-of-Backup}`
> {
  readonly [ArnResourceTypeBrand] = 'backup' as const
  readonly partition: Partition
  readonly account: string
  readonly serverName: string
  constructor(parameters: BackupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.serverName = parameters.serverName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:opsworks-cm::${this.account}:backup/${this.serverName}-{Date-and-Time-Stamp-of-Backup}` as const
  }
}
export type { BackupArn }
export function backupArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupArnParameters<Partition>,
) {
  return new BackupArn<Partition>(parameters)
}

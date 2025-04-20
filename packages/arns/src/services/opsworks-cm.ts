import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ServerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly nameServer: string
  readonly idUnique: string
}
class ServerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'server',
  `arn:${string}:opsworks-cm::${string}:server/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'server' as const
  readonly partition: string
  readonly account: string
  readonly nameServer: string
  readonly idUnique: string
  constructor(parameters: ServerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameServer = parameters.nameServer
    this.idUnique = parameters.idUnique
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:opsworks-cm::${this.account}:server/${this.nameServer}/${this.idUnique}` as const
  }
}
export type { ServerArn }
export function serverArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServerArnParameters<Partition>,
) {
  return new ServerArn<Partition>(parameters)
}

export interface BackupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly nameServer: string
}
class BackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'backup',
  `arn:${string}:opsworks-cm::${string}:backup/${string}-{Date-and-Time-Stamp-of-Backup}`
> {
  readonly [ArnResourceTypeBrand] = 'backup' as const
  readonly partition: string
  readonly account: string
  readonly nameServer: string
  constructor(parameters: BackupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameServer = parameters.nameServer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:opsworks-cm::${this.account}:backup/${this.nameServer}-{Date-and-Time-Stamp-of-Backup}` as const
  }
}
export type { BackupArn }
export function backupArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupArnParameters<Partition>,
) {
  return new BackupArn<Partition>(parameters)
}

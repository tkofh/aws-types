export interface ServerArnParameters {
  partition?: string | undefined
  account: string
  serverName: string
  uniqueId: string
}
export type ServerArn = `arn:${string}:opsworks-cm::${string}:server/${string}/${string}`
export function serverArn(parameters: ServerArnParameters): ServerArn {
  return `arn:${parameters.partition ?? ''}:opsworks-cm::${parameters.account}:server/${parameters.serverName}/${parameters.uniqueId}`
}

export interface BackupArnParameters {
  partition?: string | undefined
  account: string
  serverName: string
}
export type BackupArn = `arn:${string}:opsworks-cm::${string}:backup/${string}-{Date-and-Time-Stamp-of-Backup}`
export function backupArn(parameters: BackupArnParameters): BackupArn {
  return `arn:${parameters.partition ?? ''}:opsworks-cm::${parameters.account}:backup/${parameters.serverName}-{Date-and-Time-Stamp-of-Backup}`
}
export interface BackupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  cloudHsmBackupInstanceName: string
}
export type BackupArn = `arn:${string}:cloudhsm:${string}:${string}:backup/${string}`
export function backupArn(parameters: BackupArnParameters): BackupArn {
  return `arn:${parameters.partition ?? ''}:cloudhsm:${parameters.region}:${parameters.account}:backup/${parameters.cloudHsmBackupInstanceName}`
}

export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  cloudHsmClusterInstanceName: string
}
export type ClusterArn = `arn:${string}:cloudhsm:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:cloudhsm:${parameters.region}:${parameters.account}:cluster/${parameters.cloudHsmClusterInstanceName}`
}
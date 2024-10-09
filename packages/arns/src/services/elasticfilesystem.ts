export interface FileSystemArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fileSystemId: string
}
export type FileSystemArn = `arn:${string}:elasticfilesystem:${string}:${string}:file-system/${string}`
export function fileSystemArn(parameters: FileSystemArnParameters): FileSystemArn {
  return `arn:${parameters.partition ?? ''}:elasticfilesystem:${parameters.region}:${parameters.account}:file-system/${parameters.fileSystemId}`
}

export interface AccessPointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  accessPointId: string
}
export type AccessPointArn = `arn:${string}:elasticfilesystem:${string}:${string}:access-point/${string}`
export function accessPointArn(parameters: AccessPointArnParameters): AccessPointArn {
  return `arn:${parameters.partition ?? ''}:elasticfilesystem:${parameters.region}:${parameters.account}:access-point/${parameters.accessPointId}`
}
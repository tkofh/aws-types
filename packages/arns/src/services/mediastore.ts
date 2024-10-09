export interface ContainerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  containerName: string
}
export type ContainerArn = `arn:${string}:mediastore:${string}:${string}:container/${string}`
export function containerArn(parameters: ContainerArnParameters): ContainerArn {
  return `arn:${parameters.partition ?? ''}:mediastore:${parameters.region}:${parameters.account}:container/${parameters.containerName}`
}

export interface ObjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  containerName: string
  objectPath: string
}
export type ObjectArn = `arn:${string}:mediastore:${string}:${string}:container/${string}/${string}`
export function objectArn(parameters: ObjectArnParameters): ObjectArn {
  return `arn:${parameters.partition ?? ''}:mediastore:${parameters.region}:${parameters.account}:container/${parameters.containerName}/${parameters.objectPath}`
}

export interface FolderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  containerName: string
  folderPath: string
}
export type FolderArn = `arn:${string}:mediastore:${string}:${string}:container/${string}/${string}`
export function folderArn(parameters: FolderArnParameters): FolderArn {
  return `arn:${parameters.partition ?? ''}:mediastore:${parameters.region}:${parameters.account}:container/${parameters.containerName}/${parameters.folderPath}`
}
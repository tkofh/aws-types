export interface ConnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectionId: string
}
export type ConnectionArn = `arn:${string}:codeconnections:${string}:${string}:connection/${string}`
export function connectionArn(parameters: ConnectionArnParameters): ConnectionArn {
  return `arn:${parameters.partition ?? ''}:codeconnections:${parameters.region}:${parameters.account}:connection/${parameters.connectionId}`
}

export interface HostArnParameters {
  partition?: string | undefined
  region: string
  account: string
  hostId: string
}
export type HostArn = `arn:${string}:codeconnections:${string}:${string}:host/${string}`
export function hostArn(parameters: HostArnParameters): HostArn {
  return `arn:${parameters.partition ?? ''}:codeconnections:${parameters.region}:${parameters.account}:host/${parameters.hostId}`
}

export interface RepositoryLinkArnParameters {
  partition?: string | undefined
  region: string
  account: string
  repositoryLinkId: string
}
export type RepositoryLinkArn = `arn:${string}:codeconnections:${string}:${string}:repository-link/${string}`
export function repositoryLinkArn(parameters: RepositoryLinkArnParameters): RepositoryLinkArn {
  return `arn:${parameters.partition ?? ''}:codeconnections:${parameters.region}:${parameters.account}:repository-link/${parameters.repositoryLinkId}`
}
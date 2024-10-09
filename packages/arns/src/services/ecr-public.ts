export interface RepositoryArnParameters {
  partition?: string | undefined
  account: string
  repositoryName: string
}
export type RepositoryArn = `arn:${string}:ecr-public::${string}:repository/${string}`
export function repositoryArn(parameters: RepositoryArnParameters): RepositoryArn {
  return `arn:${parameters.partition ?? ''}:ecr-public::${parameters.account}:repository/${parameters.repositoryName}`
}

export interface RegistryArnParameters {
  partition?: string | undefined
  account: string
  registryId: string
}
export type RegistryArn = `arn:${string}:ecr-public::${string}:registry/${string}`
export function registryArn(parameters: RegistryArnParameters): RegistryArn {
  return `arn:${parameters.partition ?? ''}:ecr-public::${parameters.account}:registry/${parameters.registryId}`
}
export interface RepositoryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  repositoryName: string
}
export type RepositoryArn = `arn:${string}:ecr:${string}:${string}:repository/${string}`
export function repositoryArn(parameters: RepositoryArnParameters): RepositoryArn {
  return `arn:${parameters.partition ?? ''}:ecr:${parameters.region}:${parameters.account}:repository/${parameters.repositoryName}`
}
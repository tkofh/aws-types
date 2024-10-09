export interface RepositoryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  repositoryName: string
}
export type RepositoryArn = `arn:${string}:codecommit:${string}:${string}:${string}`
export function repositoryArn(parameters: RepositoryArnParameters): RepositoryArn {
  return `arn:${parameters.partition ?? ''}:codecommit:${parameters.region}:${parameters.account}:${parameters.repositoryName}`
}
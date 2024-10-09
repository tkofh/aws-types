export interface ProjectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  projectId: string
}
export type ProjectArn = `arn:${string}:codestar:${string}:${string}:project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:codestar:${parameters.region}:${parameters.account}:project/${parameters.projectId}`
}

export interface UserArnParameters {
  partition?: string | undefined
  account: string
  awsUserName: string
}
export type UserArn = `arn:${string}:iam::${string}:user/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:user/${parameters.awsUserName}`
}
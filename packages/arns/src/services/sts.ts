export interface RoleArnParameters {
  partition?: string | undefined
  account: string
  roleNameWithPath: string
}
export type RoleArn = `arn:${string}:iam::${string}:role/${string}`
export function roleArn(parameters: RoleArnParameters): RoleArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:role/${parameters.roleNameWithPath}`
}

export interface UserArnParameters {
  partition?: string | undefined
  account: string
  userNameWithPath: string
}
export type UserArn = `arn:${string}:iam::${string}:user/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:user/${parameters.userNameWithPath}`
}

export interface SelfSessionArnParameters {
  partition?: string | undefined
  account: string
}
export type SelfSessionArn = `arn:${string}:sts::${string}:self`
export function selfSessionArn(parameters: SelfSessionArnParameters): SelfSessionArn {
  return `arn:${parameters.partition ?? ''}:sts::${parameters.account}:self`
}
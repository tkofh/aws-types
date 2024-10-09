export interface UserpoolArnParameters {
  partition?: string | undefined
  region: string
  account: string
  userPoolId: string
}
export type UserpoolArn = `arn:${string}:cognito-idp:${string}:${string}:userpool/${string}`
export function userpoolArn(parameters: UserpoolArnParameters): UserpoolArn {
  return `arn:${parameters.partition ?? ''}:cognito-idp:${parameters.region}:${parameters.account}:userpool/${parameters.userPoolId}`
}

export interface WebaclArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scope: string
  name: string
  id: string
}
export type WebaclArn = `arn:${string}:wafv2:${string}:${string}:${string}/webacl/${string}/${string}`
export function webaclArn(parameters: WebaclArnParameters): WebaclArn {
  return `arn:${parameters.partition ?? ''}:wafv2:${parameters.region}:${parameters.account}:${parameters.scope}/webacl/${parameters.name}/${parameters.id}`
}
export interface IdentitypoolArnParameters {
  partition?: string | undefined
  region: string
  account: string
  identityPoolId: string
}
export type IdentitypoolArn = `arn:${string}:cognito-identity:${string}:${string}:identitypool/${string}`
export function identitypoolArn(parameters: IdentitypoolArnParameters): IdentitypoolArn {
  return `arn:${parameters.partition ?? 'aws'}:cognito-identity:${parameters.region}:${parameters.account}:identitypool/${parameters.identityPoolId}`
}
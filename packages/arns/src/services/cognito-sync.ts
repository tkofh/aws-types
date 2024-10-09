export interface DatasetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  identityPoolId: string
  identityId: string
  datasetName: string
}
export type DatasetArn = `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}/identity/${string}/dataset/${string}`
export function datasetArn(parameters: DatasetArnParameters): DatasetArn {
  return `arn:${parameters.partition ?? ''}:cognito-sync:${parameters.region}:${parameters.account}:identitypool/${parameters.identityPoolId}/identity/${parameters.identityId}/dataset/${parameters.datasetName}`
}

export interface IdentityArnParameters {
  partition?: string | undefined
  region: string
  account: string
  identityPoolId: string
  identityId: string
}
export type IdentityArn = `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}/identity/${string}`
export function identityArn(parameters: IdentityArnParameters): IdentityArn {
  return `arn:${parameters.partition ?? ''}:cognito-sync:${parameters.region}:${parameters.account}:identitypool/${parameters.identityPoolId}/identity/${parameters.identityId}`
}

export interface IdentitypoolArnParameters {
  partition?: string | undefined
  region: string
  account: string
  identityPoolId: string
}
export type IdentitypoolArn = `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}`
export function identitypoolArn(parameters: IdentitypoolArnParameters): IdentitypoolArn {
  return `arn:${parameters.partition ?? ''}:cognito-sync:${parameters.region}:${parameters.account}:identitypool/${parameters.identityPoolId}`
}
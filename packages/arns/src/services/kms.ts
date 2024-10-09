export interface AliasArnParameters {
  partition?: string | undefined
  region: string
  account: string
  alias: string
}
export type AliasArn = `arn:${string}:kms:${string}:${string}:alias/${string}`
export function aliasArn(parameters: AliasArnParameters): AliasArn {
  return `arn:${parameters.partition ?? ''}:kms:${parameters.region}:${parameters.account}:alias/${parameters.alias}`
}

export interface KeyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  keyId: string
}
export type KeyArn = `arn:${string}:kms:${string}:${string}:key/${string}`
export function keyArn(parameters: KeyArnParameters): KeyArn {
  return `arn:${parameters.partition ?? ''}:kms:${parameters.region}:${parameters.account}:key/${parameters.keyId}`
}
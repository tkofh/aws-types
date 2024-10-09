export interface KeyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  keyId: string
}
export type KeyArn = `arn:${string}:payment-cryptography:${string}:${string}:key/${string}`
export function keyArn(parameters: KeyArnParameters): KeyArn {
  return `arn:${parameters.partition ?? ''}:payment-cryptography:${parameters.region}:${parameters.account}:key/${parameters.keyId}`
}

export interface AliasArnParameters {
  partition?: string | undefined
  region: string
  account: string
  alias: string
}
export type AliasArn = `arn:${string}:payment-cryptography:${string}:${string}:alias/${string}`
export function aliasArn(parameters: AliasArnParameters): AliasArn {
  return `arn:${parameters.partition ?? ''}:payment-cryptography:${parameters.region}:${parameters.account}:alias/${parameters.alias}`
}
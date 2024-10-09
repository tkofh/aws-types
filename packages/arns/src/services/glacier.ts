export interface VaultArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vaultName: string
}
export type VaultArn = `arn:${string}:glacier:${string}:${string}:vaults/${string}`
export function vaultArn(parameters: VaultArnParameters): VaultArn {
  return `arn:${parameters.partition ?? ''}:glacier:${parameters.region}:${parameters.account}:vaults/${parameters.vaultName}`
}
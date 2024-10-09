export interface SyncProfileResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  syncProfileName: string
}
export type SyncProfileResourceArn = `arn:${string}:identity-sync:${string}:${string}:profile/${string}`
export function syncProfileResourceArn(parameters: SyncProfileResourceArnParameters): SyncProfileResourceArn {
  return `arn:${parameters.partition ?? ''}:identity-sync:${parameters.region}:${parameters.account}:profile/${parameters.syncProfileName}`
}

export interface SyncTargetResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  syncProfileName: string
  syncTargetName: string
}
export type SyncTargetResourceArn = `arn:${string}:identity-sync:${string}:${string}:target/${string}/${string}`
export function syncTargetResourceArn(parameters: SyncTargetResourceArnParameters): SyncTargetResourceArn {
  return `arn:${parameters.partition ?? ''}:identity-sync:${parameters.region}:${parameters.account}:target/${parameters.syncProfileName}/${parameters.syncTargetName}`
}
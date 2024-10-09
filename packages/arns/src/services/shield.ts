export interface AttackArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type AttackArn = `arn:${string}:shield::${string}:attack/${string}`
export function attackArn(parameters: AttackArnParameters): AttackArn {
  return `arn:${parameters.partition ?? ''}:shield::${parameters.account}:attack/${parameters.id}`
}

export interface ProtectionArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type ProtectionArn = `arn:${string}:shield::${string}:protection/${string}`
export function protectionArn(parameters: ProtectionArnParameters): ProtectionArn {
  return `arn:${parameters.partition ?? ''}:shield::${parameters.account}:protection/${parameters.id}`
}

export interface ProtectionGroupArnParameters {
  partition?: string | undefined
  account: string
  id: string
}
export type ProtectionGroupArn = `arn:${string}:shield::${string}:protection-group/${string}`
export function protectionGroupArn(parameters: ProtectionGroupArnParameters): ProtectionGroupArn {
  return `arn:${parameters.partition ?? ''}:shield::${parameters.account}:protection-group/${parameters.id}`
}
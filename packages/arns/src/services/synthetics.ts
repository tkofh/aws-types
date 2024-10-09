export interface CanaryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  canaryName: string
}
export type CanaryArn = `arn:${string}:synthetics:${string}:${string}:canary:${string}`
export function canaryArn(parameters: CanaryArnParameters): CanaryArn {
  return `arn:${parameters.partition ?? ''}:synthetics:${parameters.region}:${parameters.account}:canary:${parameters.canaryName}`
}

export interface GroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupId: string
}
export type GroupArn = `arn:${string}:synthetics:${string}:${string}:group:${string}`
export function groupArn(parameters: GroupArnParameters): GroupArn {
  return `arn:${parameters.partition ?? ''}:synthetics:${parameters.region}:${parameters.account}:group:${parameters.groupId}`
}
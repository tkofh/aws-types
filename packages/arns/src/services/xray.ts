export interface GroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupName: string
  id: string
}
export type GroupArn = `arn:${string}:xray:${string}:${string}:group/${string}/${string}`
export function groupArn(parameters: GroupArnParameters): GroupArn {
  return `arn:${parameters.partition ?? ''}:xray:${parameters.region}:${parameters.account}:group/${parameters.groupName}/${parameters.id}`
}

export interface SamplingRuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  samplingRuleName: string
}
export type SamplingRuleArn = `arn:${string}:xray:${string}:${string}:sampling-rule/${string}`
export function samplingRuleArn(parameters: SamplingRuleArnParameters): SamplingRuleArn {
  return `arn:${parameters.partition ?? ''}:xray:${parameters.region}:${parameters.account}:sampling-rule/${parameters.samplingRuleName}`
}
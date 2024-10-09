export interface RuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceName: string
}
export type RuleArn = `arn:${string}:rbin:${string}:${string}:rule/${string}`
export function ruleArn(parameters: RuleArnParameters): RuleArn {
  return `arn:${parameters.partition ?? ''}:rbin:${parameters.region}:${parameters.account}:rule/${parameters.resourceName}`
}
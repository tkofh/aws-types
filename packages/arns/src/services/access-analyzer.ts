export interface AnalyzerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  analyzerName: string
}
export type AnalyzerArn = `arn:${string}:access-analyzer:${string}:${string}:analyzer/${string}`
export function analyzerArn(parameters: AnalyzerArnParameters): AnalyzerArn {
  return `arn:${parameters.partition ?? ''}:access-analyzer:${parameters.region}:${parameters.account}:analyzer/${parameters.analyzerName}`
}

export interface ArchiveRuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  analyzerName: string
  ruleName: string
}
export type ArchiveRuleArn = `arn:${string}:access-analyzer:${string}:${string}:analyzer/${string}/archive-rule/${string}`
export function archiveRuleArn(parameters: ArchiveRuleArnParameters): ArchiveRuleArn {
  return `arn:${parameters.partition ?? ''}:access-analyzer:${parameters.region}:${parameters.account}:analyzer/${parameters.analyzerName}/archive-rule/${parameters.ruleName}`
}
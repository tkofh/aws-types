export interface CaseArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type CaseArn = `arn:${string}:elemental-support-cases::${string}:case/${string}`
export function caseArn(parameters: CaseArnParameters): CaseArn {
  return `arn:${parameters.partition ?? ''}:elemental-support-cases::${parameters.account}:case/${parameters.resourceId}`
}
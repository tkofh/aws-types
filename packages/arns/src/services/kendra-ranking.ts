export interface RescoreExecutionPlanArnParameters {
  partition?: string | undefined
  region: string
  account: string
  rescoreExecutionPlanId: string
}
export type RescoreExecutionPlanArn = `arn:${string}:kendra-ranking:${string}:${string}:rescore-execution-plan/${string}`
export function rescoreExecutionPlanArn(parameters: RescoreExecutionPlanArnParameters): RescoreExecutionPlanArn {
  return `arn:${parameters.partition ?? ''}:kendra-ranking:${parameters.region}:${parameters.account}:rescore-execution-plan/${parameters.rescoreExecutionPlanId}`
}
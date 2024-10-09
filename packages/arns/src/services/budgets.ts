export interface BudgetArnParameters {
  partition?: string | undefined
  account: string
  budgetName: string
}
export type BudgetArn = `arn:${string}:budgets::${string}:budget/${string}`
export function budgetArn(parameters: BudgetArnParameters): BudgetArn {
  return `arn:${parameters.partition ?? ''}:budgets::${parameters.account}:budget/${parameters.budgetName}`
}

export interface BudgetActionArnParameters {
  partition?: string | undefined
  account: string
  budgetName: string
  actionId: string
}
export type BudgetActionArn = `arn:${string}:budgets::${string}:budget/${string}/action/${string}`
export function budgetActionArn(parameters: BudgetActionArnParameters): BudgetActionArn {
  return `arn:${parameters.partition ?? ''}:budgets::${parameters.account}:budget/${parameters.budgetName}/action/${parameters.actionId}`
}
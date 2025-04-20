import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BudgetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly nameBudget: string
}
class BudgetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'budget',
  `arn:${string}:budgets::${string}:budget/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'budget' as const
  readonly partition: string
  readonly account: string
  readonly nameBudget: string
  constructor(parameters: BudgetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameBudget = parameters.nameBudget
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:budgets::${this.account}:budget/${this.nameBudget}` as const
  }
}
export type { BudgetArn }
export function budgetArn<Partition extends ArnPartition = 'aws'>(
  parameters: BudgetArnParameters<Partition>,
) {
  return new BudgetArn<Partition>(parameters)
}

export interface ActionBudgetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly nameBudget: string
  readonly idAction: string
}
class ActionBudgetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'budgetAction',
  `arn:${string}:budgets::${string}:budget/${string}/action/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'budgetAction' as const
  readonly partition: string
  readonly account: string
  readonly nameBudget: string
  readonly idAction: string
  constructor(parameters: ActionBudgetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameBudget = parameters.nameBudget
    this.idAction = parameters.idAction
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:budgets::${this.account}:budget/${this.nameBudget}/action/${this.idAction}` as const
  }
}
export type { ActionBudgetArn }
export function actionBudgetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ActionBudgetArnParameters<Partition>,
) {
  return new ActionBudgetArn<Partition>(parameters)
}

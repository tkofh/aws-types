import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface BudgetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly budgetName: string
}
class BudgetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'budget', `arn:${string}:budgets::${string}:budget/${string}`> {
  readonly [ArnResourceTypeBrand] = 'budget' as const
  readonly partition: Partition
  readonly account: string
  readonly budgetName: string
  constructor(parameters: BudgetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.budgetName = parameters.budgetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:budgets::${this.account}:budget/${this.budgetName}` as const
  }
}
export type { BudgetArn }
export function budgetArn<Partition extends ArnPartition = 'aws'>(parameters: BudgetArnParameters<Partition>) {
  return new BudgetArn<Partition>(parameters)
}

export interface BudgetActionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly budgetName: string
  readonly actionId: string
}
class BudgetActionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'budgetAction', `arn:${string}:budgets::${string}:budget/${string}/action/${string}`> {
  readonly [ArnResourceTypeBrand] = 'budgetAction' as const
  readonly partition: Partition
  readonly account: string
  readonly budgetName: string
  readonly actionId: string
  constructor(parameters: BudgetActionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.budgetName = parameters.budgetName
    this.actionId = parameters.actionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:budgets::${this.account}:budget/${this.budgetName}/action/${this.actionId}` as const
  }
}
export type { BudgetActionArn }
export function budgetActionArn<Partition extends ArnPartition = 'aws'>(parameters: BudgetActionArnParameters<Partition>) {
  return new BudgetActionArn<Partition>(parameters)
}
import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GroupBillingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idGroupBilling: string
}
class GroupBillingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'billinggroup',
  `arn:${string}:billingconductor::${string}:billinggroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'billinggroup' as const
  readonly partition: string
  readonly account: string
  readonly idGroupBilling: string
  constructor(parameters: GroupBillingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idGroupBilling = parameters.idGroupBilling
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:billinggroup/${this.idGroupBilling}` as const
  }
}
export type { GroupBillingArn }
export function groupBillingArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupBillingArnParameters<Partition>,
) {
  return new GroupBillingArn<Partition>(parameters)
}

export interface PlanPricingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idPlanPricing: string
}
class PlanPricingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pricingplan',
  `arn:${string}:billingconductor::${string}:pricingplan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pricingplan' as const
  readonly partition: string
  readonly account: string
  readonly idPlanPricing: string
  constructor(parameters: PlanPricingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idPlanPricing = parameters.idPlanPricing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:pricingplan/${this.idPlanPricing}` as const
  }
}
export type { PlanPricingArn }
export function planPricingArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlanPricingArnParameters<Partition>,
) {
  return new PlanPricingArn<Partition>(parameters)
}

export interface RulePricingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idRulePricing: string
}
class RulePricingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pricingrule',
  `arn:${string}:billingconductor::${string}:pricingrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pricingrule' as const
  readonly partition: string
  readonly account: string
  readonly idRulePricing: string
  constructor(parameters: RulePricingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idRulePricing = parameters.idRulePricing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:pricingrule/${this.idRulePricing}` as const
  }
}
export type { RulePricingArn }
export function rulePricingArn<Partition extends ArnPartition = 'aws'>(
  parameters: RulePricingArnParameters<Partition>,
) {
  return new RulePricingArn<Partition>(parameters)
}

export interface ItemLineCustomArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idItemLineCustom: string
}
class ItemLineCustomArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customlineitem',
  `arn:${string}:billingconductor::${string}:customlineitem/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customlineitem' as const
  readonly partition: string
  readonly account: string
  readonly idItemLineCustom: string
  constructor(parameters: ItemLineCustomArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idItemLineCustom = parameters.idItemLineCustom
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:customlineitem/${this.idItemLineCustom}` as const
  }
}
export type { ItemLineCustomArn }
export function itemLineCustomArn<Partition extends ArnPartition = 'aws'>(
  parameters: ItemLineCustomArnParameters<Partition>,
) {
  return new ItemLineCustomArn<Partition>(parameters)
}

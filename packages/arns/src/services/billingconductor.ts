import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BillingGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly billingGroupId: string
}
class BillingGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'billinggroup',
  `arn:${string}:billingconductor::${string}:billinggroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'billinggroup' as const
  readonly partition: Partition
  readonly account: string
  readonly billingGroupId: string
  constructor(parameters: BillingGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.billingGroupId = parameters.billingGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:billinggroup/${this.billingGroupId}` as const
  }
}
export type { BillingGroupArn }
export function billingGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: BillingGroupArnParameters<Partition>,
) {
  return new BillingGroupArn<Partition>(parameters)
}

export interface PricingPlanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly pricingPlanId: string
}
class PricingPlanArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pricingplan',
  `arn:${string}:billingconductor::${string}:pricingplan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pricingplan' as const
  readonly partition: Partition
  readonly account: string
  readonly pricingPlanId: string
  constructor(parameters: PricingPlanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.pricingPlanId = parameters.pricingPlanId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:pricingplan/${this.pricingPlanId}` as const
  }
}
export type { PricingPlanArn }
export function pricingPlanArn<Partition extends ArnPartition = 'aws'>(
  parameters: PricingPlanArnParameters<Partition>,
) {
  return new PricingPlanArn<Partition>(parameters)
}

export interface PricingRuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly pricingRuleId: string
}
class PricingRuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pricingrule',
  `arn:${string}:billingconductor::${string}:pricingrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pricingrule' as const
  readonly partition: Partition
  readonly account: string
  readonly pricingRuleId: string
  constructor(parameters: PricingRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.pricingRuleId = parameters.pricingRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:pricingrule/${this.pricingRuleId}` as const
  }
}
export type { PricingRuleArn }
export function pricingRuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: PricingRuleArnParameters<Partition>,
) {
  return new PricingRuleArn<Partition>(parameters)
}

export interface CustomLineItemArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly customLineItemId: string
}
class CustomLineItemArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customlineitem',
  `arn:${string}:billingconductor::${string}:customlineitem/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customlineitem' as const
  readonly partition: Partition
  readonly account: string
  readonly customLineItemId: string
  constructor(parameters: CustomLineItemArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.customLineItemId = parameters.customLineItemId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:customlineitem/${this.customLineItemId}` as const
  }
}
export type { CustomLineItemArn }
export function customLineItemArn<Partition extends ArnPartition = 'aws'>(
  parameters: CustomLineItemArnParameters<Partition>,
) {
  return new CustomLineItemArn<Partition>(parameters)
}

import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BillinggroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly billingGroupId: string
}
class BillinggroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'billinggroup',
  `arn:${string}:billingconductor::${string}:billinggroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'billinggroup' as const
  readonly partition: Partition
  readonly account: string
  readonly billingGroupId: string
  constructor(parameters: BillinggroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.billingGroupId = parameters.billingGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:billinggroup/${this.billingGroupId}` as const
  }
}
export type { BillinggroupArn }
export function billinggroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: BillinggroupArnParameters<Partition>,
) {
  return new BillinggroupArn<Partition>(parameters)
}

export interface PricingplanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly pricingPlanId: string
}
class PricingplanArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pricingplan',
  `arn:${string}:billingconductor::${string}:pricingplan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pricingplan' as const
  readonly partition: Partition
  readonly account: string
  readonly pricingPlanId: string
  constructor(parameters: PricingplanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.pricingPlanId = parameters.pricingPlanId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:pricingplan/${this.pricingPlanId}` as const
  }
}
export type { PricingplanArn }
export function pricingplanArn<Partition extends ArnPartition = 'aws'>(
  parameters: PricingplanArnParameters<Partition>,
) {
  return new PricingplanArn<Partition>(parameters)
}

export interface PricingruleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly pricingRuleId: string
}
class PricingruleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'pricingrule',
  `arn:${string}:billingconductor::${string}:pricingrule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pricingrule' as const
  readonly partition: Partition
  readonly account: string
  readonly pricingRuleId: string
  constructor(parameters: PricingruleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.pricingRuleId = parameters.pricingRuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:pricingrule/${this.pricingRuleId}` as const
  }
}
export type { PricingruleArn }
export function pricingruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: PricingruleArnParameters<Partition>,
) {
  return new PricingruleArn<Partition>(parameters)
}

export interface CustomlineitemArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly customLineItemId: string
}
class CustomlineitemArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customlineitem',
  `arn:${string}:billingconductor::${string}:customlineitem/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customlineitem' as const
  readonly partition: Partition
  readonly account: string
  readonly customLineItemId: string
  constructor(parameters: CustomlineitemArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.customLineItemId = parameters.customLineItemId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:billingconductor::${this.account}:customlineitem/${this.customLineItemId}` as const
  }
}
export type { CustomlineitemArn }
export function customlineitemArn<Partition extends ArnPartition = 'aws'>(
  parameters: CustomlineitemArnParameters<Partition>,
) {
  return new CustomlineitemArn<Partition>(parameters)
}

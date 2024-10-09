export interface BillinggroupArnParameters {
  partition?: string | undefined
  account: string
  billingGroupId: string
}
export type BillinggroupArn = `arn:${string}:billingconductor::${string}:billinggroup/${string}`
export function billinggroupArn(parameters: BillinggroupArnParameters): BillinggroupArn {
  return `arn:${parameters.partition ?? ''}:billingconductor::${parameters.account}:billinggroup/${parameters.billingGroupId}`
}

export interface PricingplanArnParameters {
  partition?: string | undefined
  account: string
  pricingPlanId: string
}
export type PricingplanArn = `arn:${string}:billingconductor::${string}:pricingplan/${string}`
export function pricingplanArn(parameters: PricingplanArnParameters): PricingplanArn {
  return `arn:${parameters.partition ?? ''}:billingconductor::${parameters.account}:pricingplan/${parameters.pricingPlanId}`
}

export interface PricingruleArnParameters {
  partition?: string | undefined
  account: string
  pricingRuleId: string
}
export type PricingruleArn = `arn:${string}:billingconductor::${string}:pricingrule/${string}`
export function pricingruleArn(parameters: PricingruleArnParameters): PricingruleArn {
  return `arn:${parameters.partition ?? ''}:billingconductor::${parameters.account}:pricingrule/${parameters.pricingRuleId}`
}

export interface CustomlineitemArnParameters {
  partition?: string | undefined
  account: string
  customLineItemId: string
}
export type CustomlineitemArn = `arn:${string}:billingconductor::${string}:customlineitem/${string}`
export function customlineitemArn(parameters: CustomlineitemArnParameters): CustomlineitemArn {
  return `arn:${parameters.partition ?? ''}:billingconductor::${parameters.account}:customlineitem/${parameters.customLineItemId}`
}
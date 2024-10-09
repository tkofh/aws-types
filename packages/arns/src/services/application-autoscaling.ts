export interface ScalableTargetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ScalableTargetArn = `arn:${string}:application-autoscaling:${string}:${string}:scalable-target/${string}`
export function scalableTargetArn(parameters: ScalableTargetArnParameters): ScalableTargetArn {
  return `arn:${parameters.partition ?? ''}:application-autoscaling:${parameters.region}:${parameters.account}:scalable-target/${parameters.resourceId}`
}
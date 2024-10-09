export interface AcceleratorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  acceleratorId: string
}
export type AcceleratorArn = `arn:${string}:elastic-inference:${string}:${string}:elastic-inference-accelerator/${string}`
export function acceleratorArn(parameters: AcceleratorArnParameters): AcceleratorArn {
  return `arn:${parameters.partition ?? ''}:elastic-inference:${parameters.region}:${parameters.account}:elastic-inference-accelerator/${parameters.acceleratorId}`
}
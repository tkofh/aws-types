export interface StackArnParameters {
  partition?: string | undefined
  region: string
  account: string
  stackId: string
}
export type StackArn = `arn:${string}:opsworks:${string}:${string}:stack/${string}/`
export function stackArn(parameters: StackArnParameters): StackArn {
  return `arn:${parameters.partition ?? ''}:opsworks:${parameters.region}:${parameters.account}:stack/${parameters.stackId}/`
}
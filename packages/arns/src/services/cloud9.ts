export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type EnvironmentArn = `arn:${string}:cloud9:${string}:${string}:environment:${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:cloud9:${parameters.region}:${parameters.account}:environment:${parameters.resourceId}`
}
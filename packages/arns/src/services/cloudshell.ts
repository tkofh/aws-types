export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
}
export type EnvironmentArn = `arn:${string}:cloudshell:${string}:${string}:environment/${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:cloudshell:${parameters.region}:${parameters.account}:environment/${parameters.environmentId}`
}
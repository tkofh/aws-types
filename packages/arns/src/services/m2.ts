export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:m2:${string}:${string}:app/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:m2:${parameters.region}:${parameters.account}:app/${parameters.applicationId}`
}

export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
}
export type EnvironmentArn = `arn:${string}:m2:${string}:${string}:env/${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:m2:${parameters.region}:${parameters.account}:env/${parameters.environmentId}`
}
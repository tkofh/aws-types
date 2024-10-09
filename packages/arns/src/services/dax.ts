export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
}
export type ApplicationArn = `arn:${string}:dax:${string}:${string}:cache/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:dax:${parameters.region}:${parameters.account}:cache/${parameters.clusterName}`
}
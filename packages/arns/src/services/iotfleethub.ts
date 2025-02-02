export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:iotfleethub:${string}:${string}:application/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? 'aws'}:iotfleethub:${parameters.region}:${parameters.account}:application/${parameters.applicationId}`
}
export interface ApplicationArnParameters {
  partition?: string | undefined
  accountId: string
  instanceId: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:sso::${string}:application/${string}/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:sso::${parameters.accountId}:application/${parameters.instanceId}/${parameters.applicationId}`
}
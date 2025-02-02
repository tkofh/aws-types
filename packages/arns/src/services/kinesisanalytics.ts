export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
}
export type ApplicationArn = `arn:${string}:kinesisanalytics:${string}:${string}:application/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? 'aws'}:kinesisanalytics:${parameters.region}:${parameters.account}:application/${parameters.applicationName}`
}
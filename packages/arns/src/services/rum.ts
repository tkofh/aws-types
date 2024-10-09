export interface AppMonitorResourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  name: string
}
export type AppMonitorResourceArn = `arn:${string}:rum:${string}:${string}:appmonitor/${string}`
export function appMonitorResourceArn(parameters: AppMonitorResourceArnParameters): AppMonitorResourceArn {
  return `arn:${parameters.partition ?? ''}:rum:${parameters.region}:${parameters.account}:appmonitor/${parameters.name}`
}
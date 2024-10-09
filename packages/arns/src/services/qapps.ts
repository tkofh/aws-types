export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:qbusiness:${string}:${string}:application/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:qbusiness:${parameters.region}:${parameters.account}:application/${parameters.applicationId}`
}

export interface QappArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  appId: string
}
export type QappArn = `arn:${string}:qapps:${string}:${string}:application/${string}/qapp/${string}`
export function qappArn(parameters: QappArnParameters): QappArn {
  return `arn:${parameters.partition ?? ''}:qapps:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/qapp/${parameters.appId}`
}

export interface QappSessionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  appId: string
  sessionId: string
}
export type QappSessionArn = `arn:${string}:qapps:${string}:${string}:application/${string}/qapp/${string}/session/${string}`
export function qappSessionArn(parameters: QappSessionArnParameters): QappSessionArn {
  return `arn:${parameters.partition ?? ''}:qapps:${parameters.region}:${parameters.account}:application/${parameters.applicationId}/qapp/${parameters.appId}/session/${parameters.sessionId}`
}
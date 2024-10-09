export interface HealthEventArnParameters {
  partition?: string | undefined
  region: string
  account: string
  monitorName: string
  eventId: string
}
export type HealthEventArn = `arn:${string}:internetmonitor:${string}:${string}:monitor/${string}/health-event/${string}`
export function healthEventArn(parameters: HealthEventArnParameters): HealthEventArn {
  return `arn:${parameters.partition ?? ''}:internetmonitor:${parameters.region}:${parameters.account}:monitor/${parameters.monitorName}/health-event/${parameters.eventId}`
}

export interface MonitorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  monitorName: string
}
export type MonitorArn = `arn:${string}:internetmonitor:${string}:${string}:monitor/${string}`
export function monitorArn(parameters: MonitorArnParameters): MonitorArn {
  return `arn:${parameters.partition ?? ''}:internetmonitor:${parameters.region}:${parameters.account}:monitor/${parameters.monitorName}`
}

export interface InternetEventArnParameters {
  partition?: string | undefined
  account: string
  internetEventId: string
}
export type InternetEventArn = `arn:${string}:internetmonitor::${string}:internet-event/${string}`
export function internetEventArn(parameters: InternetEventArnParameters): InternetEventArn {
  return `arn:${parameters.partition ?? ''}:internetmonitor::${parameters.account}:internet-event/${parameters.internetEventId}`
}
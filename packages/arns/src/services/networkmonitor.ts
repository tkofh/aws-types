export interface MonitorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  monitorName: string
}
export type MonitorArn = `arn:${string}:networkmonitor:${string}:${string}:monitor/${string}`
export function monitorArn(parameters: MonitorArnParameters): MonitorArn {
  return `arn:${parameters.partition ?? ''}:networkmonitor:${parameters.region}:${parameters.account}:monitor/${parameters.monitorName}`
}

export interface ProbeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  probeId: string
}
export type ProbeArn = `arn:${string}:networkmonitor:${string}:${string}:probe/${string}`
export function probeArn(parameters: ProbeArnParameters): ProbeArn {
  return `arn:${parameters.partition ?? ''}:networkmonitor:${parameters.region}:${parameters.account}:probe/${parameters.probeId}`
}
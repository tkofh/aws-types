export interface EventArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventId: string
}
export type EventArn = `arn:${string}:bugbust:${string}:${string}:events/${string}`
export function eventArn(parameters: EventArnParameters): EventArn {
  return `arn:${parameters.partition ?? ''}:bugbust:${parameters.region}:${parameters.account}:events/${parameters.eventId}`
}
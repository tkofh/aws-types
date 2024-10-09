export interface EventArnParameters {
  partition?: string | undefined
  service: string
  eventTypeCode: string
}
export type EventArn = `arn:${string}:health:*::event/${string}/${string}/*`
export function eventArn(parameters: EventArnParameters): EventArn {
  return `arn:${parameters.partition ?? ''}:health:*::event/${parameters.service}/${parameters.eventTypeCode}/*`
}
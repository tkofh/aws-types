export interface ThingArnParameters {
  partition?: string | undefined
  region: string
  account: string
  thingName: string
}
export type ThingArn = `arn:${string}:iot:${string}:${string}:thing/${string}`
export function thingArn(parameters: ThingArnParameters): ThingArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:thing/${parameters.thingName}`
}
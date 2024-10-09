export interface FleetArnParameters {
  partition?: string | undefined
  account: string
  fleetName: string
}
export type FleetArn = `arn:${string}:worklink::${string}:fleet/${string}`
export function fleetArn(parameters: FleetArnParameters): FleetArn {
  return `arn:${parameters.partition ?? ''}:worklink::${parameters.account}:fleet/${parameters.fleetName}`
}
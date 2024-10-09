export interface RoutingcontrolArnParameters {
  partition?: string | undefined
  account: string
  controlPanelId: string
  routingControlId: string
}
export type RoutingcontrolArn = `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}/routingcontrol/${string}`
export function routingcontrolArn(parameters: RoutingcontrolArnParameters): RoutingcontrolArn {
  return `arn:${parameters.partition ?? ''}:route53-recovery-control::${parameters.account}:controlpanel/${parameters.controlPanelId}/routingcontrol/${parameters.routingControlId}`
}
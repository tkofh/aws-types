export interface ClusterArnParameters {
  partition?: string | undefined
  account: string
  resourceId: string
}
export type ClusterArn = `arn:${string}:route53-recovery-control::${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:route53-recovery-control::${parameters.account}:cluster/${parameters.resourceId}`
}

export interface ControlpanelArnParameters {
  partition?: string | undefined
  account: string
  controlPanelId: string
}
export type ControlpanelArn = `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}`
export function controlpanelArn(parameters: ControlpanelArnParameters): ControlpanelArn {
  return `arn:${parameters.partition ?? ''}:route53-recovery-control::${parameters.account}:controlpanel/${parameters.controlPanelId}`
}

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

export interface SafetyruleArnParameters {
  partition?: string | undefined
  account: string
  controlPanelId: string
  safetyRuleId: string
}
export type SafetyruleArn = `arn:${string}:route53-recovery-control::${string}:controlpanel/${string}/safetyrule/${string}`
export function safetyruleArn(parameters: SafetyruleArnParameters): SafetyruleArn {
  return `arn:${parameters.partition ?? ''}:route53-recovery-control::${parameters.account}:controlpanel/${parameters.controlPanelId}/safetyrule/${parameters.safetyRuleId}`
}
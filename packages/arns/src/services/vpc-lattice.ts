export interface ServiceNetworkArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceNetworkId: string
}
export type ServiceNetworkArn = `arn:${string}:vpc-lattice:${string}:${string}:servicenetwork/${string}`
export function serviceNetworkArn(parameters: ServiceNetworkArnParameters): ServiceNetworkArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:servicenetwork/${parameters.serviceNetworkId}`
}

export interface ServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceId: string
}
export type ServiceArn = `arn:${string}:vpc-lattice:${string}:${string}:service/${string}`
export function serviceArn(parameters: ServiceArnParameters): ServiceArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:service/${parameters.serviceId}`
}

export interface ServiceNetworkVpcAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceNetworkVpcAssociationId: string
}
export type ServiceNetworkVpcAssociationArn = `arn:${string}:vpc-lattice:${string}:${string}:servicenetworkvpcassociation/${string}`
export function serviceNetworkVpcAssociationArn(parameters: ServiceNetworkVpcAssociationArnParameters): ServiceNetworkVpcAssociationArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:servicenetworkvpcassociation/${parameters.serviceNetworkVpcAssociationId}`
}

export interface ServiceNetworkServiceAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceNetworkServiceAssociationId: string
}
export type ServiceNetworkServiceAssociationArn = `arn:${string}:vpc-lattice:${string}:${string}:servicenetworkserviceassociation/${string}`
export function serviceNetworkServiceAssociationArn(parameters: ServiceNetworkServiceAssociationArnParameters): ServiceNetworkServiceAssociationArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:servicenetworkserviceassociation/${parameters.serviceNetworkServiceAssociationId}`
}

export interface TargetGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  targetGroupId: string
}
export type TargetGroupArn = `arn:${string}:vpc-lattice:${string}:${string}:targetgroup/${string}`
export function targetGroupArn(parameters: TargetGroupArnParameters): TargetGroupArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:targetgroup/${parameters.targetGroupId}`
}

export interface ListenerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceId: string
  listenerId: string
}
export type ListenerArn = `arn:${string}:vpc-lattice:${string}:${string}:service/${string}/listener/${string}`
export function listenerArn(parameters: ListenerArnParameters): ListenerArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:service/${parameters.serviceId}/listener/${parameters.listenerId}`
}

export interface RuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serviceId: string
  listenerId: string
  ruleId: string
}
export type RuleArn = `arn:${string}:vpc-lattice:${string}:${string}:service/${string}/listener/${string}/rule/${string}`
export function ruleArn(parameters: RuleArnParameters): RuleArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:service/${parameters.serviceId}/listener/${parameters.listenerId}/rule/${parameters.ruleId}`
}

export interface AccessLogSubscriptionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  accessLogSubscriptionId: string
}
export type AccessLogSubscriptionArn = `arn:${string}:vpc-lattice:${string}:${string}:accesslogsubscription/${string}`
export function accessLogSubscriptionArn(parameters: AccessLogSubscriptionArnParameters): AccessLogSubscriptionArn {
  return `arn:${parameters.partition ?? ''}:vpc-lattice:${parameters.region}:${parameters.account}:accesslogsubscription/${parameters.accessLogSubscriptionId}`
}
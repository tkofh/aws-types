export interface CidrcollectionArnParameters {
  partition?: string | undefined
  id: string
}
export type CidrcollectionArn = `arn:${string}:route53:::cidrcollection/${string}`
export function cidrcollectionArn(parameters: CidrcollectionArnParameters): CidrcollectionArn {
  return `arn:${parameters.partition ?? ''}:route53:::cidrcollection/${parameters.id}`
}

export interface ChangeArnParameters {
  partition?: string | undefined
  id: string
}
export type ChangeArn = `arn:${string}:route53:::change/${string}`
export function changeArn(parameters: ChangeArnParameters): ChangeArn {
  return `arn:${parameters.partition ?? ''}:route53:::change/${parameters.id}`
}

export interface DelegationsetArnParameters {
  partition?: string | undefined
  id: string
}
export type DelegationsetArn = `arn:${string}:route53:::delegationset/${string}`
export function delegationsetArn(parameters: DelegationsetArnParameters): DelegationsetArn {
  return `arn:${parameters.partition ?? ''}:route53:::delegationset/${parameters.id}`
}

export interface HealthcheckArnParameters {
  partition?: string | undefined
  id: string
}
export type HealthcheckArn = `arn:${string}:route53:::healthcheck/${string}`
export function healthcheckArn(parameters: HealthcheckArnParameters): HealthcheckArn {
  return `arn:${parameters.partition ?? ''}:route53:::healthcheck/${parameters.id}`
}

export interface HostedzoneArnParameters {
  partition?: string | undefined
  id: string
}
export type HostedzoneArn = `arn:${string}:route53:::hostedzone/${string}`
export function hostedzoneArn(parameters: HostedzoneArnParameters): HostedzoneArn {
  return `arn:${parameters.partition ?? ''}:route53:::hostedzone/${parameters.id}`
}

export interface TrafficpolicyArnParameters {
  partition?: string | undefined
  id: string
}
export type TrafficpolicyArn = `arn:${string}:route53:::trafficpolicy/${string}`
export function trafficpolicyArn(parameters: TrafficpolicyArnParameters): TrafficpolicyArn {
  return `arn:${parameters.partition ?? ''}:route53:::trafficpolicy/${parameters.id}`
}

export interface TrafficpolicyinstanceArnParameters {
  partition?: string | undefined
  id: string
}
export type TrafficpolicyinstanceArn = `arn:${string}:route53:::trafficpolicyinstance/${string}`
export function trafficpolicyinstanceArn(parameters: TrafficpolicyinstanceArnParameters): TrafficpolicyinstanceArn {
  return `arn:${parameters.partition ?? ''}:route53:::trafficpolicyinstance/${parameters.id}`
}

export interface QueryloggingconfigArnParameters {
  partition?: string | undefined
  id: string
}
export type QueryloggingconfigArn = `arn:${string}:route53:::queryloggingconfig/${string}`
export function queryloggingconfigArn(parameters: QueryloggingconfigArnParameters): QueryloggingconfigArn {
  return `arn:${parameters.partition ?? ''}:route53:::queryloggingconfig/${parameters.id}`
}

export interface VpcArnParameters {
  partition?: string | undefined
  region: string
  account: string
  vpcId: string
}
export type VpcArn = `arn:${string}:ec2:${string}:${string}:vpc/${string}`
export function vpcArn(parameters: VpcArnParameters): VpcArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:vpc/${parameters.vpcId}`
}
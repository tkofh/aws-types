export interface AlbArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loadBalancerName: string
  loadBalancerId: string
}
export type AlbArn = `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/app/${string}/${string}`
export function albArn(parameters: AlbArnParameters): AlbArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:loadbalancer/app/${parameters.loadBalancerName}/${parameters.loadBalancerId}`
}

export interface NlbArnParameters {
  partition?: string | undefined
  region: string
  account: string
  loadBalancerName: string
  loadBalancerId: string
}
export type NlbArn = `arn:${string}:elasticloadbalancing:${string}:${string}:loadbalancer/net/${string}/${string}`
export function nlbArn(parameters: NlbArnParameters): NlbArn {
  return `arn:${parameters.partition ?? ''}:elasticloadbalancing:${parameters.region}:${parameters.account}:loadbalancer/net/${parameters.loadBalancerName}/${parameters.loadBalancerId}`
}
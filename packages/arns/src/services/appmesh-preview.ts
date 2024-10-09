export interface MeshArnParameters {
  partition?: string | undefined
  region: string
  account: string
  meshName: string
}
export type MeshArn = `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}`
export function meshArn(parameters: MeshArnParameters): MeshArn {
  return `arn:${parameters.partition ?? ''}:appmesh-preview:${parameters.region}:${parameters.account}:mesh/${parameters.meshName}`
}

export interface VirtualServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  meshName: string
  virtualServiceName: string
}
export type VirtualServiceArn = `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualService/${string}`
export function virtualServiceArn(parameters: VirtualServiceArnParameters): VirtualServiceArn {
  return `arn:${parameters.partition ?? ''}:appmesh-preview:${parameters.region}:${parameters.account}:mesh/${parameters.meshName}/virtualService/${parameters.virtualServiceName}`
}

export interface VirtualNodeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  meshName: string
  virtualNodeName: string
}
export type VirtualNodeArn = `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualNode/${string}`
export function virtualNodeArn(parameters: VirtualNodeArnParameters): VirtualNodeArn {
  return `arn:${parameters.partition ?? ''}:appmesh-preview:${parameters.region}:${parameters.account}:mesh/${parameters.meshName}/virtualNode/${parameters.virtualNodeName}`
}

export interface VirtualRouterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  meshName: string
  virtualRouterName: string
}
export type VirtualRouterArn = `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualRouter/${string}`
export function virtualRouterArn(parameters: VirtualRouterArnParameters): VirtualRouterArn {
  return `arn:${parameters.partition ?? ''}:appmesh-preview:${parameters.region}:${parameters.account}:mesh/${parameters.meshName}/virtualRouter/${parameters.virtualRouterName}`
}

export interface RouteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  meshName: string
  virtualRouterName: string
  routeName: string
}
export type RouteArn = `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualRouter/${string}/route/${string}`
export function routeArn(parameters: RouteArnParameters): RouteArn {
  return `arn:${parameters.partition ?? ''}:appmesh-preview:${parameters.region}:${parameters.account}:mesh/${parameters.meshName}/virtualRouter/${parameters.virtualRouterName}/route/${parameters.routeName}`
}

export interface VirtualGatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  meshName: string
  virtualGatewayName: string
}
export type VirtualGatewayArn = `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualGateway/${string}`
export function virtualGatewayArn(parameters: VirtualGatewayArnParameters): VirtualGatewayArn {
  return `arn:${parameters.partition ?? ''}:appmesh-preview:${parameters.region}:${parameters.account}:mesh/${parameters.meshName}/virtualGateway/${parameters.virtualGatewayName}`
}

export interface GatewayRouteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  meshName: string
  virtualGatewayName: string
  gatewayRouteName: string
}
export type GatewayRouteArn = `arn:${string}:appmesh-preview:${string}:${string}:mesh/${string}/virtualGateway/${string}/gatewayRoute/${string}`
export function gatewayRouteArn(parameters: GatewayRouteArnParameters): GatewayRouteArn {
  return `arn:${parameters.partition ?? ''}:appmesh-preview:${parameters.region}:${parameters.account}:mesh/${parameters.meshName}/virtualGateway/${parameters.virtualGatewayName}/gatewayRoute/${parameters.gatewayRouteName}`
}
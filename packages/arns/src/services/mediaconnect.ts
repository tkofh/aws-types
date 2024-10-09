export interface EntitlementArnParameters {
  partition?: string | undefined
  region: string
  account: string
  flowId: string
  entitlementName: string
}
export type EntitlementArn = `arn:${string}:mediaconnect:${string}:${string}:entitlement:${string}:${string}`
export function entitlementArn(parameters: EntitlementArnParameters): EntitlementArn {
  return `arn:${parameters.partition ?? ''}:mediaconnect:${parameters.region}:${parameters.account}:entitlement:${parameters.flowId}:${parameters.entitlementName}`
}

export interface FlowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  flowId: string
  flowName: string
}
export type FlowArn = `arn:${string}:mediaconnect:${string}:${string}:flow:${string}:${string}`
export function flowArn(parameters: FlowArnParameters): FlowArn {
  return `arn:${parameters.partition ?? ''}:mediaconnect:${parameters.region}:${parameters.account}:flow:${parameters.flowId}:${parameters.flowName}`
}

export interface OutputArnParameters {
  partition?: string | undefined
  region: string
  account: string
  outputId: string
  outputName: string
}
export type OutputArn = `arn:${string}:mediaconnect:${string}:${string}:output:${string}:${string}`
export function outputArn(parameters: OutputArnParameters): OutputArn {
  return `arn:${parameters.partition ?? ''}:mediaconnect:${parameters.region}:${parameters.account}:output:${parameters.outputId}:${parameters.outputName}`
}

export interface SourceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sourceId: string
  sourceName: string
}
export type SourceArn = `arn:${string}:mediaconnect:${string}:${string}:source:${string}:${string}`
export function sourceArn(parameters: SourceArnParameters): SourceArn {
  return `arn:${parameters.partition ?? ''}:mediaconnect:${parameters.region}:${parameters.account}:source:${parameters.sourceId}:${parameters.sourceName}`
}

export interface GatewayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  gatewayId: string
  gatewayName: string
}
export type GatewayArn = `arn:${string}:mediaconnect:${string}:${string}:gateway:${string}:${string}`
export function gatewayArn(parameters: GatewayArnParameters): GatewayArn {
  return `arn:${parameters.partition ?? ''}:mediaconnect:${parameters.region}:${parameters.account}:gateway:${parameters.gatewayId}:${parameters.gatewayName}`
}

export interface BridgeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  flowId: string
  flowName: string
}
export type BridgeArn = `arn:${string}:mediaconnect:${string}:${string}:bridge:${string}:${string}`
export function bridgeArn(parameters: BridgeArnParameters): BridgeArn {
  return `arn:${parameters.partition ?? ''}:mediaconnect:${parameters.region}:${parameters.account}:bridge:${parameters.flowId}:${parameters.flowName}`
}

export interface GatewayInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  gatewayId: string
  gatewayName: string
  instanceId: string
}
export type GatewayInstanceArn = `arn:${string}:mediaconnect:${string}:${string}:gateway:${string}:${string}:instance:${string}`
export function gatewayInstanceArn(parameters: GatewayInstanceArnParameters): GatewayInstanceArn {
  return `arn:${parameters.partition ?? ''}:mediaconnect:${parameters.region}:${parameters.account}:gateway:${parameters.gatewayId}:${parameters.gatewayName}:instance:${parameters.instanceId}`
}
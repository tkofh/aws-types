export interface DxconArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectionId: string
}
export type DxconArn = `arn:${string}:directconnect:${string}:${string}:dxcon/${string}`
export function dxconArn(parameters: DxconArnParameters): DxconArn {
  return `arn:${parameters.partition ?? ''}:directconnect:${parameters.region}:${parameters.account}:dxcon/${parameters.connectionId}`
}

export interface DxlagArnParameters {
  partition?: string | undefined
  region: string
  account: string
  lagId: string
}
export type DxlagArn = `arn:${string}:directconnect:${string}:${string}:dxlag/${string}`
export function dxlagArn(parameters: DxlagArnParameters): DxlagArn {
  return `arn:${parameters.partition ?? ''}:directconnect:${parameters.region}:${parameters.account}:dxlag/${parameters.lagId}`
}

export interface DxvifArnParameters {
  partition?: string | undefined
  region: string
  account: string
  virtualInterfaceId: string
}
export type DxvifArn = `arn:${string}:directconnect:${string}:${string}:dxvif/${string}`
export function dxvifArn(parameters: DxvifArnParameters): DxvifArn {
  return `arn:${parameters.partition ?? ''}:directconnect:${parameters.region}:${parameters.account}:dxvif/${parameters.virtualInterfaceId}`
}

export interface DxGatewayArnParameters {
  partition?: string | undefined
  account: string
  directConnectGatewayId: string
}
export type DxGatewayArn = `arn:${string}:directconnect::${string}:dx-gateway/${string}`
export function dxGatewayArn(parameters: DxGatewayArnParameters): DxGatewayArn {
  return `arn:${parameters.partition ?? ''}:directconnect::${parameters.account}:dx-gateway/${parameters.directConnectGatewayId}`
}
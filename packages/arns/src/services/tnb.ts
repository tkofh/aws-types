export interface FunctionPackageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  functionPackageId: string
}
export type FunctionPackageArn = `arn:${string}:tnb:${string}:${string}:function-package/${string}`
export function functionPackageArn(parameters: FunctionPackageArnParameters): FunctionPackageArn {
  return `arn:${parameters.partition ?? ''}:tnb:${parameters.region}:${parameters.account}:function-package/${parameters.functionPackageId}`
}

export interface NetworkPackageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkPackageId: string
}
export type NetworkPackageArn = `arn:${string}:tnb:${string}:${string}:network-package/${string}`
export function networkPackageArn(parameters: NetworkPackageArnParameters): NetworkPackageArn {
  return `arn:${parameters.partition ?? ''}:tnb:${parameters.region}:${parameters.account}:network-package/${parameters.networkPackageId}`
}

export interface NetworkInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkInstanceId: string
}
export type NetworkInstanceArn = `arn:${string}:tnb:${string}:${string}:network-instance/${string}`
export function networkInstanceArn(parameters: NetworkInstanceArnParameters): NetworkInstanceArn {
  return `arn:${parameters.partition ?? ''}:tnb:${parameters.region}:${parameters.account}:network-instance/${parameters.networkInstanceId}`
}

export interface FunctionInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  functionInstanceId: string
}
export type FunctionInstanceArn = `arn:${string}:tnb:${string}:${string}:function-instance/${string}`
export function functionInstanceArn(parameters: FunctionInstanceArnParameters): FunctionInstanceArn {
  return `arn:${parameters.partition ?? ''}:tnb:${parameters.region}:${parameters.account}:function-instance/${parameters.functionInstanceId}`
}

export interface NetworkOperationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  networkOperationId: string
}
export type NetworkOperationArn = `arn:${string}:tnb:${string}:${string}:network-operation/${string}`
export function networkOperationArn(parameters: NetworkOperationArnParameters): NetworkOperationArn {
  return `arn:${parameters.partition ?? ''}:tnb:${parameters.region}:${parameters.account}:network-operation/${parameters.networkOperationId}`
}
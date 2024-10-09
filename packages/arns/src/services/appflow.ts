export interface ConnectorprofileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  profileName: string
}
export type ConnectorprofileArn = `arn:${string}:appflow:${string}:${string}:connectorprofile/${string}`
export function connectorprofileArn(parameters: ConnectorprofileArnParameters): ConnectorprofileArn {
  return `arn:${parameters.partition ?? ''}:appflow:${parameters.region}:${parameters.account}:connectorprofile/${parameters.profileName}`
}

export interface FlowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  flowName: string
}
export type FlowArn = `arn:${string}:appflow:${string}:${string}:flow/${string}`
export function flowArn(parameters: FlowArnParameters): FlowArn {
  return `arn:${parameters.partition ?? ''}:appflow:${parameters.region}:${parameters.account}:flow/${parameters.flowName}`
}

export interface ConnectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorLabel: string
}
export type ConnectorArn = `arn:${string}:appflow:${string}:${string}:connector/${string}`
export function connectorArn(parameters: ConnectorArnParameters): ConnectorArn {
  return `arn:${parameters.partition ?? ''}:appflow:${parameters.region}:${parameters.account}:connector/${parameters.connectorLabel}`
}